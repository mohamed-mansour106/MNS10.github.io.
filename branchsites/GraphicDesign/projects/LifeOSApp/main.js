const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1100,
    height: 800,
    webPreferences: {
      contextIsolation: true,
      devTools: false
    }
  });

  

  win.loadFile('index.html'); // أو ملف الـ PWA الأساسي
}

app.whenReady().then(createWindow);


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

const dbPromise = indexedDB.open("LifeOSAppDB", 1);

dbPromise.onupgradeneeded = (event) => {
    const db = event.target.result;
    if (!db.objectStoreNames.contains("xpSystem")) {
        db.createObjectStore("xpSystem", { keyPath: "key" });
    }
    if (!db.objectStoreNames.contains("comboSystem")) {
        db.createObjectStore("comboSystem", { keyPath: "key" });
    }
};

function saveToIndexedDB(storeName, key, value) {
    return new Promise((resolve, reject) => {
        const dbRequest = dbPromise.result.transaction(storeName, "readwrite").objectStore(storeName).put({ key, value });
        dbRequest.onsuccess = () => resolve();
        dbRequest.onerror = (event) => reject(event.target.error);
    });
}

function getFromIndexedDB(storeName, key) {
    return new Promise((resolve, reject) => {
        const dbRequest = dbPromise.result.transaction(storeName, "readonly").objectStore(storeName).get(key);
        dbRequest.onsuccess = (event) => resolve(event.target.result?.value || null);
        dbRequest.onerror = (event) => reject(event.target.error);
    });
}

const XPSystem = {
    xp: 0,
    level: 1,

    async init() {
        this.xp = (await getFromIndexedDB("xpSystem", "xp")) || 0;
        this.level = (await getFromIndexedDB("xpSystem", "level")) || 1;
    },

    async save(data) {
        await saveToIndexedDB("xpSystem", "xp", this.xp);
        await saveToIndexedDB("xpSystem", "level", this.level);
        await saveToIndexedDB("xpSystem", "os_xp", data);
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
    }
};

const ComboSystem = {
    combo: 0,
    lastActionTime: 0,
    timeout: 1000 * 60 * 10, // 10 دقائق

    async init() {
        this.combo = (await getFromIndexedDB("comboSystem", "combo")) || 0;
        this.lastActionTime = (await getFromIndexedDB("comboSystem", "lastActionTime")) || 0;
    },

    async add() {
        const now = Date.now();

        if (now - this.lastActionTime < this.timeout) {
            this.combo++;
        } else {
            this.combo = 1; // reset
        }

        this.lastActionTime = now;
        await saveToIndexedDB("comboSystem", "combo", this.combo);
        await saveToIndexedDB("comboSystem", "lastActionTime", now);

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
        await saveToIndexedDB("comboSystem", "combo", 0);

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

// Initialize systems
XPSystem.init();
ComboSystem.init();

