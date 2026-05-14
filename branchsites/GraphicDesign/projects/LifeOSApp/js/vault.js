const Vault = {
    db: null,
    dbName: "VaultDB",
    storeName: "documents",
    currentPreviewUrl: null,

    async init() {
        await this.initDB();
        this.renderVault();
        const form = document.getElementById('vault-form');
        if (form) {
            form.onsubmit = (e) => {
                e.preventDefault();
                this.handleFormSubmit();
            };
        }
    },

    initDB() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, 1);
            request.onupgradeneeded = (e) => {
                const db = e.target.result;
                if (!db.objectStoreNames.contains(this.storeName)) {
                    db.createObjectStore(this.storeName, { keyPath: "id" });
                }
            };
            request.onsuccess = (e) => {
                this.db = e.target.result;
                resolve();
            };
            request.onerror = (e) => reject(e.target.error);
        });
    },

    async getAllDocs() {
        return new Promise((resolve) => {
            const transaction = this.db.transaction(this.storeName, "readonly");
            const store = transaction.objectStore(this.storeName);
            const request = store.getAll();
            request.onsuccess = () => resolve(request.result);
        });
    },

    async handleFormSubmit() {
        const idInput = document.getElementById('doc-id').value;
        const fileInput = document.getElementById('doc-file');
        const id = idInput ? parseInt(idInput) : Date.now();
        
        let fileData = null;
        let fileType = "";

        if (fileInput.files.length > 0) {
            fileData = fileInput.files[0];
            fileType = fileData.type;
        } else if (idInput) {
            const oldDoc = await this.getDocById(id);
            fileData = oldDoc.file;
            fileType = oldDoc.type;
        }

        const docData = {
            id: id,
            name: document.getElementById('doc-name').value,
            expiryDate: document.getElementById('doc-date').value,
            category: document.getElementById('doc-cat').value,
            notes: document.getElementById('doc-notes').value,
            file: fileData,
            type: fileType,
            updatedAt: new Date()
        };

        const transaction = this.db.transaction(this.storeName, "readwrite");
        transaction.objectStore(this.storeName).put(docData);
        
        transaction.oncomplete = () => {
            this.closeModal();
            this.renderVault();
            this.updateStorageMeter();
        };
    },

    async renderVault(docsToDisplay = null) {
        const container = document.getElementById('vault-grid');
        if (!container) return;

        let docs = docsToDisplay || await this.getAllDocs();
        docs.sort((a, b) => new Date(b.updatedAt || 0) - new Date(a.updatedAt || 0));

        if (docs.length === 0) {
            container.innerHTML = `<p style="color: var(--text-dim); grid-column: 1/-1; text-align:center;">No documents found.</p>`;
        } else {
            container.innerHTML = docs.map(doc => {
                const status = this.calculateStatus(doc.expiryDate);
                const fileIcon = this.getFileIcon(doc.type);
                
                return `
                    <div class="stat-card" style="background: var(--sidebar-bg); padding: 15px; border-radius: 10px; border: 1px solid var(--border); display: flex; flex-direction: column; gap: 10px;">
                        <div style="display:flex; justify-content:space-between; align-items: center;">
                            <span class="tag ${status.class}">${status.label}</span>
                            <div style="display: flex; gap: 8px;">
                                <button onclick="Vault.previewDoc(${doc.id})" title="Preview" style="background:none; border:none; color: var(--text-dim); cursor:pointer;">
                                    <i class="fa-solid fa-eye fa-lg">👁️</i>
                                </button>
                                <button onclick="Vault.downloadFile(${doc.id})" title="Download" style="background:none; border:none; color: var(--accent); cursor:pointer;">
                                    <i class="fa-solid fa-file-arrow-down fa-lg">⬇️</i>
                                </button>
                            </div>
                        </div>
                        
                        <div style="display: flex; align-items: center; gap: 12px; margin: 5px 0;">
                            <i class="${fileIcon}" style="font-size: 28px; color: var(--accent);">📂</i>
                            <div style="overflow: hidden;">
                                <h3 style="color:white; margin:0; font-size: 15px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${doc.name}</h3>
                                <p style="font-size:11px; color:var(--text-dim); margin:0;">${doc.category}</p>
                            </div>
                        </div>

                        <p style="font-size:12px; color:var(--text-dim);">Expires: <b>${doc.expiryDate}</b></p>
                        ${doc.notes ? `<p style="font-size: 11px; color: #94a3b8; font-style: italic; background: rgba(0,0,0,0.2); padding: 5px; border-radius: 4px;">"${doc.notes}"</p>` : ''}
                        
                        <div style="display: flex; gap: 8px; margin-top: auto; padding-top: 10px;">
                            <button onclick="Vault.editDoc(${doc.id})" style="flex: 1; padding: 6px; background: #334155; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;">
                                <i class="fa-solid fa-pen">🖊️</i> Edit
                            </button>
                            <button onclick="Vault.deleteDoc(${doc.id})" style="flex: 1; padding: 6px; background: rgba(239, 68, 68, 0.1); color: #ef4444; border: 1px solid #ef4444; border-radius: 4px; cursor: pointer; font-size: 12px;">
                                <i class="fa-solid fa-trash">🗑️</i> Delete
                            </button>
                        </div>
                    </div>
                `;
            }).join('');
        }
        this.updateStorageMeter();
    },

    // --- الوظائف المساعدة ---
    async getDocById(id) {
        return new Promise((resolve) => {
            const store = this.db.transaction(this.storeName).objectStore(this.storeName);
            const request = store.get(id);
            request.onsuccess = () => resolve(request.result);
        });
    },

    async downloadFile(id) {
        const doc = await this.getDocById(id);
        if (!doc || !doc.file) return alert("No file attached");
        const url = URL.createObjectURL(doc.file);
        const a = document.createElement("a");
        a.href = url;
        a.download = doc.name;
        a.click();
        URL.revokeObjectURL(url);
    },

    async deleteDoc(id) {
        if (confirm('Are you sure you want to delete this document?')) {
            const transaction = this.db.transaction(this.storeName, "readwrite");
            transaction.objectStore(this.storeName).delete(id);
            transaction.oncomplete = () => this.renderVault();
        }
    },

    async editDoc(id) {
        const doc = await this.getDocById(id);
        if (doc) {
            this.openModal(id);
            document.querySelector('#vault-modal h2').innerText = "Edit Document";
            document.getElementById('doc-id').value = doc.id;
            document.getElementById('doc-name').value = doc.name;
            document.getElementById('doc-date').value = doc.expiryDate;
            document.getElementById('doc-cat').value = doc.category;
            document.getElementById('doc-notes').value = doc.notes || '';
        }
    },

    async applyFilters() {
        const searchTerm = document.getElementById('vault-search').value.toLowerCase();
        const category = document.getElementById('vault-filter-cat').value;
        const allDocs = await this.getAllDocs();
        const filtered = allDocs.filter(doc => {
            const matchesSearch = doc.name.toLowerCase().includes(searchTerm) || (doc.notes && doc.notes.toLowerCase().includes(searchTerm));
            const matchesCategory = (category === "All") || (doc.category === category);
            return matchesSearch && matchesCategory;
        });
        this.renderVault(filtered);
    },

    async previewDoc(id) {
        const doc = await this.getDocById(id);
        if (!doc || !doc.file) return alert("No file to preview");
        const modal = document.getElementById('preview-modal');
        const content = document.getElementById('preview-content');
        document.getElementById('preview-title').innerText = doc.name;
        content.innerHTML = '';
        const fileUrl = URL.createObjectURL(doc.file);
        if (doc.type.includes('image')) {
            content.innerHTML = `<img src="${fileUrl}" style="max-width:100%; max-height:100%; object-fit:contain;">`;
        } else if (doc.type.includes('pdf')) {
            content.innerHTML = `<iframe src="${fileUrl}" style="width:100%; height:100%; border:none;"></iframe>`;
        } else {
            content.innerHTML = `<p style="color:white;">Preview not available. Please download.</p>`;
        }
        modal.style.display = 'flex';
        this.currentPreviewUrl = fileUrl;
    },

    closePreview() {
        document.getElementById('preview-modal').style.display = 'none';
        if (this.currentPreviewUrl) URL.revokeObjectURL(this.currentPreviewUrl);
    },

    getFileIcon(type) {
        if (!type) return 'fa-solid fa-file';
        if (type.includes('pdf')) return 'fa-solid fa-file-pdf';
        if (type.includes('image')) return 'fa-solid fa-file-image';
        if (type.includes('word') || type.includes('officedocument')) return 'fa-solid fa-file-word';
        if (type.includes('excel') || type.includes('spreadsheet')) return 'fa-solid fa-file-excel';
        return 'fa-solid fa-file';
    },

    calculateStatus(expiryDate) {
        const today = new Date();
        const exp = new Date(expiryDate);
        const diffDays = Math.ceil((exp - today) / (1000 * 60 * 60 * 24));
        if (diffDays < 0) return { label: "EXPIRED", class: "status-expired" };
        if (diffDays <= 30) return { label: `${diffDays} Days Left`, class: "status-warning" };
        return { label: "Valid", class: "status-valid" };
    },

    async updateStorageMeter() {
        if (navigator.storage && navigator.storage.estimate) {
            const estimate = await navigator.storage.estimate();
            const usedMB = (estimate.usage / (1024 * 1024)).toFixed(1);
            const percentage = ((estimate.usage / estimate.quota) * 100).toFixed(2);
            document.getElementById('storage-bar').style.width = `${percentage}%`;
            document.getElementById('storage-text').textContent = `${percentage}% Used (${usedMB} MB)`;
        }
    },

    openModal(id = null) {
        document.getElementById('vault-modal').style.display = 'flex';
        if (!id) document.getElementById('vault-form').reset();
    },

    closeModal() {
        document.getElementById('vault-modal').style.display = 'none';
    }
};

