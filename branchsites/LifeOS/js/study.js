const StudyManager = {
    currentStudyId: null,

    init() {
        this.renderStudies();
    },

    getStudies() {
        return JSON.parse(localStorage.getItem('userStudies')) || [];
    },

    save(studies) {
        localStorage.setItem('userStudies', JSON.stringify(studies));
        this.renderStudies();
    },

    calculateProgress(study) {
        if (!study.lessons || study.lessons.length === 0) return 0;
        const completed = study.lessons.filter(l => l.done).length;
        return Math.round((completed / study.lessons.length) * 100);
    },

    renderStudies() {
        const grid = document.getElementById('study-grid');
        if (!grid) return;
        const studies = this.getStudies();

        grid.innerHTML = studies.map(study => {
            const progress = this.calculateProgress(study);
            return `
            <div class="stat-card" onclick="openStudyDetails(${study.id})" style="background:#1e293b; padding:20px; border-radius:12px; border:1px solid #334155; cursor:pointer; transition:0.3s;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:12px; color:#22c55e; font-weight:bold;">${study.instructor || 'Self-Study'}</span>
                    <i class="fa-solid fa-trash" onclick="event.stopPropagation(); deleteStudy(${study.id})" style="color:#ef4444; cursor:pointer; font-size:12px;">🗑️</i>
                </div>
                <h3 style="color:white; margin:10px 0;">${study.title}</h3>
                <div style="background:#334155; height:6px; border-radius:10px; overflow:hidden; margin-top:15px;">
                    <div style="width:${progress}%; background:#22c55e; height:100%; transition:0.5s;"></div>
                </div>
                <div style="display:flex; justify-content:space-between; font-size:11px; color:#94a3b8; margin-top:5px;">
                    <span>${study.lessons.length} Lessons</span>
                    <span>${progress}%</span>
                </div>
            </div>`;
        }).join('');
    }
};

// --- وظائف التحكم بالدراسة (Study) ---
function openStudyModal() { 
    document.getElementById('studyModal').style.display = 'flex'; 
}

function closeStudyModal() { 
    document.getElementById('studyModal').style.display = 'none'; 
}

function saveNewStudy() {
    const title = document.getElementById('s-title').value;
    const instructor = document.getElementById('s-instructor').value;
    
    if (!title) return alert("Please enter a study name");

    const studies = StudyManager.getStudies();
    studies.push({
        id: Date.now(),
        title: title,
        instructor: instructor,
        lessons: []
    });

    StudyManager.save(studies);
    closeStudyModal();
    document.getElementById('s-title').value = '';
    document.getElementById('s-instructor').value = '';
}

function openStudyDetails(studyId) {
    StudyManager.currentStudyId = studyId;
    const studies = StudyManager.getStudies();
    const study = studies.find(s => s.id === studyId);
    if (!study) return;

    document.getElementById('lessons-area').style.display = 'block';
    document.getElementById('selected-study-name').innerText = study.title;
    renderLessonsUI();
}

function deleteStudy(id) {
    if (!confirm("Are you sure you want to delete this study?")) return;
    const studies = StudyManager.getStudies().filter(s => s.id !== id);
    StudyManager.save(studies);
    document.getElementById('lessons-area').style.display = 'none';
    document.getElementById('book-section').style.display = 'none';
}

// --- وظائف الدروس (Lessons) ---
function renderLessonsUI() {
    const list = document.getElementById('lessons-display-list');
    const studies = StudyManager.getStudies();
    const study = studies.find(s => s.id === StudyManager.currentStudyId);

    if (!study || !study.lessons || study.lessons.length === 0) {
        list.innerHTML = '<p style="color:#475569; padding:10px;">No lessons added yet.</p>';
        return;
    }

    list.innerHTML = study.lessons.map((lesson, index) => `
    <div style="display:flex; align-items:center; justify-content:space-between; background:#0f172a; padding:12px; border-radius:8px; border:1px solid #334155;">
        <div style="display:flex; align-items:center; gap:12px; flex:1; cursor:pointer;" onclick="openNoteBook(${index})">
            <input type="checkbox" ${lesson.done ? 'checked' : ''} 
                onclick="event.stopPropagation()" 
                onchange="toggleLessonStatus(${index})" 
                style="width:18px; height:18px; accent-color:#22c55e; cursor:pointer;">
            <span style="color:${lesson.done ? '#475569' : 'white'}; ${lesson.done ? 'text-decoration:line-through' : ''}">
                ${lesson.text} <i class="fa-solid fa-pen-nib" style="font-size:10px; margin-left:10px; opacity:0.5;">📖</i>
            </span>
        </div>
        <i class="fa-solid fa-xmark" onclick="deleteLesson(${index})" style="color:#ef4444; cursor:pointer; font-size:12px;">✖</i>
    </div>`).join('');
}

