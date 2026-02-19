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

// =========================
// Posts (News/Articles)
// =========================
async function createPost(title, body, imageUrl = "") {
  const user = getCurrentUser();
  if (!user) return { success: false, error: "Not authenticated" };

  const data = {
    title,
    body,
    imageUrl,
    authorId: user.uid,
    authorName: user.displayName || user.email || "Admin",
    authorEmail: user.email,
    authorAvatar: user.photoURL || generateAvatarUrl(user.displayName || user.email),
    createdAt: fieldValue.serverTimestamp(),
    updatedAt: fieldValue.serverTimestamp(),
    likes: 0,
    likedBy: [],
    commentCount: 0
  };

  const ref = await firestore.collection("posts").add(data);
  return { success: true, postId: ref.id, post: { id: ref.id, ...data } };
}

function getPostsRealtime(callback) {
  return firestore
    .collection("posts")
    .orderBy("createdAt", "desc")
    .onSnapshot(
      (snapshot) => {
        const posts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        callback(posts);
      },
      (error) => console.error("Error fetching posts:", error)
    );
}

async function getPostById(postId) {
  const snap = await firestore.collection("posts").doc(postId).get();
  if (!snap.exists) return { success: false, error: "Post not found" };
  return { success: true, post: { id: snap.id, ...snap.data() } };
}

async function deletePost(postId) {
  const user = getCurrentUser();
  if (!user) return { success: false, error: "Not authenticated" };

  const pRef = firestore.collection("posts").doc(postId);
  const pSnap = await pRef.get();
  if (!pSnap.exists) return { success: false, error: "Post not found" };
  if (pSnap.data().authorId !== user.uid) {
    return { success: false, error: "Unauthorized" };
  }

  // Delete all comments for this post
  const commentsSnap = await firestore
    .collection("posts")
    .doc(postId)
    .collection("comments")
    .get();

  const batch = firestore.batch();
  commentsSnap.forEach((doc) => batch.delete(doc.ref));
  batch.delete(pRef);
  await batch.commit();

  return { success: true };
}

// =========================
// Comments
// =========================
async function addComment(postId, text) {
  const user = getCurrentUser();
  if (!user) return { success: false, error: "Not authenticated" };

  const commentData = {
    text,
    authorId: user.uid,
    authorName: user.displayName || user.email || "Anonymous",
    authorAvatar: user.photoURL || generateAvatarUrl(user.displayName || user.email),
    createdAt: fieldValue.serverTimestamp(),
    updatedAt: fieldValue.serverTimestamp()
  };

  const commentRef = await firestore
    .collection("posts")
    .doc(postId)
    .collection("comments")
    .add(commentData);

  // Increment comment count on post
  await firestore
    .collection("posts")
    .doc(postId)
    .update({ commentCount: fieldValue.increment(1) });

  return { success: true, commentId: commentRef.id, comment: { id: commentRef.id, ...commentData } };
}

function getCommentsRealtime(postId, callback) {
  return firestore
    .collection("posts")
    .doc(postId)
    .collection("comments")
    .orderBy("createdAt", "asc")
    .onSnapshot(
      (snapshot) => {
        const comments = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        callback(comments);
      },
      (error) => console.error("Error fetching comments:", error)
    );
}

async function deleteComment(postId, commentId) {
  const user = getCurrentUser();
  if (!user) return { success: false, error: "Not authenticated" };

  const cRef = firestore.collection("posts").doc(postId).collection("comments").doc(commentId);
  const cSnap = await cRef.get();
  if (!cSnap.exists) return { success: false, error: "Comment not found" };
  if (cSnap.data().authorId !== user.uid) {
    return { success: false, error: "Unauthorized" };
  }

  await cRef.delete();
  await firestore
    .collection("posts")
    .doc(postId)
    .update({ commentCount: fieldValue.increment(-1) });

  return { success: true };
}

// =========================
// Helper: Generate Avatar URL
// =========================
function generateAvatarUrl(username) {
  // Using UI Avatars service for generating initials-based avatars
  if (!username) username = "User";
  const name = username.replace(/[^a-zA-Z0-9]/g, "").slice(0, 2).toUpperCase();
  return `https://ui-avatars.com/api/?name=${name}&background=0a66c2&color=fff&bold=true&size=128`;
}
