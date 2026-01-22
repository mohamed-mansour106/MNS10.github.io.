# إعداد Firebase Firestore

اتبع هذه الخطوات لتشغيل ميزة إضافة المنتجات:

## 1. إنشاء مشروع Firebase

1. اذهب إلى [Firebase Console](https://console.firebase.google.com/)
2. اضغط "Create Project" أو "إضافة مشروع"
3. أدخل اسم المشروع وأكمل الخطوات

## 2. الحصول على بيانات المشروع

1. في Firebase Console، اذهب إلى Project Settings (⚙️)
2. انسخ `firebaseConfig` من قسم "Your web app"
3. يجب أن تحتوي على:
   - apiKey
   - authDomain
   - projectId
   - storageBucket
   - messagingSenderId
   - appId

## 3. تحديث بيانات Firebase في script.js

ابحث عن هذا الجزء في `script.js`:

```javascript
const firebaseConfig = {
    apiKey: "AIzaSyDxxx...",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "your-sender-id",
    appId: "your-app-id"
};
```

استبدل القيم بـ بيانات مشروعك.

## 4. إعداد Firestore Database

1. في Firebase Console، اذهب إلى "Firestore Database"
2. اضغط "Create database"
3. اختر "Start in test mode" (للاختبار فقط)
4. اختر region الأقرب إليك

## 5. إعداد قواعد الأمان

اذهب إلى Firestore → Rules وأضف هذه القواعد:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /products/{document=**} {
      allow read, create: if true;
    }
  }
}
```

**ملاحظة مهمة:** هذه القواعد للتطوير فقط. قبل النشر للإنتاج، يجب تحديثها لمزيد من الأمان.

## 6. الميزات

✅ إضافة منتجات جديدة عبر الـ form
✅ حفظ البيانات في Firestore
✅ عرض المنتجات الجديدة مباشرة بعد الإضافة
✅ تصنيف المنتجات حسب القسم
✅ المنتجات تظهر في الـ tabs المناسبة

## 7. الحقول المطلوبة

عند إضافة منتج جديد، يجب ملء:
- **اسم المنتج**: النص
- **القسم**: الكترونيات، أزياء، منزل وديكور، أو رياضة
- **السعر**: الرقم (بدون "ر.س")
- **رابط الصورة**: رابط صورة URL
- **الوصف**: وصف المنتج
- **المواصفات**: مفصولة بفواصل (مثلاً: مواصفة 1، مواصفة 2، مواصفة 3)

## استكشاف الأخطاء

إذا لم تعمل الميزة:

1. تأكد من إدخال بيانات Firebase الصحيحة
2. تحقق من قواعد Firestore (Rules)
3. افتح Developer Console (F12) وابحث عن الأخطاء
4. تأكد من تمكين Firestore في Firebase Console

---

لأي مشاكل أو استفسارات، راجع [Firebase Documentation](https://firebase.google.com/docs)
