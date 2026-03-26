const Projects = {
    currentProjectId: null,
    currentTaskId: null,

    // البيانات الافتراضية في حال عدم وجود بيانات مخزنة
    defaultProjects: [
        {
            id: 1648214400000,
            title: "Well Testing Academy",
            tag: "Education",
            description: "Educational platform for oil & gas community.",
            tasks: [
                { 
                    id: 1, 
                    text: "Record Videos", 
                    subtasks: [{ text: "Intro", done: true }, { text: "Chapter 1", done: false }] 
                }
            ]
        }
    ],

    init() {
        this.renderProjects();
    },

    getProjects() {
        // تأكد من أن كائن Storage معرف لديك، أو استخدم localStorage مباشرة
        const saved = JSON.parse(localStorage.getItem('userProjects')) || [];
        return saved.length > 0 ? saved : this.defaultProjects;
    },

    save(projects) {
        localStorage.setItem('userProjects', JSON.stringify(projects));
        this.renderProjects();
    },

    // حساب نسبة التقدم الكلية للمشروع بناءً على كل الـ subtasks
    calculateProgress(project) {
        if (!project.tasks || project.tasks.length === 0) return 0;
        let totalSubtasks = 0;
        let completedSubtasks = 0;

        project.tasks.forEach(task => {
            task.subtasks.forEach(sub => {
                totalSubtasks++;
                if (sub.done) completedSubtasks++;
            });
        });

        return totalSubtasks === 0 ? 0 : Math.round((completedSubtasks / totalSubtasks) * 100);
    },

    renderProjects() {
        const grid = document.getElementById('projects-grid');
        const projects = this.getProjects();

        grid.innerHTML = projects.map(project => {
            const progress = this.calculateProgress(project);
            return `
            <div class="stat-card" onclick="openTaskModal(${project.id})" style="background:#1e293b; padding:20px; border-radius:12px; border:1px solid #334155; cursor:pointer; transition:0.3s; position:relative;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:12px; color:#38bdf8; font-weight:bold;">${project.tag}</span>
                    <i class="fa-solid fa-trash-can" 
                    onclick="event.stopPropagation(); deleteProject(${project.id})" 
                    style="color:#ef4444; font-size:14px; cursor:pointer; padding:5px; transition:0.2s;"
                    onmouseover="this.style.transform='scale(1.2)'"
                    onmouseout="this.style.transform='scale(1)'"
                    title="Delete Project">🗑️
                    </i>
                </div>
                <h3 style="color:white; margin:10px 0;">${project.title}</h3>
                <div style="background:#334155; height:6px; border-radius:10px; overflow:hidden; margin-top:15px;">
                    <div style="width:${progress}%; background:#38bdf8; height:100%; transition:0.5s;"></div>
                </div>
                <div style="text-align:right; font-size:11px; color:#94a3b8; margin-top:5px;">${progress}% Complete</div>
            </div>`;
        }).join('');
    }

};

// --- وظائف المودال (Modals) ---

function openProjectModal() { 
    document.getElementById('projectModal').style.display = 'flex'; 
}

function closeProjectModal() { 
    document.getElementById('projectModal').style.display = 'none'; 
}

function saveNewProject() {
    const title = document.getElementById('p-title').value;
    const tag = document.getElementById('p-tag').value;
    if (!title) return alert("Title required");

    const projects = Projects.getProjects();
    projects.push({ 
        id: Date.now(), 
        title, 
        tag, 
        tasks: [], 
        description: "Click to manage tasks" 
    });
    
    Projects.save(projects);
    closeProjectModal();
    // تصفير الحقول
    document.getElementById('p-title').value = '';
    document.getElementById('p-tag').value = '';
}

// 1. تعديل وظيفة النقر على المشروع
function openTaskModal(projectId) {
    Projects.currentProjectId = projectId;
    const project = Projects.getProjects().find(p => p.id === projectId);
    
    // إظهار منطقة المهام وتحديث العنوان
    const taskArea = document.getElementById('tasks-selection-area');
    taskArea.style.display = 'block';
    document.getElementById('selected-project-name').innerText = project.title;
    
    // إخفاء منطقة المهام الفرعية حتى يتم اختيار مهمة
    document.getElementById('subtasks-selection-area').style.display = 'none';
    
    renderMainTasksUI();
    
    // إذا كنت لا تزال تريد فتح المودال أيضاً، اترك هذا السطر:
    // document.getElementById('taskModal').style.display = 'flex';
}

