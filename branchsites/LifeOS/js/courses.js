const Courses = {
    getData() {
        return Storage.get('userCourses') || [];
    },

    save() {
        const id = document.getElementById('course-id').value;
        const name = document.getElementById('c-name').value;
        const instructor = document.getElementById('c-instructor').value;
        const date = document.getElementById('c-date').value;
        const expiry = document.getElementById('c-expiry').value;

        if (!name) return;

        let data = this.getData();
        const courseObj = { id: id ? Number(id) : Date.now(), name, instructor, date, expiry };

        if (id) {
            const idx = data.findIndex(c => c.id == id);
            if (idx !== -1) data[idx] = courseObj;
        } else {
            data.push(courseObj);
        }

        Storage.save('userCourses', data);
        this.render();
        this.closeModal();
    },

    delete(id) {
        if (!confirm("Remove this course?")) return;
        let data = this.getData().filter(c => c.id != id);
        Storage.save('userCourses', data);
        this.render();
    },

    edit(id) {
        const c = this.getData().find(item => item.id == id);
        if (c) {
            document.getElementById('course-id').value = c.id;
            document.getElementById('c-name').value = c.name;
            document.getElementById('c-instructor').value = c.instructor;
            document.getElementById('c-date').value = c.date;
            document.getElementById('c-expiry').value = c.expiry;
            this.openModal(true);
        }
    },

    render() {
        const container = document.getElementById('courses-list');
        if (!container) return;
        const data = this.getData();

        if (data.length === 0) {
            container.innerHTML = `<p style="color: var(--text-dim); font-size: 13px;">No courses recorded.</p>`;
            return;
        }

        container.innerHTML = data.map(c => `
            <div style="background: var(--sidebar-bg); padding: 15px; border-radius: 10px; border: 1px solid var(--border); position: relative;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                    <h4 style="color: white; margin: 0; font-size: 14px; color: var(--accent);">${c.name}</h4>
                    <div style="display: flex; gap: 10px;">
                        <span onclick="Courses.edit(${c.id})" style="cursor:pointer; font-size: 12px;">✏️</span>
                        <span onclick="Courses.delete(${c.id})" style="cursor:pointer; font-size: 12px;">🗑️</span>
                    </div>
                </div>
                <div style="font-size: 11px; color: var(--text-dim); line-height: 1.6;">
                    <div>👤 Instructor: <span style="color: white;">${c.instructor || 'N/A'}</span></div>
                    <div style="display: flex; gap: 15px; margin-top: 5px;">
                        <span>📅 Issued: ${c.date || '---'}</span>
                        <span style="color: ${this.isExpired(c.expiry) ? '#ef4444' : 'var(--text-dim)'};">
                            ⏳ Exp: ${c.expiry || 'No Expiry'}
                        </span>
                    </div>
                </div>
            </div>
        `).join('');
    },

    isExpired(dateStr) {
        if (!dateStr) return false;
        return new Date(dateStr) < new Date();
    },

    openModal(isEdit = false) {
        document.getElementById('course-modal').style.display = 'flex';
        document.getElementById('course-modal-title').innerText = isEdit ? "Edit Course" : "Add Course";
        if (!isEdit) {
            document.getElementById('course-id').value = "";
            document.getElementById('course-form').reset();
        }
    },

    closeModal() {
        document.getElementById('course-modal').style.display = 'none';
    }
};

// Add to your DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    Personality.render();
    Courses.render(); // Load courses on startup
});
