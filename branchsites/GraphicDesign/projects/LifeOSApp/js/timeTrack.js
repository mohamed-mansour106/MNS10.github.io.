let currentFocus = 3;
let currentMood = 3; 
function switchTrack(type) {
    // إخفاء كل الفورم
    document.querySelectorAll('.track-form').forEach(f => f.classList.remove('active'));
    document.querySelectorAll('.track-tab').forEach(t => t.classList.remove('active'));
    
    // إظهار المختارة
    document.getElementById(`${type}-form`).classList.add('active');
    event.currentTarget.classList.add('active');
    // التعليم على الزرار اللي اتضغط عليه
    if(e && e.currentTarget) {
        e.currentTarget.classList.add('active');
    }
}

function setMood(val) {
    currentMood = val;
    document.querySelectorAll('.mood-rating button').forEach((btn, idx) => {
        btn.classList.toggle('active', idx + 1 === val);
    });
}


function calculateDuration(start, end) {
    if(!start || !end) return 0;
    let [sH, sM] = start.split(':').map(Number);
    let [eH, eM] = end.split(':').map(Number);
    let startDate = new Date(0, 0, 0, sH, sM);
    let endDate = new Date(0, 0, 0, eH, eM);
    
    if (endDate < startDate) endDate.setDate(endDate.getDate() + 1);
    
    return Math.floor((endDate - startDate) / 1000 / 60); 
}

function setFocus(val) {
    currentFocus = val;
    document.querySelectorAll('.focus-rating button').forEach((btn, idx) => {
        btn.classList.toggle('active', idx + 1 === val);
    });
}


// تحديث دالة الـ Log الأصلية لتشمل الحساب
function logTime(category) {
    const dateEl = document.getElementById(`${category}-date`);
    if(!dateEl || !dateEl.value) {
        alert("Please select a date first! 📅");
        return;
    }
    let currentFocus = 3;
    let currentMood = 3; // ضفنا ده عشان م يحصلش تضارب
    const startTime = document.getElementById(`${category}-start`)?.value;
    const endTime = document.getElementById(`${category}-end`)?.value;
    // حساب المدة بناءً على النوع
    let duration = 0;
    if (category === 'study') {
        duration = parseInt(document.getElementById('study-duration')?.value) || 0;
    } else {
        duration = calculateDuration(startTime, endTime);
    }

    const logData = {
        id: Date.now(),
        category: category,
        type: document.getElementById(`${category}-type`)?.value || 'General',
        date: document.getElementById(`${category}-date`).value,
        duration: duration, // الدقائق الكلية
        mood: category === 'personal' ? currentMood : null,
        focus: category === 'study' ? currentFocus : null,
        timestamp: new Date().toISOString()
    };
    // إضافة بيانات البيزنس الخاصة
    if (category === 'business') {
        logData.workType = document.getElementById('business-type-input')?.value || "";
        logData.outcome = document.getElementById('business-outcome')?.value || "";
    }

    let logs = JSON.parse(localStorage.getItem('timeLogs')) || [];
    logs.push(logData);
    localStorage.setItem('timeLogs', JSON.stringify(logs));

    alert(`Great! ${Math.floor(duration/60)}h ${duration%60}m logged ${category}. 🚀`);
}


function renderLogs() {
    const container = document.getElementById('logs-container');
    const logs = JSON.parse(localStorage.getItem('timeLogs')) || [];

    if (logs.length === 0) {
        container.innerHTML = 'No logs yet';
        return;
    }

    // ترتيب السجلات من الأحدث للأقدم
    const sortedLogs = logs.reverse();

    let html = `
        <table style="width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 0.9rem; text-align: left;">
            <thead>
                <tr style="border-bottom: 1px solid var(--glass-border); color: var(--accent-cyan);">
                    <th style="padding: 10px;">Date</th>
                    <th style="padding: 10px;">Category</th>
                    <th style="padding: 10px;">Duration</th>
                    <th style="padding: 10px;">Details</th>
                </tr>
            </thead>
            <tbody>
    `;

    sortedLogs.forEach(log => {
        const hours = Math.floor(log.duration / 60);
        const mins = log.duration % 60;
        
        // اختيار لون بناءً على التصنيف
        let catColor = '#3b82f6'; // Oil
        if(log.category === 'study') catColor = '#22d3ee';
        if(log.category === 'business') catColor = '#f59e0b';
        if(log.category === 'personal') catColor = '#a855f7';

        html += `
            <tr style="border-bottom: 1px solid var(--glass-border);">
                <td style="padding: 10px;">${log.date}</td>
                <td style="padding: 10px;"><span style="color: ${catColor}; font-weight: bold;">${log.category.toUpperCase()}</span></td>
                <td style="padding: 10px;">${hours}h ${mins}m</td>
                <td style="padding: 10px; font-size: 0.8rem; color: var(--text-dim);">
                    ${log.type} ${log.outcome ? '- ' + log.outcome : ''}
                </td>
            </tr>
        `;
    });

    html += `</tbody></table>`;
    container.innerHTML = html;
}

// استدعاء الدالة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', renderLogs);
