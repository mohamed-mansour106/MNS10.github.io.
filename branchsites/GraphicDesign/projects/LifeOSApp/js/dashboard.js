/* ============================================================
   dashboard.js — Life OS Pro
   Renders: XP, Stats, Tasks, Habits, Overview, Alerts,
            Weekly Performance, AI Coaching, Budget, Chart
   ============================================================ */

let _dashChart = null; // singleton chart instance

// ─────────────────────────────────────────────────────────────
// MAIN ENTRY POINT
// ─────────────────────────────────────────────────────────────
function renderDashboard() {

    /* ── 1. Load all data from localStorage ── */
    const focusData    = Storage.get('lifeData')        || [];
    const projects     = Storage.get('userProjects')    || [];
    const docs         = Storage.get('userDocs')        || [];
    const habits       = Storage.get('userHabits')      || [];
    const goals        = _parse('os_goals_v1')          || [];
    const journal      = _parse('os_journal')           || [];
    const plannerTasks = _parse('userTasks')            || [];
    const studies      = _parse('userStudies')          || [];
    const xpData       = _parse('os_xp')               || { xp: 0, level: 1 };
    const rpgData      = _parse('planner_rpg')          || { xp: 0, level: 1, streak: 0 };
    const finDB        = _parse('os_finance_v3')        || { years: {} };
    const healthData   = _parse('os_health')            || { weight: 0, water: 0, sleep: 0 };

    /* ── 2. Finance calculations ── */
    const currentYear  = new Date().getFullYear();
    const yearData     = finDB.years?.[currentYear] || { months: {} };
    let yearlySpent    = 0;
    let totalIncome    = 0;
    let monthlyBudget  = {};

    const currentMonth = String(new Date().getMonth() + 1).padStart(2, '0');
    const monthData    = yearData.months?.[currentMonth] || { transactions: [], salary: 0, categories: [] };

    Object.values(yearData.months || {}).forEach(m => {
        (m.transactions || []).forEach(t => { yearlySpent += t.amount || 0; });
        totalIncome += m.salary || 0;
    });

    (monthData.categories || []).forEach(cat => {
        const spent = (monthData.transactions || [])
            .filter(t => t.category === cat.name)
            .reduce((s, t) => s + (t.amount || 0), 0);
        monthlyBudget[cat.name] = {
            budget: ((monthData.salary || 0) * (cat.percent || 0)) / 100,
            spent
        };
    });

    const balance     = totalIncome - yearlySpent;
    const savingsRate = totalIncome > 0
        ? Math.max(0, Math.round(((totalIncome - yearlySpent) / totalIncome) * 100))
        : 0;

    /* ── 3. Tasks ── */
    const todayLocalStr = new Date().toLocaleDateString();
    const activeTasks   = plannerTasks.filter(t => !t.archived);
    const doneTasks     = plannerTasks.filter(t => t.status === 'done' && t.completedAt === todayLocalStr);
    const taskProgress  = activeTasks.length > 0
        ? Math.round((doneTasks.length / activeTasks.length) * 100)
        : 0;

    /* ── 4. Habits ── */
    const doneHabits  = habits.filter(h => h.completed).length;
    const totalHabits = habits.length;
    const habitRate   = totalHabits > 0 ? Math.round((doneHabits / totalHabits) * 100) : 0;

    /* ── 5. Goals ── */
    const activeGoals = goals.filter(g => (g.progress || 0) < 100);
    const avgGoalProg = goals.length > 0
        ? Math.round(goals.reduce((s, g) => s + (g.progress || 0), 0) / goals.length)
        : 0;

    /* ── 6. Focus / Time ── */
    const weeklyFocusData = focusData.slice(-7);
    const weeklyHours     = weeklyFocusData.reduce((s, d) => s + (d.hours || 0), 0);
    const streak          = rpgData.streak || focusData.length;

    /* ── 7. XP ── */
    // Aggregate XP from all sections
    const habitsXP  = parseInt(localStorage.getItem('userXP')) || 0;
    const financeXP = (_parse('finance_xp') || {}).xp || 0;
    const plannerXP = parseInt(localStorage.getItem('planner_xp')) || 0;
    const plannerRpgXP = rpgData.xp || 0;
    const journalXP = (_parse('os_journal_xp') || {}).xp || 0;
    const projectXP = (_parse('project_xp') || {}).xp || 0;
    
    const totalXP = xpData.xp + habitsXP + financeXP + plannerXP + plannerRpgXP + journalXP + projectXP;
    const xpNeeded  = 500 + (xpData.level * 250);
    const xpPercent = Math.min((totalXP / xpNeeded) * 100, 100);

    /* ── 8. Docs ── */
    const now      = new Date();
    const expired  = docs.filter(d => d.expiryDate && new Date(d.expiryDate) < now);
    const soonDocs = docs.filter(d => {
        if (!d.expiryDate) return false;
        const diff = (new Date(d.expiryDate) - now) / 86400000;
        return diff >= 0 && diff <= 30;
    });

    /* ── 9. Weekly performance scores (0-100) ── */
    const scores = {
        tasks:   taskProgress,
        habits:  habitRate,
        goals:   avgGoalProg,
        finance: Math.min(100, savingsRate * 2),
        focus:   Math.min(100, Math.round((weeklyHours / 20) * 100))
    };
    const overallScore = Math.round(
        (scores.tasks   * 0.25) +
        (scores.habits  * 0.20) +
        (scores.goals   * 0.20) +
        (scores.finance * 0.15) +
        (scores.focus   * 0.20)
    );

    /* ════ RENDER ════ */
    _renderHeader(streak);
    _renderXPBar(xpData.level, totalXP, xpNeeded, xpPercent);
    _renderAlerts(expired, soonDocs);
    _renderTopStats(streak, balance, yearlySpent, projects.filter(p => !p.completed).length);
    _renderMiniCards(taskProgress, doneTasks.length, activeTasks.length, weeklyHours, activeGoals.length);
    _renderOverviewCircle(taskProgress);
    _renderOverviewList({ goals: activeGoals.length, habits: `${doneHabits}/${totalHabits}`, courses: studies.length, journal: journal.length, avgGoalProg });
    _renderTaskList(activeTasks);
    _renderHabits(habits, habitRate);
    _renderBudgetSummary(monthlyBudget, monthData.salary || 0);
    _renderWeeklyPerformance(scores, overallScore, weeklyHours);
    _renderFocusChart(weeklyFocusData);
    _renderAICoaching({ taskProgress, habitRate, avgGoalProg, savingsRate, weeklyHours, streak, overallScore, balance, doneTasks: doneTasks.length, activeTasks: activeTasks.length, expired, soonDocs, activeGoals, goals, healthData, plannerTasks, studies, totalHabits });
}


