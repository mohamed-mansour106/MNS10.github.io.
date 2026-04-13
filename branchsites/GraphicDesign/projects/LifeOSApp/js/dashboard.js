// ============================================================
// dashboard.js — Life OS Pro | Clean Unified Dashboard
// Reads from: Finance, Planner, Habits, Goals, Projects,
//             Docs (Vault), Journal, Time Tracker, XP System
// ============================================================

let dashChart = null; // prevent duplicate chart instances

// ============================================================
// MAIN ENTRY — called on load and when switching to dashboard
// ============================================================
function renderDashboard() {

    // ── 1. LOAD ALL DATA ────────────────────────────────────
    const focusData    = Storage.get('lifeData')        || [];
    const projects     = Storage.get('userProjects')    || [];
    const docs         = Storage.get('userDocs')        || [];
    const habits       = Storage.get('userHabits')      || [];   // habits.js key
    const goals        = JSON.parse(localStorage.getItem('os_goals_v1'))    || [];
    const journal      = JSON.parse(localStorage.getItem('os_journal'))     || [];
    const plannerTasks = JSON.parse(localStorage.getItem('userTasks'))      || [];
    const studies      = JSON.parse(localStorage.getItem('userStudies'))    || [];
    const xpData       = JSON.parse(localStorage.getItem('os_xp'))         || { xp: 0, level: 1 };
    const rpgData      = JSON.parse(localStorage.getItem('planner_rpg'))   || { xp: 0, level: 1, streak: 0 };
    const finDB        = JSON.parse(localStorage.getItem('os_finance_v3')) || { years: {} };

    // ── 2. FINANCE ──────────────────────────────────────────
    const currentYear  = new Date().getFullYear();
    const yearData     = finDB.years?.[currentYear] || { months: {} };
    let yearlySpent    = 0;
    let totalIncome    = 0;

    Object.values(yearData.months || {}).forEach(m => {
        yearlySpent += (m.transactions || []).reduce((s, t) => s + (t.amount || 0), 0);
        totalIncome += m.salary || 0;
    });

    const balance = totalIncome - yearlySpent;

    // ── 3. TASKS (TODAY) ────────────────────────────────────
    const today          = new Date().toISOString().split('T')[0];
    const todayLocalStr  = new Date().toLocaleDateString();

    // planner tasks use toLocaleDateString for completedAt
    const todayTasks     = plannerTasks.filter(t => !t.archived);
    const doneTasks      = plannerTasks.filter(t =>
        t.status === 'done' && t.completedAt === todayLocalStr
    );
    const taskProgress   = todayTasks.length > 0
        ? Math.round((doneTasks.length / todayTasks.length) * 100)
        : 0;

    // ── 4. HABITS ───────────────────────────────────────────
    const doneHabits  = habits.filter(h => h.completed).length;
    const totalHabits = habits.length;

    // ── 5. GOALS ────────────────────────────────────────────
    const activeGoals   = goals.filter(g => g.progress < 100);
    const avgGoalProg   = goals.length > 0
        ? Math.round(goals.reduce((s, g) => s + (g.progress || 0), 0) / goals.length)
        : 0;

    // ── 6. FOCUS / TIME TRACKER ─────────────────────────────
    const weeklyHours = focusData
        .slice(-7)
        .reduce((s, d) => s + (d.hours || 0), 0);

    // streak = consecutive days with a focus entry
    const streak = rpgData.streak || focusData.length;

    // ── 7. PROJECTS ─────────────────────────────────────────
    const activeProjects = projects.filter(p => !p.completed);

    // ── 8. STUDIES ──────────────────────────────────────────
    const activeCourses = studies.filter(s => {
        const done = s.lessons?.filter(l => l.done).length || 0;
        return done < (s.lessons?.length || 1);
    });

    // ── 9. JOURNAL ──────────────────────────────────────────
    const journalCount = journal.length;

    // ── 10. DOCS (VAULT) ALERTS ─────────────────────────────
    const now     = new Date();
    const expired = docs.filter(d => d.expiryDate && new Date(d.expiryDate) < now);
    const soonDocs = docs.filter(d => {
        if (!d.expiryDate) return false;
        const diff = (new Date(d.expiryDate) - now) / 86400000;
        return diff >= 0 && diff <= 30;
    });

    // ── 11. XP BAR ──────────────────────────────────────────
    const xpNeeded  = 500 + (xpData.level * 250);
    const xpPercent = Math.min((xpData.xp / xpNeeded) * 100, 100);

    // ============================================================
    // RENDER SECTION
    // ============================================================

    _setText('streak',       `${streak} Days`);
    _setText('dash-balance', `${balance.toLocaleString()} AED`);
    _setText('dash-spent',   `${yearlySpent.toLocaleString()} AED`);
    _setText('dash-projects', activeProjects.length);

    // ── Top 4 Stat Cards ────────────────────────────────────
    _setCard(0, `${taskProgress}%`,        "Today's Progress");
    _setCard(1, `${doneTasks.length}/${todayTasks.length}`, "Tasks Today");
    _setCard(2, `${weeklyHours.toFixed(1)}h`, "Weekly Work");
    _setCard(3, `${activeGoals.length}`,   "Active Goals");

    // ── Progress Circle ─────────────────────────────────────
    _updateProgressCircle(taskProgress);

    // ── XP Bar ──────────────────────────────────────────────
    _updateXPBar(xpData.level, xpData.xp, xpNeeded, xpPercent);

    // ── Task List ───────────────────────────────────────────
    _renderTaskList(todayTasks);

    // ── Habits ──────────────────────────────────────────────
    _renderHabits(habits);

    // ── Today's Overview (right column quick stats) ─────────
    _renderOverviewStats({
        goals:    activeGoals.length,
        habits:   `${doneHabits}/${totalHabits}`,
        courses:  activeCourses.length,
        journal:  journalCount,
        avgGoal:  avgGoalProg
    });

    // ── Alerts (Vault docs) ──────────────────────────────────
    _renderAlerts(expired, soonDocs);

    // ── AI Insights ─────────────────────────────────────────
    _renderInsights({
        taskProgress,
        streak,
        balance,
        doneTasks:      doneTasks.length,
        todayTasks:     todayTasks.length,
        weeklyHours,
        activeProjects: activeProjects.length,
        doneHabits,
        totalHabits,
        avgGoalProg
    });

    // ── Focus Chart ─────────────────────────────────────────
    _renderFocusChart(focusData);
}

