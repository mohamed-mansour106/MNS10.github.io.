const Ideas = {
    init() {
        this.renderIdeas();
    },

    getIdeas() {
        return JSON.parse(localStorage.getItem('userIdeas')) || [];
    },

    // تم تعديل هذه الدالة لتقبل باراميتر يمنع إعادة الرسم إذا كنا "نسحب" العنصر
    saveIdeas(ideas, shouldRender = true) {
        localStorage.setItem('userIdeas', JSON.stringify(ideas));
        if (shouldRender) this.renderIdeas();
    },

    renderIdeas() {
        const board = document.getElementById('ideas-board');
        if (!board) return;

        const ideas = this.getIdeas();
        const noteColors = ['#fef08a', '#bbf7d0', '#bfdbfe', '#fecdd3', '#ddd6fe', '#fed7aa'];

        board.innerHTML = ideas.map((idea, index) => {
            const randomColor = noteColors[index % noteColors.length];
            const posX = idea.x || (Math.random() * 50 + 20);
            const posY = idea.y || (Math.random() * 50 + 100);
            const zIndex = idea.zIndex || 10;

            // حساب زاوية ميل عشوائية ثابتة لكل نوتة (أو مخزنة)
            const rotation = idea.rotation || (Math.random() * 10 - 5); 
            // تخزين الزاوية عشان ما تتغيرش كل شوية
            idea.rotation = rotation;

            return `
            <div class="sticky-note" 
                 onmousedown="window.startDragging(event, ${index})"
                 style="position: absolute; left: ${posX}px; top: ${posY}px; width: 220px; background: #1e293b; 
                        padding: 15px; border-radius: 8px; border-top: 10px solid ${randomColor}; 
                        cursor: grab; box-shadow: 5px 5px 15px rgba(0,0,0,0.3); z-index: ${zIndex}; transform: rotate(${rotation}deg); transition: transform 0.2s ease;">
                
                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <span style="font-size: 10px; background: rgba(255, 255, 255, 0.05); color: ${randomColor}; padding: 4px 8px; border-radius: 4px; font-weight: bold;">${idea.category}</span>
                    <div style="display: flex; gap: 10px;">
                        <button onclick="event.stopPropagation(); window.convertIdeaToProject(${index})" title="Convert" style="background: none; border: none; cursor: pointer;">🚀</button>
                        <button onclick="event.stopPropagation(); window.deleteIdea(${index})" title="Delete" style="background: none; border: none; cursor: pointer;">🗑️</button>
                    </div>
                </div>

                <h3 style="color: white; margin: 15px 0 5px 0; font-size: 16px; pointer-events: none;">${idea.title}</h3>
                <p style="color: #94a3b8; font-size: 12px; line-height: 1.4; pointer-events: none;">${idea.content}</p>
                <div style="margin-top: 10px; font-size: 9px; color: #475569; pointer-events: none;">${idea.date}</div>
            </div>`;
        }).join('');
    }
};

// --- GLOBAL ATTACHMENTS FOR HTML ONCLICK ---

window.openIdeaModal = () => document.getElementById('ideaModal').style.display = 'flex';
window.closeIdeaModal = () => document.getElementById('ideaModal').style.display = 'none';

window.saveIdea = function() {
    const title = document.getElementById('idea-title').value;
    const content = document.getElementById('idea-content').value;
    const category = document.getElementById('idea-category').value;

    if (!title || !content) return alert("Please fill in both title and content!");

    const ideas = Ideas.getIdeas();
    ideas.unshift({
        title, content, category,
        x: 50, y: 150, zIndex: 100,
        date: new Date().toLocaleDateString()
    });

    Ideas.saveIdeas(ideas);
    window.closeIdeaModal();
    document.getElementById('idea-title').value = '';
    document.getElementById('idea-content').value = '';
};

window.deleteIdea = function(index) {
    if (!confirm("Delete this thought?")) return;
    const ideas = Ideas.getIdeas();
    ideas.splice(index, 1);
    Ideas.saveIdeas(ideas);
};


// --- نظام السحب المطور (بدون تكرار) ---
let currentDraggingIndex = null;
let offset = { x: 0, y: 0 };

window.startDragging = function(e, index) {
    if (e.target.tagName === 'BUTTON') return;

    currentDraggingIndex = index;
    const notes = Ideas.getIdeas();
    const noteElement = e.currentTarget;
    
    // رفع الـ Z-index فوراً للعنصر اللي بنحركه
    notes.forEach(n => n.zIndex = 10);
    notes[index].zIndex = 1000;
    noteElement.style.zIndex = 1000;

    const rect = noteElement.getBoundingClientRect();
    const board = document.getElementById('ideas-board').getBoundingClientRect();
    
    offset.x = e.clientX - rect.left;
    offset.y = e.clientY - rect.top;
    
    noteElement.style.cursor = 'grabbing';
    noteElement.style.cursor = 'grabbing';

    // دالة التحريك (تغير الـ Style فقط بدون مسح الـ HTML)
    function move(e) {
        if (currentDraggingIndex === null) return;
        
        let newX = e.clientX - board.left - offset.x;
        let newY = e.clientY - board.top - offset.y;

        noteElement.style.left = newX + 'px';
        noteElement.style.top = newY + 'px';
        
        // تحديث البيانات في المصفوفة (بدون حفظ في localStorage الآن لضمان السرعة)
        notes[currentDraggingIndex].x = newX;
        notes[currentDraggingIndex].y = newY;
    }

    
    // دالة التوقف (هنا نحفظ في الذاكرة مرة واحدة فقط)
    function stop() {
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', stop);
        
        if (currentDraggingIndex !== null) {
            // حفظ البيانات في localStorage "بدون" إعادة رسم الـ HTML بالكامل
            Ideas.saveIdeas(notes, false); 
            currentDraggingIndex = null;
            noteElement.style.cursor = 'grab';
        }
    }

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', stop);
};

// Start
document.addEventListener('DOMContentLoaded', () => Ideas.init());

