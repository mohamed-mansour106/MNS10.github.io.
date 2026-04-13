/****************xp system planner************** */

const PlannerXP = {
    xp: parseInt(localStorage.getItem("planner_xp")) || 0,
    level: parseInt(localStorage.getItem("planner_level")) || 1,

    add(amount) {
        this.xp += amount;

        const needed = this.getNeeded();

        while (this.xp >= needed) {
            this.xp -= needed;
            this.level++;
            this.levelUp();
        }

        this.save();
        this.render();
    },

    getNeeded() {
        return 100 + (this.level * 50);
    },

    levelUp() {
        alert(`📅 Planner Level Up! Level ${this.level}`);
    },

    save() {
        localStorage.setItem("planner_xp", this.xp);
        localStorage.setItem("planner_level", this.level);
    },

    render() {
        const needed = this.getNeeded();
        const percent = (this.xp / needed) * 100;

        const bar = document.getElementById("planner-xp-fill");
        const text = document.getElementById("planner-xp-text");
        const levelText = document.getElementById("planner-level-text");

        if (bar) bar.style.width = percent + "%";
        if (text) text.textContent = `${this.xp} / ${needed} XP`;
        if (levelText) levelText.textContent = `Level ${this.level}`;
    }
};

const PlannerRPG = {

    data: JSON.parse(localStorage.getItem("planner_rpg")) || {
        xp: 0,
        level: 1,
        streak: 0,
        lastDoneDate: null,
        combo: 0
    },

    addXP(amount, task) {

        this.handleStreak();

        const multiplier = this.getMultiplier();
        const finalXP = Math.round(amount * multiplier);

        this.data.xp += finalXP;
        this.data.combo++;

        const needed = this.getXPNeeded();

        while (this.data.xp >= needed) {
            this.data.xp -= needed;
            this.data.level++;
            this.levelUp();
        }

        this.save();
        this.render();

        return finalXP;
    },

    getXPNeeded() {
        return 100 + (this.data.level * 60);
    },

    getMultiplier() {

        let m = 1;

        if (this.data.combo >= 5) m = 2;
        else if (this.data.combo >= 3) m = 1.5;

        if (this.data.streak >= 3) m += 0.2;

        return m;
    },

    handleStreak() {
        const today = new Date().toDateString();

        if (this.data.lastDoneDate !== today) {
            this.data.streak++;
            this.data.lastDoneDate = today;
            this.data.combo = 0;
        }
    },

    levelUp() {
        this.popup(`🎉 Planner Level Up! Level ${this.data.level}`);
    },

    popup(text) {
        const el = document.createElement("div");

        el.innerHTML = `
        <div style="
            position:fixed;
            top:20px;
            right:20px;
            background:linear-gradient(135deg,#38bdf8,#a855f7);
            color:white;
            padding:12px 18px;
            border-radius:12px;
            font-weight:bold;
            z-index:99999;
        ">
            ${text}
        </div>`;

        document.body.appendChild(el);
        setTimeout(() => el.remove(), 2000);
    },

    save() {
        localStorage.setItem("planner_rpg", JSON.stringify(this.data));
    },

    render() {

        const needed = this.getXPNeeded();
        const percent = (this.data.xp / needed) * 100;

        const bar = document.getElementById("planner-xp-fill");
        const text = document.getElementById("planner-xp-text");
        const level = document.getElementById("planner-level-text");
        const streak = document.getElementById("planner-streak");

        if (bar) bar.style.width = percent + "%";
        if (text) text.textContent = `${this.data.xp} / ${needed} XP`;
        if (level) level.textContent = `Level ${this.data.level}`;
        if (streak) streak.textContent = `🔥 Streak ${this.data.streak}`;
    }
};

function showXPToast(amount) {
    const el = document.createElement("div");

    el.innerHTML = `
        <div style="
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #0ea5e9;
            color: white;
            padding: 10px 15px;
            border-radius: 10px;
            font-weight: bold;
            z-index: 99999;
            animation: fadeIn 0.3s ease;
        ">
            +${amount} XP
        </div>
    `;

    document.body.appendChild(el);

    setTimeout(() => el.remove(), 1500);
}


