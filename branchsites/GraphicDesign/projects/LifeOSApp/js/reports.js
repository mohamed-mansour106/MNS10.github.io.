const Reports = {
    generate() {
        // 1. Data Fetching with Fallbacks
        const financeData = JSON.parse(localStorage.getItem('os_finance_v3')) || { years: {} };
        const lifeData = Storage.get('lifeData') || [];
        const docs = Storage.get('userDocs') || [];
        const projects = Storage.get('userProjects') || [];
        const journal = Storage.get('journalEntries') || [];
        const habits = Storage.get('userHabits') || [];
        const jobData = JobTracker.getJobs();
        const activeApplications = jobData.filter(j => j.status !== 'Rejected').length;

        if (lifeData.length === 0 && projects.length === 0) {
            return alert("Not enough data to generate a report yet!");
        }

        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth();

        // 2. Financial Analysis
        let finStatus = "No Data";
        let finTip = "Start logging your salary.";
        const yearData = financeData.years[currentYear];
        if (yearData && yearData.months[currentMonth]) {
            const mData = yearData.months[currentMonth];
            const spent = mData.transactions.reduce((s, t) => s + t.amount, 0);
            const saved = mData.monthlySalary - spent;
            finStatus = `${saved.toLocaleString()} EGP`;
            finTip = saved > 0 ? "Under budget - Well done!" : "Over budget - Caution!";
        }

        // 3. Productivity & Peak Day
        const avgFocus = lifeData.length > 0 
            ? (lifeData.reduce((s, a) => s + a.rating, 0) / lifeData.length).toFixed(1) 
            : "0.0";

        const peakEntry = lifeData.length > 0 
            ? [...lifeData].sort((a, b) => b.rating - a.rating)[0] 
            : { date: "N/A", rating: 0 };

        // 4. Project Velocity & Top Project
        const topProj = projects.length > 0 
            ? [...projects].sort((a, b) => b.progress - a.progress)[0] 
            : { title: "None", progress: 0 };

        // 5. Journal Mood Analysis (Last 7 entries)
        const moodCounts = {};
        journal.slice(-7).forEach(j => moodCounts[j.mood] = (moodCounts[j.mood] || 0) + 1);
        const topMood = Object.keys(moodCounts).length > 0 
            ? Object.keys(moodCounts).reduce((a, b) => moodCounts[a] > moodCounts[b] ? a : b) 
            : "Neutral";

        // 6. Urgent Documents (14 Day Window)
        const urgent = docs.filter(d => {
            const diff = (new Date(d.expiryDate) - now) / (1000 * 60 * 60 * 24);
            return diff >= 0 && diff <= 14;
        });

        const jobs = JobTracker.getJobs();
        const followUpRequired = jobs.filter(j => {
            const days = Math.floor((new Date() - new Date(j.appliedDate)) / (1000 * 60 * 60 * 24));
            return days >= 7 && j.status === 'Applied';
        });

        // 7. Operations Count (Tasks tagged as 'Field Op' or 'Work')
        const allTasks = JSON.parse(localStorage.getItem('userTasks')) || [];
        const opCount = allTasks.filter(t => t.tag === 'Field Op' || t.tag === 'Work').length;

        //8. OS Calender
        // Inside Reports.generate()
        const calendarEvents = JSON.parse(localStorage.getItem('os_calendar_events')) || [];

        // Calculate Time Stats
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

        const timeTotals = {};

        calendarEvents.forEach(event => {
            const eventDate = new Date(event.start);
            
            // Only count events from the last 7 days
            if (eventDate >= oneWeekAgo) {
                const start = new Date(event.start);
                const end = new Date(event.end || event.start);
                const hours = Math.abs(end - start) / 36e5; // Convert milliseconds to hours

                // Group by color (our category identifier)
                const color = event.backgroundColor;
                // Extract category name from title (e.g., "⛽ Field Op: Title" -> "Field Op")
                const label = event.title.split(':')[0] || "Other";

                if (!timeTotals[label]) {
                    timeTotals[label] = { hours: 0, color: color };
                }
                timeTotals[label].hours += hours;
            }
        });

        this.updateUI({
            peakEntry, 
            topMood, 
            urgent, 
            projects, 
            finStatus, 
            activeApplications,
            finTip, 
            avgFocus, 
            opCount,
            followUpRequired,
            totalJobs: jobs.length,
            topProj,
            timeTotals
        });
    },

    updateUI(data) {
        document.getElementById('report-container').style.display = 'block';
        
        // Header
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        document.getElementById('report-date').textContent = `TODAY: ${new Date().toLocaleDateString('en-US', dateOptions)}`;

        // Get today's date string (e.g., "YYYY-MM-DD")
        const todayStr = new Date().toISOString().split('T')[0];

        // Filter tasks for 'Field Op' or 'Work' that also match today's date
        const allTasks = JSON.parse(localStorage.getItem('userTasks')) || [];
        const opCount = allTasks.filter(t => 
            (t.tag === 'Field Op' || t.tag === 'Work') && 
            t.date === todayStr // Assumes your tasks have a 'date' property
        ).length;




        // Cards
        document.getElementById('rep-finance-status').textContent = data.finStatus;
        document.getElementById('rep-finance-tip').textContent = data.finTip;
        document.getElementById('rep-avg-focus').textContent = `${data.avgFocus} / 10`;
        document.getElementById('rep-ops-count').textContent = `${data.opCount} Operations`;
        document.getElementById('rep-top-project').textContent = `Leading: ${data.topProj.title} (${data.topProj.progress}%)`;
        
        // Peak Performance
        document.getElementById('peak-day').textContent = data.peakEntry.date;
        document.getElementById('peak-insight').textContent = `Peak focus level: ${data.peakEntry.rating}/10.`;
        
        // Mood
        document.getElementById('avg-mood').textContent = data.topMood;

        // Urgent Docs
        const docList = document.getElementById('urgent-docs-list');
        docList.innerHTML = data.urgent.length > 0 
            ? data.urgent.map(d => `<li style="margin-bottom:5px;">⚠️ <strong>${d.name}</strong> <span style="color:var(--danger)">exp. ${d.expiryDate}</span></li>`).join('')
            : "<li style='color:var(--text-dim)'>✅ No urgent expirations.</li>";


        // قسم متابعة الوظائف في التقرير
        const jobAlerts = document.getElementById('job-alerts-list') || document.createElement('div'); 
        // تأكد من وجود مكان له في الـ HTML
        jobAlerts.innerHTML = data.followUpRequired.length > 0 
            ? `<h4>📣 Action Required: Job Follow-ups</h4>` + 
            data.followUpRequired.map(j => `
                <div style="color:var(--accent); font-size:13px; margin-bottom:5px;">
                    🚀 It's been 7+ days since you applied to <strong>${j.company}</strong>. Send a follow-up email!
                </div>`).join('')
            : "";

        

        // Project Progress
        const projList = document.getElementById('project-stats');
        projList.innerHTML = data.projects.slice(0, 3).map(p => `
            <div style="margin-bottom:12px;">
                <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:4px;">
                    <span>${p.title}</span>
                    <span style="color:var(--accent)">${p.progress}%</span>
                </div>
                <div style="background:#1e293b; height:6px; border-radius:10px;">
                    <div style="width:${p.progress}%; background:linear-gradient(90deg, var(--accent), #a855f7); height:100%; border-radius:10px;"></div>
                </div>
            </div>
        `).join('');

        //OS Calendar
        const timeStatsContainer = document.getElementById('time-stats');
        if (data.timeTotals && Object.keys(data.timeTotals).length > 0) {
            timeStatsContainer.innerHTML = Object.entries(data.timeTotals).map(([label, info]) => `
                <div>
                    <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:4px;">
                        <span>${label}</span>
                        <span style="font-weight:bold;">${info.hours.toFixed(1)} hrs</span>
                    </div>
                    <div style="background:#0f172a; height:8px; border-radius:4px; overflow:hidden;">
                        <div style="width: ${Math.min((info.hours / 40) * 100, 100)}%; 
                                    background:${info.color}; 
                                    height:100%; 
                                    border-radius:4px;">
                        </div>
                    </div>
                </div>
            `).join('');
        } else {
            timeStatsContainer.innerHTML = "<p style='color:var(--text-dim); font-size:12px;'>No calendar data for this week.</p>";
        }
    }
};
