const FileManager = {
    // الهيكل الأساسي للبيانات
    data: JSON.parse(localStorage.getItem('myFileData')) || { id: 'root', name: 'الرئيسية', folders: [], files: [] },
    currentPath: ['root'], // لتتبع المجلد الحالي

    init() {
        this.render();
    },

    // الحصول على المجلد الحالي بناءً على المسار
    getCurrentFolder() {
        let current = this.data;
        for (let i = 1; i < this.currentPath.length; i++) {
            current = current.folders.find(f => f.id === this.currentPath[i]);
        }
        return current;
    },

    promptCreateFolder() {
        const name = prompt("Write Folder Name:");
        if (!name) return;
        const current = this.getCurrentFolder();
        current.folders.push({
            id: 'folder_' + Date.now(),
            name: name,
            folders: [],
            files: []
        });
        this.save();
    },

    promptCreateFile() {
        const name = prompt(" Write the File Name:");
        const url = prompt("Write the File Link (Link):", "https://");
        if (!name || !url) return;
        
        const current = this.getCurrentFolder();
        current.files.push({
            id: 'file_' + Date.now(),
            name: name,
            url: url
        });
        this.save();
    },

    render() {
        const display = document.getElementById('file-display');
        const breadcrumb = document.getElementById('breadcrumb');
        const backBtn = document.getElementById('back-btn');
        const current = this.getCurrentFolder();

        display.innerHTML = '';
        breadcrumb.innerText = this.currentPath.join(' 📂 ');
        backBtn.style.display = this.currentPath.length > 1 ? 'block' : 'none';

        // عرض المجلدات
        current.folders.forEach(folder => {
            display.innerHTML += `
                <div onclick="FileManager.openFolder('${folder.id}')" style="background: #1e293b; padding: 20px; border-radius: 12px; text-align: center; cursor: pointer; border: 1px solid #334155; transition: 0.3s;" onmouseover="this.style.borderColor='#6366f1'" onmouseout="this.style.borderColor='#334155'">
                    <div style="font-size: 40px; margin-bottom: 10px;">📁</div>
                    <div style="font-size: 14px; overflow: hidden; text-overflow: ellipsis;">${folder.name}</div>
                    <span onclick="event.stopPropagation(); FileManager.deleteItem('${folder.id}', 'folder')" style="color: #ef4444; font-size: 12px; margin-top: 10px; display: block;">Delete</span>
                </div>
            `;
        });

        // عرض الملفات (الروابط)
        current.files.forEach(file => {
            display.innerHTML += `
                <div style="background: #1e293b; padding: 20px; border-radius: 12px; text-align: center; border: 1px solid #10b981; position: relative;">
                    <a href="${file.url}" target="_blank" style="text-decoration: none; color: white;">
                        <div style="font-size: 40px; margin-bottom: 10px;">🔗</div>
                        <div style="font-size: 14px;">${file.name}</div>
                    </a>
                    <span onclick="FileManager.deleteItem('${file.id}', 'file')" style="color: #ef4444; font-size: 12px; margin-top: 10px; display: block; cursor: pointer;">Delete</span>
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
        if (!confirm("Are You Sure that you want to delete that file?")) return;
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

// تشغيل النظام عند التحميل
document.addEventListener('DOMContentLoaded', () => FileManager.init());