/***********planner******************* */




const Planner = {
    // 1. تحميل البيانات من الـ LocalStorage أو إنشاء مصفوفة فارغة
    tasks: JSON.parse(localStorage.getItem('userTasks')) || [],

    init() {
        this.renderTasks();
    },

    // 2. إضافة مهمة جديدة
    addTask() {
        document.getElementById('task-modal').style.display = 'flex';
        document.getElementById('modal-task-title').value = '';
        document.getElementById('modal-task-title').focus();

        // نظام التعرف التلقائي على التاج بناءً على الكلمات
        let tag = 'General';
        const lowerTitle = title.toLowerCase();

        
        
        this.tasks.push(newTask);
        this.saveAndRender();
    },

    closeModal() {
        document.getElementById('task-modal').style.display = 'none';
    },


    saveTaskFromModal() {
        const title = document.getElementById('modal-task-title').value;
        let tag = document.getElementById('modal-task-tag').value;
        const priority = document.getElementById('modal-task-priority').value;

        if (!title) return;

        // إذا اختار المستخدم Auto-Detect أو لم يغير الاختيار
        if (tag === 'Auto') {
            const lowerTitle = title.toLowerCase();
            if (lowerTitle.includes('calc') || lowerTitle.includes('report') || lowerTitle.includes('test')) {
                tag = 'Field Op';
            } else if (lowerTitle.includes('study') || lowerTitle.includes('academy') || lowerTitle.includes('code')) {
                tag = 'Academy';
            } else if (lowerTitle.includes('gym') || lowerTitle.includes('workout') || lowerTitle.includes('run')) {
                tag = 'Fitness';
            } else {
                tag = 'General';
            }
        }

        const newTask = {
            id: 'task-' + Date.now(),
            title: title,
            status: 'todo',
            tag: tag,
            priority: priority,
            archived: false
        };
        
        this.tasks.push(newTask);
        this.saveAndRender();
        this.closeModal();
    },

    // 3. حفظ البيانات ورسمها
    saveAndRender() {
        localStorage.setItem('userTasks', JSON.stringify(this.tasks));
        this.renderTasks();
    },

    // 4. رسم المهام في الأعمدة الصحيحة
    renderTasks() {
        // تفريغ القوائم الحالية
        document.getElementById('todo-list').innerHTML = '';
        document.getElementById('doing-list').innerHTML = '';
        document.getElementById('done-list').innerHTML = '';

        // الخطوة الأهم: فلترة المهام لعرض غير المؤرشفة فقط في البورد
        const activeTasks = this.tasks.filter(task => !task.archived);

        activeTasks.forEach(task => {
            const tagClass = `tag-${task.tag.toLowerCase().replace(' ', '-')}`;
            const taskHTML = `
                <div class="task-item" draggable="true" ondragstart="drag(event)" id="${task.id}">
                    <span class="tag ${tagClass}">${task.tag}</span>
                    <p style="margin-top: 8px; font-weight: 500;">${task.title}</p>
                    <div style="margin-top: 10px; display: flex; justify-content: flex-end;">
                        <i class="fa-solid fa-trash" onclick="Planner.deleteTask('${task.id}')" style="cursor:pointer; color: #ef4444; font-size: 11px; opacity: 0.6;"></i>
                    </div>
                </div>
            `;

            const listId = `${task.status}-list`;
            const listContainer = document.getElementById(listId);
            if(listContainer) {
                listContainer.insertAdjacentHTML('beforeend', taskHTML);
            }
        });

        // تحديث عداد الإنجاز اليومي (حتى للمؤرشفة اليوم)
        const today = new Date().toLocaleDateString();
        const completedToday = this.tasks.filter(t => t.status === 'done' && t.completedAt === today).length;
        
        const progressText = document.getElementById('progress-text');
        if(progressText) {
            progressText.innerHTML = `✅ <strong>${completedToday}</strong> tasks completed today. Keep going, Mohamed!`;
        }
    },


    // حذف مهمة
    deleteTask(id) {
        if(confirm('Delete this task?')) {
            this.tasks = this.tasks.filter(t => t.id !== id);
            this.saveAndRender();
        }
    },

    

    // داخل كائن Planner
    updateTaskStatus(taskId, newStatus) {
        const task = this.tasks.find(t => t.id === taskId);
        if (!task) return;

        const wasDone = task.status === 'done';
        task.status = newStatus;

        // 🎯 لما المهمة تتحول لـ DONE
        if (newStatus === 'done' && !wasDone) {

            // 🧠 Reset combo لو عدى يوم
            if (Date.now() - ComboSystem.lastActionTime > 86400000) {
                ComboSystem.reset();
            }

            task.completedAt = new Date().toLocaleDateString();

            // 🎯 BASE XP
            let xp = 10;

            // 🎯 Priority
            if (task.priority === 'high') xp = 20;
            if (task.priority === 'medium') xp = 12;
            if (task.priority === 'low') xp = 5;

            // 🎯 Tag Bonus
            if (task.tag === 'Field Op') xp += 5;
            if (task.tag === 'Academy') xp += 3;
            if (task.tag === 'Work') xp += 3;
            if (task.tag === 'Study') xp += 5;
            if (task.tag === 'Health') xp += 2;

            const gained = PlannerRPG.addXP(xp, task);

            showComboPopup(PlannerRPG.data.combo, PlannerRPG.getMultiplier());

            showXPToast(gained);

            // 🎮 COMBO SYSTEM
            //PlannerXP.add(xp);
            const combo = ComboSystem.add();
            const multiplier = ComboSystem.getMultiplier();

            const finalXP = Math.round(xp * multiplier);

            // ✅ XP مرة واحدة بس
            //XPSystem.add(finalXP, `Task Completed x${multiplier}`);
            //document.getElementById("xp-toast").innerText = `+${gained} XP`;
            // 🔥 UI
            //showXPToast(finalXP);
            showComboPopup(combo, multiplier);
        }

        // ❌ لو رجعتها من done
        if (wasDone && newStatus !== 'done') {
            XPSystem.add(-5, "Task Uncompleted");
        }

        this.saveAndRender();
    },

    // ميزة الأرشفة: تخفي المهام المنتهية من البورد لكن تتركها في الـ LocalStorage
    archiveDone() {
        if (confirm("Move completed tasks to history?")) {
            this.tasks = this.tasks.map(task => {
                if (task.status === 'done') {
                    return { ...task, archived: true };
                }
                return task;
            });
            this.saveAndRender();
            alert("Tasks moved to Archive. Your board is fresh now!");
        }
    },

    showHistory() {
        const modal = document.getElementById('history-modal');
        const content = document.getElementById('history-content');
        modal.style.display = 'flex';
        
        const archivedTasks = this.tasks.filter(t => t.archived).reverse(); // الأحدث أولاً
        
        if (archivedTasks.length === 0) {
            content.innerHTML = "<p style='color: var(--text-dim)'>No archived tasks yet.</p>";
            return;
        }

        content.innerHTML = archivedTasks.map(t => `
            <div style="padding: 10px; border-bottom: 1px solid var(--border); margin-bottom: 10px;">
                <span style="font-size: 10px; color: var(--accent);">${t.completedAt}</span>
                <p style="margin: 5px 0;">${t.title} <small style="color:var(--text-dim)">[${t.tag}]</small></p>
            </div>
        `).join('');
    }


};

// تحديث دوال الـ Drag and Drop لتتوافق مع الحفظ
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    const taskId = ev.dataTransfer.getData("text");
    const taskElement = document.getElementById(taskId);
    
    // تحديد العمود الهدف
    const column = ev.target.closest('.kanban-column');
    if (column) {
        const targetList = column.querySelector('.task-list');
        const newStatus = column.id; // 'todo' أو 'doing' أو 'done'
        
        targetList.appendChild(taskElement);
        Planner.updateTaskStatus(taskId, newStatus);
    }
}

// تشغيل النظام عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => Planner.init());
document.addEventListener("DOMContentLoaded", () => {
    PlannerXP.render();
});
document.addEventListener("DOMContentLoaded", () => {
    PlannerRPG.render();
});