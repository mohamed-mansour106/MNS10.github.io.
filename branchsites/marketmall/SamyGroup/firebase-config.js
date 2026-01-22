// Firebase Configuration
// قم بتعديل هذه البيانات بـ بيانات مشروعك من Firebase Console

 import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  import {
    getFirestore,
    collection,
    addDoc,
    onSnapshot,
    query,
    orderBy,
    doc,
    updateDoc,
    increment,
    serverTimestamp
  } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBWInOFMkiyis2C2267tZD8_uVRkIo0h0g",
    authDomain: "samygroupy.firebaseapp.com",
    projectId: "samygroupy",
    storageBucket: "samygroupy.firebasestorage.app",
    messagingSenderId: "906841923235",
    appId: "1:906841923235:web:de757131a48d9e07f36916",
    measurementId: "G-6MH8XMBLLW"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

   // Initialize Firebase
  const db = getFirestore(app);



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

