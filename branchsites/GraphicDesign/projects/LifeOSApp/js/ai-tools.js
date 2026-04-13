const AITools = {
    // Load saved data or fall back to defaults.
    db: JSON.parse(localStorage.getItem('os_ai_directory')) || {
        "Coding & Dev": [
            { name: "Cursor", desc: "AI-native code editor", link: "https://cursor.sh" },
            { name: "v0.dev", desc: "Generative UI for React", link: "https://v0.dev" }
        ],
        "Engineering Tools": [
            { name: "WolframAlpha", desc: "Computational intelligence", link: "https://wolframalpha.com" }
        ]
    },

    init() {
        this.renderFolders();
        this.setupForm();
    },

    setupForm() {
        const form = document.getElementById('ai-tool-form');
        form.onsubmit = (e) => {
            e.preventDefault();
            this.saveTool();
        };
    },

    renderFolders() {
        const container = document.getElementById('folders-container');
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

        if (!this.db[folder]) this.db[folder] = [];
        
        this.db[folder].push({ name, desc, link });
        this.saveToStorage();
        this.renderFolders();
        this.closeModal();
        alert("Tool saved successfully!");
    },

    deleteTool(folder, index) {
        if(confirm("Delete this tool?")) {
            this.db[folder].splice(index, 1);
            if(this.db[folder].length === 0) delete this.db[folder];
            this.saveToStorage();
            this.renderFolders();
            document.getElementById('tools-display-area').style.display = 'none';
        }
    },

    openAddModal() { document.getElementById('ai-modal').style.display = 'flex'; },
    closeModal() { document.getElementById('ai-modal').style.display = 'none'; },
    saveToStorage() { localStorage.setItem('os_ai_directory', JSON.stringify(this.db)); }
};

document.addEventListener('DOMContentLoaded', () => AITools.init());
