// js/firestore.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  onSnapshot,
  serverTimestamp,
  increment,
  arrayUnion,
  arrayRemove,
  writeBatch
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

import { firebaseConfig } from "../firebase-config.example.js"; // عدّل المسار حسب مكانك

// =========================
// Initialize Firebase
// =========================
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// =========================
// Helpers
// =========================
export function getCurrentUser() {
  return auth.currentUser;
}

// =========================
// Questions
// =========================
export async function createQuestion(title, description) {
  const user = getCurrentUser();
  if (!user) return { success: false, error: "Not authenticated" };

  const data = {
    title,
    description,
    authorId: user.uid,
    authorName: user.displayName || user.email,
    createdAt: serverTimestamp(),
    answerCount: 0
  };

  const ref = await addDoc(collection(db, "questions"), data);
  return { success: true, questionId: ref.id };
}

export function getQuestionsRealtime(callback) {
  const q = query(collection(db, "questions"), orderBy("createdAt", "desc"));

  const unsubscribe = onSnapshot(
    q,
    (snapshot) => {
      const questions = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      callback(questions);
    },
    (error) => console.error("Error fetching questions:", error)
  );

  return unsubscribe;
}

export async function getQuestionById(id) {
  const ref = doc(db, "questions", id);
  const snap = await getDoc(ref);
  if (!snap.exists()) return { success: false, error: "Question not found" };
  return { success: true, question: { id: snap.id, ...snap.data() } };
}

export async function deleteQuestion(questionId) {
  const user = getCurrentUser();
  if (!user) return { success: false };

  const qRef = doc(db, "questions", questionId);
  const qSnap = await getDoc(qRef);
  if (!qSnap.exists()) return { success: false };
  if (qSnap.data().authorId !== user.uid) return { success: false, error: "Unauthorized" };

  const answersSnap = await getDocs(query(collection(db, "answers"), where("questionId", "==", questionId)));

  const batch = writeBatch(db);
  answersSnap.forEach(doc => batch.delete(doc.ref));
  batch.delete(qRef);
  await batch.commit();

  return { success: true };
}

// =========================
// Answers
// =========================
export async function createAnswer(questionId, content) {
  const user = getCurrentUser();
  if (!user) return { success: false };

  await addDoc(collection(db, "answers"), {
    questionId,
    content,
    authorId: user.uid,
    authorName: user.displayName || user.email,
    createdAt: serverTimestamp(),
    likes: 0,
    likedBy: []
  });

  await updateDoc(doc(db, "questions", questionId), {
    answerCount: increment(1)
  });

  return { success: true };
}

export function getAnswersRealtime(questionId, callback) {
  const q = query(collection(db, "answers"), where("questionId", "==", questionId), orderBy("createdAt", "asc"));

  const unsubscribe = onSnapshot(
    q,
    (snapshot) => {
      const answers = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      callback(answers);
    },
    (error) => console.error("Error fetching answers:", error)
  );

  return unsubscribe;
}

export async function deleteAnswer(answerId, questionId) {
  const user = getCurrentUser();
  if (!user) return { success: false };

  const ref = doc(db, "answers", answerId);
  const snap = await getDoc(ref);
  if (!snap.exists()) return { success: false };
  if (snap.data().authorId !== user.uid) return { success: false, error: "Unauthorized" };

  await deleteDoc(ref);
  await updateDoc(doc(db, "questions", questionId), { answerCount: increment(-1) });

  return { success: true };
}

// =========================
// Likes
// =========================
export async function toggleLikeAnswer(answerId) {
  const user = getCurrentUser();
  if (!user) return { success: false };

  const ref = doc(db, "answers", answerId);
  const snap = await getDoc(ref);
  if (!snap.exists()) return { success: false };

  const liked = snap.data().likedBy?.includes(user.uid);

  await updateDoc(ref, {
    likes: increment(liked ? -1 : 1),
    likedBy: liked ? arrayRemove(user.uid) : arrayUnion(user.uid)
  });

  return { success: true, liked: !liked };
}

// =========================
// Users
// =========================
export async function getUserData(userId) {
  const ref = doc(db, "users", userId);
  const snap = await getDoc(ref);
  if (!snap.exists()) return { success: false };
  return { success: true, userData: snap.data() };
}
