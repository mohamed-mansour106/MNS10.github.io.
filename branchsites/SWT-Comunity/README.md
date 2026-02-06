# Well Testing Community Platform

A modern, professional Q&A community website for Well Testing engineers and technicians, built with vanilla HTML, CSS, and JavaScript.

## Features

### Authentication
- Email & Password signup/login
- Google Sign-In integration
- Secure user authentication via Firebase Auth
- Protected routes for posting questions and answers

### Community Features
- Ask questions with title and detailed description
- Browse latest questions from the community
- View full question details with all answers
- Post answers to help other community members
- Real-time updates using Firestore
- Like/upvote answers
- Delete your own questions and answers
- View answer count per question

### Search & Filtering
- Search questions by keyword
- Filter questions by:
  - Newest First
  - Most Answered

### User Profile
- View your profile statistics
- See all your questions
- See all your answers
- Track member since date

### Admin Features
- Admin users can delete any inappropriate questions or answers
- Role-based access control

### Analytics
- Google Analytics integration
- Microsoft Clarity integration

## Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **Hosting**: Any static hosting (Netlify, Vercel, Firebase Hosting, etc.)

## Project Structure

```
well-testing-community/
├── index.html              # Home page with questions list
├── login.html              # Login/Register page
├── ask.html                # Ask a new question page
├── question.html           # Question detail page with answers
├── profile.html            # User profile page
├── css/
│   └── style.css          # All styles
├── js/
│   ├── auth.js            # Authentication logic
│   ├── firestore.js       # Database operations
│   └── app.js             # Main application logic
└── README.md              # This file
```

## Setup Instructions

### 1. Firebase Setup

#### Create a Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" and follow the setup wizard
3. Enter project name: "Well Testing Community" (or your choice)
4. Disable Google Analytics if not needed, or enable it and select account
5. Click "Create project"

#### Enable Authentication
1. In Firebase Console, go to **Build > Authentication**
2. Click "Get started"
3. Enable **Email/Password** provider:
   - Click on "Email/Password"
   - Enable the first toggle
   - Click "Save"
4. Enable **Google** provider:
   - Click on "Google"
   - Enable the toggle
   - Enter support email
   - Click "Save"

#### Create Firestore Database
1. In Firebase Console, go to **Build > Firestore Database**
2. Click "Create database"
3. Choose **Start in production mode** (we'll add security rules)
4. Select a Cloud Firestore location (choose closest to your users)
5. Click "Enable"

#### Set Firestore Security Rules
1. In Firestore Database, go to the **Rules** tab
2. Replace the rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Users collection
    match /users/{userId} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == userId;
    }

    // Questions collection
    match /questions/{questionId} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update: if request.auth != null && request.auth.uid == resource.data.authorId;
      allow delete: if request.auth != null &&
        (request.auth.uid == resource.data.authorId ||
         get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin');
    }

    // Answers collection
    match /answers/{answerId} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update: if request.auth != null;
      allow delete: if request.auth != null &&
        (request.auth.uid == resource.data.authorId ||
         get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin');
    }
  }
}
```

3. Click "Publish"

#### Get Firebase Configuration
1. In Firebase Console, go to **Project Settings** (gear icon)
2. Scroll down to "Your apps" section
3. Click the **Web** icon (</>)
4. Register app name: "Well Testing Community Web"
5. Click "Register app"
6. Copy the Firebase configuration object

#### Add Configuration to Project
1. Open `js/auth.js`
2. Replace the `firebaseConfig` object (around line 2-8) with your copied configuration:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_ACTUAL_API_KEY",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abc123"
};
```

### 2. Analytics Setup (Optional)

#### Google Analytics
1. Create a [Google Analytics](https://analytics.google.com/) account
2. Set up a new property for your website
3. Get your Measurement ID (format: G-XXXXXXXXXX)
4. Open `index.html`
5. Replace `YOUR_GA_ID` with your actual Measurement ID in two places

#### Microsoft Clarity
1. Create a [Microsoft Clarity](https://clarity.microsoft.com/) account
2. Add a new project
3. Get your Project ID
4. Open `index.html`
5. Replace `YOUR_CLARITY_ID` with your actual Project ID

### 3. Running the Application

#### Local Development
You can use any local server. Here are some options:

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Then open http://localhost:8000
```

**Using Node.js (http-server):**
```bash
npm install -g http-server
http-server -p 8000
```

**Using VS Code Live Server:**
1. Install "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

#### Production Deployment

**Firebase Hosting:**
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

**Netlify:**
1. Drag and drop the project folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect your Git repository

**Vercel:**
```bash
npm install -g vercel
vercel
```

## Usage Guide

### For Users

1. **Registration/Login**
   - Click "Login" in navigation
   - Create account with email/password or use Google Sign-In
   - After login, you'll be redirected to the home page

2. **Asking Questions**
   - Click "Ask Question" in navigation
   - Enter a clear, specific title
   - Provide detailed description
   - Click "Post Question"

3. **Answering Questions**
   - Click on any question from the home page
   - Scroll to "Your Answer" section
   - Write your answer
   - Click "Post Answer"

4. **Search & Filter**
   - Use the search bar on home page to find questions
   - Use filter dropdown to sort by newest or most answered

5. **Profile**
   - Click "Profile" to view your statistics
   - See all your questions and answers
   - Switch between tabs to view different content

### For Admins

To make a user an admin:
1. Go to Firebase Console > Firestore Database
2. Find the user in the `users` collection
3. Edit their document and change `role` from `"user"` to `"admin"`
4. Admins can delete any questions or answers

## Customization

### Colors
Edit `css/style.css` and modify the CSS variables at the top:

```css
:root {
    --primary-color: #3b82f6;
    --secondary-color: #1e293b;
    --dark-bg: #0f172a;
    /* ... etc */
}
```

### Branding
- Replace the "W" logo in navigation (search for `.logo-icon`)
- Update the hero section text in `index.html`
- Modify footer content

## Security Best Practices

1. Never commit your Firebase configuration to public repositories
2. Always use Firebase security rules to protect your data
3. Validate user input on the client and server side
4. Use Firebase Authentication for user management
5. Regularly review and update Firebase security rules

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Questions not loading
- Check browser console for errors
- Verify Firebase configuration is correct
- Check Firestore security rules are published
- Ensure internet connection is stable

### Authentication not working
- Verify Email/Password and Google providers are enabled in Firebase Console
- Check Firebase configuration in `js/auth.js`
- Clear browser cache and try again

### Realtime updates not working
- Check browser console for Firestore errors
- Verify Firestore security rules allow read access
- Ensure Firebase SDK is loaded correctly

## License

This project is open source and available for educational and commercial use.

## Support

For issues, questions, or contributions, please open an issue on the repository.

---

Built with ❤️ for the Well Testing Community
