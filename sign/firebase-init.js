// قم بوضع إعدادات Firebase الخاصة بك هنا.
// للحصول على هذه القيم اذهب إلى console.firebase.google.com
// Example:
const firebaseConfig = {
  apiKey: "AIzaSyCvqJyV8wOPZkwUyc16mE67zx2dOJdeiZg",
  authDomain: "mmm1-6e068.firebaseapp.com",
  projectId: "mmm1-6e068",
  storageBucket: "mmm1-6e068.firebasestorage.app",
  messagingSenderId: "135172337344",
  appId: "1:135172337344:web:54b7999396216266e98725",
  measurementId: "G-QQ35MCX3EP"
};

firebase.initializeApp(firebaseConfig);

// initialize services
firebase.analytics && firebase.analytics();
const auth = firebase.auth();

// initialize firestore and export db
const db = firebase.firestore();
window.db = db; // اختياري لتسهيل الوصول من الكونسول أو سكربتات أخرى

// enable offline persistence (اختياري)
db.enablePersistence()
  .catch(function(err) {
    if (err.code === 'failed-precondition') {
      console.warn('Persistence failed: multiple tabs open');
    } else if (err.code === 'unimplemented') {
      console.warn('Persistence not available in this browser');
    }
  });

// redirect if already logged in
auth.onAuthStateChanged(user => {
  if (user) {
    const path = location.pathname.split('/').pop();
    if (path === 'login.html' || path === '') {
      location.href = 'index.html';
    }
  }
});