// ─────────────────────────────────────────────────────────────
// HEADER
// ─────────────────────────────────────────────────────────────
function _renderHeader(streak) {
    const dateEl   = document.getElementById('dash-today-date');
    const streakEl = document.getElementById('streak-header');
    const clockEl  = document.getElementById('dash-clock');

    const now = new Date();
    if (dateEl)   dateEl.textContent = now.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    if (streakEl) streakEl.textContent = `${streak}-day`;

    if (clockEl) {
        const tick = () => {
            clockEl.textContent = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        };
        tick();
        if (!window._dashClockInterval) window._dashClockInterval = setInterval(tick, 1000);
    }
}


// ─────────────────────────────────────────────────────────────
// XP BAR
// ─────────────────────────────────────────────────────────────
function _renderXPBar(level, xp, needed, percent) {
    const fill   = document.querySelector('.xp-fill');
    const header = document.querySelector('.xp-header');
    if (fill)   fill.style.width = percent + '%';
    if (header) header.innerHTML = `
        <span><i class="fa-solid fa-star" style="color:var(--accent-orange);"></i> Level ${level}</span>
        <span style="color:var(--text-dim);">${xp} / ${needed} XP to next level</span>
        <strong>${xp} XP Total</strong>
    `;
}


// ─────────────────────────────────────────────────────────────
// ALERTS
// ─────────────────────────────────────────────────────────────
function _renderAlerts(expired, soon) {
    const box = document.getElementById('dashboard-alerts');
    if (!box) return;
    box.innerHTML = '';
    if (expired.length) box.innerHTML += `
        <div class="dash-alert dash-alert--danger">
            <i class="fa-solid fa-circle-xmark"></i>
            <div><strong>⛔ ${expired.length} Document(s) Expired!</strong>
            <div class="dash-alert__sub">${expired.map(d => d.name).join(' · ')}</div></div>
        </div>`;
    if (soon.length) box.innerHTML += `
        <div class="dash-alert dash-alert--warning">
            <i class="fa-solid fa-triangle-exclamation"></i>
            <div><strong>⚠️ ${soon.length} Document(s) Expiring Within 30 Days</strong>
            <div class="dash-alert__sub">${soon.map(d => d.name).join(' · ')}</div></div>
        </div>`;
}


