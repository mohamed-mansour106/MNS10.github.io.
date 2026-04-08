const Finance = {
    // 1. قاعدة البيانات (LocalStorage)
    db: JSON.parse(localStorage.getItem('os_finance_v3')) || { years: {} },
    //***************************** */
    // 2. التصنيفات والنسب (نفس صورتك في الإكسيل)
    categories: [
        { name: "Rent/Housing/Car", percent: 30 },
        { name: "Project/Gold", percent: 20 },
        { name: "Food & Drinks", percent: 20 },
        { name: "Dad & Mom & Son", percent: 10 },
        { name: "Emergency", percent: 10 },
        { name: "Miscellaneous", percent: 10 }
    ],

    init: function() {
        this.setupSelectors();
        this.render();
    },

    setupSelectors: function() {
        const yearSelect = document.getElementById('fin-year');
        const monthSelect = document.getElementById('fin-month');
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
        // تعبئة السنين والشهور لو القائمة فاضية
        if(yearSelect.options.length === 0) {
            for(let i=2025; i<=2027; i++) yearSelect.innerHTML += `<option value="${i}">${i}</option>`;
            months.forEach((m, i) => monthSelect.innerHTML += `<option value="${i}">${m}</option>`);
            monthSelect.value = new Date().getMonth();
            yearSelect.value = new Date().getFullYear();
        }

        // تعبئة تصنيفات الفورم والفلتر
        const expCat = document.getElementById('exp-category');
        const filterCat = document.getElementById('filter-category');
        
        const catOptions = this.categories.map(c => `<option value="${c.name}">${c.name}</option>`).join('');
        expCat.innerHTML = catOptions;
        filterCat.innerHTML = `<option value="All">All Categories</option>` + catOptions;
    },

    

    //****************************** */
    updateSalary: function(val) {
        const year = document.getElementById('fin-year').value;
        const month = document.getElementById('fin-month').value;

        if (!this.db.years[year]) this.db.years[year] = { months: {} };
        if (!this.db.years[year].months[month]) {
            this.db.years[year].months[month] = { transactions: [], salary: 0 };
        }

        this.db.years[year].months[month].salary = parseFloat(val) || 0;

        this.save();
        this.render();
    },

    addExpense: function() {
        const year = document.getElementById('fin-year').value;
        const month = document.getElementById('fin-month').value;
        const name = document.getElementById('exp-name').value;
        const amount = parseFloat(document.getElementById('exp-amount').value);
        const category = document.getElementById('exp-category').value;

        if (!name.trim()) return alert("Enter valid name");
        if (isNaN(amount) || amount <= 0) return alert("Invalid amount");

        // التأكد من وجود الهيكل المالي لهذه السنة وهذا الشهر
        if (!this.db.years[year]) this.db.years[year] = { months: {} };

        if (!this.db.years[year].months[month]) {
            this.db.years[year].months[month] = { 
                transactions: [],
                salary: 0
            };
        }
        
        this.db.years[year].months[month].transactions.push({ 
            id: Date.now(),
            name, 
            amount, 
            category, 
            date: new Date().toLocaleDateString('en-GB') 
        });
        
        document.getElementById('exp-name').value = '';
        document.getElementById('exp-amount').value = '';
        this.save();
        this.render();
    },

    deleteTransaction: function(id) {
        const year = document.getElementById('fin-year').value;
        const month = document.getElementById('fin-month').value;

        const txs = this.db.years[year].months[month].transactions;

        this.db.years[year].months[month].transactions = txs.filter(t => t.id !== id);

        this.save();
        this.render();
    },

        render: function() {
        const year = document.getElementById('fin-year').value;
        const month = document.getElementById('fin-month').value;
        
        // 1. التأكد من وجود البيانات وتحميل الراتب
        if (!this.db.years[year]) this.db.years[year] = { months: {} };
        if (!this.db.years[year].months[month]) {
            this.db.years[year].months[month] = { 
                transactions: [],
                salary: 0
            };
        }

        const data = this.db.years[year];
        const monthData = this.db.years[year].months[month];

        document.getElementById('monthly-salary').value = monthData.salary || 0;
        

        // 2. حساب المصاريف لكل فئة للشهر الحالي (لجدول الإكسيل)
        const stats = {};
        this.categories.forEach(c => stats[c.name] = 0);
        monthData.transactions.forEach(t => {
            if(stats[t.category] !== undefined) stats[t.category] += t.amount;
        });

        // 3. بناء الجدول الرئيسي (Excel Grid)
        const tbody = document.getElementById('finance-grid-body');
        tbody.innerHTML = '';
        let monthTotalSpent = 0;

        let html = '';

        this.categories.forEach(cat => {
            const budget = monthData.salary * (cat.percent / 100);
            const spent = stats[cat.name];
            const remain = budget - spent;
            monthTotalSpent += spent;

            html += `
                <tr>
                    <td style="padding: 10px; border: 1px solid #334155;">${cat.name}</td>
                    <td style="padding: 10px; border: 1px solid #334155; text-align:center;">${cat.percent}%</td>
                    <td style="padding: 10px; border: 1px solid #334155;">${budget.toLocaleString()}</td>
                    <td style="padding: 10px; border: 1px solid #334155; font-weight:bold;">${spent.toLocaleString()}</td>
                    <td style="padding: 10px; border: 1px solid #334155; color: ${remain < 0 ? '#ef4444' : '#10b981'}; font-weight:bold;">${remain.toLocaleString()}</td>
                    <td style="padding: 10px; border: 1px solid #334155; text-align:center;">
                        <span style="padding: 2px 8px; border-radius: 4px; font-size: 10px; background: ${remain < 0 ? '#ef444422' : '#10b98122'}; color: ${remain < 0 ? '#ef4444' : '#10b981'};">
                            ${remain < 0 ? 'OVER' : 'OK'}
                        </span>
                    </td>
                </tr>
            `;
        });

        tbody.innerHTML = html;

        // 4. تحديث فوتر الجدول (Totals الشهرية)
        document.getElementById('total-budget').innerText = monthData.salary.toLocaleString();
        const monthRemain = monthData.salary - monthTotalSpent;
        document.getElementById('total-spent').innerText = monthTotalSpent.toLocaleString();
        document.getElementById('total-remaining').innerText = monthRemain.toLocaleString();
        document.getElementById('total-remaining').style.color = monthRemain < 0 ? '#ef4444' : '#10b981';

        // 5. حساب إجمالي السنة والرصيد البنكي (Yearly Logic)
        
        
        let yearlyTotalSpent = 0;
        let totalIncomeSoFar = 0;

        for (let m in data.months) {
            const month = data.months[m];

            const mSpent = (month.transactions || []).reduce((sum, t) => {
                return sum + (t.amount || 0);
            }, 0);

            yearlyTotalSpent += mSpent;
            totalIncomeSoFar += month.salary || 0;
        }
        const currentBalance = totalIncomeSoFar - yearlyTotalSpent;
        const savingsPercent = totalIncomeSoFar > 0 ? ((totalIncomeSoFar - yearlyTotalSpent) / totalIncomeSoFar * 100).toFixed(1) : 0;

        // 6. تحديث صناديق الملخص الكبيرة في الأسفل
        if(document.getElementById('total-bank-balance')) {
            document.getElementById('total-bank-balance').innerText = currentBalance.toLocaleString();
            document.getElementById('total-yearly-spent').innerText = yearlyTotalSpent.toLocaleString();
            document.getElementById('savings-rate').innerText = savingsPercent + "%";
            
            const tip = document.getElementById('savings-tip');
            if (savingsPercent > 20) tip.innerText = "Excellent saving!";
            else if (savingsPercent > 0) tip.innerText = "Good, try to hit 20%.";
            else tip.innerText = "Warning: Deficit detected.";
        }

        // 7. استدعاء سجل العمليات والرسوم البيانية
        this.renderTransactionsLog();
        this.updateCharts(monthData.salary, stats, year);
    },



    renderTransactionsLog: function() {
        const year = document.getElementById('fin-year').value;
        const month = document.getElementById('fin-month').value;
        const filter = document.getElementById('filter-category').value;
        const logBody = document.getElementById('transactions-log-body');
        
        const transactions = this.db.years[year].months[month].transactions || [];
        logBody.innerHTML = '';

        const filtered = filter === "All" ? transactions : transactions.filter(t => t.category === filter);

        // عرض العمليات من الأحدث للأقدم
        [...filtered].reverse().forEach((t, index) => {
            logBody.innerHTML += `
                <tr style="border-bottom: 1px solid #334155;">
                    <td style="padding: 8px;">${t.date}</td>
                    <td style="padding: 8px; font-weight: bold;">${t.name}</td>
                    <td style="padding: 8px;"><span style="color:var(--accent); font-size:11px;">${t.category}</span></td>
                    <td style="padding: 8px; color: #ef4444;">-${t.amount.toLocaleString()}</td>
                    <td style="padding: 8px;">
                        <button onclick="Finance.deleteTransaction(${t.id})" style="background:none; border:none; color:#ef4444; cursor:pointer;">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </td>
                </tr>
            `;
        });
    },

   updateCharts: function(salary, stats, year) {
        // 1. Check if Chart.js is loaded
        if (typeof Chart === 'undefined') {
            console.error("Chart.js not loaded!");
            return;
        }

        // 2. Monthly Doughnut Chart
        const mCanvas = document.getElementById('monthlyChart');
        if (mCanvas) {
            const mCtx = mCanvas.getContext('2d');
            if (window.mChart instanceof Chart) window.mChart.destroy();
            
            window.mChart = new Chart(mCtx, {
                type: 'doughnut',
                data: {
                    labels: Object.keys(stats),
                    datasets: [{
                        data: Object.values(stats),
                        backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#64748b'],
                        borderWidth: 0
                    }]
                },
                options: { 
                    cutout: '70%', 
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { 
                        legend: { position: 'bottom', labels: { color: '#94a3b8', font: { size: 10 } } } 
                    } 
                }
            });
        }

        // 3. Yearly Trend Chart
        const yCanvas = document.getElementById('yearlyChart');
        if (yCanvas) {
            const yCtx = yCanvas.getContext('2d');
            if (window.yChart instanceof Chart) window.yChart.destroy();
            
            const yearlyData = Array(12).fill(0).map((_, i) => {
                const mData = this.db.years[year]?.months[i];
                return mData ? (mData.transactions || []).reduce((sum, t) => sum + (t.amount || 0), 0) : 0;
            });

            document.getElementById('exp-category').selectedIndex = 0;

            window.yChart = new Chart(yCtx, {
                type: 'line',
                data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [{
                        label: 'Spent',
                        data: yearlyData,
                        borderColor: '#3b82f6',
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        fill: true,
                        tension: 0.3
                    }]
                },
                options: { 
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: { 
                        y: { beginAtZero: true, grid: { color: '#334155' }, ticks: { color: '#94a3b8' } },
                        x: { ticks: { color: '#94a3b8' } }
                    },
                    plugins: { legend: { display: false } }
                }
            });
        }
    }
,
    

    save: function() { 
        localStorage.setItem('os_finance_v3', JSON.stringify(this.db)); 
    }
};

// تشغيل عند التحميل
document.addEventListener('DOMContentLoaded', () => Finance.init());
