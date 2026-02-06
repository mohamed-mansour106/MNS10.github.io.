// Main Application Logic

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

// Home Page
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
        questionsContainer.innerHTML = questions.map(question => `
            <div class="question-card">
                <h3 class="question-card-title">
                    <a href="question.html?id=${question.id}">${escapeHtml(question.title)}</a>
                </h3>
                <p class="question-card-description">${escapeHtml(question.description)}</p>
                <div class="question-card-footer">
                    <div class="question-meta">
                        <span class="meta-item">Asked by <strong>${escapeHtml(question.authorName)}</strong></span>
                        <span class="meta-item">${formatDate(question.createdAt)}</span>
                    </div>
                    <span class="answers-badge">${question.answerCount || 0} ${(question.answerCount || 0) === 1 ? 'answer' : 'answers'}</span>
                </div>
            </div>
        `).join('');
    }

    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                const searchTerm = e.target.value.trim().toLowerCase();
                if (searchTerm) {
                    const filtered = allQuestionsCache.filter(q =>
                        q.title.toLowerCase().includes(searchTerm) ||
                        q.description.toLowerCase().includes(searchTerm)
                    );
                    applyFilter(filtered);
                } else {
                    applyFilter(allQuestionsCache);
                }
            }, 300);
        });
    }

    if (filterSelect) {
        filterSelect.addEventListener('change', (e) => {
            const searchTerm = searchInput.value.trim().toLowerCase();
            let filtered = allQuestionsCache;

            if (searchTerm) {
                filtered = filtered.filter(q =>
                    q.title.toLowerCase().includes(searchTerm) ||
                    q.description.toLowerCase().includes(searchTerm)
                );
            }

            applyFilter(filtered);
        });
    }

    function applyFilter(questions) {
        const filterValue = filterSelect.value;
        let sorted = [...questions];

        if (filterValue === 'newest') {
            sorted.sort((a, b) => {
                const timeA = a.createdAt?.seconds || 0;
                const timeB = b.createdAt?.seconds || 0;
                return timeB - timeA;
            });
        } else if (filterValue === 'most-answered') {
            sorted.sort((a, b) => (b.answerCount || 0) - (a.answerCount || 0));
        }

        displayQuestions(sorted);
    }
}

