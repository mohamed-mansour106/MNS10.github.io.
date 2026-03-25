// js/journal.js

const Journal = {
    init() {
        this.renderArchive();
    },

    saveEntry() {
        const text = document.getElementById('journal-text').value;
        const mood = document.getElementById('journal-mood').value;
        const date = new Date().toLocaleDateString();

        if (!text) return alert("Write something first!");

        const newEntry = { date, mood, text };
        
        // Use our Storage service
        const entries = Storage.get('journalEntries');
        entries.unshift(newEntry); // Put newest at the top
        Storage.save('journalEntries', entries);

        // Clear input and refresh
        document.getElementById('journal-text').value = "";
        this.renderArchive();
    },

    renderArchive() {
        const container = document.getElementById('journal-archive');
        const entries = Storage.get('journalEntries');

        if (entries.length === 0) {
            container.innerHTML = `<p style="color: var(--text-dim); font-size: 13px;">No entries yet.</p>`;
            return;
        }

        container.innerHTML = entries.map(entry => `
            <div style="background: rgba(255,255,255,0.03); padding: 12px; border-radius: 8px; border-left: 3px solid var(--accent);">
                <div style="font-size: 11px; color: var(--accent);">${entry.date} • ${entry.mood}</div>
                <div style="font-size: 13px; margin-top: 5px; color: var(--text-main); line-height: 1.4;">
                    ${entry.text.substring(0, 60)}${entry.text.length > 60 ? '...' : ''}
                </div>
            </div>
        `).join('');
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => Journal.init());