function addQuickLesson() {
    const input = document.getElementById('quick-lesson-input');
    if (!input.value || !StudyManager.currentStudyId) return;

    const studies = StudyManager.getStudies();
    const study = studies.find(s => s.id === StudyManager.currentStudyId);
    study.lessons.push({ text: input.value, done: false, note: "" });
    
    StudyManager.save(studies);
    input.value = '';
    renderLessonsUI();
}

function toggleLessonStatus(index) {
    const studies = StudyManager.getStudies();
    const study = studies.find(s => s.id === StudyManager.currentStudyId);
    study.lessons[index].done = !study.lessons[index].done;
    StudyManager.save(studies);
    renderLessonsUI();
}

function deleteLesson(index) {
    const studies = StudyManager.getStudies();
    const study = studies.find(s => s.id === StudyManager.currentStudyId);
    study.lessons.splice(index, 1);
    StudyManager.save(studies);
    renderLessonsUI();
    if (activeLessonIndex === index) closeBook();
}

// --- وظائف الكتاب (Note Book) ---
let activeLessonIndex = null;
let currentPageIndex = 0;

function openNoteBook(index) {
    activeLessonIndex = index;
    currentPageIndex = 0; 
    
    const studies = StudyManager.getStudies();
    const study = studies.find(s => s.id === StudyManager.currentStudyId);
    const lesson = study.lessons[index];

    // التأكد من وجود مصفوفة صفحات
    if (!lesson.pages || !Array.isArray(lesson.pages)) {
        lesson.pages = [lesson.note || ""];
        StudyManager.save(studies);
    }

    // تحديث بيانات الغلاف والمحتوى
    document.getElementById('book-title').innerText = lesson.text;
    loadPageContent();
    
    // إظهار القسم (سيظهر الكتاب مغلقاً لأننا لن نضيف كلاس open هنا)
    const bookSection = document.getElementById('book-section');
    const bookEl = document.getElementById('active-book');
    
    bookSection.style.display = 'flex';
    bookSection.style.opacity = '1';
    bookEl.classList.remove('open'); // التأكد أنه مغلق في البداية
}


function saveNote(btn) {
    if (activeLessonIndex === null) return;
    const studies = StudyManager.getStudies();
    const study = studies.find(s => s.id === StudyManager.currentStudyId);
    
    study.lessons[activeLessonIndex].note = document.getElementById('note-text').innerHTML;
    StudyManager.save(studies);
    
    const oldText = btn.innerText;
    btn.innerText = "Saved! ✓";
    setTimeout(() => btn.innerText = oldText, 2000);
}

// دالة الصفحة التالية (مع أنيميشن)
function turnPage() {
    const page = document.getElementById('main-page');
    page.style.transformOrigin = "left center";
    page.style.transition = "0.6s cubic-bezier(0.645, 0.045, 0.355, 1)";
    page.style.transform = "rotateY(-20deg) translateX(-10px)";
    
    setTimeout(() => {
        if(confirm("Do you want to clear this page and move to the Next Page? (Save your work first)")) {
            document.getElementById('note-text').innerHTML = "";
            // هنا يمكنك مستقبلاً تطويرها لحفظ مصفوفة صفحات
        }
        page.style.transform = "rotateY(0deg) translateX(0px)";
    }, 400);
}

