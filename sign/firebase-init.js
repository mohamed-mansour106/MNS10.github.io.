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
firebase.firestore(); // احتياطي إن كنت تستخدم Firestore

// إضافة Google Analytics إذا أردت تتبع الإحصائيات
if (typeof firebase.analytics !== 'undefined') {
  firebase.analytics();
}

// إعادة توجيه إذا المستخدم مسجل دخول بالفعل
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    const path = location.pathname.split('/').pop();
    if (path === 'login.html' || path === '') {
      location.href = 'dashboard.html';
    }
  }
});