// ============================================================
// HELPERS
// ============================================================

function _setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
}

function _setCard(index, value, label) {
    const cards = document.querySelectorAll('.dashboard-grid .stat-card');
    if (!cards[index]) return;
    const h2 = cards[index].querySelector('h2');
    const p  = cards[index].querySelector('p');
    if (h2) h2.textContent = value;
    if (p && label) p.textContent = label;
}

function _updateProgressCircle(percent) {
    const circle = document.querySelector('.progress-circle');
    if (!circle) return;
    circle.style.background =
        `conic-gradient(#38bdf8 ${percent * 3.6}deg, #1e293b 0deg)`;
    const strong = circle.querySelector('strong');
    if (strong) strong.textContent = `${percent}%`;
    const span = circle.querySelector('span');
    if (span) span.textContent = 'Complete';
}

function _updateXPBar(level, xp, needed, percent) {
    const fill   = document.querySelector('.xp-fill');
    const header = document.querySelector('.xp-header');
    if (fill)   fill.style.width = percent + '%';
    if (header) header.innerHTML = `
        <span><i class="fa-solid fa-star"></i> Level ${level}</span>
        <span style="color: var(--text-dim);">${xp} / ${needed} XP to next level</span>
        <strong>${xp} XP Total</strong>
    `;
}