// دالة الصفحة السابقة
function prevPage() {
    const page = document.getElementById('main-page');
    page.style.transformOrigin = "left center";
    page.style.transition = "0.6s ease";
    page.style.transform = "rotateY(20deg) translateX(10px)";
    
    setTimeout(() => {
        alert("This is the first page of your notes.");
        page.style.transform = "rotateY(0deg) translateX(0px)";
    }, 400);
}
/******* 
// دالة إغلاق الكتاب مع أنيميشن سلس
function closeBook() {
    const book = document.getElementById('active-book');
    const section = document.getElementById('book-section');
    
    if (book) book.classList.remove('open');
    
    setTimeout(() => {
        section.style.opacity = "0";
        setTimeout(() => {
            section.style.display = 'none';
            section.style.opacity = "1";
        }, 300);
    }, 300);
}

****************/

function closeBook() {
    saveCurrentPage(false);
    const book = document.getElementById('active-book');
    book.classList.remove('open'); // يغلق الغلاف أولاً

    setTimeout(() => {
        document.getElementById('book-section').style.display = 'none';
    }, 600); // انتظر انتهاء أنيميشن الغلاف قبل الإخفاء
}




// دالة التنسيق المحسنة
function applyFormat(command, value = null) {
    document.execCommand(command, false, value);
    document.getElementById('note-text').focus();
}


// تشغيل النظام عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => StudyManager.init());


/****************************************************** */


function loadPageContent() {
    const studies = StudyManager.getStudies();
    const study = studies.find(s => s.id === StudyManager.currentStudyId);
    const lesson = study.lessons[activeLessonIndex];
    
    const content = lesson.pages[currentPageIndex] || "";
    document.getElementById('note-text').innerHTML = content;
    document.getElementById('page-number').innerText = `Page ${currentPageIndex + 1}`;
    
    // تعطيل زر "السابق" إذا كنا في الصفحة الأولى
    document.getElementById('prev-btn').style.opacity = currentPageIndex === 0 ? "0.3" : "1";
    document.getElementById('prev-btn').style.pointerEvents = currentPageIndex === 0 ? "none" : "auto";
}

function changePage(step) {
    // حفظ الصفحة الحالية قبل الانتقال
    saveCurrentPage(false);

    const studies = StudyManager.getStudies();
    const study = studies.find(s => s.id === StudyManager.currentStudyId);
    const lesson = study.lessons[activeLessonIndex];

    const newIndex = currentPageIndex + step;

    if (newIndex < 0) return;

    // إذا ضغطنا Next ولم تكن هناك صفحة تالية، ننشئ واحدة جديدة
    if (newIndex >= lesson.pages.length) {
        if(confirm("Create a new page?")) {
            lesson.pages.push("");
            StudyManager.save(studies);
        } else {
            return;
        }
    }

    // أنيميشن بسيط للانتقال
    const page = document.getElementById('main-page');
    page.style.opacity = "0";
    
    setTimeout(() => {
        currentPageIndex = newIndex;
        loadPageContent();
        page.style.opacity = "1";
    }, 200);
}

function saveCurrentPage(showVisualFeedback = true) {
    if (activeLessonIndex === null) return;
    
    const studies = StudyManager.getStudies();
    const study = studies.find(s => s.id === StudyManager.currentStudyId);
    const lesson = study.lessons[activeLessonIndex];
    
    lesson.pages[currentPageIndex] = document.getElementById('note-text').innerHTML;
    StudyManager.save(studies);

    if (showVisualFeedback) {
        const btn = document.getElementById('save-btn');
        btn.innerText = "Saved!";
        btn.style.background = "#10b981";
        setTimeout(() => {
            btn.innerText = "Save";
            btn.style.background = "#22c55e";
        }, 1500);
    }
}

// حفظ تلقائي أثناء الكتابة
function autoSave() {
    if (activeLessonIndex === null) return; // إضافة هذا السطر
    // بقية الكود...
    const studies = StudyManager.getStudies();
    const study = studies.find(s => s.id === StudyManager.currentStudyId);
    study.lessons[activeLessonIndex].pages[currentPageIndex] = document.getElementById('note-text').innerHTML;
    localStorage.setItem('userStudies', JSON.stringify(studies));
}



function toggleBook() {
    const book = document.getElementById('active-book');
    book.classList.toggle('open');
}



