// app.js (Modular Firebase version)

import { auth } from './firebase.js';
import { 
  getCurrentUser,
  getQuestionsRealtime,
  createQuestion,
  getQuestionById,
  deleteQuestion,
  createAnswer,
  getAnswersRealtime,
  deleteAnswer,
  toggleLikeAnswer,
  getUserQuestions,
  getUserAnswers,
  getUserData,
  formatDate,
  formatSimpleDate
} from './firestore.js';

let questionsUnsubscribe = null;
let answersUnsubscribe = null;
let allQuestionsCache = [];

// Initialize the appropriate page
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    const page = path.substring(path.lastIndexOf('/') + 1);

    switch (page) {
        case 'SWT-Community.html':
        case '':
            initHomePage();
            break;
        case 'ask.html':
            initAskPage();
            break;
        case 'question.html':
            initQuestionPage();
            break;
        case 'profile.html':
            initProfilePage();
            break;
    }
});

// =================================
// Home Page
// =================================
function initHomePage() {
    const loadingIndicator = document.getElementById('loadingIndicator');
    const questionsContainer = document.getElementById('questionsContainer');
    const emptyState = document.getElementById('emptyState');
    const searchInput = document.getElementById('searchInput');
    const filterSelect = document.getElementById('filterSelect');

    questionsUnsubscribe = getQuestionsRealtime((questions) => {
        allQuestionsCache = questions;
        displayQuestions(questions);
    });

    function displayQuestions(questions) {
        loadingIndicator.style.display = 'none';

        if (questions.length === 0) {
            questionsContainer.style.display = 'none';
            emptyState.style.display = 'block';
        } else {
            questionsContainer.style.display = 'block';
            emptyState.style.display = 'none';
            renderQuestions(questions);
        }
    }

    function renderQuestions(questions) {
        questionsContainer.innerHTML = questions.map(q => `
            <div class="question-card">
                <h3 class="question-card-title">
                    <a href="question.html?id=${q.id}">${escapeHtml(q.title)}</a>
                </h3>
                <p class="question-card-description">${escapeHtml(q.description)}</p>
                <div class="question-card-footer">
                    <div class="question-meta">
                        <span class="meta-item">Asked by <strong>${escapeHtml(q.authorName)}</strong></span>
                        <span class="meta-item">${formatDate(q.createdAt)}</span>
                    </div>
                    <span class="answers-badge">${q.answerCount || 0} ${(q.answerCount || 0) === 1 ? 'answer' : 'answers'}</span>
                </div>
            </div>
        `).join('');
    }

    // Search and filter
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                const term = e.target.value.trim().toLowerCase();
                applyFilter(term ? allQuestionsCache.filter(q =>
                    q.title.toLowerCase().includes(term) ||
                    q.description.toLowerCase().includes(term)
                ) : allQuestionsCache);
            }, 300);
        });
    }

    if (filterSelect) {
        filterSelect.addEventListener('change', () => {
            const term = searchInput.value.trim().toLowerCase();
            let filtered = term ? allQuestionsCache.filter(q =>
                q.title.toLowerCase().includes(term) ||
                q.description.toLowerCase().includes(term)
            ) : allQuestionsCache;
            applyFilter(filtered);
        });
    }

    function applyFilter(questions) {
        const filter = filterSelect.value;
        let sorted = [...questions];
        if (filter === 'newest') {
            sorted.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
        } else if (filter === 'most-answered') {
            sorted.sort((a, b) => (b.answerCount || 0) - (a.answerCount || 0));
        }
        displayQuestions(sorted);
    }
}

// =================================
// Ask Question Page
// =================================
function initAskPage() {
    const authWarning = document.getElementById('authWarning');
    const askForm = document.getElementById('askQuestionForm');

    auth.onAuthStateChanged(user => {
        if (user) {
            authWarning.style.display = 'none';
            askForm.style.display = 'block';
        } else {
            authWarning.style.display = 'block';
            askForm.style.display = 'none';
        }
    });

    if (askForm) {
        askForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (!getCurrentUser()) {
                alert('Please login to ask a question');
                window.location.href = 'login.html';
                return;
            }

            const title = document.getElementById('questionTitle').value.trim();
            const description = document.getElementById('questionDescription').value.trim();
            const submitBtn = document.getElementById('submitQuestionBtn');
            const submitBtnText = document.getElementById('submitBtnText');
            const submitBtnSpinner = document.getElementById('submitBtnSpinner');
            const askError = document.getElementById('askError');
            const askSuccess = document.getElementById('askSuccess');

            submitBtn.disabled = true;
            submitBtnText.style.display = 'none';
            submitBtnSpinner.style.display = 'inline-block';
            askError.style.display = 'none';
            askSuccess.style.display = 'none';

            const result = await createQuestion(title, description);

            if (result.success) {
                askSuccess.textContent = 'Question posted successfully! Redirecting...';
                askSuccess.style.display = 'block';
                setTimeout(() => {
                    window.location.href = `question.html?id=${result.questionId}`;
                }, 1500);
            } else {
                askError.textContent = result.error;
                askError.style.display = 'block';
                submitBtn.disabled = false;
                submitBtnText.style.display = 'inline';
                submitBtnSpinner.style.display = 'none';
            }
        });
    }
}

