# Firebase-ready Static Site (Arabic)

هذه الحزمة تحتوي على نسخة جاهزة لربط موقعك الثابت مع Firebase Authentication و Firestore.

### الملفات المهمة
- `signup.html` – صفحة إنشاء حساب (يسجل المستخدم في Auth ويخزن سجل في Firestore).
- `login.html` – صفحة تسجيل دخول.
- `dashboard.html` – لوحة بسيطة تعرض بيانات المستخدم وقائمة المشتركين.
- `firebase-init.js` – ضع فيه إعدادات مشروع Firebase الخاصة بك.
- `search.html` + `search.json` – مثال بحث بسيط للموقع.

### خطوات التشغيل وربط Firebase
1. افتح https://console.firebase.google.com وأنشئ مشروع جديد.
2. اختر إضافة Web App (</>).
3. انسخ `firebaseConfig` الذي يقدمه Firebase.
4. افتح `firebase-init.js` واستبدل الجزء التعليمي بالتالي:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
firebase.initializeApp(firebaseConfig);
```

5. في Firebase Console: تحت **Authentication** -> **Sign-in method** فعّل Email/Password.
6. في Firebase Console: تحت **Firestore Database** أنشئ قاعدة بيانات في وضع الاختبار أو قواعد تناسبك.
7. قم برفع الملفات إلى GitHub (push) أو استعمل GitHub Pages لعرض الموقع.

### ملاحظات أمنية
- قواعد Firestore الافتراضية في وضع الاختبار قد تكون مفتوحة. عدّل القواعد قبل الإنتاج.
- لا تضع مفاتيح Firebase في مستودع عمومي بدون قيود قواعد مناسبة، لكن مفاتيح client-side عموماً ليست سرية — الاستخدام الصحيح يتم عبر قواعد الأمان في Firestore و Authentication.

### تحتاج مساعدة؟
لو عايز، أقدر:
- أعدّل `firebase-init.js` لو تبعت لي إعدادات المشروع (أو أساعدك خطوة بخطوة).
- أضيف صفحة إدارة مشتركين متقدّمة.
- أرفع التغييرات لك و أعمل Pull Request على مستودعك.
