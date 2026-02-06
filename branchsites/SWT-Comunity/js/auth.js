
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC7IVEEzzmV1n-BmQlyqf16DGZbFE4rl5Y",
    authDomain: "swt-community.firebaseapp.com",
    projectId: "swt-community",
    storageBucket: "swt-community.firebasestorage.app",
    messagingSenderId: "793456550808",
    appId: "1:793456550808:web:9cd86581b8764d42c541ed",
    measurementId: "G-JC62BSQ9JR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


/***************************** */


// Firebase Configuration
// Replace these values with your Firebase project configuration


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Current User State
let currentUser = null;

// Auth State Observer
auth.onAuthStateChanged((user) => {
    currentUser = user;
    updateNavigation(user);

    if (user) {
        console.log('User signed in:', user.email);
    } else {
        console.log('User signed out');
    }
});

// Update Navigation Based on Auth State
function updateNavigation(user) {
    const loginNavLink = document.getElementById('loginNavLink');
    const logoutNavBtn = document.getElementById('logoutNavBtn');
    const profileNavLink = document.getElementById('profileNavLink');
    const mobileLoginLink = document.getElementById('mobileLoginLink');
    const mobileLogoutBtn = document.getElementById('mobileLogoutBtn');
    const mobileProfileLink = document.getElementById('mobileProfileLink');

    if (user) {
        if (loginNavLink) loginNavLink.style.display = 'none';
        if (logoutNavBtn) logoutNavBtn.style.display = 'block';
        if (profileNavLink) profileNavLink.style.display = 'block';
        if (mobileLoginLink) mobileLoginLink.style.display = 'none';
        if (mobileLogoutBtn) mobileLogoutBtn.style.display = 'block';
        if (mobileProfileLink) mobileProfileLink.style.display = 'block';
    } else {
        if (loginNavLink) loginNavLink.style.display = 'block';
        if (logoutNavBtn) logoutNavBtn.style.display = 'none';
        if (profileNavLink) profileNavLink.style.display = 'none';
        if (mobileLoginLink) mobileLoginLink.style.display = 'block';
        if (mobileLogoutBtn) mobileLogoutBtn.style.display = 'none';
        if (mobileProfileLink) mobileProfileLink.style.display = 'none';
    }
}

// Email/Password Registration
async function registerWithEmail(name, email, password) {
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;

        await user.updateProfile({
            displayName: name
        });

        await db.collection('users').doc(user.uid).set({
            uid: user.uid,
            name: name,
            email: email,
            role: 'user',
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });

        console.log('User registered successfully:', user.uid);
        return { success: true, user };
    } catch (error) {
        console.error('Registration error:', error);
        return { success: false, error: error.message };
    }
}

// Email/Password Login
async function loginWithEmail(email, password) {
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        console.log('User logged in successfully:', userCredential.user.uid);
        return { success: true, user: userCredential.user };
    } catch (error) {
        console.error('Login error:', error);
        return { success: false, error: error.message };
    }
}

// Google Sign In
async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
        const result = await auth.signInWithPopup(provider);
        const user = result.user;

        const userDoc = await db.collection('users').doc(user.uid).get();
        if (!userDoc.exists) {
            await db.collection('users').doc(user.uid).set({
                uid: user.uid,
                name: user.displayName,
                email: user.email,
                role: 'user',
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
        }

        console.log('Google sign-in successful:', user.uid);
        return { success: true, user };
    } catch (error) {
        console.error('Google sign-in error:', error);
        return { success: false, error: error.message };
    }
}

// Logout
async function logout() {
    try {
        await auth.signOut();
        console.log('User signed out successfully');
        return { success: true };
    } catch (error) {
        console.error('Logout error:', error);
        return { success: false, error: error.message };
    }
}

// Check if User is Authenticated
function isAuthenticated() {
    return currentUser !== null;
}

// Get Current User
function getCurrentUser() {
    return currentUser;
}

// Get User Display Name
function getUserDisplayName() {
    if (currentUser) {
        return currentUser.displayName || currentUser.email;
    }
    return null;
}

// Login Form Handler
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;
        const loginBtn = document.getElementById('loginBtn');
        const loginBtnText = document.getElementById('loginBtnText');
        const loginBtnSpinner = document.getElementById('loginBtnSpinner');
        const loginError = document.getElementById('loginError');

        loginBtn.disabled = true;
        loginBtnText.style.display = 'none';
        loginBtnSpinner.style.display = 'inline-block';
        loginError.style.display = 'none';

        const result = await loginWithEmail(email, password);

        if (result.success) {
            window.location.href = 'index.html';
        } else {
            loginError.textContent = result.error;
            loginError.style.display = 'block';
            loginBtn.disabled = false;
            loginBtnText.style.display = 'inline';
            loginBtnSpinner.style.display = 'none';
        }
    });
}

// Register Form Handler
if (document.getElementById('registerForm')) {
    document.getElementById('registerForm').addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('registerName').value.trim();
        const email = document.getElementById('registerEmail').value.trim();
        const password = document.getElementById('registerPassword').value;
        const registerBtn = document.getElementById('registerBtn');
        const registerBtnText = document.getElementById('registerBtnText');
        const registerBtnSpinner = document.getElementById('registerBtnSpinner');
        const registerError = document.getElementById('registerError');

        if (password.length < 6) {
            registerError.textContent = 'Password must be at least 6 characters';
            registerError.style.display = 'block';
            return;
        }

        registerBtn.disabled = true;
        registerBtnText.style.display = 'none';
        registerBtnSpinner.style.display = 'inline-block';
        registerError.style.display = 'none';

        const result = await registerWithEmail(name, email, password);

        if (result.success) {
            window.location.href = 'index.html';
        } else {
            registerError.textContent = result.error;
            registerError.style.display = 'block';
            registerBtn.disabled = false;
            registerBtnText.style.display = 'inline';
            registerBtnSpinner.style.display = 'none';
        }
    });
}

// Google Sign-In Button Handlers
const googleSignInBtn = document.getElementById('googleSignInBtn');
const googleSignUpBtn = document.getElementById('googleSignUpBtn');

if (googleSignInBtn) {
    googleSignInBtn.addEventListener('click', async () => {
        const result = await signInWithGoogle();
        if (result.success) {
            window.location.href = 'index.html';
        } else {
            alert('Google sign-in failed: ' + result.error);
        }
    });
}

if (googleSignUpBtn) {
    googleSignUpBtn.addEventListener('click', async () => {
        const result = await signInWithGoogle();
        if (result.success) {
            window.location.href = 'index.html';
        } else {
            alert('Google sign-up failed: ' + result.error);
        }
    });
}

// Logout Button Handlers
const logoutNavBtn = document.getElementById('logoutNavBtn');
const mobileLogoutBtn = document.getElementById('mobileLogoutBtn');

if (logoutNavBtn) {
    logoutNavBtn.addEventListener('click', async () => {
        const result = await logout();
        if (result.success) {
            window.location.href = 'index.html';
        }
    });
}

if (mobileLogoutBtn) {
    mobileLogoutBtn.addEventListener('click', async () => {
        const result = await logout();
        if (result.success) {
            window.location.href = 'index.html';
        }
    });
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const closeMobileMenu = document.getElementById('closeMobileMenu');

if (mobileMenuBtn && mobileMenuOverlay) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuOverlay.classList.add('active');
    });
}

if (closeMobileMenu && mobileMenuOverlay) {
    closeMobileMenu.addEventListener('click', () => {
        mobileMenuOverlay.classList.remove('active');
    });
}