// Ask Question Page
function initAskPage() {
    const authWarning = document.getElementById('authWarning');
    const askForm = document.getElementById('askQuestionForm');

    auth.onAuthStateChanged((user) => {
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

            if (!isAuthenticated()) {
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

// Question Detail Page
function initQuestionPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const questionId = urlParams.get('id');

    if (!questionId) {
        alert('Question not found');
        window.location.href = 'index.html';
        return;
    }

    const questionLoadingIndicator = document.getElementById('questionLoadingIndicator');
    const questionContent = document.getElementById('questionContent');
    const answerAuthWarning = document.getElementById('answerAuthWarning');
    const answerForm = document.getElementById('answerForm');

    auth.onAuthStateChanged((user) => {
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

            if (!isAuthenticated()) {
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

    async function loadQuestion(questionId) {
        const result = await getQuestionById(questionId);

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
                deleteBtn.addEventListener('click', async () => {
                    if (confirm('Are you sure you want to delete this question?')) {
                        const result = await deleteQuestion(questionId);
                        if (result.success) {
                            alert('Question deleted successfully');
                            window.location.href = 'index.html';
                        } else {
                            alert('Error deleting question: ' + result.error);
                        }
                    }
                });
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

        answersContainer.innerHTML = answers.map(answer => {
            const hasLiked = currentUser && answer.likedBy && answer.likedBy.includes(currentUser.uid);
            const canDelete = currentUser && answer.authorId === currentUser.uid;

            return `
                <div class="answer-card">
                    <div class="answer-header">
                        <div class="question-meta">
                            <span class="meta-item">Answered by <strong>${escapeHtml(answer.authorName)}</strong></span>
                            <span class="meta-item">${formatDate(answer.createdAt)}</span>
                        </div>
                        <div class="answer-actions">
                            ${currentUser ? `
                                <button class="like-btn ${hasLiked ? 'liked' : ''}" onclick="handleLikeAnswer('${answer.id}')">
                                    ${hasLiked ? '❤️' : '🤍'} ${answer.likes || 0}
                                </button>
                            ` : `
                                <span class="like-btn">🤍 ${answer.likes || 0}</span>
                            `}
                            ${canDelete ? `
                                <button class="btn btn-sm btn-danger" onclick="handleDeleteAnswer('${answer.id}', '${questionId}')">Delete</button>
                            ` : ''}
                        </div>
                    </div>
                    <div class="answer-content">${escapeHtml(answer.content)}</div>
                </div>
            `;
        }).join('');
    }
}

// Profile Page
function initProfilePage() {
    const profileLoadingIndicator = document.getElementById('profileLoadingIndicator');
    const profileContent = document.getElementById('profileContent');

    auth.onAuthStateChanged(async (user) => {
        if (!user) {
            window.location.href = 'login.html';
            return;
        }

        profileLoadingIndicator.style.display = 'none';
        profileContent.style.display = 'block';

        const initial = (user.displayName || user.email).charAt(0).toUpperCase();
        document.getElementById('profileInitial').textContent = initial;
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

    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');

            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            document.getElementById(targetTab + 'Tab').classList.add('active');
        });
    });

    async function loadUserQuestions(userId) {
        const container = document.getElementById('userQuestionsContainer');
        const loading = document.getElementById('userQuestionsLoading');
        const noQuestions = document.getElementById('noQuestions');

        const result = await getUserQuestions(userId);
        loading.style.display = 'none';

        if (result.success) {
            const questions = result.questions;
            document.getElementById('questionsCount').textContent = questions.length;

            if (questions.length === 0) {
                noQuestions.style.display = 'block';
            } else {
                container.style.display = 'block';
                container.innerHTML = questions.map(q => `
                    <div class="question-card">
                        <h3 class="question-card-title">
                            <a href="question.html?id=${q.id}">${escapeHtml(q.title)}</a>
                        </h3>
                        <div class="question-meta">
                            <span class="meta-item">${formatDate(q.createdAt)}</span>
                            <span class="meta-item">${q.answerCount || 0} answers</span>
                        </div>
                    </div>
                `).join('');
            }
        }
    }

    async function loadUserAnswers(userId) {
        const container = document.getElementById('userAnswersContainer');
        const loading = document.getElementById('userAnswersLoading');
        const noAnswers = document.getElementById('noAnswers');

        const result = await getUserAnswers(userId);
        loading.style.display = 'none';

        if (result.success) {
            const answers = result.answers;
            document.getElementById('answersCount').textContent = answers.length;

            if (answers.length === 0) {
                noAnswers.style.display = 'block';
            } else {
                container.style.display = 'block';
                container.innerHTML = answers.map(a => `
                    <div class="answer-card">
                        <div class="answer-header">
                            <div class="question-meta">
                                <span class="meta-item">Answered on <strong><a href="question.html?id=${a.questionId}">${escapeHtml(a.questionTitle)}</a></strong></span>
                                <span class="meta-item">${formatDate(a.createdAt)}</span>
                            </div>
                        </div>
                        <div class="answer-content">${escapeHtml(a.content.substring(0, 200))}${a.content.length > 200 ? '...' : ''}</div>
                    </div>
                `).join('');
            }
        }
    }
}

// Global handler functions for inline event handlers
window.handleLikeAnswer = async function(answerId) {
    const result = await toggleLikeAnswer(answerId);
    if (!result.success) {
        alert('Error: ' + result.error);
    }
};

window.handleDeleteAnswer = async function(answerId, questionId) {
    if (confirm('Are you sure you want to delete this answer?')) {
        const result = await deleteAnswer(answerId, questionId);
        if (result.success) {
            console.log('Answer deleted successfully');
        } else {
            alert('Error deleting answer: ' + result.error);
        }
    }
};

// Utility function to escape HTML
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (questionsUnsubscribe) questionsUnsubscribe();
    if (answersUnsubscribe) answersUnsubscribe();
});
// auth-guard.js

firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    // مش مسجل دخول → رجعه login
    window.location.href = "login.html";
  } else {
    // مسجل دخول
    console.log("User logged in:", user.email);
  }
});
