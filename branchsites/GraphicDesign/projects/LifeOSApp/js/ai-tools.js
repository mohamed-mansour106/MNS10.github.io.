const AITools = {
    storageKey: 'os_ai_directory',
    db: {},

    init() {
        this.db = Storage.get(this.storageKey, {
            'Coding & Dev': [
                { name: 'Cursor', desc: 'AI-native code editor', link: 'https://cursor.sh' },
                { name: 'v0.dev', desc: 'Generative UI for React', link: 'https://v0.dev' }
            ],
            'Engineering Tools': [
                { name: 'WolframAlpha', desc: 'Computational intelligence', link: 'https://wolframalpha.com' }
            ]
        });

        this.renderFolders();
        this.setupForm();
    },

    persist() {
        Storage.save(this.storageKey, this.db);
    },

    setupForm() {
        const form = document.getElementById('ai-tool-form');
        if (!form) return;

        form.onsubmit = event => {
            event.preventDefault();
            this.saveTool();
        };
    },

    renderFolders() {
        const container = document.getElementById('folders-container');
        if (!container) return;

        container.innerHTML = Object.keys(this.db).map(folder => `
            <div class="folder-card" onclick="AITools.openFolder('${folder}')">
                <i class="fa-solid fa-folder"></i>
                <div style="font-weight: bold; color: white;">${folder}</div>
                <div style="font-size: 11px; color: var(--text-dim);">${this.db[folder].length} Tools</div>
            </div>
        `).join('');
    },

    openFolder(folderName) {
        const display = document.getElementById('tools-display-area');
        const list = document.getElementById('tools-list');
        const title = document.getElementById('current-folder-name');

        if (!display || !list || !title) return;

        title.innerHTML = `<i class="fa-solid fa-folder-open"></i> ${folderName}`;
        list.innerHTML = this.db[folderName].map((tool, index) => `
            <div class="ai-tool-item">
                <div style="display: flex; justify-content: space-between;">
                    <a href="${tool.link}" target="_blank">${tool.name} <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    <button onclick="AITools.deleteTool('${folderName}', ${index})" style="background:none; border:none; color:#ef4444; cursor:pointer; font-size:10px;">Delete</button>
                </div>
                <p style="font-size: 12px; color: var(--text-dim); margin: 5px 0;">${tool.desc}</p>
            </div>
        `).join('');

        display.style.display = 'block';
    },

    saveTool() {
        const name = document.getElementById('ai-name').value;
        const folder = document.getElementById('ai-folder').value;
        const desc = document.getElementById('ai-desc').value;
        const link = document.getElementById('ai-link').value;

        if (!name || !folder) return;
        if (!this.db[folder]) this.db[folder] = [];

        this.db[folder].push({ name, desc, link });
        this.persist();
        this.renderFolders();
        this.closeModal();
        alert('Tool saved successfully!');
    },

    deleteTool(folder, index) {
        if (!confirm('Delete this tool?')) return;

        this.db[folder].splice(index, 1);
        if (this.db[folder].length === 0) delete this.db[folder];

        this.persist();
        this.renderFolders();

        const toolsDisplay = document.getElementById('tools-display-area');
        if (toolsDisplay) toolsDisplay.style.display = 'none';
    },

    openAddModal() {
        document.getElementById('ai-modal').style.display = 'flex';
    },

    closeModal() {
        document.getElementById('ai-modal').style.display = 'none';
    }
};

document.addEventListener('DOMContentLoaded', () => AITools.init());
