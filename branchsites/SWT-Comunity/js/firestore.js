// js/firestore.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
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

import { firebaseConfig } from "../firebase-config.example.js"; 
// عدّل المسار لو الملف في مكان مختلف

/* =========================
   Initialize Firebase
========================= */
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

/* =========================
   Helpers
========================= */
export function getCurrentUser() {
  return auth.currentUser;
}

/* =========================
   Questions
========================= */
export async function createQuestion(title, description) {
  const user = getCurrentUser();
  if (!user) {
    return { success: false, error: "Not authenticated" };
  }

  if (!title || !description) {
    return { success: false, error: "Missing data" };
  }

  const docRef = await addDoc(collection(db, "questions"), {
    title,
    description,
    authorId: user.uid,
    authorName: user.displayName || user.email,
    createdAt: serverTimestamp(),
    answerCount: 0
  });

  return { success: true, questionId: docRef.id };
}

export function getQuestionsRealtime(callback) {
  const q = query(
    collection(db, "questions"),
    orderBy("createdAt", "desc")
  );

  return onSnapshot(
    q,
    snapshot => {
      const questions = snapshot.docs.map(d => ({
        id: d.id,
        ...d.data()
      }));
      callback(questions);
    },
    error => console.error("Questions listener error:", error)
  );
}

export async function getQuestionById(questionId) {
  const ref = doc(db, "questions", questionId);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    return { success: false, error: "Question not found" };
  }

  return {
    success: true,
    question: { id: snap.id, ...snap.data() }
  };
}

export async function deleteQuestion(questionId) {
  const user = getCurrentUser();
  if (!user) return { success: false, error: "Not authenticated" };

  const questionRef = doc(db, "questions", questionId);
  const questionSnap = await getDoc(questionRef);

  if (!questionSnap.exists()) {
    return { success: false, error: "Question not found" };
  }

  if (questionSnap.data().authorId !== user.uid) {
    return { success: false, error: "Unauthorized" };
  }

  const answersQuery = query(
    collection(db, "answers"),
    where("questionId", "==", questionId)
  );

  const answersSnap = await getDocs(answersQuery);
  const batch = writeBatch(db);

  answersSnap.forEach(a => batch.delete(a.ref));
  batch.delete(questionRef);

  await batch.commit();
  return { success: true };
}

/* =========================
   Answers
========================= */
export async function createAnswer(questionId, content) {
  const user = getCurrentUser();
  if (!user) return { success: false, error: "Not authenticated" };
  if (!content) return { success: false, error: "Empty answer" };

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
  const q = query(
    collection(db, "answers"),
    where("questionId", "==", questionId),
    orderBy("createdAt", "asc")
  );

  return onSnapshot(
    q,
    snapshot => {
      const answers = snapshot.docs.map(d => ({
        id: d.id,
        ...d.data()
      }));
      callback(answers);
    },
    error => console.error("Answers listener error:", error)
  );
}

export async function deleteAnswer(answerId, questionId) {
  const user = getCurrentUser();
  if (!user) return { success: false, error: "Not authenticated" };

  const ref = doc(db, "answers", answerId);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    return { success: false, error: "Answer not found" };
  }

  if (snap.data().authorId !== user.uid) {
    return { success: false, error: "Unauthorized" };
  }

  await deleteDoc(ref);
  await updateDoc(doc(db, "questions", questionId), {
    answerCount: increment(-1)
  });

  return { success: true };
}

/* =========================
   Likes
========================= */
export async function toggleLikeAnswer(answerId) {
  const user = getCurrentUser();
  if (!user) return { success: false, error: "Not authenticated" };

  const ref = doc(db, "answers", answerId);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    return { success: false, error: "Answer not found" };
  }

  const likedBy = snap.data().likedBy || [];
  const alreadyLiked = likedBy.includes(user.uid);

  await updateDoc(ref, {
    likes: increment(alreadyLiked ? -1 : 1),
    likedBy: alreadyLiked
      ? arrayRemove(user.uid)
      : arrayUnion(user.uid)
  });

  return { success: true, liked: !alreadyLiked };
}

/* =========================
   Users
========================= */
export async function getUserData(userId) {
  const ref = doc(db, "users", userId);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    return { success: false, error: "User not found" };
  }

  return { success: true, userData: snap.data() };
}