// ── Task List ────────────────────────────────────────────────
function _renderTaskList(tasks) {
    const container = document.querySelector('.section-card:nth-child(2)');
    if (!container) return;

    // remove old render to avoid duplication
    const old = container.querySelector('.task-render');
    if (old) old.remove();

    const wrapper = document.createElement('div');
    wrapper.className = 'task-render';
    wrapper.style.marginTop = '10px';

    if (!tasks.length) {
        wrapper.innerHTML = `<p style="text-align:center; color:#94a3b8; margin-top:20px;">No tasks yet. Add some in Daily Planning!</p>`;
    } else {
        // show max 6 to keep dashboard clean
        wrapper.innerHTML = tasks.slice(0, 6).map(t => `
            <div style="padding:10px; border-bottom:1px solid #1e293b; display:flex; align-items:center; gap:10px;">
                <i class="fa-solid ${t.status === 'done' ? 'fa-square-check' : 'fa-square'}"
                   style="color:${t.status === 'done' ? '#10b981' : '#4b5563'}; font-size:14px;"></i>
                <span style="${t.status === 'done' ? 'text-decoration:line-through; color:#64748b' : 'color:white'}; font-size:13px;">
                    ${t.title}
                </span>
                ${t.priority === 'high' ? `<span style="margin-left:auto; font-size:9px; background:#ef444422; color:#ef4444; padding:2px 6px; border-radius:4px;">HIGH</span>` : ''}
            </div>
        `).join('');

        if (tasks.length > 6) {
            wrapper.innerHTML += `<p style="text-align:center; color:#94a3b8; font-size:11px; margin-top:8px;">+${tasks.length - 6} more in Daily Planning</p>`;
        }
    }

    container.appendChild(wrapper);
}

// ── Habits ──────────────────────────────────────────────────
function _renderHabits(habits) {
    const container = document.querySelector('.routine-list');
    if (!container) return;

    if (!habits.length) {
        container.innerHTML = `<p style="color:#94a3b8; font-size:12px; text-align:center; margin-top:10px;">No habits tracked yet.</p>`;
        return;
    }

    container.innerHTML = habits.map(h => `
        <div class="routine-item">
            <i class="fa-solid ${h.completed ? 'fa-circle-check' : 'fa-circle'}"
               style="color:${h.completed ? '#10b981' : '#334155'};"></i>
            <span class="name" style="${h.completed ? 'text-decoration:line-through; color:#64748b' : ''}">${h.name}</span>
            <span class="streak" style="margin-left:auto; font-size:11px; color:#f59e0b;">🔥 ${h.history?.length || 0}</span>
        </div>
    `).join('');
}

// ── Overview Quick Stats (right panel) ──────────────────────
function _renderOverviewStats({ goals, habits, courses, journal, avgGoal }) {
    const list = document.querySelector('.overview-list');
    if (!list) return;

    list.innerHTML = `
        <div class="overview-item">
            <i class="fa-solid fa-bullseye" style="color:#f59e0b;"></i>
            <span>Active Goals</span>
            <strong style="margin-left:auto; color:#f59e0b;">${goals}</strong>
        </div>
        <div class="overview-item">
            <i class="fa-solid fa-repeat" style="color:#10b981;"></i>
            <span>Habits Today</span>
            <strong style="margin-left:auto; color:#10b981;">${habits}</strong>
        </div>
        <div class="overview-item">
            <i class="fa-solid fa-graduation-cap" style="color:#8b5cf6;"></i>
            <span>Active Courses</span>
            <strong style="margin-left:auto; color:#8b5cf6;">${courses}</strong>
        </div>
        <div class="overview-item">
            <i class="fa-solid fa-book" style="color:#38bdf8;"></i>
            <span>Journal Entries</span>
            <strong style="margin-left:auto; color:#38bdf8;">${journal}</strong>
        </div>
        <div class="overview-item" style="margin-top:10px; padding-top:10px; border-top:1px solid #1e293b;">
            <i class="fa-solid fa-chart-line" style="color:var(--accent);"></i>
            <span>Avg Goal Progress</span>
            <strong style="margin-left:auto; color:var(--accent);">${avgGoal}%</strong>
        </div>
    `;
}

// ── Alerts ──────────────────────────────────────────────────
function _renderAlerts(expired, soon) {
    const box = document.getElementById('dashboard-alerts');
    if (!box) return;
    box.innerHTML = '';

    if (expired.length) {
        box.innerHTML += `
        <div style="background:rgba(239,68,68,0.12); border:1px solid #ef4444; padding:12px 16px; border-radius:10px; margin-bottom:10px; display:flex; align-items:center; gap:10px;">
            <i class="fa-solid fa-circle-xmark" style="color:#ef4444; font-size:16px;"></i>
            <div>
                <strong style="color:#ef4444;">⛔ ${expired.length} Document(s) Expired!</strong>
                <div style="font-size:11px; color:#94a3b8; margin-top:2px;">${expired.map(d => d.name).join(', ')}</div>
            </div>
        </div>`;
    }

    if (soon.length) {
        box.innerHTML += `
        <div style="background:rgba(245,158,11,0.1); border:1px solid #f59e0b; padding:12px 16px; border-radius:10px; margin-bottom:10px; display:flex; align-items:center; gap:10px;">
            <i class="fa-solid fa-triangle-exclamation" style="color:#f59e0b; font-size:16px;"></i>
            <div>
                <strong style="color:#f59e0b;">⚠️ ${soon.length} Document(s) Expiring Soon</strong>
                <div style="font-size:11px; color:#94a3b8; margin-top:2px;">${soon.map(d => d.name).join(', ')}</div>
            </div>
        </div>`;
    }
}

