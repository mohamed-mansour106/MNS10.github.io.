# Setup Checklist

Use this checklist to ensure you've completed all necessary setup steps.

## Firebase Setup

### 1. Create Firebase Project
- [ ] Go to [Firebase Console](https://console.firebase.google.com/)
- [ ] Create a new project
- [ ] Note your project name and ID

### 2. Enable Authentication
- [ ] Navigate to Authentication section
- [ ] Click "Get started"
- [ ] Enable Email/Password provider
- [ ] Enable Google provider
- [ ] Add support email for Google provider

### 3. Create Firestore Database
- [ ] Navigate to Firestore Database
- [ ] Click "Create database"
- [ ] Choose production mode
- [ ] Select closest region
- [ ] Database created successfully

### 4. Set Security Rules
- [ ] Copy security rules from README.md
- [ ] Paste into Firestore Rules tab
- [ ] Click "Publish"
- [ ] Rules published successfully

### 5. Get Firebase Configuration
- [ ] Go to Project Settings
- [ ] Scroll to "Your apps"
- [ ] Click Web app icon (</>)
- [ ] Register app (if not already done)
- [ ] Copy configuration object

### 6. Update Project Files
- [ ] Open `js/auth.js`
- [ ] Replace `firebaseConfig` with your actual values
- [ ] Save the file

## Analytics Setup (Optional)

### Google Analytics
- [ ] Create Google Analytics account
- [ ] Set up new property
- [ ] Get Measurement ID (G-XXXXXXXXXX)
- [ ] Update `index.html` with your ID
- [ ] Test tracking is working

### Microsoft Clarity
- [ ] Create Microsoft Clarity account
- [ ] Add new project
- [ ] Get Project ID
- [ ] Update `index.html` with your ID
- [ ] Test tracking is working

## Local Testing

- [ ] Start local server (python, node, or VS Code Live Server)
- [ ] Open browser to localhost
- [ ] Test user registration
- [ ] Test login with email/password
- [ ] Test Google sign-in
- [ ] Test asking a question
- [ ] Test posting an answer
- [ ] Test search functionality
- [ ] Test filter options
- [ ] Test profile page
- [ ] Test logout

## Admin Features

- [ ] Register a test admin user
- [ ] Go to Firebase Console > Firestore
- [ ] Find user in `users` collection
- [ ] Change `role` field to "admin"
- [ ] Test admin panel access at `/admin.html`
- [ ] Test deleting questions as admin
- [ ] Test deleting answers as admin

## Deployment

### Choose Hosting Platform
- [ ] Firebase Hosting
- [ ] Netlify
- [ ] Vercel
- [ ] GitHub Pages
- [ ] Other: ___________

### Deploy
- [ ] Follow deployment instructions for chosen platform
- [ ] Update Firebase Auth authorized domains (if needed)
- [ ] Test production site
- [ ] Verify all features work in production

## Post-Deployment

- [ ] Share site URL with team/community
- [ ] Monitor Firebase usage
- [ ] Check analytics data
- [ ] Gather user feedback
- [ ] Plan future improvements

## Security Checklist

- [ ] Firebase security rules are properly configured
- [ ] Firebase configuration is not exposed in public repository (if using Git)
- [ ] Test that unauthenticated users cannot post questions/answers
- [ ] Test that users can only delete their own content
- [ ] Test that admin can delete any content
- [ ] Review and understand Firebase security best practices

---

**Need Help?**
- Check README.md for detailed instructions
- Review Firebase documentation
- Check browser console for errors
- Test with different browsers

**All Done?** 🎉
Your Well Testing Community platform is ready to use!
