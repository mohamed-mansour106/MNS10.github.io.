import admin from "firebase-admin";

const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
if (!raw) { console.error("Missing FIREBASE_SERVICE_ACCOUNT secret"); process.exit(1); }
admin.initializeApp({ credential: admin.credential.cert(JSON.parse(raw)) });

const title = process.env.N_TITLE;
const body = process.env.N_BODY;
const url = process.env.N_URL || "";
const db = admin.firestore();

const snap = await db.collection("pushTokens").get();
const tokens = snap.docs.map((d) => d.data().token).filter(Boolean);
console.log("Subscribers:", tokens.length);

let ok = 0, failed = 0;
for (let i = 0; i < tokens.length; i += 500) {
  const batch = tokens.slice(i, i + 500);
  const res = await admin.messaging().sendEachForMulticast({
    tokens: batch,
    data: { title, body, url },
    webpush: { headers: { Urgency: "high", TTL: "86400" } },
  });
  ok += res.successCount;
  failed += res.failureCount;
  const dead = [];
  res.responses.forEach((r, idx) => {
    const code = r.error && r.error.code;
    if (code === "messaging/registration-token-not-registered" || code === "messaging/invalid-registration-token") dead.push(batch[idx]);
  });
  await Promise.all(dead.map((t) => db.collection("pushTokens").doc(t).delete()));
}
console.log(`Sent: ${ok}, failed: ${failed}`);