// ─────────────────────────────────────────────────────────────
// TOP STATS
// ─────────────────────────────────────────────────────────────
function _renderTopStats(streak, balance, spent, activeProjects) {
    _setText('streak',        `${streak} Days`);
    _setText('dash-balance',  `${balance.toLocaleString()} AED`);
    _setText('dash-spent',    `${spent.toLocaleString()} AED`);
    _setText('dash-projects', activeProjects);
}


// ─────────────────────────────────────────────────────────────
// MINI CARDS
// ─────────────────────────────────────────────────────────────
function _renderMiniCards(progress, done, total, hours, goals) {
    _setText('dg-progress', `${progress}%`);
    _setText('dg-tasks',    `${done}/${total}`);
    _setText('dg-hours',    `${hours.toFixed(1)}h`);
    _setText('dg-goals',    goals);
}


// ─────────────────────────────────────────────────────────────
// PROGRESS CIRCLE
// ─────────────────────────────────────────────────────────────
function _renderOverviewCircle(percent) {
    const circle = document.querySelector('.progress-circle');
    const pct    = document.getElementById('circle-pct');
    if (circle) circle.style.background = `conic-gradient(#38bdf8 ${percent * 3.6}deg, #1e293b 0deg)`;
    if (pct)    pct.textContent = `${percent}%`;
}


// ─────────────────────────────────────────────────────────────
// OVERVIEW LIST
// ─────────────────────────────────────────────────────────────
function _renderOverviewList({ goals, habits, courses, journal, avgGoalProg }) {
    const list = document.querySelector('.overview-list');
    if (!list) return;
    list.innerHTML = [
        { icon: 'fa-bullseye',       color: '#f59e0b', label: 'Active Goals',     val: goals },
        { icon: 'fa-repeat',         color: '#10b981', label: 'Habits Today',     val: habits },
        { icon: 'fa-graduation-cap', color: '#8b5cf6', label: 'Courses',          val: courses },
        { icon: 'fa-book',           color: '#38bdf8', label: 'Journal Entries',  val: journal },
        { icon: 'fa-chart-line',     color: 'var(--accent)', label: 'Avg Goal Progress', val: `${avgGoalProg}%` }
    ].map(r => `
        <div class="overview-item">
            <i class="fa-solid ${r.icon}" style="color:${r.color}; width:16px; text-align:center;"></i>
            <span>${r.label}</span>
            <strong style="margin-left:auto; color:${r.color};">${r.val}</strong>
        </div>`).join('');
}


// ─────────────────────────────────────────────────────────────
// TASK LIST
// ─────────────────────────────────────────────────────────────
function _renderTaskList(tasks) {
    const el = document.getElementById('dash-task-list');
    if (!el) return;
    if (!tasks.length) {
        el.innerHTML = `<p style="color:#94a3b8; text-align:center; padding:20px 0;">No active tasks. Add some in Daily Planning!</p>`;
        return;
    }
    const pColor = { High: '#ef4444', Medium: '#f59e0b', Low: '#64748b' };
    el.innerHTML = tasks.slice(0, 6).map(t => `
        <div class="dash-task-row">
            <i class="fa-solid ${t.status === 'done' ? 'fa-square-check' : 'fa-square'}"
               style="color:${t.status === 'done' ? '#10b981' : '#4b5563'}; font-size:14px; flex-shrink:0;"></i>
            <span style="${t.status === 'done' ? 'text-decoration:line-through; color:#64748b;' : 'color:white;'} font-size:13px; flex:1;">${t.title}</span>
            ${t.priority ? `<span class="dash-task-tag" style="background:${pColor[t.priority] || '#334155'}22; color:${pColor[t.priority] || '#94a3b8'};">${t.priority}</span>` : ''}
        </div>`).join('');
    if (tasks.length > 6)
        el.innerHTML += `<p style="text-align:center; color:#94a3b8; font-size:11px; margin-top:8px;">+${tasks.length - 6} more in Daily Planning</p>`;
}


