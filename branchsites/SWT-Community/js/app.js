// js/app.js
// Main Application Logic (Firebase compat SDK)

let questionsUnsubscribe = null;
let answersUnsubscribe = null;
let allQuestionsCache = [];

// ====== Auth State Handler for Navbar ======
function syncNavAuth(user) {
  const profileNav = document.getElementById('profileNavLink');
  const loginNav = document.getElementById('loginNavLink');
  const logoutBtn = document.getElementById('logoutNavBtn');
  const mobileProfile = document.getElementById('mobileProfileLink');
  const mobileLogin = document.getElementById('mobileLoginLink');
  const mobileLogout = document.getElementById('mobileLogoutBtn');

  if (user) {
    if (profileNav) profileNav.style.display = 'inline-block';
    if (loginNav) loginNav.style.display = 'none';
    if (logoutBtn) logoutBtn.style.display = 'inline-block';
    if (mobileProfile) mobileProfile.style.display = 'block';
    if (mobileLogin) mobileLogin.style.display = 'none';
    if (mobileLogout) mobileLogout.style.display = 'block';
  } else {
    if (profileNav) profileNav.style.display = 'none';
    if (loginNav) loginNav.style.display = 'inline-block';
    if (logoutBtn) logoutBtn.style.display = 'none';
    if (mobileProfile) mobileProfile.style.display = 'none';
    if (mobileLogin) mobileLogin.style.display = 'block';
    if (mobileLogout) mobileLogout.style.display = 'none';
  }
}

function initAuthNav() {
  if (typeof auth !== 'undefined' && auth.onAuthStateChanged) {
    auth.onAuthStateChanged(syncNavAuth);
  } else {
    syncNavAuth(null);
  }

  const logoutBtn = document.getElementById('logoutNavBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
      if (typeof logout === 'function') {
        await logout();
      } else if (typeof auth !== 'undefined') {
        await auth.signOut();
        window.location.href = 'login.html';
      }
    });
  }

  const mobileLogout = document.getElementById('mobileLogoutBtn');
  if (mobileLogout) {
    mobileLogout.addEventListener('click', async () => {
      if (typeof logout === 'function') {
        await logout();
      } else if (typeof auth !== 'undefined') {
        await auth.signOut();
        window.location.href = 'login.html';
      }
    });
  }
}

