const GoalSystem = {
    // 1. Data Structure (Saves to 'localStorage')
    db: JSON.parse(localStorage.getItem('os_goals_v1')) || [],

    init() {
        this.render();
        this.setupForms();
    },

    setupForms() {
        // Add Goal Form
        document.getElementById('goal-form').onsubmit = (e) => {
            e.preventDefault();
            this.saveGoal();
        };
        // Edit Goal Form
        document.getElementById('edit-goal-form').onsubmit = (e) => {
            e.preventDefault();
            this.updateGoal();
        };
    },

    // 2. Open / Close Modal
    openModal() { document.getElementById('goal-modal').style.display = 'flex'; },
    closeModal() { document.getElementById('goal-modal').style.display = 'none'; },

    openEditModal(id) {
        const goal = this.db.find(g => g.id === id);
        if (!goal) return;

        document.getElementById('edit-goal-id').value = goal.id;
        document.getElementById('edit-goal-title').value = goal.title;
        document.getElementById('edit-goal-progress').value = goal.progress;
        document.getElementById('progress-val').innerText = goal.progress;

        document.getElementById('edit-goal-modal').style.display = 'flex';
    },
    closeEditModal() { document.getElementById('edit-goal-modal').style.display = 'none'; },


    // 3. Save Goal
    saveGoal() {
        const title = document.getElementById('goal-title').value;
        const type = document.getElementById('goal-type').value;
        const cat = document.getElementById('goal-cat').value;
        const desc = document.getElementById('goal-desc').value;
        const date = document.getElementById('goal-date').value;

        this.db.unshift({
            id: Date.now(),
            title,
            type,
            cat,
            desc,
            date: new Date(date).toLocaleDateString('en-GB'),
            rawDate: date,
            progress: 0 
        });

        this.sync();
        this.closeModal();
        document.getElementById('goal-form').reset();
    },

    updateGoal() {
        const id = parseInt(document.getElementById('edit-goal-id').value);
        const title = document.getElementById('edit-goal-title').value;
        const progress = parseInt(document.getElementById('edit-goal-progress').value);

        const index = this.db.findIndex(g => g.id === id);
        if (index !== -1) {
            this.db[index].title = title;
            this.db[index].progress = progress;
            this.sync();
            this.closeEditModal();
        }
    },

    getDeadlineDate(goal) {
        if (goal.rawDate) {
            return new Date(goal.rawDate);
        }
        if (goal.date) {
            const parts = goal.date.split('/');
            if (parts.length === 3) {
                return new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
            }
        }
        return null;
    },

    getDaysRemaining(goal) {
        const deadline = this.getDeadlineDate(goal);
        if (!deadline || isNaN(deadline.getTime())) return null;
        const now = new Date();
        const diff = Math.ceil((deadline.setHours(23, 59, 59, 999) - now) / 86400000);
        return diff;
    },

    formatDueText(goal) {
        const days = this.getDaysRemaining(goal);
        if (days === null) return 'Deadline date not set';
        if (days < 0) return 'Expired';
        if (days === 0) return 'Due today';
        if (days === 1) return 'Due tomorrow';
        return `Due in ${days} days`;
    },

    deleteGoal(id) {
        if (confirm("Delete this goal?")) {
            this.db = this.db.filter(g => g.id !== id);
            this.sync();
        }
    },

    sync() {
        localStorage.setItem('os_goals_v1', JSON.stringify(this.db));
        this.render();
    },

    // 5. Render to UI
    render() {
        const grid = document.getElementById('goals-grid');
        const normalize = this.db.map(g => ({ ...g, type: g.type || 'Monthly' }));
        const yearly = normalize.filter(g => g.type === 'Yearly');
        const monthly = normalize.filter(g => g.type === 'Monthly');
        const weekly = normalize.filter(g => g.type === 'Weekly');

        const renderCards = (items) => items.map(g => `
            <div class="goal-card" onclick="GoalSystem.openEditModal(${g.id})" style="cursor: pointer;">
                <div class="goal-card-header">
                    <span class="goal-tag">${g.type || 'Goal'}</span>
                    <button onclick="event.stopPropagation(); GoalSystem.deleteGoal(${g.id})" 
                        style="background:none; border:none; color:#ef4444; cursor:pointer;">
                        <i class="fa-solid fa-trash">🗑️</i>
                    </button>
                </div>
                
                <h3 class="goal-title">${g.title}</h3>
                <p class="goal-desc">${g.desc}</p>
                
                <div class="goal-meta">
                    <i class="fa-solid fa-calendar-days">📅</i> ${g.date}
                </div>
                <div class="goal-countdown">${this.formatDueText(g)}</div>

                <div class="goal-progress-container">
                    <div class="progress-text-row">
                        <span>Progress</span>
                        <strong>${g.progress}%</strong>
                    </div>
                    <div class="progress-track">
                        <div class="progress-bar" style="width: ${g.progress}%; background: ${g.progress === 100 ? '#10b981' : 'var(--accent)'}"></div>
                    </div>
                </div>
            </div>
        `).join('');

        const renderSection = (title, items) => `
            <div class="goal-board-column">
                <h2 style="margin-bottom: 14px; color: #e2e8f0;">${title}</h2>
                ${items.length > 0 ? renderCards(items) : `<p style="color: #94a3b8; font-size: 13px;">No ${title.toLowerCase()} yet.</p>`}
            </div>
        `;

        grid.innerHTML = `
            <div class="goal-board-grid">
                ${renderSection('Yearly Goals', yearly)}
                ${renderSection('Monthly Goals', monthly)}
                ${renderSection('Weekly Goals', weekly)}
            </div>
        `;
    },

    saveToStorage() {
        localStorage.setItem('os_goals_v1', JSON.stringify(this.db));
    }
};

// Start the goal system on load
document.addEventListener('DOMContentLoaded', () => GoalSystem.init());