// =================================
// Question Detail Page
// =================================
function initQuestionPage() {
    const questionId = new URLSearchParams(window.location.search).get('id');
    if (!questionId) {
        alert('Question not found');
        window.location.href = 'SWT-Community.html';
        return;
    }

    const questionLoadingIndicator = document.getElementById('questionLoadingIndicator');
    const questionContent = document.getElementById('questionContent');
    const answerAuthWarning = document.getElementById('answerAuthWarning');
    const answerForm = document.getElementById('answerForm');

    auth.onAuthStateChanged(user => {
        if (user) {
            answerAuthWarning.style.display = 'none';
            answerForm.style.display = 'block';
        } else {
            answerAuthWarning.style.display = 'block';
            answerForm.style.display = 'none';
        }
    });

    loadQuestion(questionId);
    loadAnswers(questionId);

    if (answerForm) {
        answerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (!getCurrentUser()) {
                alert('Please login to post an answer');
                window.location.href = 'login.html';
                return;
            }

            const content = document.getElementById('answerContent').value.trim();
            const submitBtn = document.getElementById('submitAnswerBtn');
            const answerBtnText = document.getElementById('answerBtnText');
            const answerBtnSpinner = document.getElementById('answerBtnSpinner');
            const answerError = document.getElementById('answerError');

            submitBtn.disabled = true;
            answerBtnText.style.display = 'none';
            answerBtnSpinner.style.display = 'inline-block';
            answerError.style.display = 'none';

            const result = await createAnswer(questionId, content);

            if (result.success) {
                document.getElementById('answerContent').value = '';
                submitBtn.disabled = false;
                answerBtnText.style.display = 'inline';
                answerBtnSpinner.style.display = 'none';
            } else {
                answerError.textContent = result.error;
                answerError.style.display = 'block';
                submitBtn.disabled = false;
                answerBtnText.style.display = 'inline';
                answerBtnSpinner.style.display = 'none';
            }
        });
    }

    async function loadQuestion(id) {
        const result = await getQuestionById(id);
        questionLoadingIndicator.style.display = 'none';
        if (result.success) {
            questionContent.style.display = 'block';
            const question = result.question;
            document.getElementById('questionDetailTitle').textContent = question.title;
            document.getElementById('questionAuthor').textContent = question.authorName;
            document.getElementById('questionDate').textContent = formatDate(question.createdAt);
            document.getElementById('questionDetailBody').textContent = question.description;

            const currentUser = getCurrentUser();
            const deleteBtn = document.getElementById('deleteQuestionBtn');
            if (currentUser && question.authorId === currentUser.uid) {
                deleteBtn.style.display = 'block';
                deleteBtn.onclick = async () => {
                    if (confirm('Are you sure you want to delete this question?')) {
                        const res = await deleteQuestion(id);
                        if (res.success) window.location.href = 'SWT-Community.html';
                        else alert(res.error);
                    }
                };
            }

            document.title = question.title + ' - Well Testing Community';
        } else {
            questionContent.innerHTML = '<div class="empty-state"><h3>Question not found</h3><a href="index.html" class="btn btn-primary">Back to Home</a></div>';
            questionContent.style.display = 'block';
        }
    }

    function loadAnswers(questionId) {
        answersUnsubscribe = getAnswersRealtime(questionId, (answers) => {
            const answersContainer = document.getElementById('answersContainer');
            const answersCount = document.getElementById('answersCount');
            const noAnswers = document.getElementById('noAnswers');

            answersCount.textContent = answers.length;

            if (answers.length === 0) {
                answersContainer.innerHTML = '';
                noAnswers.style.display = 'block';
            } else {
                noAnswers.style.display = 'none';
                renderAnswers(answers);
            }
        });
    }

    function renderAnswers(answers) {
        const answersContainer = document.getElementById('answersContainer');
        const currentUser = getCurrentUser();

        answersContainer.innerHTML = answers.map(a => {
            const liked = currentUser && a.likedBy?.includes(currentUser.uid);
            const canDelete = currentUser && a.authorId === currentUser.uid;
            return `
                <div class="answer-card">
                    <div class="answer-header">
                        <div class="question-meta">
                            <span class="meta-item">Answered by <strong>${escapeHtml(a.authorName)}</strong></span>
                            <span class="meta-item">${formatDate(a.createdAt)}</span>
                        </div>
                        <div class="answer-actions">
                            ${currentUser ? `<button class="like-btn ${liked ? 'liked' : ''}" onclick="handleLikeAnswer('${a.id}')">${liked ? '❤️' : '🤍'} ${a.likes || 0}</button>` : `<span class="like-btn">🤍 ${a.likes || 0}</span>`}
                            ${canDelete ? `<button class="btn btn-sm btn-danger" onclick="handleDeleteAnswer('${a.id}','${questionId}')">Delete</button>` : ''}
                        </div>
                    </div>
                    <div class="answer-content">${escapeHtml(a.content)}</div>
                </div>
            `;
        }).join('');
    }
}