// 2. دالة لرسم المهام في الصندوق الجديد
function renderMainTasksUI() {
    const grid = document.getElementById('main-tasks-grid');
    const project = Projects.getProjects().find(p => p.id === Projects.currentProjectId);
    
    if (!project.tasks || project.tasks.length === 0) {
        grid.innerHTML = '<p style="color:#475569;">No tasks in this project.</p>';
        return;
    }

    grid.innerHTML = project.tasks.map(task => {
        const doneCount = task.subtasks.filter(s => s.done).length;
        const total = task.subtasks.length;
        const percent = total === 0 ? 0 : Math.round((doneCount / total) * 100);

        return `
        <div onclick="selectTaskUI(${task.id})" style="background:#1e293b; padding:15px; border-radius:10px; border:1px solid #334155; cursor:pointer; transition:0.2s;">
            <div style="color:white; font-weight:bold; margin-bottom:10px;">${task.text}</div>
            <div style="background:#0f172a; height:4px; border-radius:10px;">
                <div style="width:${percent}%; background:#38bdf8; height:100%;"></div>
            </div>
            <div style="font-size:10px; color:#94a3b8; margin-top:5px; text-align:right;">${percent}%</div>
        </div>`;
    }).join('');
}

// 3. تعديل وظيفة النقر على المهمة لتحديث صندوق المهام الفرعية
function selectTaskUI(taskId) {
    Projects.currentTaskId = taskId;
    const project = Projects.getProjects().find(p => p.id === Projects.currentProjectId);
    const task = project.tasks.find(t => t.id === taskId);
    
    const subArea = document.getElementById('subtasks-selection-area');
    subArea.style.display = 'block';
    document.getElementById('selected-task-name').innerText = task.text;
    
    renderSubtasksUI();
}

// 4. دالة لرسم المهام الفرعية في الصندوق السفلي
function renderSubtasksUI() {
    const list = document.getElementById('subtasks-display-list');
    const project = Projects.getProjects().find(p => p.id === Projects.currentProjectId);
    const task = project.tasks.find(t => t.id === Projects.currentTaskId);

    if (task.subtasks.length === 0) {
        list.innerHTML = '<p style="color:#475569;">No subtasks found.</p>';
        return;
    }

    list.innerHTML = task.subtasks.map((sub, index) => `
        <div style="display:flex; align-items:center; gap:12px; padding:10px; border-bottom:1px solid #1e293b;">
            <input type="checkbox" ${sub.done ? 'checked' : ''} 
                onchange="toggleSubtaskStatusUI(${index})" 
                style="width:18px; height:18px; accent-color:#22c55e; cursor:pointer;">
            <span style="color:${sub.done ? '#475569' : 'white'}; font-size:14px; ${sub.done ? 'text-decoration:line-through' : ''}">
                ${sub.text}
            </span>
        </div>
    `).join('');
}

// 5. وظيفة تحديث الحالة من الصندوق الجديد
function toggleSubtaskStatusUI(index) {
    const projects = Projects.getProjects();
    const project = projects.find(p => p.id === Projects.currentProjectId);
    const task = project.tasks.find(t => t.id === Projects.currentTaskId);
    
    task.subtasks[index].done = !task.subtasks[index].done;
    
    Projects.save(projects); // يحفظ ويحدث الواجهة الرئيسية
    renderMainTasksUI();     // يحدث شريط تقدم المهمة
    renderSubtasksUI();      // يحدث قائمة المهام الفرعية
}


function closeTaskModal() { 
    document.getElementById('taskModal').style.display = 'none'; 
    Projects.renderProjects(); 
}

// --- وظائف لوحة المهام (Boards Logic) ---

