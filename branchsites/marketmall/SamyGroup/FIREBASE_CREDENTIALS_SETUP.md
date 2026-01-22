# 🔐 إعداد بيانات Firebase - دليل خطوة بخطوة

## ماذا تحتاج قبل البدء؟
- حساب Google (Gmail)
- لا حاجة لبطاقة ائتمان - Firebase مجاني للمشاريع الصغيرة

---

## ✅ الخطوة 1: إذهب إلى Firebase Console

1. اذهب إلى: **https://console.firebase.google.com/**
2. سجل الدخول بحسابك على Google

---

## ✅ الخطوة 2: إنشاء مشروع Firebase جديد

1. اضغط على **"إضافة مشروع"** (Add project)
2. أدخل اسم المشروع (مثال: `matjari-store`)
3. اضغط **"متابعة"** (Continue)
4. اختر **"تعطيل Google Analytics"** (Disable Google Analytics) - اختياري
5. اضغط **"إنشاء المشروع"** (Create project)
6. انتظر حتى يكتمل الإنشاء (دقيقة واحدة تقريباً)

---

## ✅ الخطوة 3: الحصول على بيانات الاتصال (Firebase Config)

### الطريقة الأولى: من إعدادات المشروع

1. في Firebase Console، اضغط على **⚙️ أيقونة الإعدادات** (العجلة) في الأعلى يسار الصفحة
2. اختر **"إعدادات المشروع"** (Project Settings)
3. انتقل إلى تبويب **"التطبيقات"** (Your apps)
4. اضغط على **تسجيل تطبيق ويب** (Register app) - اختر الويب 🌐
5. أدخل الاسم (مثال: `matjari-web`)
6. اضغط **"تسجيل التطبيق"** (Register app)

### ستظهر لك بيانات هكذا:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyD...الكود_الطويل...",
  authDomain: "matjari-store.firebaseapp.com",
  projectId: "matjari-store",
  storageBucket: "matjari-store.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
};
```

---

## ✅ الخطوة 4: نسخ البيانات إلى السكريبت

1. افتح ملف **`script.js`** في محررك
2. ابحث عن هذه الكلمات (حول السطر 300):

```javascript
const FIREBASE_CONFIG = {
    apiKey: "YOUR_API_KEY_HERE",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

3. **استبدل** كل قيمة بالقيم الفعلية من Firebase:

#### مثال عملي:

**قبل:**
```javascript
const FIREBASE_CONFIG = {
    apiKey: "YOUR_API_KEY_HERE",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

**بعد:**
```javascript
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyD1234567890abcdefghijklmnopqrst",
    authDomain: "matjari-store.firebaseapp.com",
    projectId: "matjari-store",
    storageBucket: "matjari-store.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdef1234567890"
};
```

---

## ✅ الخطوة 5: إعداد قاعدة بيانات Firestore

1. في Firebase Console، اختر **"Firestore Database"** من القائمة اليسرى
2. اضغط **"إنشاء قاعدة بيانات"** (Create database)
3. اختر **"وضع البدء"** (Start in test mode) - يسمح بالقراءة والكتابة
4. اختر **"المنطقة"** - اختر الأقرب (مثال: europe-west1)
5. اضغط **"إنشاء"** (Create)

---

## ✅ الخطوة 6: اختبار الاتصال

بعد تحديث البيانات:

1. احفظ ملف `script.js`
2. افتح الصفحة في المتصفح (اضغط F5 لإعادة التحميل)
3. افتح **Developer Console** (اضغط F12)
4. انتقل إلى تبويب **Console**
5. يجب أن تشوف رسالة خضراء:
   ```
   ✅ Firebase initialized successfully!
   ```

---

## ✅ الخطوة 7: اختبار إضافة منتج

1. اضغط على زر **+** في الصفحة
2. ملأ بيانات المنتج:
   - الاسم: "تلفاز سمارت"
   - الفئة: "الكترونيات"
   - السعر: "2000"
   - الصورة: أي رابط صورة
   - الوصف والمواصفات
3. اضغط **"حفظ المنتج"** (حفظ المنتج)
4. شوف Console - يجب تشوف:
   ```
   ✅ Product saved to Firebase: abc123xyz
   ✅ Product saved to localStorage
   ```

---

## 🔒 تأمين قاعدة البيانات (اختياري ولاحقاً)

بعد الاختبار، غير الأمان من "test mode" إلى الإنتاج:

1. في Firestore، اختر **"القواعس"** (Rules)
2. استبدل بهذا:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // السماح بالقراءة للجميع، الكتابة يحتاج تحقق
    match /products/{document=**} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if request.auth.uid == resource.data.userId;
    }
  }
}
```

3. اضغط **"نشر"** (Publish)

---

## 🆘 استكشاف الأخطاء

### مشكلة: "Firebase not configured - Demo mode active"
**الحل:** تأكد من استبدال جميع قيم "YOUR_..." بالقيم الفعلية

### مشكلة: لا تظهر الرسالة "Firebase initialized successfully"
**الحل:** 
1. افتح Console (F12)
2. تأكد من عدم وجود أخطاء حمراء
3. تحقق من رابط صورة الإنترنت

### مشكلة: لا يتم حفظ المنتج في Firebase
**الحل:**
1. تأكد من إعداد Firestore (الخطوة 5)
2. افتح Firestore وشوف هل في مجموعة "products" جديدة

---

## ✨ الآن يعمل:

✅ الفورم يحفظ المنتجات محلياً (localStorage)  
✅ Firebase يحفظ المنتجات أيضاً  
✅ المنتجات تظهر فوراً على الصفحة  
✅ المنتجات تبقى بعد إعادة التحميل  

---

## 📞 ملخص البيانات التي تحتاجها:

من Firebase Console، نسخ هذه 6 قيم:

| الاسم | الموقع |
|-------|--------|
| `apiKey` | في Project Settings |
| `authDomain` | في Project Settings |
| `projectId` | في Project Settings |
| `storageBucket` | في Project Settings |
| `messagingSenderId` | في Project Settings |
| `appId` | في Project Settings |

كل واحدة من هذه القيم طويلة وتحتوي على أحرف وأرقام - **انسخها بالضبط** بدون تغيير.

---

**تم! 🎉 بعد إتمام هذه الخطوات، ستعمل كل من localStorage و Firebase معاً!**
