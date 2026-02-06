// Firebase Configuration Example
// Copy this file and replace the values with your actual Firebase project credentials
// Then update js/auth.js with these values

const firebaseConfig = {
    // Your Firebase API Key
    apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",

    // Your Firebase Auth Domain
    authDomain: "your-project-id.firebaseapp.com",

    // Your Firebase Project ID
    projectId: "your-project-id",

    // Your Firebase Storage Bucket
    storageBucket: "your-project-id.appspot.com",

    // Your Firebase Messaging Sender ID
    messagingSenderId: "123456789012",

    // Your Firebase App ID
    appId: "1:123456789012:web:abcdef1234567890abcdef"
};

// How to get these values:
// 1. Go to Firebase Console: https://console.firebase.google.com/
// 2. Select your project
// 3. Click the gear icon (Project Settings)
// 4. Scroll down to "Your apps"
// 5. Click on the web app icon (</>)
// 6. If you haven't registered an app yet, click "Add app" and follow the wizard
// 7. Copy the configuration values from the SDK setup code

// Once you have your configuration:
// 1. Open js/auth.js
// 2. Find the firebaseConfig object (around line 2-8)
// 3. Replace the placeholder values with your actual values
// 4. Save the file

// IMPORTANT: Never commit your actual Firebase configuration to a public repository!