// --- تحديث عرض المهام الرئيسية لتشمل أزرار الحذف والتعديل ---
function renderMainTasks() {
    const list = document.getElementById('main-tasks-list');
    const project = Projects.getProjects().find(p => p.id === Projects.currentProjectId);
    if (!project) return;

    list.innerHTML = project.tasks.map(task => {
        const isSelected = task.id === Projects.currentTaskId;
        const doneCount = task.subtasks.filter(s => s.done).length;
        const total = task.subtasks.length;
        const percent = total === 0 ? 0 : Math.round((doneCount / total) * 100);

        return `
        <div onclick="selectTask(${task.id})" style="background:${isSelected ? '#1e293b' : '#0a0f1a'}; padding:12px; border-radius:8px; margin-bottom:10px; border:1px solid ${isSelected ? '#38bdf8' : '#334155'}; cursor:pointer; position:relative;">
            <div style="display:flex; justify-content:space-between; align-items:start;">
                <div style="color:white; font-size:14px; margin-bottom:5px; flex:1;">${task.text}</div>
                <div style="display:flex; gap:10px; margin-left:10px;">
                    <i class="fa-solid fa-pen" onclick="event.stopPropagation(); editMainTask(${task.id})" style="font-size:12px; color:#94a3b8; cursor:pointer;"></i>
                    <i class="fa-solid fa-trash" onclick="event.stopPropagation(); deleteMainTask(${task.id})" style="font-size:12px; color:#ef4444; cursor:pointer;"></i>
                </div>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:5px;">
                <div style="background:#334155; flex:1; height:4px; border-radius:10px; margin-right:10px;">
                    <div style="width:${percent}%; background:#38bdf8; height:100%;"></div>
                </div>
                <span style="font-size:10px; color:#94a3b8;">${percent}%</span>
            </div>
        </div>`;
    }).join('');
}

// --- تحديث عرض المهام الفرعية لتشمل أزرار الحذف والتعديل ---
function renderSubtasks() {
    const list = document.getElementById('subtasks-list');
    const project = Projects.getProjects().find(p => p.id === Projects.currentProjectId);
    const task = project.tasks.find(t => t.id === Projects.currentTaskId);
    
    if(!task) return;

    list.innerHTML = task.subtasks.map((sub, index) => `
        <div style="background:#1e293b; padding:10px; border-radius:6px; margin-bottom:8px; display:flex; align-items:center; justify-content:space-between;">
            <div style="display:flex; align-items:center; gap:10px; flex:1;">
                <input type="checkbox" ${sub.done ? 'checked' : ''} onchange="toggleSubtaskStatus(${index})" style="accent-color:#38bdf8; cursor:pointer;">
                <span style="font-size:13px; color:${sub.done ? '#475569' : 'white'}; ${sub.done ? 'text-decoration:line-through;' : ''}">${sub.text}</span>
            </div>
            <div style="display:flex; gap:10px;">
                <i class="fa-solid fa-pen" onclick="editSubtask(${index})" style="font-size:11px; color:#94a3b8; cursor:pointer;">🖊️</i>
                <button class="fa-solid fa-trash" onclick="deleteSubtask(${index})" style="font-size:11px; color:#ef4444; cursor:pointer;">🗑️</button>
            </div>
        </div>
    `).join('');
}


function selectTask(taskId) {
    Projects.currentTaskId = taskId;
    const project = Projects.getProjects().find(p => p.id === Projects.currentProjectId);
    const task = project.tasks.find(t => t.id === taskId);
    
    const board = document.getElementById('subtasks-board');
    board.style.opacity = "1";
    board.style.pointerEvents = "all";
    document.getElementById('active-task-name').innerText = task.text;
    
    renderMainTasks(); 
    renderSubtasks();
}

function renderSubtasks() {
    const list = document.getElementById('subtasks-list');
    const project = Projects.getProjects().find(p => p.id === Projects.currentProjectId);
    const task = project.tasks.find(t => t.id === Projects.currentTaskId);
    
    if(!task) return;

    list.innerHTML = task.subtasks.map((sub, index) => `
        <div style="background:#1e293b; padding:10px; border-radius:6px; margin-bottom:8px; display:flex; align-items:center; gap:10px;">
            <input type="checkbox" ${sub.done ? 'checked' : ''} onchange="toggleSubtaskStatus(${index})" style="accent-color:#38bdf8; cursor:pointer;">
            <span style="font-size:13px; color:${sub.done ? '#475569' : 'white'}; ${sub.done ? 'text-decoration:line-through;' : ''}">${sub.text}</span>
        </div>
    `).join('');
}

