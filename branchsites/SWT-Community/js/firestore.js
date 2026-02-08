// js/firestore.js
// Firestore helpers using Firebase compat SDK (no modules).

const firestore = firebase.firestore();
const authInstance = firebase.auth();
const fieldValue = firebase.firestore.FieldValue;

// =========================
// Helpers
// =========================
function getCurrentUser() {
  return authInstance.currentUser;
}

// =========================
// Questions
// =========================
async function createQuestion(title, description) {
  const user = getCurrentUser();
  if (!user) return { success: false, error: "Not authenticated" };

  const data = {
    title,
    description,
    authorId: user.uid,
    authorName: user.displayName || user.email,
    createdAt: fieldValue.serverTimestamp(),
    answerCount: 0
  };

  const ref = await firestore.collection("questions").add(data);
  return { success: true, questionId: ref.id };
}

function getQuestionsRealtime(callback) {
  return firestore
    .collection("questions")
    .orderBy("createdAt", "desc")
    .onSnapshot(
      (snapshot) => {
        const questions = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        callback(questions);
      },
      (error) => console.error("Error fetching questions:", error)
    );
}

async function getQuestionById(id) {
  const snap = await firestore.collection("questions").doc(id).get();
  if (!snap.exists) return { success: false, error: "Question not found" };
  return { success: true, question: { id: snap.id, ...snap.data() } };
}

async function deleteQuestion(questionId) {
  const user = getCurrentUser();
  if (!user) return { success: false };

  const qRef = firestore.collection("questions").doc(questionId);
  const qSnap = await qRef.get();
  if (!qSnap.exists) return { success: false };
  if (qSnap.data().authorId !== user.uid) {
    return { success: false, error: "Unauthorized" };
  }

  const answersSnap = await firestore
    .collection("answers")
    .where("questionId", "==", questionId)
    .get();

  const batch = firestore.batch();
  answersSnap.forEach((doc) => batch.delete(doc.ref));
  batch.delete(qRef);
  await batch.commit();

  return { success: true };
}

// =========================
// Answers
// =========================
async function createAnswer(questionId, content) {
  const user = getCurrentUser();
  if (!user) return { success: false };

  await firestore.collection("answers").add({
    questionId,
    content,
    authorId: user.uid,
    authorName: user.displayName || user.email,
    createdAt: fieldValue.serverTimestamp(),
    likes: 0,
    likedBy: []
  });

  await firestore
    .collection("questions")
    .doc(questionId)
    .update({ answerCount: fieldValue.increment(1) });

  return { success: true };
}

function getAnswersRealtime(questionId, callback) {
  return firestore
    .collection("answers")
    .where("questionId", "==", questionId)
    .orderBy("createdAt", "asc")
    .onSnapshot(
      (snapshot) => {
        const answers = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        callback(answers);
      },
      (error) => console.error("Error fetching answers:", error)
    );
}

async function deleteAnswer(answerId, questionId) {
  const user = getCurrentUser();
  if (!user) return { success: false };

  const ref = firestore.collection("answers").doc(answerId);
  const snap = await ref.get();
  if (!snap.exists) return { success: false };
  if (snap.data().authorId !== user.uid) {
    return { success: false, error: "Unauthorized" };
  }

  await ref.delete();
  await firestore
    .collection("questions")
    .doc(questionId)
    .update({ answerCount: fieldValue.increment(-1) });

  return { success: true };
}

// =========================
// Likes
// =========================
async function toggleLikeAnswer(answerId) {
  const user = getCurrentUser();
  if (!user) return { success: false };

  const ref = firestore.collection("answers").doc(answerId);
  const snap = await ref.get();
  if (!snap.exists) return { success: false };

  const liked = (snap.data().likedBy || []).includes(user.uid);

  await ref.update({
    likes: fieldValue.increment(liked ? -1 : 1),
    likedBy: liked ? fieldValue.arrayRemove(user.uid) : fieldValue.arrayUnion(user.uid)
  });

  return { success: true, liked: !liked };
}

// =========================
// Users
// =========================
async function getUserData(userId) {
  const snap = await firestore.collection("users").doc(userId).get();
  if (!snap.exists) return { success: false };
  return { success: true, userData: snap.data() };
}