// ─────────────────────────────────────────────────────────────
// HABITS
// ─────────────────────────────────────────────────────────────
function _renderHabits(habits, rate) {
    const list  = document.querySelector('.routine-list');
    const pctEl = document.getElementById('habits-percent');
    if (pctEl) pctEl.textContent = `${rate}%`;
    if (!list) return;
    if (!habits.length) {
        list.innerHTML = `<p style="color:#94a3b8; font-size:12px; text-align:center;">No habits tracked yet.</p>`;
        return;
    }
    list.innerHTML = habits.map(h => `
        <div class="routine-item">
            <i class="fa-solid ${h.completed ? 'fa-circle-check' : 'fa-circle'}"
               style="color:${h.completed ? '#10b981' : '#334155'};"></i>
            <span class="name" style="${h.completed ? 'text-decoration:line-through; color:#64748b;' : ''}">${h.name}</span>
            <span class="streak">🔥 ${h.history?.length || 0}</span>
        </div>`).join('');
}


// ─────────────────────────────────────────────────────────────
// BUDGET SUMMARY
// ─────────────────────────────────────────────────────────────
function _renderBudgetSummary(monthlyBudget, salary) {
    const el = document.getElementById('dash-budget-summary');
    if (!el) return;
    const entries = Object.entries(monthlyBudget);
    if (!entries.length || salary === 0) {
        el.innerHTML = `<p style="color:#94a3b8; font-size:12px;">No finance data yet. Add your salary in Financial section.</p>`;
        return;
    }
    el.innerHTML = entries.slice(0, 5).map(([cat, { budget, spent }]) => {
        const pct   = budget > 0 ? Math.min(100, Math.round((spent / budget) * 100)) : 0;
        const color = pct >= 100 ? '#ef4444' : pct >= 80 ? '#f59e0b' : '#10b981';
        return `
        <div style="margin-bottom:10px;">
            <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:4px;">
                <span style="color:#94a3b8;">${cat}</span>
                <span style="color:${color};">${spent.toLocaleString()} / ${budget.toLocaleString()} AED</span>
            </div>
            <div style="background:#1e293b; height:5px; border-radius:10px; overflow:hidden;">
                <div style="width:${pct}%; background:${color}; height:100%; transition:width 0.8s;"></div>
            </div>
        </div>`;
    }).join('');
}


// ─────────────────────────────────────────────────────────────
// WEEKLY PERFORMANCE
// ─────────────────────────────────────────────────────────────
function _renderWeeklyPerformance(scores, overallScore, weeklyHours) {
    const weekEl = document.getElementById('week-label');
    if (weekEl) {
        const now = new Date();
        const mon = new Date(now); mon.setDate(now.getDate() - now.getDay() + 1);
        const sun = new Date(mon); sun.setDate(mon.getDate() + 6);
        weekEl.textContent = `${mon.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })} – ${sun.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}`;
    }

    const bars = [
        { id: 'pw-tasks',   barId: 'pw-tasks-bar',   val: `${scores.tasks}%`,          pct: scores.tasks },
        { id: 'pw-habits',  barId: 'pw-habits-bar',  val: `${scores.habits}%`,         pct: scores.habits },
        { id: 'pw-goals',   barId: 'pw-goals-bar',   val: `${scores.goals}%`,          pct: scores.goals },
        { id: 'pw-finance', barId: 'pw-finance-bar', val: `${scores.finance}%`,        pct: scores.finance },
        { id: 'pw-focus',   barId: 'pw-focus-bar',   val: `${weeklyHours.toFixed(1)}h`, pct: scores.focus }
    ];

    bars.forEach(b => {
        _setText(b.id, b.val);
        const bar = document.getElementById(b.barId);
        if (bar) setTimeout(() => bar.style.width = `${b.pct}%`, 80);
    });

    _setText('pw-overall-val', `${overallScore}%`);
    const oBar   = document.getElementById('pw-overall-bar');
    const oLabel = document.getElementById('pw-overall-label');
    if (oBar)   setTimeout(() => oBar.style.width = `${overallScore}%`, 80);
    if (oLabel) { const { text, color } = _scoreGrade(overallScore); oLabel.textContent = text; oLabel.style.color = color; }
}


