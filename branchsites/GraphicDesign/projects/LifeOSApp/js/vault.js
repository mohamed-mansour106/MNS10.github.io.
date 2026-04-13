const Vault = {
    // 1. البيانات (وحدنا المفتاح ليكون userDocs)
    documents: JSON.parse(localStorage.getItem('userDocs')) || [],

    init() {
        this.renderVault();
        const form = document.getElementById('vault-form');
        if(form) {
            form.onsubmit = (e) => {
                e.preventDefault();
                this.handleFormSubmit();
            };
        }
    },

    // 2. التحكم في المودال
    openModal(id = null) {
        const modal = document.getElementById('vault-modal');
        modal.style.display = 'flex';
        if (!id) {
            document.getElementById('vault-form').reset();
            document.getElementById('doc-id').value = ''; // تصفير الـ ID المخفي
            modal.querySelector('h2').innerText = "Add New Document";
        }
    },

    closeModal() {
        document.getElementById('vault-modal').style.display = 'none';
        document.getElementById('vault-form').reset();
    },

    // 3. التعديل والحذف
    editDoc(id) {
        // تحويل الـ id لرقم لأن Date.now() بيطلع رقم
        const doc = this.documents.find(d => d.id == id);
        if(doc) {
            this.openModal(id);
            document.querySelector('#vault-modal h2').innerText = "Edit Document";
            
            // ملء الحقول
            document.getElementById('doc-id').value = doc.id;
            document.getElementById('doc-name').value = doc.name;
            document.getElementById('doc-date').value = doc.expiryDate;
            document.getElementById('doc-cat').value = doc.category;
            document.getElementById('doc-notes').value = doc.notes || '';
        }
    },

    deleteDoc(id) {
        if(confirm('Are you sure you want to delete this document?')) {
            this.documents = this.documents.filter(d => d.id != id);
            this.saveAndRender();
        }
    },

    // 4. الحفظ والمعالجة
    async handleFormSubmit() {
        const id = document.getElementById('doc-id').value; // الـ ID المخفي
        const name = document.getElementById('doc-name').value;
        const date = document.getElementById('doc-date').value;
        const cat = document.getElementById('doc-cat').value;
        const notes = document.getElementById('doc-notes').value;
        const fileInput = document.getElementById('doc-file');
        
        let fileData = "#";
        if (fileInput.files.length > 0) {
            fileData = await this.fileToBase64(fileInput.files[0]);
        } else if (id) {
            // لو بنعدل ومعملناش رفع لملف جديد، خد اللينك القديم
            const oldDoc = this.documents.find(d => d.id == id);
            fileData = oldDoc ? oldDoc.link : "#";
        }

        const docData = {
            id: id ? parseInt(id) : Date.now(),
            name,
            expiryDate: date,
            category: cat,
            notes: notes,
            link: fileData
        };

        if (id) {
            // تحديث
            const index = this.documents.findIndex(d => d.id == id);
            this.documents[index] = docData;
        } else {
            // إضافة جديد
            this.documents.push(docData);
        }

        this.saveAndRender();
        this.closeModal();
    },

    saveAndRender() {
        localStorage.setItem('userDocs', JSON.stringify(this.documents));
        this.renderVault();
        if (typeof renderDashboard === 'function') renderDashboard();
    },

    fileToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    },

    // 5. العرض
    renderVault(docsToDisplay = null) {
        const container = document.getElementById('vault-grid');
        if (!container) return;
        
        const docs = docsToDisplay || this.documents;

        if (docs.length === 0) {
            container.innerHTML = `<p style="color: var(--text-dim); grid-column: 1/-1;">No documents found.</p>`;
        } else {
            container.innerHTML = docs.map(doc => {
                const status = this.calculateStatus(doc.expiryDate);
                return `
                    <div class="stat-card" style="background: var(--sidebar-bg); padding: 15px; border-radius: 10px; border: 1px solid var(--border);">
                        <div style="display:flex; justify-content:space-between; align-items: center;">
                            <span class="tag ${status.class}">${status.label}</span>
                            <a href="${doc.link}" target="_blank" download="${doc.name}" style="color: var(--accent);">
                                <i class="fa-solid fa-file-arrow-down"></i>
                            </a>
                        </div>
                        <h3 style="margin-top:10px; color:white;">${doc.name}</h3>
                        <p style="font-size:12px; color:var(--text-dim)">Expires: ${doc.expiryDate}</p>
                        ${doc.notes ? `<p style="font-size: 11px; color: #94a3b8; margin-top: 8px; font-style: italic;">"${doc.notes}"</p>` : ''}
                        
                        <div style="display: flex; gap: 10px; margin-top: 15px;">
                            <button onclick="Vault.editDoc(${doc.id})" style="flex: 1; padding: 5px; background: #334155; color: white; border: none; border-radius: 4px; cursor: pointer;">
                                <i class="fa-solid fa-pen"></i> Edit
                            </button>
                            <button onclick="Vault.deleteDoc(${doc.id})" style="flex: 1; padding: 5px; background: rgba(239, 68, 68, 0.1); color: #ef4444; border: 1px solid #ef4444; border-radius: 4px; cursor: pointer;">
                                <i class="fa-solid fa-trash"></i> Delete
                            </button>
                        </div>
                    </div>
                `;
            }).join('');
        }
        this.updateStorageMeter();
    },

    calculateStatus(expiryDate) {
        const today = new Date();
        const exp = new Date(expiryDate);
        const diffDays = Math.ceil((exp - today) / (1000 * 60 * 60 * 24));
        if (diffDays < 0) return { label: "EXPIRED", class: "status-expired" };
        if (diffDays <= 30) return { label: `${diffDays} Days Left`, class: "status-warning" };
        return { label: "Valid", class: "status-valid" };
    },

    
    
    filterDocs(query) {
        const searchTerm = query.toLowerCase();
        const docs = Storage.get('userDocs');
        const filtered = docs.filter(doc => 
            doc.name.toLowerCase().includes(searchTerm) || 
            doc.category.toLowerCase().includes(searchTerm)
        );
        this.renderVault(filtered);
    },


    updateStorageMeter() {
        const LIMIT = 5 * 1024 * 1024; 
        let totalBytes = 0;
        for (let key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                totalBytes += (localStorage[key].length + key.length) * 2;
            }
        }

        const usedKB = (totalBytes / 1024).toFixed(1);
        const percentage = ((totalBytes / LIMIT) * 100).toFixed(1);

        const bar = document.getElementById('storage-bar');
        const text = document.getElementById('storage-text');

        if (bar && text) {
            bar.style.width = `${Math.min(percentage, 100)}%`;
            text.textContent = `${percentage}% (${usedKB} KB / 5120 KB)`;
            bar.style.background = percentage > 80 ? 'var(--danger)' : 'var(--accent)';
        }
    }
};




document.addEventListener('DOMContentLoaded', () => Vault.init());
