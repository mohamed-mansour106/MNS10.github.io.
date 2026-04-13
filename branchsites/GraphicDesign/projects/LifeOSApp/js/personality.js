
/******************************* Personality Section ******************************** */
const Personality = {
    // 1. Data Retrieval
    getData() {
        return Storage.get('userPersonality') || [];
    },

    // 2. Trait Logic (Add/Update/Delete)
    save() {
        const id = document.getElementById('trait-id').value;
        const traitName = document.getElementById('trait-name').value;
        const traitLevel = document.getElementById('trait-level').value;
        const notes = document.getElementById('trait-notes').value;

        if (!traitName) return alert("Please enter a trait name");

        let traits = this.getData();

        if (id) {
            const index = traits.findIndex(t => t.id == id);
            if (index !== -1) {
                traits[index] = { id: Number(id), name: traitName, level: traitLevel, notes: notes };
            }
        } else {
            traits.push({ id: Date.now(), name: traitName, level: traitLevel, notes: notes });
        }

        Storage.save('userPersonality', traits);
        this.render();
        this.closeModal();
        if (typeof renderDashboard === 'function') renderDashboard();
    },

    delete(id) {
        if (!confirm("Delete this trait?")) return;
        let traits = this.getData();
        traits = traits.filter(t => t.id != id);
        Storage.save('userPersonality', traits);
        this.render();
        if (typeof renderDashboard === 'function') renderDashboard();
    },

    edit(id) {
        const traits = this.getData();
        const trait = traits.find(t => t.id == id);
        if (trait) {
            document.getElementById('trait-id').value = trait.id;
            document.getElementById('trait-name').value = trait.name;
            document.getElementById('trait-level').value = trait.level;
            const levelValueSpan = document.getElementById('level-value');
            if (levelValueSpan) levelValueSpan.innerText = trait.level + '%';
            document.getElementById('trait-notes').value = trait.notes || "";
            this.openModal(true); 
        }
    },

    render() {
        const container = document.getElementById('personality-list');
        if (!container) return;
        const traits = this.getData();
        
        if (traits.length === 0) {
            container.innerHTML = `<p style="color: var(--text-dim); font-size: 13px;">No traits added yet.</p>`;
            return;
        }

        container.innerHTML = traits.map(t => `
            <div class="trait-card" style="background: var(--sidebar-bg); padding: 15px; border-radius: 8px; margin-bottom: 10px; border: 1px solid var(--border);">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <h4 style="color:white; margin:0; font-size: 14px;">${t.name}</h4>
                    <div style="display:flex; gap:12px;">
                        <button onclick="Personality.edit(${t.id})" style="background:none; border:1px solid #38bdf8; color:#38bdf8; cursor:pointer; font-size:10px; border-radius:4px; padding:2px 6px;">EDIT</button>
                        <button onclick="Personality.delete(${t.id})" style="background:none; border:1px solid #ef4444; color:#ef4444; cursor:pointer; font-size:10px; border-radius:4px; padding:2px 6px;">DEL</button>
                    </div>
                </div>
                <div style="display: flex; align-items: center; gap: 10px; margin-top: 10px;">
                    <div style="flex: 1; background:#334155; height:6px; border-radius:10px; overflow:hidden;">
                        <div style="width:${t.level}%; background:var(--accent); height:100%; transition: width 0.3s;"></div>
                    </div>
                    <span style="color: var(--text-dim); font-size: 10px; min-width: 25px;">${t.level}%</span>
                </div>
                ${t.notes ? `<p style="font-size:11px; color:#94a3b8; margin-top:8px; font-style: italic; line-height: 1.4;">"${t.notes}"</p>` : ''}
            </div>
        `).join('');


        

    },

    // 3. Modals Management
    openModal(isEdit = false) {
        const modal = document.getElementById('personality-modal');
        if (modal) {
            modal.style.display = 'flex';
            document.getElementById('personality-modal-title').innerHTML = isEdit ? 
                `<i class="fa-solid fa-pen-to-square" style="color: var(--accent);"></i> Edit Trait` : 
                `<i class="fa-solid fa-user-gear" style="color: var(--accent);"></i> Add New Trait`;
            
            if (!isEdit) {
                document.getElementById('trait-id').value = "";
                document.getElementById('personality-form').reset();
                document.getElementById('level-value').innerText = '80%';
            }
        }
    },

    closeModal() {
        const modal = document.getElementById('personality-modal');
        const form = document.getElementById('personality-form');
        if (modal) modal.style.display = 'none';
        if (form) form.reset();
        document.getElementById('trait-id').value = "";
    },

    // 4. Profile Management
    openProfileModal() {
        document.getElementById('edit-name').value = document.getElementById('display-name').innerText;
        document.getElementById('edit-title').value = document.getElementById('display-title').innerText;
        document.getElementById('edit-Mail').value = document.getElementById('display-Mail').innerText;
        document.getElementById('edit-phone').value = document.getElementById('display-phone').innerText;
        document.getElementById('edit-archetype').value = document.getElementById('display-archetype').innerText;
        document.getElementById('profile-modal').style.display = 'flex';
    },

    saveProfile() {
        const name = document.getElementById('edit-name').value;
        const title = document.getElementById('edit-title').value;
        const Mail = document.getElementById('edit-Mail').value;
        const phone = document.getElementById('edit-phone').value;
        const archetype = document.getElementById('edit-archetype').value;

        const profileData = { name, title, Mail, phone, archetype };
        localStorage.setItem('userProfileInfo', JSON.stringify(profileData));

        this.updateProfileUI(profileData);
        document.getElementById('profile-modal').style.display = 'none';
    },

    updateProfileUI(data) {
        if (!data || Array.isArray(data)) return; 
        document.getElementById('display-name').innerText = data.name || "Mohamed Mansour";
        document.getElementById('display-title').innerText = data.title || "Well Testing Field Operator";
        document.getElementById('display-Mail').innerText = data.Mail || "MohamedMansour10060@gmail.com";
        document.getElementById('display-phone').innerText = data.phone || "+971503537994";
        document.getElementById('display-archetype').innerText = data.archetype || "The Strategist";
        
        const initial = data.name ? data.name.charAt(0).toUpperCase() : "M";
        document.getElementById('profile-initial').innerText = initial;
    }
};

// 5. App Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Initial Render of Traits
    Personality.render();

    // Initial Load of Profile
    const savedProfile = localStorage.getItem('userProfileInfo');
    if (savedProfile) {
        try {
            Personality.updateProfileUI(JSON.parse(savedProfile));
        } catch(e) { console.error("Profile parse error", e); }
    }
});