// ====== Initialize Page ======
document.addEventListener('DOMContentLoaded', () => {
  initAuthNav();

  const path = window.location.pathname;
  const page = path.substring(path.lastIndexOf('/') + 1).toLowerCase();

  switch (page) {
    case 'index.html':
    case 'index.html':
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

// ====== Home Page ======
function initHomePage() {
  const loadingIndicator = document.getElementById('loadingIndicator');
  const questionsContainer = document.getElementById('questionsContainer');
  const emptyState = document.getElementById('emptyState');
  const searchInput = document.getElementById('searchInput');
  const filterSelect = document.getElementById('filterSelect');

  if (!questionsContainer || !loadingIndicator || !emptyState) return;

  questionsUnsubscribe = getQuestionsRealtime((questions) => {
    allQuestionsCache = questions || [];
    displayQuestions(questions || []);
  });

  function displayQuestions(questions) {
    loadingIndicator.style.display = 'none';

    if (!questions.length) {
      questionsContainer.style.display = 'none';
      emptyState.style.display = 'block';
      return;
    }

    emptyState.style.display = 'none';
    questionsContainer.style.display = 'block';
    renderQuestions(questions);
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

  function applyFilter(questions) {
    const filterValue = filterSelect ? filterSelect.value : 'newest';
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

  if (searchInput) {
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        const term = e.target.value.trim().toLowerCase();
        if (term) {
          const filtered = allQuestionsCache.filter(q =>
            (q.title || '').toLowerCase().includes(term) ||
            (q.description || '').toLowerCase().includes(term)
          );
          applyFilter(filtered);
        } else {
          applyFilter(allQuestionsCache);
        }
      }, 300);
    });
  }

  if (filterSelect) {
    filterSelect.addEventListener('change', () => {
      const term = searchInput ? searchInput.value.trim().toLowerCase() : '';
      let filtered = [...allQuestionsCache];
      if (term) {
        filtered = filtered.filter(q =>
          (q.title || '').toLowerCase().includes(term) ||
          (q.description || '').toLowerCase().includes(term)
        );
      }
      applyFilter(filtered);
    });
  }
}

// ====== Ask Page ======
function initAskPage() {
  const authWarning = document.getElementById('authWarning');
  const askForm = document.getElementById('askQuestionForm');

  if (typeof auth !== 'undefined' && auth.onAuthStateChanged) {
    auth.onAuthStateChanged((user) => {
      if (authWarning) authWarning.style.display = user ? 'none' : 'block';
      if (askForm) askForm.style.display = user ? 'block' : 'none';
    });
  }

  if (!askForm) return;

  askForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (typeof isAuthenticated === 'function' && !isAuthenticated()) {
      alert('Please login to ask a question');
      window.location.href = 'login.html';
      return;
    }

    const title = document.getElementById('questionTitle')?.value.trim();
    const description = document.getElementById('questionDescription')?.value.trim();
    const submitBtn = document.getElementById('submitQuestionBtn');
    const submitBtnText = document.getElementById('submitBtnText');
    const submitBtnSpinner = document.getElementById('submitBtnSpinner');
    const askError = document.getElementById('askError');
    const askSuccess = document.getElementById('askSuccess');

    if (!title || !description) {
      if (askError) {
        askError.textContent = 'Please fill all fields.';
        askError.style.display = 'block';
      }
      return;
    }

    if (submitBtn) submitBtn.disabled = true;
    if (submitBtnText) submitBtnText.style.display = 'none';
    if (submitBtnSpinner) submitBtnSpinner.style.display = 'inline-block';
    if (askError) askError.style.display = 'none';
    if (askSuccess) askSuccess.style.display = 'none';

    const result = await createQuestion(title, description);

    if (result.success) {
      if (askSuccess) {
        askSuccess.textContent = 'Question posted successfully! Redirecting...';
        askSuccess.style.display = 'block';
      }
      setTimeout(() => {
        window.location.href = `question.html?id=${result.questionId}`;
      }, 1200);
    } else {
      if (askError) {
        askError.textContent = result.error || 'Something went wrong.';
        askError.style.display = 'block';
      }
      if (submitBtn) submitBtn.disabled = false;
      if (submitBtnText) submitBtnText.style.display = 'inline';
      if (submitBtnSpinner) submitBtnSpinner.style.display = 'none';
    }
  });
}

