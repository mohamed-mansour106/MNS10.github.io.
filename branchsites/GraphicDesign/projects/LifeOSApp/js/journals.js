const Journal = {
    db: JSON.parse(localStorage.getItem('os_journal')) || [],
    editingId: null, // Track if we are editing an existing entry

    init() {
        const dateEl = document.getElementById('entry-date');
        if(dateEl) {
            dateEl.textContent = new Date().toLocaleDateString('en-GB', { 
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
            });
        }
        this.generateNewPrompt(); 
        this.renderArchive();
    },

    prompts: [
        "What was the biggest technical challenge you faced in your code today, and how did you debug it?",
        "If you could optimize one piece of equipment or process at the well site, what would it be?",
        "What is a new Full Stack concept or syntax you started mastering this week?",
        "Describe a moment today where you felt proud of your engineering precision.",
        "What did today teach you about time management or handling high-pressure situations?",
        "How did your 'Well Testing Toolbox' or Life OS help you organize your thoughts today?",
        "What is one specific coding goal you want to achieve before the weekend ends?",
        "If you could restart today, what would you do differently to be more productive?",
        "Which 'Bug' or technical error took most of your time today? What was the root cause?",
        "How are you balancing the physical demands of field operations with your software learning today?",
        "What progress did you make on the 'Well Testing Academy' content today?",
        "Write down one piece of feedback you received today and how you plan to act on it."
    ],

    

    generateNewPrompt() {
        const promptEl = document.getElementById('daily-prompt-text');
        if(promptEl) {
            const randomIndex = Math.floor(Math.random() * this.prompts.length);
            promptEl.textContent = this.prompts[randomIndex];
        }
    },


    saveEntry() {
        const text = document.getElementById('journal-text').value;
        const mood = document.getElementById('journal-mood').value;
        const tag = document.getElementById('journal-tag').value || 'General';

        if (!text.trim()) return alert("Write something first!");

        if (this.editingId) {
            // Update existing entry
            const index = this.db.findIndex(e => e.id === this.editingId);
            this.db[index] = { ...this.db[index], text, mood, tag };
            this.editingId = null;
            alert("Entry updated!");
        } else {
            // Create new entry
            const entry = {
                id: Date.now(),
                date: new Date().toLocaleDateString('en-GB'),
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                mood, tag, text
            };
            this.db.unshift(entry);
            // 🎮 XP SYSTEM
            const gainedXP = JournalXP.addXP(text, mood);
            alert("Reflection saved!");
        }

        this.save();
        this.renderArchive();
        this.resetForm();
    },

    deleteEntry(id, event) {
        event.stopPropagation(); // Prevents triggering viewEntry
        if (confirm("Are you sure you want to delete this memory?")) {
            this.db = this.db.filter(entry => entry.id !== id);
            this.save();
            this.renderArchive();
        }
    },

    editEntry(id, event) {
        event.stopPropagation(); 
        const entry = this.db.find(e => e.id === id);
        if (entry) {
            document.getElementById('journal-text').value = entry.text;
            document.getElementById('journal-mood').value = entry.mood;
            document.getElementById('journal-tag').value = entry.tag;
            this.editingId = id;
            
            // Scroll to editor
            document.getElementById('journal-text').focus();
        }
    },

    resetForm() {
        document.getElementById('journal-text').value = '';
        document.getElementById('journal-tag').value = '';
        this.editingId = null;
    },

    renderArchive(entries = this.db) {
        const container = document.getElementById('journal-archive');
        container.innerHTML = entries.map(entry => `
            <div class="journal-entry-card">
                <div class="entry-actions">
                    <button class="btn-icon edit" onclick="Journal.editEntry(${entry.id}, event)">
                        <i class="fa-solid fa-pen-to-square">🖊️</i>
                    </button>
                    <button class="btn-icon delete" onclick="Journal.deleteEntry(${entry.id}, event)">
                        <i class="fa-solid fa-trash">🗑️</i>
                    </button>
                </div>
                <div class="date">${entry.date} - ${entry.time}</div>
                <div style="font-size: 12px; margin-top: 3px;">
                    <span>${entry.mood}</span> • <span style="color:var(--accent)">#${entry.tag}</span>
                </div>
                <div class="preview">${entry.text}</div>
            </div>
        `).join('');
    },

    save() { localStorage.setItem('os_journal', JSON.stringify(this.db)); },

    search(query) {
        const filtered = this.db.filter(e => 
            e.text.toLowerCase().includes(query.toLowerCase()) || 
            e.tag.toLowerCase().includes(query.toLowerCase())
        );
        this.renderArchive(filtered);
    },

    viewEntry(id) {
        const entry = this.db.find(e => e.id === id);
        if (entry) {
            // يمكنك هنا فتح Modal لعرض النص كاملاً أو استبدال النص في منطقة الكتابة
            if(confirm("Load this entry into editor to read/edit?")) {
                document.getElementById('journal-text').value = entry.text;
                document.getElementById('journal-mood').value = entry.mood;
                document.getElementById('journal-tag').value = entry.tag;
            }
        }
    },

    save() { localStorage.setItem('os_journal', JSON.stringify(this.db)); }
};

document.addEventListener('DOMContentLoaded', () => Journal.init());


//******************journal XP********************************* */

const JournalXP = {

    data: JSON.parse(localStorage.getItem("journal_xp")) || {
        xp: 0,
        level: 1,
        streak: 0,
        lastDate: null
    },

    addXP(text, mood) {

        // 🧠 XP حسب طول الكتابة
        let xp = Math.min(text.length / 20, 50); // max 50

        // 💡 Mood bonus
        if (mood.includes("🔥")) xp += 10;
        if (mood.includes("🧠")) xp += 8;
        if (mood.includes("🌊")) xp += 5;

        // 🔥 streak
        this.handleStreak();

        // bonus streak
        xp += this.data.streak * 2;

        xp = Math.round(xp);

        this.data.xp += xp;

        const needed = this.getNeeded();

        while (this.data.xp >= needed) {
            this.data.xp -= needed;
            this.data.level++;
            this.levelUp();
        }

        this.save();
        this.render();

        showXPToast(xp);

        return xp;
    },

    handleStreak() {
        const today = new Date().toDateString();

        if (this.data.lastDate !== today) {
            this.data.streak++;
            this.data.lastDate = today;
        }
    },

    getNeeded() {
        return 100 + (this.data.level * 60);
    },

    levelUp() {
        alert(`📖 Journal Level Up! Level ${this.data.level}`);
    },

    render() {
        const needed = this.getNeeded();
        const percent = (this.data.xp / needed) * 100;

        document.getElementById("journal-xp-bar").style.width = percent + "%";
        document.getElementById("journal-xp-text").innerText = `${this.data.xp} / ${needed} XP`;
        document.getElementById("journal-level").innerText = `Level ${this.data.level}`;
        document.getElementById("journal-streak").innerText = `🔥 Streak ${this.data.streak}`;
    },

    save() {
        localStorage.setItem("journal_xp", JSON.stringify(this.data));
    }
};

document.addEventListener("DOMContentLoaded", () => {
    JournalXP.render();
});