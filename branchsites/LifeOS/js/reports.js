const Reports = {
    generate() {
        const history = Storage.get('lifeData');
        const docs = Storage.get('userDocs');
        const projects = Storage.get('userProjects');
        const journal = Storage.get('journalEntries');

        if (history.length === 0) return alert("Not enough data to generate a report yet!");

        // 1. Find Peak Day (Highest Focus Rating)
        const peakEntry = [...history].sort((a, b) => b.rating - a.rating)[0];
        
        // 2. Calculate Avg Mood from Journal
        const moodCounts = {};
        journal.slice(0, 7).forEach(j => moodCounts[j.mood] = (moodCounts[j.mood] || 0) + 1);
        const topMood = Object.keys(moodCounts).reduce((a, b) => moodCounts[a] > moodCounts[b] ? a : b, "Stable");

        // 3. Find Urgent Docs (Next 14 Days)
        const today = new Date();
        const urgent = docs.filter(d => {
            const diff = (new Date(d.expiryDate) - today) / (1000 * 60 * 60 * 24);
            return diff > 0 && diff <= 14;
        });

        this.updateUI(peakEntry, topMood, urgent, projects);
    },

    updateUI(peak, mood, urgent, projects) {
        document.getElementById('report-container').style.display = 'block';
        document.getElementById('report-date').textContent = `WEEK ENDING: ${new Date().toLocaleDateString()}`;
        
        document.getElementById('peak-day').textContent = peak.date;
        document.getElementById('peak-insight').textContent = `You hit a focus level of ${peak.rating}/10.`;
        document.getElementById('avg-mood').textContent = mood;

        // Render Urgent Docs
        const docList = document.getElementById('urgent-docs-list');
        docList.innerHTML = urgent.length > 0 
            ? urgent.map(d => `<li>• ${d.name} (${d.expiryDate})</li>`).join('')
            : "<li>No urgent expirations. All clear!</li>";

        // Render Project Progress
        const projList = document.getElementById('project-stats');
        projList.innerHTML = projects.map(p => `
            <div style="margin-bottom:10px;">
                <div style="display:flex; justify-content:space-between; font-size:12px;">
                    <span>${p.title}</span>
                    <span>${p.progress}%</span>
                </div>
                <div style="background:#334155; height:4px; border-radius:10px; margin-top:4px;">
                    <div style="width:${p.progress}%; background:var(--accent); height:100%;"></div>
                </div>
            </div>
        `).join('');
    }
};
