const Experience = {
    getData() {
        return Storage.get('userExperience') || [];
    },

    save() {
        const id = document.getElementById('exp-id').value;
        const role = document.getElementById('exp-role').value;
        const company = document.getElementById('exp-company').value;
        const location = document.getElementById('exp-location').value;
        const start = document.getElementById('exp-start').value;
        const end = document.getElementById('exp-end').value;
        const desc = document.getElementById('exp-desc').value;

        if (!role || !company) return;

        let data = this.getData();
        const expObj = { 
            id: id ? Number(id) : Date.now(), 
            role, company, location, start, end, desc 
        };

        if (id) {
            const idx = data.findIndex(e => e.id == id);
            if (idx !== -1) data[idx] = expObj;
        } else {
            data.push(expObj);
        }

        Storage.save('userExperience', data);
        this.render();
        this.closeModal();
    },

    delete(id) {
        if (!confirm("Remove this experience?")) return;
        let data = this.getData().filter(e => e.id != id);
        Storage.save('userExperience', data);
        this.render();
    },

    edit(id) {
        const e = this.getData().find(item => item.id == id);
        if (e) {
            document.getElementById('exp-id').value = e.id;
            document.getElementById('exp-role').value = e.role;
            document.getElementById('exp-company').value = e.company;
            document.getElementById('exp-location').value = e.location;
            document.getElementById('exp-start').value = e.start;
            document.getElementById('exp-end').value = e.end;
            document.getElementById('exp-desc').value = e.desc;
            this.openModal(true);
        }
    },

    render() {
        const container = document.getElementById('experience-list');
        if (!container) return;
        const data = this.getData().sort((a, b) => new Date(b.start) - new Date(a.start)); // Sort newest first

        if (data.length === 0) {
            container.innerHTML = `<p style="color: var(--text-dim); font-size: 13px;">No experience added yet.</p>`;
            return;
        }

        container.innerHTML = data.map(e => `
            <div style="background: rgba(255,255,255,0.02); padding: 20px; border-radius: 12px; border-left: 4px solid var(--accent); position: relative;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <div>
                        <h4 style="color: white; margin: 0; font-size: 16px;">${e.role}</h4>
                        <div style="color: var(--accent); font-size: 13px; font-weight: bold; margin-top: 2px;">${e.company}</div>
                    </div>
                    <div style="display: flex; gap: 12px;">
                        <span onclick="Experience.edit(${e.id})" style="cursor:pointer; font-size: 14px;" title="Edit">✏️</span>
                        <span onclick="Experience.delete(${e.id})" style="cursor:pointer; font-size: 14px;" title="Delete">🗑️</span>
                    </div>
                </div>
                
                <div style="display: flex; gap: 15px; font-size: 11px; color: var(--text-dim); margin-top: 10px;">
                    <span>📍 ${e.location || 'N/A'}</span>
                    <span>🗓️ ${e.start} — ${e.end || 'Present'}</span>
                </div>

                ${e.desc ? `<p style="font-size: 12px; color: #cbd5e1; margin-top: 12px; line-height: 1.5; white-space: pre-wrap;">${e.desc}</p>` : ''}
            </div>
        `).join('');
    },

    openModal(isEdit = false) {
        document.getElementById('experience-modal').style.display = 'flex';
        document.getElementById('experience-modal-title').innerText = isEdit ? "Edit Experience" : "Add Experience";
        if (!isEdit) {
            document.getElementById('exp-id').value = "";
            document.getElementById('experience-form').reset();
        }
    },

    closeModal() {
        document.getElementById('experience-modal').style.display = 'none';
    }
};

// Update your DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    Personality.render();
    Courses.render();
    Experience.render(); // Load experience list
});
