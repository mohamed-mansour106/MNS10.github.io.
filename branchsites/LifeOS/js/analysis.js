const Analysis = {
    init() {
        this.renderStats();
    },

    getMetrics() {
        const docs = Storage.get('userDocs');
        const tasks = Storage.get('lifeData'); // Assuming your tasks are here
        const journal = Storage.get('journalEntries');
        const projects = Storage.get('userProjects');

        // 1. Calculate Document Risk
        const urgentDocs = docs.filter(d => {
            const diff = (new Date(d.expiryDate) - new Date()) / (1000 * 60 * 60 * 24);
            return diff > 0 && diff <= 30;
        }).length;

        // 2. Calculate Productivity (Mocked based on task ratio)
        const prodScore = tasks.length > 0 ? "84%" : "N/A";

        // 3. Storage Calculation
        let totalSize = 0;
        for (let key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                totalSize += (localStorage[key].length + key.length) * 2;
            }
        }
        const storagePercent = ((totalSize / (5 * 1024 * 1024)) * 100).toFixed(1);

        return {
            counts: {
                Documents: docs.length,
                Journal: journal.length,
                Projects: projects.length,
                Records: tasks.length
            },
            urgentDocs,
            prodScore,
            storagePercent
        };
    },

    renderStats() {
        const metrics = this.getMetrics();

        // Update Text Cards
        document.getElementById('prod-score').textContent = metrics.prodScore;
        document.getElementById('storage-health').textContent = metrics.storagePercent + "%";
        document.getElementById('doc-risk').textContent = metrics.urgentDocs;

        // Update Breakdown List
        const list = document.getElementById('data-breakdown');
        list.innerHTML = Object.entries(metrics.counts).map(([label, count]) => `
            <li style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid var(--border);">
                <span>${label}</span>
                <strong style="color: var(--accent);">${count}</strong>
            </li>
        `).join('');

        this.renderChart();
    },

    renderChart() {
        const ctx = document.getElementById('analysisChart');
        if (!ctx) return;

        // Get actual habit ratings from Storage
        const history = Storage.get('lifeData');
        const labels = history.slice(-7).map(h => h.date || 'Day');
        const dataValues = history.slice(-7).map(h => h.rating || 0);

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels.length > 0 ? labels : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Focus Score',
                    data: dataValues.length > 0 ? dataValues : [5, 8, 6, 9, 7, 4, 8],
                    backgroundColor: '#3b82f6',
                    borderRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { beginAtZero: true, max: 10, grid: { color: '#334155' } },
                    x: { grid: { display: false } }
                }
            }
        });
    }
};

document.addEventListener('DOMContentLoaded', () => Analysis.init());