// ── AI Insights ─────────────────────────────────────────────
function _renderInsights({ taskProgress, streak, balance, doneTasks, todayTasks, weeklyHours, activeProjects, doneHabits, totalHabits, avgGoalProg }) {
    const container = document.getElementById('insights-widget');
    if (!container) return;

    const insights = [];

    if (taskProgress === 100 && todayTasks > 0)
        insights.push({ icon: '🔥', color: '#10b981', text: 'Perfect day! All tasks completed. Elite mode activated.' });

    if (taskProgress < 30 && todayTasks > 0)
        insights.push({ icon: '⚠️', color: '#f59e0b', text: 'Low execution today. Start with your easiest task now.' });

    if (streak >= 5)
        insights.push({ icon: '💪', color: '#38bdf8', text: `${streak}-day streak! Don't break the chain.` });

    if (balance < 0)
        insights.push({ icon: '💸', color: '#ef4444', text: 'Warning: Spending exceeds income this year.' });

    if (activeProjects > 5)
        insights.push({ icon: '🎯', color: '#f59e0b', text: 'Too many active projects. Focus on 1–2 priorities.' });

    if (weeklyHours < 10)
        insights.push({ icon: '⏱', color: '#94a3b8', text: 'Low deep work hours this week. Try to push past 10h.' });

    if (totalHabits > 0 && doneHabits === totalHabits)
        insights.push({ icon: '✅', color: '#10b981', text: 'All habits checked today. Discipline at its finest!' });

    if (avgGoalProg >= 75)
        insights.push({ icon: '🚀', color: '#8b5cf6', text: `Average goal progress at ${avgGoalProg}%. Finish line is near!` });

    if (insights.length === 0)
        insights.push({ icon: '🧠', color: '#94a3b8', text: 'Start logging your day to unlock insights.' });

    container.innerHTML = `
        <h3 style="margin-bottom:12px; font-size:14px; color:var(--text-dim); letter-spacing:1px; text-transform:uppercase;">🧠 AI Insights</h3>
        ${insights.map(i => `
            <div style="padding:10px 14px; margin-bottom:8px; background:rgba(59,130,246,0.07); border-left:3px solid ${i.color}; border-radius:8px; font-size:13px;">
                ${i.icon} ${i.text}
            </div>
        `).join('')}
    `;
}

// ── Focus Chart ─────────────────────────────────────────────
function _renderFocusChart(data) {
    const ctx = document.getElementById('mainChart');
    if (!ctx || typeof Chart === 'undefined') return;

    if (dashChart) {
        dashChart.destroy();
        dashChart = null;
    }

    const safeData = data.length ? data.slice(-7) : [
        { date: 'Mon', rating: 0 }, { date: 'Tue', rating: 0 },
        { date: 'Wed', rating: 0 }, { date: 'Thu', rating: 0 },
        { date: 'Fri', rating: 0 }, { date: 'Sat', rating: 0 },
        { date: 'Sun', rating: 0 }
    ];

    dashChart = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            labels: safeData.map(d => d.date),
            datasets: [{
                data: safeData.map(d => d.rating || 0),
                borderColor: '#38bdf8',
                backgroundColor: 'rgba(56,189,248,0.08)',
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#38bdf8',
                pointRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: {
                    beginAtZero: true, max: 10,
                    grid: { color: '#1e293b' },
                    ticks: { color: '#94a3b8', stepSize: 2 }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#94a3b8' }
                }
            }
        }
    });
}

// ============================================================
// INITIALIZATION — single DOMContentLoaded
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    renderDashboard();
});





//***********Old********************** */
