// js/main.js

const navLinks = document.querySelectorAll('.nav-link');
const tabs = document.querySelectorAll('.tab-content');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const tabId = link.getAttribute('data-tab');

        // 1. Remove active
        navLinks.forEach(l => l.classList.remove('active'));
        tabs.forEach(t => t.classList.remove('active'));

        // 2. Activate selected
        link.classList.add('active');
        document.getElementById(tabId).classList.add('active');

        // 3. Mobile sidebar auto close
        if (window.innerWidth <= 1024) {
            toggleSidebar();
        }

        // 4. Special tab logic
        if (tabId === 'dashboard') {
            renderDashboard();
        }
    });
});




/*********************************screen ******************************** */
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
}





/********************************XP System Core*************************** */
// ==============================
// XP SYSTEM CORE
// ==============================

const XPSystem = {

    xp: parseInt(localStorage.getItem("xp")) || 0,
    level: parseInt(localStorage.getItem("level")) || 1,

    get() {
        return JSON.parse(localStorage.getItem('os_xp')) || {
            xp: 0,
            level: 1,
            history: []
        };
    },


    // 🔥 ADD XP
    add(amount, reason = "") {
        const data = this.get();

        data.xp += amount;

        let newLevel = this.calculateLevel();

        if (newLevel > this.level) {
            this.level = newLevel;
            this.levelUp();
        }

        data.history.push({
            amount,
            reason,
            date: new Date().toISOString()
        });

        // LEVEL UP CHECK
        const needed = this.getXPForLevel(data.level);

        if (data.xp >= needed) {
            data.xp -= needed;
            data.level++;
            this.levelUpEffect();
        }

        this.save(data);
        this.render();
    },

    calculateLevel() {
        // exponential leveling system
        return Math.floor(Math.sqrt(this.xp / 100)) + 1;
    },

    levelUp() {
        console.log("LEVEL UP!");
        this.showLevelUpPopup();
    },

    showLevelUpPopup() {
        const popup = document.createElement("div");
        popup.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg,#22c55e,#3b82f6);
                color: white;
                padding: 25px 40px;
                border-radius: 15px;
                font-size: 22px;
                font-weight: bold;
                z-index: 99999;
                box-shadow: 0 20px 60px rgba(0,0,0,0.4);
            ">
                🎉 LEVEL UP! <br> Level ${this.level}
            </div>
        `;
        document.body.appendChild(popup);
        setTimeout(() => popup.remove(), 2500);
    },

    // 📈 LEVEL FORMULA
    getXPForLevel(level) {
        return 500 + (level * 250); // scalable
    },

    // 🎉 LEVEL UP EFFECT
    levelUpEffect(level) {
        const popup = document.createElement("div");

        popup.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg,#22c55e,#3b82f6);
                color: white;
                padding: 25px 40px;
                border-radius: 15px;
                font-size: 22px;
                font-weight: bold;
                z-index: 99999;
                box-shadow: 0 20px 60px rgba(0,0,0,0.4);
            ">
                🎉 LEVEL UP! <br> Level ${level}
            </div>
        `;

        document.body.appendChild(popup);
        setTimeout(() => popup.remove(), 2500);
    },

    // 📊 RENDER UI
    render() {
        const data = this.get();
        const needed = this.getXPForLevel(data.level);

        const percent = Math.min((data.xp / needed) * 100, 100);

        const xpEl = document.getElementById("xp-text");
        const levelEl = document.getElementById("level-text");

        if (xpEl) xpEl.textContent = this.xp;
        if (levelEl) levelEl.textContent = this.level;

        // UI
        const fill = document.querySelector('.xp-fill');
        if (fill) fill.style.width = percent + '%';

        const header = document.querySelector('.xp-header');
        if (header) {
            header.innerHTML = `
                <span>Level ${data.level}</span>
                <span>${data.xp} / ${needed} XP</span>
            `;
        }
    },

    save() {
        localStorage.setItem("xp", this.xp);
        localStorage.setItem("level", this.level);
        localStorage.setItem('os_xp', JSON.stringify(data));
    }
};

const ComboSystem = {

    combo: parseInt(localStorage.getItem('combo')) || 0,
    lastActionTime: parseInt(localStorage.getItem('lastActionTime')) || 0,
    lastActionTime: 0,
    timeout: 1000 * 60 * 10, // 10 دقائق

    add() {
        const now = Date.now();

        // لو آخر task قريب → زود combo
        if (now - this.lastActionTime < this.timeout) {
            this.combo++;
        } else {
            this.combo = 1; // reset
        }

        this.lastActionTime = now;
        localStorage.setItem('combo', this.combo);
        localStorage.setItem('lastActionTime', now);

        return this.combo;
    },

    getMultiplier() {
        if (this.combo >= 5) return 3; // GOD MODE 💀
        if (this.combo >= 3) return 2; // x2
        if (this.combo >= 2) return 1.5; // x1.5
        return 1;
    },

    reset() {
        this.combo = 0;
        localStorage.setItem('combo', 0);

    }
};

function showComboPopup(combo, multiplier) {
    const popup = document.createElement('div');

    popup.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #0ea5e9, #9333ea);
            color: white;
            padding: 15px 20px;
            border-radius: 12px;
            font-weight: bold;
            z-index: 9999;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            animation: slideIn 0.4s ease;
        ">
            🔥 COMBO x${combo} (x${multiplier})
        </div>
    `;

    document.body.appendChild(popup);

    setTimeout(() => popup.remove(), 2000);
    // play sound ONLY here
    new Audio('combo.mp3').play();
}