document.addEventListener('DOMContentLoaded', () => {
    Vault.init();
    CredentialVault.init();
});

const CredentialVault = {
    storageKey: 'lifeos_vault',
    form: null,
    accountsGrid: null,
    secureArea: null,
    masterKeyInput: null,
    unlockButton: null,
    searchInput: null,
    togglePassBtn: null,
    generatePassBtn: null,
    passInput: null,

    init() {
        this.form = document.getElementById('cred-form');
        this.accountsGrid = document.getElementById('cred-accounts-grid');
        this.secureArea = document.getElementById('vault-secure-area');
        this.masterKeyInput = document.getElementById('vault-master-key');
        this.unlockButton = document.getElementById('btn-unlock-vault');
        this.searchInput = document.getElementById('cred-search');
        this.togglePassBtn = document.getElementById('btn-toggle-pass');
        this.generatePassBtn = document.getElementById('btn-generate-pass');
        this.passInput = document.getElementById('cred-pass');

        if (this.form) {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveAccount();
            });
        }

        if (this.unlockButton) {
            this.unlockButton.addEventListener('click', () => this.unlockVault());
        }

        if (this.searchInput) {
            this.searchInput.addEventListener('input', () => this.loadAccounts());
        }

        if (this.togglePassBtn) {
            this.togglePassBtn.addEventListener('click', () => this.togglePassword());
        }

        if (this.generatePassBtn) {
            this.generatePassBtn.addEventListener('click', () => this.generatePassword());
        }

        this.loadAccounts();
    },

    unlockVault() {
        if (!this.masterKeyInput) return;
        const key = this.masterKeyInput.value.trim();
        if (!key) {
            alert('Please enter your master key to unlock the vault.');
            return;
        }

        if (this.secureArea) {
            this.secureArea.classList.remove('hidden');
            this.secureArea.style.display = 'block';
        }
        this.masterKeyInput.disabled = true;
        this.unlockButton.disabled = true;
        this.unlockButton.textContent = 'Unlocked';
    },

    getAccounts() {
        return JSON.parse(localStorage.getItem(this.storageKey)) || [];
    },

    saveAccount() {
        const site = document.getElementById('cred-site');
        const url = document.getElementById('cred-url');
        const user = document.getElementById('cred-user');
        const email = document.getElementById('cred-email');
        const password = document.getElementById('cred-pass');
        if (!site || !password) return;

        const newAccount = {
            id: Date.now(),
            site: site.value || 'Untitled',
            url: url?.value || '',
            user: user?.value || '',
            email: email?.value || '',
            password: password.value || '',
            dateAdded: new Date().toISOString()
        };

        const accounts = this.getAccounts();
        accounts.push(newAccount);
        localStorage.setItem(this.storageKey, JSON.stringify(accounts));
        this.form?.reset();
        this.loadAccounts();
    },

    loadAccounts() {
        if (!this.accountsGrid) return;

        const searchTerm = this.searchInput?.value.toLowerCase() || '';
        const accounts = this.getAccounts().filter(acc => {
            if (!searchTerm) return true;
            return acc.site.toLowerCase().includes(searchTerm)
                || acc.user.toLowerCase().includes(searchTerm)
                || acc.email.toLowerCase().includes(searchTerm)
                || acc.url.toLowerCase().includes(searchTerm);
        });

        if (accounts.length === 0) {
            this.accountsGrid.innerHTML = '<p style="color: #8b949e; grid-column: 1/-1; text-align: center; padding: 20px;">No credentials saved yet.</p>';
            return;
        }

        this.accountsGrid.innerHTML = accounts.map(acc => {
            const iconUrl = this.getIconUrl(acc.url);
            const userText = JSON.stringify(acc.user || 'N/A');
            const emailText = JSON.stringify(acc.email || 'N/A');
            const passText = JSON.stringify(acc.password || '');

            return `
                <div class="account-card">
                    <div class="account-card-header">
                        <img src="${iconUrl}" alt="" onerror="this.src='assets/icons/default-key.png'">
                        <h4>${acc.site}</h4>
                    </div>
                    <div class="account-details">
                        <div class="detail-row">
                            <div class="detail-text">👤 <span>${acc.user || 'N/A'}</span></div>
                            <button class="action-btn" onclick="CredentialVault.copyData(${userText})">📋</button>
                        </div>
                        <div class="detail-row">
                            <div class="detail-text">📧 <span>${acc.email || 'N/A'}</span></div>
                            <button class="action-btn" onclick="CredentialVault.copyData(${emailText})">📋</button>
                        </div>
                        <div class="detail-row">
                            <div class="detail-text">🔑 <span class="pass-blur">••••••••</span></div>
                            <button class="action-btn" onclick="CredentialVault.copyData(${passText})">📋</button>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button class="action-btn delete" onclick="CredentialVault.deleteAccount(${acc.id})">🗑️ Delete</button>
                    </div>
                </div>
            `;
        }).join('');
    },

    getIconUrl(url) {
        if (!url || !url.includes('.')) return 'assets/icons/default-key.png';
        const cleanUrl = url.replace(/^(https?:\/\/)?(www\.)?/, '');
        const domain = cleanUrl.split('/')[0];
        return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
    },

    togglePassword() {
        if (!this.passInput) return;
        this.passInput.type = this.passInput.type === 'password' ? 'text' : 'password';
    },

    generatePassword() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
        let password = '';
        for (let i = 0; i < 16; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        if (this.passInput) this.passInput.value = password;
    },

    copyData(text) {
        if (!text) return;
        navigator.clipboard.writeText(text);
        alert('Copied!');
    },

    deleteAccount(id) {
        if (!confirm('Delete this credential?')) return;
        const accounts = this.getAccounts().filter(acc => acc.id !== id);
        localStorage.setItem(this.storageKey, JSON.stringify(accounts));
        this.loadAccounts();
    }
};
