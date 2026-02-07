// js/auth.js (MODULAR Firebase v9+)

import { app } from "./firebase-config.js";
import {
  getAuth,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/*********************************
 * Init
 *********************************/
export const auth = getAuth(app);
export const db = getFirestore(app);

/*********************************
 * Auth Persistence
 *********************************/
setPersistence(auth, browserLocalPersistence);

/*********************************
 * Auth State Listener
 *********************************/
export function listenToAuthState(callback) {
  return onAuthStateChanged(auth, (user) => {
    console.log(
      user ? "✅ Logged in: " + user.email : "❌ Not logged in"
    );
    if (callback) callback(user);
  });
}

/*********************************
 * Email Login
 *********************************/
export async function loginWithEmail(email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}

/*********************************
 * Register with Email
 *********************************/
export async function registerWithEmail(name, email, password) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);

  await updateProfile(cred.user, {
    displayName: name
  });

  await setDoc(doc(db, "users", cred.user.uid), {
    uid: cred.user.uid,
    name,
    email,
    createdAt: serverTimestamp()
  });

  return cred.user;
}

/*********************************
 * Google Login
 *********************************/
export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const user = result.user;

  const ref = doc(db, "users", user.uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    await setDoc(ref, {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      createdAt: serverTimestamp()
    });
  }

  return user;
}

/*********************************
 * Logout
 *********************************/
export async function logout() {
  await signOut(auth);
  window.location.href = "login.html";
}

/*********************************
 * Helpers
 *********************************/
export function getCurrentUser() {
  return auth.currentUser;
}

export function isAuthenticated() {
  return !!auth.currentUser;
}
