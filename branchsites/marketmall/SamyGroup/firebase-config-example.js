// ============================================
// مثال على Firebase Configuration
// ============================================
// 
// استبدل القيم أدناه ببيانات مشروعك من Firebase Console
//

/*
للحصول على هذه البيانات:
1. اذهب إلى https://console.firebase.google.com/
2. اختر مشروعك
3. اضغط على Project Settings (⚙️)
4. انسخ القيم من قسم "Your web app"
*/

const firebaseConfigExample = {
    apiKey: "AIzaSyBWInOFMkiyis2C2267tZD8_uVRkIo0h0g", 
    // يبدأ عادة بـ AIzaSy
    
    authDomain: "samygroupy.firebaseapp.com",
    // يكون بالصيغة: project-id.firebaseapp.com
    
    projectId: "samygroupy",
    // معرف مشروعك الفريد
    
    storageBucket: "samygroupy.firebasestorage.app",
    // يكون بالصيغة: project-id.appspot.com
    
    messagingSenderId: "906841923235",
    // رقم المرسل
    
    appId: "1:906841923235:web:de757131a48d9e07f36916"
    // معرف التطبيق
};

// ============================================
// مثال حقيقي (استبدل بـ بيانات مشروعك):
// ============================================

/*
const firebaseConfigReal = {
    apiKey: "AIzaSyD_real_key_from_your_firebase",
    authDomain: "my-store-project.firebaseapp.com",
    projectId: "my-store-project",
    storageBucket: "my-store-project.appspot.com",
    messagingSenderId: "987654321",
    appId: "1:987654321:web:abc123def456"
};
*/

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
