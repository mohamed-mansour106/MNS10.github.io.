/*********************************
 * Firebase Config
 *********************************/
const firebaseConfig = {
  apiKey: "AIzaSyC7IVEEzzmV1n-BmQlyqf16DGZbFE4rl5Y",
  authDomain: "swt-community.firebaseapp.com",
  projectId: "swt-community",
  storageBucket: "swt-community.firebasestorage.app",
  messagingSenderId: "793456550808",
  appId: "1:793456550808:web:9cd86581b8764d42c541ed",
  measurementId: "G-JC62BSQ9JR"
};

/*********************************
 * Initialize Firebase (COMPAT)
 *********************************/
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();
const redirectAfterLogin = new URLSearchParams(window.location.search).get("redirect");

function getPostLoginUrl() {
  if (!redirectAfterLogin) return "index.html";
  if (!redirectAfterLogin.startsWith("/")) return "index.html";
  return `${window.location.origin}${redirectAfterLogin}`;
}

/*********************************
 * Auth Persistence
 *********************************/
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

/*********************************
 * Global User
 *********************************/
let currentUser = null;

/*********************************
 * Auth State Listener
 *********************************/
auth.onAuthStateChanged((user) => {
  currentUser = user;
  updateNavigation(user);
  console.log(user ? "✅ Logged in: " + user.email : "❌ Not logged in");
});

/*********************************
 * Update Navbar
 *********************************/
function updateNavigation(user) {
  const loginLink = document.getElementById("loginNavLink");
  const logoutBtn = document.getElementById("logoutNavBtn");
  const profileLink = document.getElementById("profileNavLink");

  if (user) {
    if (loginLink) loginLink.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "inline-block";
    if (profileLink) profileLink.style.display = "inline-block";
  } else {
    if (loginLink) loginLink.style.display = "inline-block";
    if (logoutBtn) logoutBtn.style.display = "none";
    if (profileLink) profileLink.style.display = "none";
  }
}

/*********************************
 * Email Login
 *********************************/
async function loginWithEmail(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

/*********************************
 * Register
 *********************************/
async function registerWithEmail(name, email, password) {
  const cred = await auth.createUserWithEmailAndPassword(email, password);

  await cred.user.updateProfile({ displayName: name });

  await db.collection("users").doc(cred.user.uid).set({
    uid: cred.user.uid,
    name,
    email,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  });

  return cred.user;
}

/*********************************
 * Google Login (Redirect)
 *********************************/
async function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    const result = await auth.signInWithPopup(provider);
    return result.user;
  } catch (err) {
    // Fallback for popup blockers or unsupported popup environments.
    const code = err?.code || "";
    if (code === "auth/popup-blocked" || code === "auth/cancelled-popup-request" || code === "auth/popup-closed-by-user") {
      await auth.signInWithRedirect(provider);
      return null;
    }
    throw err;
  }
}

async function ensureUserDoc(user) {
  if (!user) return;
  const doc = await db.collection("users").doc(user.uid).get();
  if (!doc.exists) {
    await db.collection("users").doc(user.uid).set({
      uid: user.uid,
      name: user.displayName || (user.email ? user.email.split("@")[0] : "User"),
      email: user.email || "",
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  }
}

/*********************************
 * Handle Redirect Result
 *********************************/
auth.getRedirectResult().then(async (result) => {
  if (!result || !result.user) return;
  await ensureUserDoc(result.user);
  window.location.href = getPostLoginUrl();
}).catch((err) => {
  console.error(err);
  alert(err.message);
});

/*********************************
 * Logout
 *********************************/
async function logout() {
  await auth.signOut();
  window.location.href = "login.html";
}

/*********************************
 * Helpers
 *********************************/
function isAuthenticated() {
  return !!auth.currentUser;
}

function getCurrentUser() {
  return auth.currentUser;
}

/*********************************
 * Login Form
 *********************************/
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = loginForm.loginEmail.value.trim();
    const password = loginForm.loginPassword.value;

    try {
      await loginWithEmail(email, password);
      window.location.href = getPostLoginUrl();
    } catch (err) {
      alert(err.message);
    }
  });
}

/*********************************
 * Google Button
 *********************************/
const googleBtn = document.getElementById("googleSignInBtn");
if (googleBtn) {
  googleBtn.addEventListener("click", async () => {
    try {
      const user = await signInWithGoogle();
      if (user) {
        await ensureUserDoc(user);
        window.location.href = getPostLoginUrl();
      }
    } catch (err) {
      alert(err.message);
    }
  });
}

const googleSignUpBtn = document.getElementById("googleSignUpBtn");
if (googleSignUpBtn) {
  googleSignUpBtn.addEventListener("click", async () => {
    try {
      const user = await signInWithGoogle();
      if (user) {
        await ensureUserDoc(user);
        window.location.href = getPostLoginUrl();
      }
    } catch (err) {
      alert(err.message);
    }
  });
}

/*********************************
 * Logout Button
 *********************************/
const logoutBtn = document.getElementById("logoutNavBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", logout);
}
