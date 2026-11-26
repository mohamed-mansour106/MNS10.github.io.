import admin from "firebase-admin";
import fs from "fs";

const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
if (!raw) { console.error("Missing FIREBASE_SERVICE_ACCOUNT secret"); process.exit(1); }
admin.initializeApp({ credential: admin.credential.cert(JSON.parse(raw)) });
const db = admin.firestore();
const DRY = process.env.DRY_RUN === "true";
const OFU = "https://mohamed-mansour106.github.io/MNS10.github.io./branchsites/College/OFU.html";

let q;
try { q = JSON.parse(fs.readFileSync("mcq.json", "utf8")); } catch (e) { console.log("mcq.json missing or invalid, nothing to send."); process.exit(0); }

const pub = Date.parse(q.publishedAt);
const ok = q.active !== false && q.id && typeof q.question === "string" && Array.isArray(q.options) && q.options.length >= 2 && !isNaN(pub)
  && Date.now() < pub + (Number(q.hours) > 0 ? Number(q.hours) : 24) * 3600 * 1000;
if (!ok) { console.log("No active, unexpired question. Nothing to send."); process.exit(0); }

const metaRef = db.collection("meta").doc("mcqNotifier");
const m = await metaRef.get();
if (m.exists && m.data().lastId === q.id) { console.log(`Question ${q.id} was already announced. Nothing to send.`); process.exit(0); }

const clip = (s, n) => { s = String(s).replace(/\s+/g, " ").trim(); return s.length > n ? s.slice(0, n - 1) + "…" : s; };
const title = "Question of the day";
const body = clip(q.question, 140);
const tokens = (await db.collection("pushTokens").get()).docs.map((d) => d.data().token).filter(Boolean);
console.log(`Question ${q.id}. Subscribers: ${tokens.length}`);
if (DRY) { console.log("[dry run] would send:", JSON.stringify({ title, body, url: OFU })); process.exit(0); }

let sent = 0, failed = 0;
for (let i = 0; i < tokens.length; i += 500) {
  const batch = tokens.slice(i, i + 500);
  const res = await admin.messaging().sendEachForMulticast({ tokens: batch, data: { title, body, url: OFU }, webpush: { headers: { Urgency: "high", TTL: "86400" } } });
  sent += res.successCount; failed += res.failureCount;
  const dead = [];
  res.responses.forEach((r, idx) => {
    const c = r.error && r.error.code;
    if (c === "messaging/registration-token-not-registered" || c === "messaging/invalid-registration-token") dead.push(batch[idx]);
  });
  await Promise.all(dead.map((t) => db.collection("pushTokens").doc(t).delete()));
}
console.log(`Sent: ${sent}, failed: ${failed}`);
await metaRef.set({ lastId: q.id, at: admin.firestore.Timestamp.now() });