// ====== Question Detail Page ======





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

  if (typeof auth !== 'undefined' && auth.onAuthStateChanged) {
    auth.onAuthStateChanged((user) => {
      if (answerAuthWarning) answerAuthWarning.style.display = user ? 'none' : 'block';
      if (answerForm) answerForm.style.display = user ? 'block' : 'none';
    });
  }

  loadQuestion(questionId);
  loadAnswers(questionId);

  if (answerForm) {
    answerForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (typeof isAuthenticated === 'function' && !isAuthenticated()) {
        alert('Please login to post an answer');
        window.location.href = 'login.html';
        return;
      }

      const content = document.getElementById('answerContent')?.value.trim();
      const submitBtn = document.getElementById('submitAnswerBtn');
      const answerBtnText = document.getElementById('answerBtnText');
      const answerBtnSpinner = document.getElementById('answerBtnSpinner');
      const answerError = document.getElementById('answerError');

      if (!content) {
        if (answerError) {
          answerError.textContent = 'Please enter an answer.';
          answerError.style.display = 'block';
        }
        return;
      }

      if (submitBtn) submitBtn.disabled = true;
      if (answerBtnText) answerBtnText.style.display = 'none';
      if (answerBtnSpinner) answerBtnSpinner.style.display = 'inline-block';
      if (answerError) answerError.style.display = 'none';

      const result = await createAnswer(questionId, content);

      if (result.success) {
        const answerField = document.getElementById('answerContent');
        if (answerField) answerField.value = '';
        if (submitBtn) submitBtn.disabled = false;
        if (answerBtnText) answerBtnText.style.display = 'inline';
        if (answerBtnSpinner) answerBtnSpinner.style.display = 'none';
      } else if (answerError) {
        answerError.textContent = result.error || 'Something went wrong.';
        answerError.style.display = 'block';
        if (submitBtn) submitBtn.disabled = false;
        if (answerBtnText) answerBtnText.style.display = 'inline';
        if (answerBtnSpinner) answerBtnSpinner.style.display = 'none';
      }
    });
  }

  async function loadQuestion(qId) {
    const result = await getQuestionById(qId);

    if (questionLoadingIndicator) questionLoadingIndicator.style.display = 'none';

    if (result.success) {
      if (questionContent) questionContent.style.display = 'block';
      const question = result.question;

      const title = document.getElementById('questionDetailTitle');
      const author = document.getElementById('questionAuthor');
      const date = document.getElementById('questionDate');
      const body = document.getElementById('questionDetailBody');
      if (title) title.textContent = question.title || '';
      if (author) author.textContent = question.authorName || '';
      if (date) date.textContent = formatDate(question.createdAt);
      if (body) body.textContent = question.description || '';

      const currentUser = typeof getCurrentUser === 'function' ? getCurrentUser() : null;
      const deleteBtn = document.getElementById('deleteQuestionBtn');
      if (deleteBtn && currentUser && question.authorId === currentUser.uid) {
        deleteBtn.style.display = 'block';
        deleteBtn.addEventListener('click', async () => {
          if (confirm('Are you sure you want to delete this question?')) {
            const deleteResult = await deleteQuestion(qId);
            if (deleteResult.success) {
              alert('Question deleted successfully');
              window.location.href = 'index.html';
            } else {
              alert('Error deleting question: ' + (deleteResult.error || 'Unknown error'));
            }
          }
        });
      }

      document.title = `${question.title || 'Question'} - Well Testing Community`;
    } else if (questionContent) {
      questionContent.innerHTML = '<div class="empty-state"><h3>Question not found</h3><a href="index.html" class="btn btn-primary">Back to Home</a></div>';
      questionContent.style.display = 'block';
    }
  }

  
  function loadAnswers(qId) {
    answersUnsubscribe = getAnswersRealtime(qId, (answers) => {
      const answersContainer = document.getElementById('answersContainer');
      const answersCount = document.getElementById('answersCount');
      const noAnswers = document.getElementById('noAnswers');

      if (answersCount) answersCount.textContent = String(answers.length);

      if (!answers.length) {
        if (answersContainer) answersContainer.innerHTML = '';
        if (noAnswers) noAnswers.style.display = 'block';
        return;
      }

      if (noAnswers) noAnswers.style.display = 'none';
      renderAnswers(answers, qId);
    });
  }

  loadAnswers();

  function renderAnswers(answers, qId) {
    const answersContainer = document.getElementById('answersContainer');
    const currentUser = typeof getCurrentUser === 'function' ? getCurrentUser() : null;

    if (!answersContainer) return;

    answersContainer.innerHTML = answers.map((answer) => {
      const hasLiked = currentUser && (answer.likedBy || []).includes(currentUser.uid);
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
                  ${hasLiked ? 'Liked' : 'Like'} ${answer.likes || 0}
                </button>
              ` : `
                <span class="like-btn">Like ${answer.likes || 0}</span>
              `}
              ${canDelete ? `
                <button class="btn btn-sm btn-danger" onclick="handleDeleteAnswer('${answer.id}', '${qId}')">Delete</button>
              ` : ''}
            </div>
          </div>
          <div class="answer-content">${escapeHtml(answer.content)}</div>
        </div>
      `;
    }).join('');
  }
}
renderAnswers();