function addNewTask() {
    const input = document.getElementById('new-task-input');
    if (!input.value) return;

    const projects = Projects.getProjects();
    const project = projects.find(p => p.id === Projects.currentProjectId);
    
    project.tasks.push({ 
        id: Date.now(), 
        text: input.value, 
        subtasks: [] 
    });
    
    Projects.save(projects);
    input.value = '';
    renderMainTasks();
}

function addSubtask() {
    if (!Projects.currentTaskId) return;
    
    const subtext = prompt("Enter small task name:");
    if (!subtext) return;

    const projects = Projects.getProjects();
    const project = projects.find(p => p.id === Projects.currentProjectId);
    const task = project.tasks.find(t => t.id === Projects.currentTaskId);
    
    task.subtasks.push({ text: subtext, done: false });
    
    Projects.save(projects);
    renderSubtasks();
    renderMainTasks();
}

function toggleSubtaskStatus(subIndex) {
    const projects = Projects.getProjects();
    const project = projects.find(p => p.id === Projects.currentProjectId);
    const task = project.tasks.find(t => t.id === Projects.currentTaskId);
    
    task.subtasks[subIndex].done = !task.subtasks[subIndex].done;
    
    Projects.save(projects);
    renderSubtasks();
    renderMainTasks();
}
// --- وظائف الحذف (Delete) ---
function deleteMainTask(taskId) {
    if(!confirm("حذف هذه المهمة وكل المهام الفرعية التابعة لها؟")) return;
    const projects = Projects.getProjects();
    const project = projects.find(p => p.id === Projects.currentProjectId);
    project.tasks = project.tasks.filter(t => t.id !== taskId);
    
    if(Projects.currentTaskId === taskId) Projects.currentTaskId = null;
    Projects.save(projects);
    renderMainTasks();
}


// إضافة مهمة رئيسية بسرعة من الواجهة
function addQuickTask() {
    const input = document.getElementById('quick-task-input');
    if (!input.value || !Projects.currentProjectId) return;

    const projects = Projects.getProjects();
    const project = projects.find(p => p.id === Projects.currentProjectId);
    
    project.tasks.push({ 
        id: Date.now(), 
        text: input.value, 
        subtasks: [] 
    });
    
    Projects.save(projects);
    input.value = '';
    renderMainTasksUI(); // تحديث الصندوق فوراً
}

// إضافة مهمة فرعية بسرعة من الواجهة
function addQuickSubtask() {
    const input = document.getElementById('quick-subtask-input');
    if (!input.value || !Projects.currentTaskId) return;

    const projects = Projects.getProjects();
    const project = projects.find(p => p.id === Projects.currentProjectId);
    const task = project.tasks.find(t => t.id === Projects.currentTaskId);
    
    task.subtasks.push({ text: input.value, done: false });
    
    Projects.save(projects);
    input.value = '';
    renderSubtasksUI();  // تحديث قائمة المهام الفرعية
    renderMainTasksUI(); // تحديث نسبة تقدم المهمة الرئيسية في الصندوق الذي فوقها
}

// تحديث وظيفة الحفظ لتشمل تحديث الواجهة السريعة
Projects.save = function(projects) {
    localStorage.setItem('userProjects', JSON.stringify(projects));
    this.renderProjects(); // تحديث الكروت الكبيرة
};

// وظيفة تبديل الحالة المحدثة لضمان التزامن
function toggleSubtaskStatusUI(index) {
    const projects = Projects.getProjects();
    const project = projects.find(p => p.id === Projects.currentProjectId);
    const task = project.tasks.find(t => t.id === Projects.currentTaskId);
    
    task.subtasks[index].done = !task.subtasks[index].done;
    
    Projects.save(projects);
    renderMainTasksUI(); 
    renderSubtasksUI();
}



function deleteSubtask(subIndex) {
    const projects = Projects.getProjects();
    const project = projects.find(p => p.id === Projects.currentProjectId);
    const task = project.tasks.find(t => t.id === Projects.currentTaskId);
    task.subtasks.splice(subIndex, 1);
    
    Projects.save(projects);
    renderSubtasks();
    renderMainTasks();
}

