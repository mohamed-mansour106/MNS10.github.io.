// Firestore Database Operations

// Create a new question
async function createQuestion(title, description) {
    try {
        const user = getCurrentUser();
        if (!user) {
            return { success: false, error: 'User not authenticated' };
        }

        const questionData = {
            title: title,
            description: description,
            authorName: user.displayName || user.email,
            authorId: user.uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            answerCount: 0
        };

        const docRef = await db.collection('questions').add(questionData);
        console.log('Question created with ID:', docRef.id);

        return { success: true, questionId: docRef.id };
    } catch (error) {
        console.error('Error creating question:', error);
        return { success: false, error: error.message };
    }
}

// Get all questions with real-time updates
function getQuestionsRealtime(callback) {
    return db.collection('questions')
        .orderBy('createdAt', 'desc')
        .onSnapshot((snapshot) => {
            const questions = [];
            snapshot.forEach((doc) => {
                questions.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
            callback(questions);
        }, (error) => {
            console.error('Error getting questions:', error);
            callback([]);
        });
}

// Get single question by ID
async function getQuestionById(questionId) {
    try {
        const doc = await db.collection('questions').doc(questionId).get();
        if (doc.exists) {
            return {
                success: true,
                question: {
                    id: doc.id,
                    ...doc.data()
                }
            };
        } else {
            return { success: false, error: 'Question not found' };
        }
    } catch (error) {
        console.error('Error getting question:', error);
        return { success: false, error: error.message };
    }
}

// Delete a question
async function deleteQuestion(questionId) {
    try {
        const user = getCurrentUser();
        if (!user) {
            return { success: false, error: 'User not authenticated' };
        }

        const questionDoc = await db.collection('questions').doc(questionId).get();
        if (!questionDoc.exists) {
            return { success: false, error: 'Question not found' };
        }

        const questionData = questionDoc.data();
        const userDoc = await db.collection('users').doc(user.uid).get();
        const userRole = userDoc.exists ? userDoc.data().role : 'user';

        if (questionData.authorId !== user.uid && userRole !== 'admin') {
            return { success: false, error: 'Not authorized to delete this question' };
        }

        const answersSnapshot = await db.collection('answers')
            .where('questionId', '==', questionId)
            .get();

        const batch = db.batch();
        answersSnapshot.forEach((doc) => {
            batch.delete(doc.ref);
        });
        batch.delete(db.collection('questions').doc(questionId));

        await batch.commit();
        console.log('Question and answers deleted:', questionId);

        return { success: true };
    } catch (error) {
        console.error('Error deleting question:', error);
        return { success: false, error: error.message };
    }
}

// Create an answer
async function createAnswer(questionId, content) {
    try {
        const user = getCurrentUser();
        if (!user) {
            return { success: false, error: 'User not authenticated' };
        }

        const answerData = {
            questionId: questionId,
            content: content,
            authorName: user.displayName || user.email,
            authorId: user.uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            likes: 0,
            likedBy: []
        };

        const docRef = await db.collection('answers').add(answerData);

        await db.collection('questions').doc(questionId).update({
            answerCount: firebase.firestore.FieldValue.increment(1)
        });

        console.log('Answer created with ID:', docRef.id);

        return { success: true, answerId: docRef.id };
    } catch (error) {
        console.error('Error creating answer:', error);
        return { success: false, error: error.message };
    }
}

// Get answers for a question with real-time updates
function getAnswersRealtime(questionId, callback) {
    return db.collection('answers')
        .where('questionId', '==', questionId)
        .orderBy('createdAt', 'asc')
        .onSnapshot((snapshot) => {
            const answers = [];
            snapshot.forEach((doc) => {
                answers.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
            callback(answers);
        }, (error) => {
            console.error('Error getting answers:', error);
            callback([]);
        });
}

// Delete an answer
async function deleteAnswer(answerId, questionId) {
    try {
        const user = getCurrentUser();
        if (!user) {
            return { success: false, error: 'User not authenticated' };
        }

        const answerDoc = await db.collection('answers').doc(answerId).get();
        if (!answerDoc.exists) {
            return { success: false, error: 'Answer not found' };
        }

        const answerData = answerDoc.data();
        const userDoc = await db.collection('users').doc(user.uid).get();
        const userRole = userDoc.exists ? userDoc.data().role : 'user';

        if (answerData.authorId !== user.uid && userRole !== 'admin') {
            return { success: false, error: 'Not authorized to delete this answer' };
        }

        await db.collection('answers').doc(answerId).delete();

        await db.collection('questions').doc(questionId).update({
            answerCount: firebase.firestore.FieldValue.increment(-1)
        });

        console.log('Answer deleted:', answerId);

        return { success: true };
    } catch (error) {
        console.error('Error deleting answer:', error);
        return { success: false, error: error.message };
    }
}

// Toggle like on an answer
async function toggleLikeAnswer(answerId) {
    try {
        const user = getCurrentUser();
        if (!user) {
            return { success: false, error: 'User not authenticated' };
        }

        const answerRef = db.collection('answers').doc(answerId);
        const answerDoc = await answerRef.get();

        if (!answerDoc.exists) {
            return { success: false, error: 'Answer not found' };
        }

        const answerData = answerDoc.data();
        const likedBy = answerData.likedBy || [];
        const hasLiked = likedBy.includes(user.uid);

        if (hasLiked) {
            await answerRef.update({
                likes: firebase.firestore.FieldValue.increment(-1),
                likedBy: firebase.firestore.FieldValue.arrayRemove(user.uid)
            });
        } else {
            await answerRef.update({
                likes: firebase.firestore.FieldValue.increment(1),
                likedBy: firebase.firestore.FieldValue.arrayUnion(user.uid)
            });
        }

        return { success: true, liked: !hasLiked };
    } catch (error) {
        console.error('Error toggling like:', error);
        return { success: false, error: error.message };
    }
}

// Get user's questions
async function getUserQuestions(userId) {
    try {
        const snapshot = await db.collection('questions')
            .where('authorId', '==', userId)
            .orderBy('createdAt', 'desc')
            .get();

        const questions = [];
        snapshot.forEach((doc) => {
            questions.push({
                id: doc.id,
                ...doc.data()
            });
        });

        return { success: true, questions };
    } catch (error) {
        console.error('Error getting user questions:', error);
        return { success: false, error: error.message };
    }
}

// Get user's answers
async function getUserAnswers(userId) {
    try {
        const snapshot = await db.collection('answers')
            .where('authorId', '==', userId)
            .orderBy('createdAt', 'desc')
            .get();

        const answers = [];
        for (const doc of snapshot.docs) {
            const answerData = doc.data();
            const questionDoc = await db.collection('questions').doc(answerData.questionId).get();
            answers.push({
                id: doc.id,
                ...answerData,
                questionTitle: questionDoc.exists ? questionDoc.data().title : 'Deleted Question'
            });
        }

        return { success: true, answers };
    } catch (error) {
        console.error('Error getting user answers:', error);
        return { success: false, error: error.message };
    }
}

// Get user data
async function getUserData(userId) {
    try {
        const doc = await db.collection('users').doc(userId).get();
        if (doc.exists) {
            return { success: true, userData: doc.data() };
        } else {
            return { success: false, error: 'User not found' };
        }
    } catch (error) {
        console.error('Error getting user data:', error);
        return { success: false, error: error.message };
    }
}

// Search questions
async function searchQuestions(searchTerm) {
    try {
        const snapshot = await db.collection('questions')
            .orderBy('createdAt', 'desc')
            .get();

        const questions = [];
        const lowerSearchTerm = searchTerm.toLowerCase();

        snapshot.forEach((doc) => {
            const data = doc.data();
            const titleMatch = data.title.toLowerCase().includes(lowerSearchTerm);
            const descMatch = data.description.toLowerCase().includes(lowerSearchTerm);

            if (titleMatch || descMatch) {
                questions.push({
                    id: doc.id,
                    ...data
                });
            }
        });

        return { success: true, questions };
    } catch (error) {
        console.error('Error searching questions:', error);
        return { success: false, error: error.message };
    }
}

// Format timestamp to readable date
function formatDate(timestamp) {
    if (!timestamp) return 'Just now';

    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const now = new Date();
    const diff = now - date;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (seconds < 60) return 'Just now';
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (days < 30) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (months < 12) return `${months} month${months > 1 ? 's' : ''} ago`;
    return `${years} year${years > 1 ? 's' : ''} ago`;
}

// Format date to simple string
function formatSimpleDate(timestamp) {
    if (!timestamp) return 'N/A';

    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}