// ─────────────────────────────────────────────────────────────
// FOCUS CHART
// ─────────────────────────────────────────────────────────────
function _renderFocusChart(data) {
    const ctx = document.getElementById('mainChart');
    if (!ctx || typeof Chart === 'undefined') return;
    if (_dashChart) { _dashChart.destroy(); _dashChart = null; }

    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const safe = data.length ? data : days.map(d => ({ date: d, rating: 0 }));

    _dashChart = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            labels: safe.map(d => d.date),
            datasets: [{
                data: safe.map(d => d.rating || 0),
                borderColor: '#38bdf8',
                backgroundColor: 'rgba(56,189,248,0.08)',
                fill: true, tension: 0.4,
                pointBackgroundColor: '#38bdf8',
                pointRadius: 4, pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { beginAtZero: true, max: 10, grid: { color: '#1e293b' }, ticks: { color: '#94a3b8', stepSize: 2 } },
                x: { grid: { display: false }, ticks: { color: '#94a3b8' } }
            }
        }
    });
}


// ─────────────────────────────────────────────────────────────
// AI COACHING
// ─────────────────────────────────────────────────────────────
function _renderAICoaching(d) {
    const feed        = document.getElementById('ai-coaching-feed');
    const scoreEl     = document.getElementById('ai-score-num');
    const priorityEl  = document.getElementById('ai-priority-action');
    const priorityTxt = document.getElementById('ai-priority-text');
    if (!feed) return;

    // Score badge colour
    if (scoreEl) {
        scoreEl.textContent = d.overallScore;
        scoreEl.style.color = _scoreGrade(d.overallScore).color;
    }

    // ── Build coaching messages ──
    const msgs = [];

    // Tasks
    if (d.activeTasks === 0)
        msgs.push({ t: 'info',    i: '📋', m: "Task board is empty. Start the day by adding at least 3 tasks." });
    else if (d.taskProgress === 100)
        msgs.push({ t: 'success', i: '🏆', m: `All ${d.doneTasks} tasks done! Exceptional execution. Plan tomorrow now.` });
    else if (d.taskProgress >= 70)
        msgs.push({ t: 'success', i: '✅', m: `${d.taskProgress}% tasks done — strong work. Push through the remaining ${d.activeTasks - d.doneTasks}.` });
    else if (d.taskProgress < 30 && d.activeTasks > 0)
        msgs.push({ t: 'warning', i: '⚠️', m: `Only ${d.taskProgress}% of tasks done. Pick your #1 priority task and start it now.` });

    // Habits
    if (d.totalHabits === 0)
        msgs.push({ t: 'info',    i: '🔁', m: "No habits set. Add 3 keystone habits to build your daily system." });
    else if (d.habitRate === 100)
        msgs.push({ t: 'success', i: '💪', m: "All habits completed! Consistency like this compounds massively over time." });
    else if (d.habitRate < 50)
        msgs.push({ t: 'warning', i: '🔁', m: `Habits at ${d.habitRate}%. Which ones can you still do in the next hour?` });

    // Streak
    if (d.streak >= 14)
        msgs.push({ t: 'success', i: '🔥', m: `${d.streak}-day streak! You're building world-class consistency. Protect it today.` });
    else if (d.streak >= 5)
        msgs.push({ t: 'info',    i: '🔥', m: `${d.streak}-day streak. Don't break the chain.` });
    else if (d.streak === 0)
        msgs.push({ t: 'warning', i: '📅', m: "No active streak. Log one focus session today to start your chain." });

    // Goals
    if (d.goals.length === 0)
        msgs.push({ t: 'info',    i: '🎯', m: "No goals defined. Set at least one 90-day goal to give your work direction." });
    else if (d.avgGoalProg >= 75)
        msgs.push({ t: 'success', i: '🚀', m: `Goal progress at ${d.avgGoalProg}% avg — finish line is near! Schedule the last 25%.` });
    else if (d.avgGoalProg < 20)
        msgs.push({ t: 'warning', i: '🎯', m: `Goals only at ${d.avgGoalProg}% avg. Do one action on your most important goal today.` });

    // Finance
    if (d.balance < 0)
        msgs.push({ t: 'danger',  i: '💸', m: `Spending exceeds income by ${Math.abs(d.balance).toLocaleString()} AED. Review budget categories immediately.` });
    else if (d.savingsRate >= 30)
        msgs.push({ t: 'success', i: '💰', m: `${d.savingsRate}% savings rate — excellent. Consider allocating surplus to investments.` });
    else if (d.savingsRate < 10 && d.savingsRate >= 0)
        msgs.push({ t: 'warning', i: '💰', m: `Savings rate at ${d.savingsRate}%. Target 20%+ by cutting non-essential spending.` });

    // Focus
    if (d.weeklyHours === 0)
        msgs.push({ t: 'info',    i: '⏱', m: "No focus hours logged this week. Use Time Tracker to measure your deep work." });
    else if (d.weeklyHours < 10)
        msgs.push({ t: 'warning', i: '⏱', m: `${d.weeklyHours.toFixed(1)}h focus this week. Target 20h for peak performance.` });
    else if (d.weeklyHours >= 20)
        msgs.push({ t: 'success', i: '⏱', m: `${d.weeklyHours.toFixed(1)}h focus this week — outstanding. Schedule recovery time too.` });

    // Docs
    if (d.expired.length > 0)
        msgs.push({ t: 'danger',  i: '📄', m: `${d.expired.length} document(s) expired: ${d.expired.map(x => x.name).join(', ')}. Renew immediately.` });
    if (d.soonDocs.length > 0)
        msgs.push({ t: 'warning', i: '📄', m: `${d.soonDocs.length} document(s) expiring soon. Prepare renewals in Document Vault.` });

    // Studies
    if (d.studies.length > 0) {
        const totalL = d.studies.reduce((s, st) => s + (st.lessons?.length || 0), 0);
        const doneL  = d.studies.reduce((s, st) => s + (st.lessons?.filter(l => l.done).length || 0), 0);
        const sr     = totalL > 0 ? Math.round((doneL / totalL) * 100) : 0;
        if (sr < 30)
            msgs.push({ t: 'info',    i: '📚', m: `Study progress at ${sr}%. Open one course today and complete at least one lesson.` });
        else if (sr >= 80)
            msgs.push({ t: 'success', i: '📚', m: `${sr}% of lessons completed. Close to finishing — keep the momentum!` });
    }

    // Fallback
    if (msgs.length === 0)
        msgs.push({ t: 'info', i: '🧠', m: "Start logging your activity to unlock personalised coaching insights." });

    // ── Render ──
    const C = { success: '#10b981', warning: '#f59e0b', danger: '#ef4444', info: '#38bdf8' };
    const B = { success: 'rgba(16,185,129,0.07)', warning: 'rgba(245,158,11,0.07)', danger: 'rgba(239,68,68,0.07)', info: 'rgba(56,189,248,0.07)' };

    feed.innerHTML = msgs.slice(0, 6).map(m => `
        <div class="ai-msg" style="border-left-color:${C[m.t]}; background:${B[m.t]};">
            <span class="ai-msg__icon">${m.i}</span>
            <span class="ai-msg__text">${m.m}</span>
        </div>`).join('');

    // Priority action (highest severity)
    const top = msgs.find(m => m.t === 'danger') || msgs.find(m => m.t === 'warning');
    if (top && priorityEl && priorityTxt) {
        priorityTxt.textContent  = top.m;
        priorityEl.style.display = 'flex';
        priorityEl.style.borderColor = C[top.t];
        priorityEl.style.color       = C[top.t];
    } else if (priorityEl) {
        priorityEl.style.display = 'none';
    }

    AiCoach.updateDashboardSummary(Object.assign({}, d, {
        prompt: localStorage.getItem('aiCoachPrompt') || ''
    }));
}


