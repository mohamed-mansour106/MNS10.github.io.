const FileManager = {
    data: JSON.parse(localStorage.getItem('myFileData')) || { id: 'root', name: 'الرئيسية', folders: [], files: [] },
    currentPath: ['root'],

    init() {
        this.render();
    },

    getCurrentFolder() {
        let current = this.data;
        for (let i = 1; i < this.currentPath.length; i++) {
            current = current.folders.find(f => f.id === this.currentPath[i]);
        }
        return current;
    },

    // فتح المودالات
    promptCreateFolder() {
        document.getElementById('folder-modal').style.display = 'flex';
        document.getElementById('new-folder-name').focus();
    },

    promptCreateFile() {
        document.getElementById('file-modal').style.display = 'flex';
        document.getElementById('new-file-name').focus();
    },

    closeModals() {
        document.getElementById('folder-modal').style.display = 'none';
        document.getElementById('file-modal').style.display = 'none';
        document.getElementById('new-folder-name').value = '';
        document.getElementById('new-file-name').value = '';
        document.getElementById('new-file-url').value = '';
    },

    // معالجة البيانات من المودال
    createFolder() {
        const name = document.getElementById('new-folder-name').value;
        if (!name) return;
        const current = this.getCurrentFolder();
        current.folders.push({
            id: 'folder_' + Date.now(),
            name: name,
            folders: [],
            files: []
        });
        this.save();
        this.closeModals();
    },

    createFile() {
        const name = document.getElementById('new-file-name').value;
        const url = document.getElementById('new-file-url').value;
        if (!name || !url) return;
        
        const current = this.getCurrentFolder();
        current.files.push({
            id: 'file_' + Date.now(),
            name: name,
            url: url
        });
        this.save();
        this.closeModals();
    },

    render() {
        const display = document.getElementById('file-display');
        const breadcrumb = document.getElementById('breadcrumb');
        const backBtn = document.getElementById('back-btn');
        const current = this.getCurrentFolder();

        display.innerHTML = '';
        // تحسين شكل الـ Breadcrumb
        breadcrumb.innerHTML = this.currentPath.map(p => {
             if(p === 'root') return 'Home';
             // محاولة إيجاد اسم المجلد الحقيقي بدلاً من الـ ID (اختياري)
             return p.replace('folder_', ''); 
        }).join(' <i class="fa-solid fa-chevron-right" style="font-size:10px; margin:0 5px;"></i> ');

        backBtn.style.display = this.currentPath.length > 1 ? 'block' : 'none';

        current.folders.forEach(folder => {
            display.innerHTML += `
                <div onclick="FileManager.openFolder('${folder.id}')" class="stat-card" style="background: var(--sidebar-bg); padding: 20px; border-radius: 12px; text-align: center; cursor: pointer; border: 1px solid var(--border); transition: 0.3s;">
                    <div style="font-size: 40px; margin-bottom: 10px; color: #6366f1;">📁</div>
                    <div style="font-size: 14px; color: white; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${folder.name}</div>
                    <span onclick="event.stopPropagation(); FileManager.deleteItem('${folder.id}', 'folder')" style="color: #ef4444; font-size: 12px; margin-top: 15px; display: block; opacity: 0.7;">
                        <i class="fa-solid fa-trash"></i> Delete
                    </span>
                </div>
            `;
        });

        current.files.forEach(file => {
            display.innerHTML += `
                <div class="stat-card" style="background: var(--sidebar-bg); padding: 20px; border-radius: 12px; text-align: center; border: 1px solid #10b981; position: relative;">
                    <a href="${file.url}" target="_blank" style="text-decoration: none; color: white;">
                        <div style="font-size: 40px; margin-bottom: 10px; color: #10b981;">🔗</div>
                        <div style="font-size: 14px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${file.name}</div>
                    </a>
                    <span onclick="FileManager.deleteItem('${file.id}', 'file')" style="color: #ef4444; font-size: 12px; margin-top: 15px; display: block; cursor: pointer; opacity: 0.7;">
                        <i class="fa-solid fa-trash"></i> Delete
                    </span>
                </div>
            `;
        });
    },

    openFolder(id) {
        this.currentPath.push(id);
        this.render();
    },

    goBack() {
        this.currentPath.pop();
        this.render();
    },

    deleteItem(id, type) {
        if (!confirm("Are you sure you want to delete this?")) return;
        const current = this.getCurrentFolder();
        if (type === 'folder') {
            current.folders = current.folders.filter(f => f.id !== id);
        } else {
            current.files = current.files.filter(f => f.id !== id);
        }
        this.save();
    },

    save() {
        localStorage.setItem('myFileData', JSON.stringify(this.data));
        this.render();
    }
};

document.addEventListener('DOMContentLoaded', () => FileManager.init());