// ====== Profile Page ======
function initProfilePage() {
  const profileLoadingIndicator = document.getElementById('profileLoadingIndicator');
  const profileContent = document.getElementById('profileContent');

  if (typeof auth === 'undefined' || !auth.onAuthStateChanged) return;

  auth.onAuthStateChanged(async (user) => {
    if (!user) {
      window.location.href = 'login.html';
      return;
    }

    if (profileLoadingIndicator) profileLoadingIndicator.style.display = 'none';
    if (profileContent) profileContent.style.display = 'block';

    const initial = (user.displayName || user.email || 'U').charAt(0).toUpperCase();
    const profileInitial = document.getElementById('profileInitial');
    const profileName = document.getElementById('profileName');
    const profileEmail = document.getElementById('profileEmail');
    if (profileInitial) profileInitial.textContent = initial;
    if (profileName) profileName.textContent = user.displayName || user.email || '';
    if (profileEmail) profileEmail.textContent = user.email || '';

    const userDataResult = await getUserData(user.uid);
    if (userDataResult.success) {
      const userData = userDataResult.userData;
      const role = document.getElementById('profileRole');
      const memberSince = document.getElementById('memberSince');
      if (role) role.textContent = userData.role === 'admin' ? 'Admin' : 'User';
      if (memberSince) memberSince.textContent = formatSimpleDate(userData.createdAt);
    }

    loadUserQuestions(user.uid);
    loadUserAnswers(user.uid);
  });

  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      tabBtns.forEach((b) => b.classList.remove('active'));
      tabContents.forEach((c) => c.classList.remove('active'));
      btn.classList.add('active');
      const target = document.getElementById(`${targetTab}Tab`);
      if (target) target.classList.add('active');
    });
  });

  async function loadUserQuestions(userId) {
    const container = document.getElementById('userQuestionsContainer');
    const loading = document.getElementById('userQuestionsLoading');
    const noQuestions = document.getElementById('noQuestions');
    const questionsCount = document.getElementById('questionsCount');

    if (loading) loading.style.display = 'block';

    try {
      const snap = await firebase.firestore()
        .collection('questions')
        .where('authorId', '==', userId)
        .get();

      const questions = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      if (questionsCount) questionsCount.textContent = String(questions.length);

      if (loading) loading.style.display = 'none';
      if (!questions.length) {
        if (container) container.style.display = 'none';
        if (noQuestions) noQuestions.style.display = 'block';
        return;
      }

      if (noQuestions) noQuestions.style.display = 'none';
      if (container) {
        container.style.display = 'block';
        container.innerHTML = questions.map(q => `
          <div class="profile-item">
            <a href="question.html?id=${q.id}" class="profile-item-title">${escapeHtml(q.title)}</a>
            <div class="profile-item-meta">${formatDate(q.createdAt)}</div>
          </div>
        `).join('');
      }
    } catch (err) {
      if (loading) loading.style.display = 'none';
      if (container) container.style.display = 'none';
      if (noQuestions) noQuestions.style.display = 'block';
    }
  }

  async function loadUserAnswers(userId) {
    const container = document.getElementById('userAnswersContainer');
    const loading = document.getElementById('userAnswersLoading');
    const noAnswers = document.getElementById('noAnswers');
    const answersCount = document.getElementById('answersCount');

    if (loading) loading.style.display = 'block';

    try {
      const snap = await firebase.firestore()
        .collection('answers')
        .where('authorId', '==', userId)
        .get();

      const answers = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      if (answersCount) answersCount.textContent = String(answers.length);

      if (loading) loading.style.display = 'none';
      if (!answers.length) {
        if (container) container.style.display = 'none';
        if (noAnswers) noAnswers.style.display = 'block';
        return;
      }

      if (noAnswers) noAnswers.style.display = 'none';
      if (container) {
        container.style.display = 'block';
        container.innerHTML = answers.map(a => `
          <div class="profile-item">
            <div class="profile-item-title">${escapeHtml(a.content)}</div>
            <div class="profile-item-meta">${formatDate(a.createdAt)}</div>
          </div>
        `).join('');
      }
    } catch (err) {
      if (loading) loading.style.display = 'none';
      if (container) container.style.display = 'none';
      if (noAnswers) noAnswers.style.display = 'block';
    }
  }
}

// ====== Global Actions ======
window.handleLikeAnswer = async (answerId) => {
  await toggleLikeAnswer(answerId);
};

window.handleDeleteAnswer = async (answerId, questionId) => {
  if (!confirm('Are you sure you want to delete this answer?')) return;
  const result = await deleteAnswer(answerId, questionId);
  if (!result.success) {
    alert(result.error || 'Could not delete answer');
  }
};

// ====== Helpers ======
function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function formatDate(timestamp) {
  if (!timestamp) return '';
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp.seconds * 1000);
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}

function formatSimpleDate(timestamp) {
  if (!timestamp) return '';
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp.seconds * 1000);
  return date.toLocaleDateString();
}

// ===== Cleanup ======
window.addEventListener('beforeunload', () => {
  if (questionsUnsubscribe) questionsUnsubscribe();
  if (answersUnsubscribe) answersUnsubscribe();
});
