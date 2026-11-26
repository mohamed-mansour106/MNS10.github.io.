import admin from "firebase-admin";

const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
if (!raw) { console.error("Missing FIREBASE_SERVICE_ACCOUNT secret"); process.exit(1); }
admin.initializeApp({ credential: admin.credential.cert(JSON.parse(raw)) });
const db = admin.firestore();
const { Timestamp } = admin.firestore;

const DRY = process.env.DRY_RUN === "true";
const SINCE_HOURS = parseFloat(process.env.SINCE_HOURS || "");
const BASE = "https://mohamed-mansour106.github.io/MNS10.github.io./branchsites/SWT-Community/question.html?id=";
const MAX_SEND = 5;

const metaRef = db.collection("meta").doc("questionNotifier");
let lastSeen;
if (!isNaN(SINCE_HOURS)) {
  lastSeen = Timestamp.fromMillis(Date.now() - SINCE_HOURS * 3600 * 1000);
} else {
  const m = await metaRef.get();
  if (!m.exists) {
    await metaRef.set({ lastSeen: Timestamp.now() });
    console.log("First run: baseline saved, no notifications sent.");
    process.exit(0);
  }
  lastSeen = m.data().lastSeen;
}

const snap = await db.collection("questions").where("createdAt", ">", lastSeen).orderBy("createdAt", "asc").limit(50).get();
console.log("New questions:", snap.size);
if (snap.empty) process.exit(0);

const tokens = (await db.collection("pushTokens").get()).docs.map((d) => d.data().token).filter(Boolean);
console.log("Subscribers:", tokens.length);

const clip = (s, n) => { s = String(s || "").replace(/\s+/g, " ").trim(); return s.length > n ? s.slice(0, n - 1) + "…" : s; };

async function send(title, body, url) {
  if (DRY) { console.log("[dry run] would send:", JSON.stringify({ title, body, url })); return; }
  let ok = 0, failed = 0;
  for (let i = 0; i < tokens.length; i += 500) {
    const batch = tokens.slice(i, i + 500);
    const res = await admin.messaging().sendEachForMulticast({
      tokens: batch,
      data: { title, body, url },
      webpush: { headers: { Urgency: "high", TTL: "86400" } },
    });
    ok += res.successCount; failed += res.failureCount;
    const dead = [];
    res.responses.forEach((r, idx) => {
      const code = r.error && r.error.code;
      if (code === "messaging/registration-token-not-registered" || code === "messaging/invalid-registration-token") dead.push(batch[idx]);
    });
    await Promise.all(dead.map((t) => db.collection("pushTokens").doc(t).delete()));
  }
  console.log(`Sent: ${ok}, failed: ${failed}`);
}

const docs = snap.docs;
for (const d of docs.slice(0, MAX_SEND)) {
  const q = d.data();
  const name = clip(q.authorName || "Someone", 40);
  await send(`New question from ${name}`, clip(q.title, 140), BASE + d.id);
}
if (docs.length > MAX_SEND) {
  await send("New questions in the community", `${docs.length - MAX_SEND} more new questions were asked`, BASE.replace("question.html?id=", "index.html"));
}
if (!DRY) await metaRef.set({ lastSeen: docs[docs.length - 1].data().createdAt });