// ─────────────────────────────────────────────────────────────
// AI COACH LM STUDIO INTEGRATION
// ─────────────────────────────────────────────────────────────
const AiCoach = {
    endpoint: localStorage.getItem('aiCoachEndpoint') || 'http://192.168.112.1:1234',
    model:    localStorage.getItem('aiCoachModel') || 'qwen-3.5-9b',
    summary:  {},

    apiUrl() {
        let url = this.endpoint.replace(/\/$/, '');
        return `${url}/v1/chat/completions`;
    },

    updateDashboardSummary(data) {
        this.summary = data;
        const promptEl = document.getElementById('ai-coach-prompt');
        if (promptEl && !promptEl.value) {
            promptEl.value = data.prompt || '';
        }
    },

    setStatus(message, isError = false) {
        const status = document.getElementById('ai-coach-status');
        if (!status) return;
        status.textContent = message;
        status.style.color = isError ? '#f87171' : 'var(--text-dim)';
    },

    showResponse(text) {
        const response = document.getElementById('ai-coach-response');
        if (!response) return;
        response.textContent = text;
        response.style.display = text ? 'block' : 'none';
    },

    clearPrompt() {
        const promptEl = document.getElementById('ai-coach-prompt');
        if (promptEl) promptEl.value = '';
        localStorage.removeItem('aiCoachPrompt');
        this.showResponse('');
        this.setStatus('Prompt cleared. Enter a new question or daily summary.');
    },

    async submitPrompt() {
        const promptEl = document.getElementById('ai-coach-prompt');
        if (!promptEl) return;
        const prompt = promptEl.value.trim();
        if (!prompt) {
            this.setStatus('Please enter your daily note or question for the AI Coach.', true);
            return;
        }

        localStorage.setItem('aiCoachPrompt', prompt);
        this.setStatus('Sending your prompt to LM Studio...');
        this.showResponse('');

        const payload = {
            model: this.model,
            messages: [
                {
                    role: 'system',
                    content: 'You are an AI coach that helps the user reflect on their daily activity, suggest improvements, answer questions, and provide emotional support based on their notes.'
                },
                {
                    role: 'user',
                    content: this.buildUserMessage(prompt)
                }
            ],
            temperature: 0.8,
            max_tokens: 400
        };

        try {
            const response = await fetch(this.apiUrl(), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`LM Studio error ${response.status}: ${errorText}`);
            }
            const data = await response.json();
            const message = this.extractMessage(data);
            this.showResponse(message);
            this.setStatus('AI Coach answer received.');
        } catch (err) {
            console.error('AI Coach fetch failed', err);
            this.setStatus('Unable to reach LM Studio. Check the endpoint and CORS settings.', true);
            this.showResponse(err.message || 'Unknown error');
        }
    },

    buildUserMessage(prompt) {
        const summary = this.summary || {};
        const parts = [];
        parts.push('Daily note / question:');
        parts.push(prompt);
        parts.push('\n---\nCurrent dashboard summary:\n');
        if (summary.taskProgress != null) parts.push(`Task progress: ${summary.taskProgress}%`);
        if (summary.habitRate != null) parts.push(`Habit completion: ${summary.habitRate}%`);
        if (summary.avgGoalProg != null) parts.push(`Goal progress: ${summary.avgGoalProg}%`);
        if (summary.weeklyHours != null) parts.push(`Focus hours this week: ${summary.weeklyHours}`);
        if (summary.balance != null) parts.push(`Finance balance: ${summary.balance}`);
        if (summary.overallScore != null) parts.push(`Overall OS score: ${summary.overallScore}`);
        parts.push('\nPlease provide tailored suggestions, answers, or advice in a supportive coaching tone.');
        return parts.join('\n');
    },

    extractMessage(data) {
        if (!data) return 'No response from model.';
        if (data.choices?.[0]?.message?.content) return data.choices[0].message.content.trim();
        if (data.choices?.[0]?.text) return data.choices[0].text.trim();
        return JSON.stringify(data, null, 2);
    }
};


// ─────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────
function _parse(key) {
    try { return JSON.parse(localStorage.getItem(key)); } catch { return null; }
}

function _setText(id, val) {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
}

function _scoreGrade(score) {
    if (score >= 85) return { text: '🏆 Elite — World-class execution!',       color: '#10b981' };
    if (score >= 70) return { text: '🚀 High Performer — Stay consistent.',    color: '#3b82f6' };
    if (score >= 50) return { text: '📈 Building Momentum — Push harder.',     color: '#f59e0b' };
    if (score >= 30) return { text: '⚠️ Needs Focus — Pick one area today.',   color: '#f97316' };
    return              { text: '🔴 Low Activity — Start with one task now.',   color: '#ef4444' };
}


// ─────────────────────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => renderDashboard());
