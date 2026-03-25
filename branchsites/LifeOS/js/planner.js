const Planner = {
    // 1. تحميل البيانات من الـ LocalStorage أو إنشاء مصفوفة فارغة
    tasks: JSON.parse(localStorage.getItem('userTasks')) || [],

    init() {
        this.renderTasks();
    },

    // 2. إضافة مهمة جديدة
    addTask() {
    const title = prompt("Enter task description:");
    if (!title) return;

    // نظام التعرف التلقائي على التاج بناءً على الكلمات
    let tag = 'General';
    const lowerTitle = title.toLowerCase();

    if (lowerTitle.includes('calc') || lowerTitle.includes('report') || lowerTitle.includes('test')) {
        tag = 'Field Op';
    } else if (lowerTitle.includes('study') || lowerTitle.includes('academy') || lowerTitle.includes('code')) {
        tag = 'Academy';
    } else if (lowerTitle.includes('gym') || lowerTitle.includes('workout') || lowerTitle.includes('run')) {
        tag = 'Fitness';
    }

    const newTask = {
        id: 'task-' + Date.now(),
        title: title,
        status: 'todo',
        tag: tag
    };
    
    this.tasks.push(newTask);
    this.saveAndRender();
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
        if (task) {
            task.status = newStatus;
            if (newStatus === 'done') {
                task.completedAt = new Date().toLocaleDateString(); // تسجيل تاريخ الإنجاز
            }
            this.saveAndRender();
            // لا نحتاج لإعادة الرسم هنا لأن الـ Drag/Drop حرك العنصر فعلياً
        }
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
