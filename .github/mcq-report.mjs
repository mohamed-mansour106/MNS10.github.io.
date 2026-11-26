import admin from "firebase-admin";

const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
if (!raw) { console.error("Missing FIREBASE_SERVICE_ACCOUNT secret"); process.exit(1); }
admin.initializeApp({ credential: admin.credential.cert(JSON.parse(raw)) });
const db = admin.firestore();

const hours = parseFloat(process.env.HOURS || "") || 24;
const since = admin.firestore.Timestamp.fromMillis(Date.now() - hours * 3600 * 1000);
const snap = await db.collection("mcqAnswers").where("ts", ">=", since).orderBy("ts", "asc").get();

const fmt = (t) => new Date(t.toMillis()).toLocaleString("en-GB", { timeZone: "Asia/Dubai", hour12: false }).replace(",", "");
const byQ = {};
snap.docs.forEach((d) => { const a = d.data(); (byQ[a.qid] = byQ[a.qid] || []).push(a); });

console.log(`MCQ REPORT window=${hours}h generated=${fmt(admin.firestore.Timestamp.now())} (Dubai time)`);
console.log(`TOTAL answers=${snap.size} questions=${Object.keys(byQ).length}`);
for (const [qid, list] of Object.entries(byQ)) {
  const right = list.filter((a) => a.correct).length;
  console.log(`QUESTION ${qid} total=${list.length} right=${right} wrong=${list.length - right}`);
  const perChoice = {};
  list.forEach((a) => { const k = "ABCDEF"[a.choice] || "?"; perChoice[k] = (perChoice[k] || 0) + 1; });
  console.log(`CHOICES ${qid} ` + Object.entries(perChoice).map(([k, v]) => `${k}=${v}`).join(" "));
  list.forEach((a, i) => console.log(`ANSWER ${qid} #${i + 1} ${fmt(a.ts)} choice=${"ABCDEF"[a.choice] || "?"} ${a.correct ? "RIGHT" : "WRONG"} visitor=${String(a.vid).slice(0, 4)}`));
}
if (!snap.size) console.log("No answers in this window.");
