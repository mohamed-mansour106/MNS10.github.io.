// --- نظام العادات (Habits) ---
const Habits = {
    list: JSON.parse(localStorage.getItem('userHabits')) || [],

    init() {
        this.render();
    },

    // زرار Add New Habit
    add() {
        const name = prompt("Enter habit name (e.g., Reading, Gym):");
        if (!name) return;
        
        this.list.push({
            id: 'habit-' + Date.now(),
            name: name,
            completed: false
        });
        this.saveAndRender();
    },

    toggle(id) {
        const habit = this.list.find(h => h.id === id);
        if (habit) {
            habit.completed = !habit.completed;
            this.saveAndRender();
        }
    },

    delete(id) {
        if(confirm('Delete this habit?')) {
            this.list = this.list.filter(h => h.id !== id);
            this.saveAndRender();
        }
    },

    saveAndRender() {
        localStorage.setItem('userHabits', JSON.stringify(this.list));
        this.render();
    },

    render() {
        const container = document.getElementById('habit-list');
        if (!container) return;
        
        container.innerHTML = this.list.map(h => `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; background: #0f172a; border-radius: 8px; margin-bottom: 10px; border-left: 3px solid ${h.completed ? '#10b981' : '#3b82f6'}">
                <span style="${h.completed ? 'text-decoration: line-through; color: #64748b' : ''}">${h.name}</span>
                <div style="display:flex; gap:10px; align-items:center;">
                    <input type="checkbox" ${h.completed ? 'checked' : ''} onclick="Habits.toggle('${h.id}')">
                    <i class="fa-solid fa-xmark" onclick="Habits.delete('${h.id}')" style="color:#ef4444; cursor:pointer; font-size:12px;"></i>
                </div>
            </div>
        `).join('');
    }
};

// --- نظام الصحة (Health) ---
const Health = {
    stats: JSON.parse(localStorage.getItem('userHealth')) || { weight: 70, water: 0 },

    init() {
        this.updateUI();
    },

    // زرار Update Health Data (بيفتح المودال)
    updateModal() {
        document.getElementById('health-modal').style.display = 'flex';
        document.getElementById('input-weight').value = this.stats.weight;
        document.getElementById('input-water').value = this.stats.water;
    },

    // حفظ البيانات من المودال
    save() {
        this.stats.weight = document.getElementById('input-weight').value;
        this.stats.water = document.getElementById('input-water').value;
        
        localStorage.setItem('userHealth', JSON.stringify(this.stats));
        this.updateUI();
        document.getElementById('health-modal').style.display = 'none';
    },

    updateUI() {
        if(document.getElementById('health-weight')) 
            document.getElementById('health-weight').textContent = `${this.stats.weight} kg`;
        if(document.getElementById('health-water')) 
            document.getElementById('health-water').textContent = `${this.stats.water}/8 Glasses`;
    }
};

// تشغيل الأنظمة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    Habits.init();
    Health.init();
});
