// js/app.js
import {
    auth,
    getCurrentUser,
    getQuestionsRealtime,
    createQuestion,
    getQuestionById,
    getAnswersRealtime,
    createAnswer,
    deleteAnswer,
    toggleLikeAnswer,
    getUserData
} from './firestore.js';

/* ================== Global ================== */
let questionsUnsubscribe = null;
let answersUnsubscribe = null;
let allQuestionsCache = [];

/* ================== Navbar Auth ================== */
auth.onAuthStateChanged(user => {
    const profileNav = document.getElementById('profileNavLink');
    const loginNav = document.getElementById('loginNavLink');
    const logoutBtn = document.getElementById('logoutNavBtn');

    if (user) {
        profileNav && (profileNav.style.display = 'inline-block');
        loginNav && (loginNav.style.display = 'none');
        logoutBtn && (logoutBtn.style.display = 'inline-block');
    } else {
        profileNav && (profileNav.style.display = 'none');
        loginNav && (loginNav.style.display = 'inline-block');
        logoutBtn && (logoutBtn.style.display = 'none');
    }

    logoutBtn?.addEventListener('click', async () => {
        await auth.signOut();
        window.location.href = 'index.html';
    });
});

/* ================== Init Page ================== */
document.addEventListener('DOMContentLoaded', () => {
    const page = location.pathname.split('/').pop();

    switch (page) {
        case '':
        case 'index.html':
        case 'SWT-Community.html':
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

/* ================== Home Page ================== */
function initHomePage() {
    const loading = document.getElementById('loadingIndicator');
    const container = document.getElementById('questionsContainer');
    const empty = document.getElementById('emptyState');
    const searchInput = document.getElementById('searchInput');
    const filterSelect = document.getElementById('filterSelect');

    questionsUnsubscribe = getQuestionsRealtime(questions => {
        allQuestionsCache = questions;
        render(questions);
        loading.style.display = 'none';
    });

    function render(questions) {
        if (!questions.length) {
            container.style.display = 'none';
            empty.style.display = 'block';
            return;
        }

        empty.style.display = 'none';
        container.style.display = 'block';
        container.innerHTML = questions.map(q => `
            <div class="question-card">
                <h3>
                    <a href="question.html?id=${q.id}">
                        ${escapeHtml(q.title)}
                    </a>
                </h3>
                <p>${escapeHtml(q.description)}</p>
                <div class="question-card-footer">
                    <span><strong>${escapeHtml(q.authorName)}</strong></span>
                    <span>${formatDate(q.createdAt)}</span>
                    <span>${q.answerCount || 0} answers</span>
                </div>
            </div>
        `).join('');
    }

    searchInput?.addEventListener('input', e => {
        const term = e.target.value.toLowerCase();
        const filtered = allQuestionsCache.filter(q =>
            q.title.toLowerCase().includes(term) ||
            q.description.toLowerCase().includes(term)
        );
        render(filtered);
    });

    filterSelect?.addEventListener('change', () => {
        let sorted = [...allQuestionsCache];
        if (filterSelect.value === 'newest') {
            sorted.sort((a,b)=> (b.createdAt?.seconds||0)-(a.createdAt?.seconds||0));
        }
        if (filterSelect.value === 'most-answered') {
            sorted.sort((a,b)=> (b.answerCount||0)-(a.answerCount||0));
        }
        render(sorted);
    });
}

/* ================== Ask Page ================== */
function initAskPage() {
    const form = document.getElementById('askQuestionForm');
    const warning = document.getElementById('authWarning');

    auth.onAuthStateChanged(user => {
        form.style.display = user ? 'block' : 'none';
        warning.style.display = user ? 'none' : 'block';
    });

    form?.addEventListener('submit', async e => {
        e.preventDefault();
        const title = questionTitle.value.trim();
        const desc = questionDescription.value.trim();

        const result = await createQuestion(title, desc);
        if (result.success) {
            location.href = `question.html?id=${result.questionId}`;
        } else {
            alert(result.error);
        }
    });
}

/* ================== Question Page ================== */
function initQuestionPage() {
    const id = new URLSearchParams(location.search).get('id');
    if (!id) return location.href = 'index.html';

    loadQuestion(id);
    loadAnswers(id);

    answerForm?.addEventListener('submit', async e => {
        e.preventDefault();
        const content = answerContent.value.trim();
        const res = await createAnswer(id, content);
        if (res.success) answerContent.value = '';
        else alert(res.error);
    });
}

async function loadQuestion(id) {
    const res = await getQuestionById(id);
    if (!res.success) return;

    const q = res.question;
    questionDetailTitle.textContent = q.title;
    questionDetailBody.textContent = q.description;
    questionAuthor.textContent = q.authorName;
    questionDate.textContent = formatDate(q.createdAt);
}

function loadAnswers(id) {
    answersUnsubscribe = getAnswersRealtime(id, answers => {
        answersContainer.innerHTML = answers.map(a => `
            <div class="answer-card">
                <strong>${escapeHtml(a.authorName)}</strong>
                <span>${formatDate(a.createdAt)}</span>
                <p>${escapeHtml(a.content)}</p>
                <button onclick="likeAnswer('${a.id}')">
                    ❤️ ${a.likes || 0}
                </button>
            </div>
        `).join('');
    });
}

window.likeAnswer = id => toggleLikeAnswer(id);

/* ================== Profile Page ================== */
function initProfilePage() {
    auth.onAuthStateChanged(async user => {
        if (!user) return location.href = 'login.html';

        profileName.textContent = user.displayName || user.email;
        profileEmail.textContent = user.email;

        const res = await getUserData(user.uid);
        if (res.success) {
            profileRole.textContent = res.userData.role;
        }
    });
}

/* ================== Helpers ================== */
function escapeHtml(text='') {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function formatDate(ts) {
    if (!ts) return '';
    const d = ts.toDate ? ts.toDate() : new Date(ts.seconds*1000);
    return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
}

/* ================== Cleanup ================== */
window.addEventListener('beforeunload', () => {
    questionsUnsubscribe?.();
    answersUnsubscribe?.();
});