// =================================
// Profile Page
// =================================
function initProfilePage() {
    const profileLoadingIndicator = document.getElementById('profileLoadingIndicator');
    const profileContent = document.getElementById('profileContent');

    auth.onAuthStateChanged(async user => {
        if (!user) return window.location.href = 'login.html';

        profileLoadingIndicator.style.display = 'none';
        profileContent.style.display = 'block';

        document.getElementById('profileInitial').textContent = (user.displayName || user.email).charAt(0).toUpperCase();
        document.getElementById('profileName').textContent = user.displayName || user.email;
        document.getElementById('profileEmail').textContent = user.email;

        const userDataResult = await getUserData(user.uid);
        if (userDataResult.success) {
            const userData = userDataResult.userData;
            document.getElementById('profileRole').textContent = userData.role === 'admin' ? 'Admin' : 'User';
            document.getElementById('memberSince').textContent = formatSimpleDate(userData.createdAt);
        }

        loadUserQuestions(user.uid);
        loadUserAnswers(user.uid);
    });

    async function loadUserQuestions(userId) {
        const container = document.getElementById('userQuestionsContainer');
        const loading = document.getElementById('userQuestionsLoading');
        const noQuestions = document.getElementById('noQuestions');

        const result = await getUserQuestions(userId);
        loading.style.display = 'none';
        if (result.success) {
            const questions = result;
            if (!questions.length) noQuestions.style.display = 'block';
            else container.innerHTML = questions.map(q => `
                <div class="question-card">
                    <h3 class="question-card-title"><a href="question.html?id=${q.id}">${escapeHtml(q.title)}</a></h3>
                    <div class="question-meta"><span>${formatDate(q.createdAt)}</span> • <span>${q.answerCount || 0} answers</span></div>
                </div>
            `).join('');
        }
    }

    async function loadUserAnswers(userId) {
        const container = document.getElementById('userAnswersContainer');
        const loading = document.getElementById('userAnswersLoading');
        const noAnswers = document.getElementById('noAnswers');

        const result = await getUserAnswers(userId);
        loading.style.display = 'none';
        if (result.success) {
            const answers = result;
            if (!answers.length) noAnswers.style.display = 'block';
            else container.innerHTML = answers.map(a => `
                <div class="answer-card">
                    <div class="answer-header">
                        <div class="question-meta">
                            Answered on <a href="question.html?id=${a.questionId}">${escapeHtml(a.questionTitle)}</a> • ${formatDate(a.createdAt)}
                        </div>
                    </div>
                    <div class="answer-content">${escapeHtml(a.content.substring(0,200))}${a.content.length>200?'...':''}</div>
                </div>
            `).join('');
        }
    }
}

// =================================
// Global handlers
// =================================
window.handleLikeAnswer = async (answerId) => {
    const res = await toggleLikeAnswer(answerId);
    if (!res.success) alert(res.error);
};

window.handleDeleteAnswer = async (answerId, questionId) => {
    if (confirm('Are you sure you want to delete this answer?')) {
        const res = await deleteAnswer(answerId, questionId);
        if (!res.success) alert(res.error);
    }
};

// Escape HTML utility
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Cleanup
window.addEventListener('beforeunload', () => {
    if (questionsUnsubscribe) questionsUnsubscribe();
    if (answersUnsubscribe) answersUnsubscribe();
});
