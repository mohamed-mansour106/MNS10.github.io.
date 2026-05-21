const Analysis = {
    async getMetrics() {
        const docs = Storage.get('userDocs', []);
        const tasks = Storage.get('lifeData', []);
        const journal = Storage.get('journalEntries', []);
        const projects = Storage.get('userProjects', []);

        const urgentDocs = docs.filter(doc => {
            const diff = (new Date(doc.expiryDate) - new Date()) / (1000 * 60 * 60 * 24);
            return diff > 0 && diff <= 30;
        }).length;

        const prodScore = tasks.length > 0 ? '84%' : 'N/A';
        const exportedData = await Storage.exportAll();
        const storageBytes = JSON.stringify(exportedData).length * 2;
        const storagePercent = ((storageBytes / (5 * 1024 * 1024)) * 100).toFixed(1);

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

    async renderStats() {
        const metrics = await this.getMetrics();

        document.getElementById('prod-score').textContent = metrics.prodScore;
        document.getElementById('storage-health').textContent = `${metrics.storagePercent}%`;
        document.getElementById('doc-risk').textContent = metrics.urgentDocs;
    }
};

document.addEventListener('DOMContentLoaded', () => Analysis.renderStats());
