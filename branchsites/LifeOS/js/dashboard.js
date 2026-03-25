// js/dashboard.js
function renderDashboard() {
    // 1. جلب بيانات التركيز والمهام
    let focusData = Storage.get('lifeData') || [];
    const projects = Storage.get('userProjects') || [];
    const docs = Storage.get('userDocs') || [];

    // 2. جلب البيانات المالية (قاعدة بيانات Finance)
    const finDB = JSON.parse(localStorage.getItem('os_finance_v3')) || { years: {} };
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const yearData = finDB.years[currentYear] || { salary: 0, months: {} };

    // --- حسابات الماليات سريعة ---
    let yearlySpent = 0;
    let monthsTracked = 0;
    for (let m in yearData.months) {
        const mSpent = yearData.months[m].transactions.reduce((sum, t) => sum + t.amount, 0);
        yearlySpent += mSpent;
        if (mSpent > 0) monthsTracked++;
    }
    const balance = (yearData.salary * (monthsTracked || 1)) - yearlySpent;

    // --- تحديث الأرقام العلوية ---
    if(document.getElementById('streak')) document.getElementById('streak').textContent = `${focusData.length} Days`;
    if(document.getElementById('dash-balance')) document.getElementById('dash-balance').textContent = `${balance.toLocaleString()} AED`;
    if(document.getElementById('dash-spent')) document.getElementById('dash-spent').textContent = `${yearlySpent.toLocaleString()} AED`;
    if(document.getElementById('dash-projects')) document.getElementById('dash-projects').textContent = projects.length;

    // 3. رسم شارت التركيز (Focus Chart)
    const ctx = document.getElementById('mainChart');
    if (ctx && typeof Chart !== 'undefined') {
        if (window.dashChart instanceof Chart) window.dashChart.destroy();
        
        // بيانات تجريبية لو الداتا فاضية
        const displayData = focusData.length > 0 ? focusData : [{date: 'Mon', rating: 5}, {date: 'Sun', rating: 5}];

        window.dashChart = new Chart(ctx.getContext('2d'), {
            type: 'line',
            data: {
                labels: displayData.map(d => d.date),
                datasets: [{
                    data: displayData.map(d => d.rating),
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { beginAtZero: true, max: 10, grid: { color: '#334155' } },
                    x: { grid: { display: false }, ticks: { color: '#94a3b8' } }
                }
            }
        });
    }

    // 4. التنبيهات (Alerts) - مستندات منتهية
    // --- التنبيهات (Alerts) المحدثة للمستندات ---
    const alertContainer = document.getElementById('dashboard-alerts');
    if (alertContainer) {
        alertContainer.innerHTML = '';
        
        // 1. فلترة المستندات حسب الحالة
        const now = new Date();
        const expiredDocs = docs.filter(d => new Date(d.expiryDate) < now);
        const soonDocs = docs.filter(d => {
            const diffDays = Math.ceil((new Date(d.expiryDate) - now) / (1000 * 60 * 60 * 24));
            return diffDays >= 0 && diffDays <= 30;
        });

        // 2. عرض تنبيه للمستندات المنتهية (Alarm الأحمر)
        if (expiredDocs.length > 0) {
            alertContainer.innerHTML += `
                <div class="dashboard-alarm pulse-bg" style="background: rgba(239, 68, 68, 0.15); border: 2px solid #ef4444; padding: 15px; border-radius: 12px; margin-bottom: 15px; display: flex; align-items: center; gap: 15px; animation: pulse-border 2s infinite;">
                    <div style="background: #ef4444; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; animation: ring 0.5s infinite;">
                        <i class="fa-solid fa-bell" style="color: white; font-size: 20px;"></i>
                    </div>
                    <div style="flex: 1;">
                        <h4 style="color: #ef4444; margin: 0; font-size: 15px; font-weight: bold;">CRITICAL ALARM: ${expiredDocs.length} Expired Documents</h4>
                        <p style="margin: 3px 0 0; font-size: 13px; color: #fca5a5;">Please update your field certificates or essential IDs in the Vault immediately.</p>
                    </div>
                    <button onclick="document.querySelector('[data-tab=\\'vault\\']').click()" style="background: #ef4444; color: white; border: none; padding: 8px 15px; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: bold;">Go to Vault</button>
                </div>
            `;
        }

        // 3. عرض تنبيه للمستندات القريبة (تحذير أصفر)
        if (soonDocs.length > 0) {
            alertContainer.innerHTML += `
                <div style="background: rgba(245, 158, 11, 0.1); border: 1px solid #f59e0b; padding: 12px; border-radius: 10px; margin-bottom: 15px; display: flex; align-items: center; gap: 12px;">
                    <i class="fa-solid fa-triangle-exclamation" style="color: #f59e0b; font-size: 18px;"></i>
                    <div style="font-size: 13px; color: #fbbf24;">
                        <strong>Attention:</strong> ${soonDocs.length} documents will expire within 30 days.
                    </div>
                </div>
            `;
        }
    }

}