// --- وظائف التعديل (Edit) ---
function editMainTask(taskId) {
    const projects = Projects.getProjects();
    const project = projects.find(p => p.id === Projects.currentProjectId);
    const task = project.tasks.find(t => t.id === taskId);
    
    const newName = prompt("تعديل اسم المهمة:", task.text);
    if(newName) {
        task.text = newName;
        Projects.save(projects);
        renderMainTasks();
    }
}

function editSubtask(subIndex) {
    const projects = Projects.getProjects();
    const project = projects.find(p => p.id === Projects.currentProjectId);
    const task = project.tasks.find(t => t.id === Projects.currentTaskId);
    
    const newName = prompt("تعديل المهمة الفرعية:", task.subtasks[subIndex].text);
    if(newName) {
        task.subtasks[subIndex].text = newName;
        Projects.save(projects);
        renderSubtasks();
    }
}


function deleteProject(projectId) {
    if (!confirm("Are You Sure for Deleting the project.")) return;

    const projects = Projects.getProjects();
    const updatedProjects = projects.filter(p => p.id !== projectId);
    
    // حفظ التغييرات وتحديث الواجهة
    Projects.save(updatedProjects);
}


let overallChart, barChart;

function initCharts() {
    const ctx1 = document.getElementById('overallChart').getContext('2d');
    const ctx2 = document.getElementById('barChart').getContext('2d');

    // الدائرة المركزية (Doughnut)
    overallChart = new Chart(ctx1, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [0, 100],
                backgroundColor: ['#38bdf8', '#0f172a'],
                borderWidth: 0,
                borderRadius: 5
            }]
        },
        options: { cutout: '80%', plugins: { tooltip: { enabled: false } } }
    });

    // الرسم البياني بالأعمدة (Bar)
    barChart = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'Progress %',
                data: [],
                backgroundColor: '#38bdf8',
                borderRadius: 5
            }]
        },
        options: {
            scales: {
                y: { beginAtZero: true, max: 100, grid: { color: '#334155' }, ticks: { color: '#94a3b8' } },
                x: { grid: { display: false }, ticks: { color: '#94a3b8' } }
            },
            plugins: { legend: { display: false } }
        }
    });
}

function updateCharts() {
    const projects = Projects.getProjects();
    if (projects.length === 0) return;

    const progresses = projects.map(p => Projects.calculateProgress(p));
    const avgProgress = Math.round(progresses.reduce((a, b) => a + b, 0) / projects.length);
    const labels = projects.map(p => p.title);

    // تحديث الدائرة
    overallChart.data.datasets[0].data = [avgProgress, 100 - avgProgress];
    document.getElementById('chart-percent').innerText = avgProgress + '%';
    overallChart.update();

    // تحديث الأعمدة
    barChart.data.labels = labels;
    barChart.data.datasets[0].data = progresses;
    barChart.update();
}

// تعديل دالة الحفظ لتقوم بتحديث الرسم البياني تلقائياً
const originalSave = Projects.save;
Projects.save = function(projects) {
    localStorage.setItem('userProjects', JSON.stringify(projects));
    this.renderProjects();
    updateCharts(); // تحديث الرسوم عند أي تغيير
};

// تشغيل الرسوم عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    Projects.init();
    initCharts();
    updateCharts();
});


function convertIdeaToProject(index) {
    const ideas = Ideas.getIdeas();
    const idea = ideas[index];

    if (!confirm(`Do You Want to Convert "${idea.title}" to an Engineering Project? `)) return;

    // 1. جلب المشاريع الحالية
    const projects = Projects.getProjects();

    // 2. إنشاء كائن المشروع الجديد بناءً على بيانات الفكرة
    const newProject = {
        id: Date.now(),
        title: idea.title,
        tag: idea.category, // نستخدم الفئة كـ Tag
        description: idea.content, // نضع محتوى الفكرة في الوصف
        tasks: [] // يبدأ بدون مهام
    };

    // 3. إضافة المشروع وحفظه
    projects.push(newProject);
    Projects.save(projects);

    // 4. حذف الفكرة من الـ Brain Dump لأنها أصبحت مشروعاً
    ideas.splice(index, 1);
    Ideas.saveIdeas(ideas);

    alert("🚀 Your Idea already Converted to Engineering project Tab, Go to Start Your Project.");
}



// البدء عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => Projects.init());
