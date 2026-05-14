const JobTracker = {
    init() {
        this.render();
        console.log("Job Tracker Initialized and Data Rendered");
    },

    // 1. ADDED THIS: The missing function that triggers on click
    openModal() {
        document.getElementById('job-modal').style.display = 'flex';
        document.getElementById('job-company').focus();
    },

    closeModal() {
        document.getElementById('job-modal').style.display = 'none';
        // Clear inputs
        document.getElementById('job-company').value = '';
        document.getElementById('job-role').value = '';
    },

    submitFromModal() {
        const company = document.getElementById('job-company').value;
        const role = document.getElementById('job-role').value;
        const cvLink = document.getElementById('job-cv-link').value;
        const source = document.getElementById('job-source').value; // إضافة سحب المصدر
        const sourceDetail = document.getElementById('job-source-detail').value; // إضافة التفاصيل
        const salary = document.getElementById('job-salary').value;
        const notes = document.getElementById('job-notes').value;

        if (!company || !role) {
            alert("Please fill in Company and Role.");
            return;
        }

        const jobs = this.getJobs();
        jobs.push({
            id: Date.now(),
            company,
            role,
            cvLink: cvLink || "General CV",
            source: source, // حفظ المصدر
            sourceDetail: sourceDetail || "#", // حفظ الرابط أو الإيميل
            appliedDate: new Date().toISOString(),
            status: 'Applied',
            salary: parseFloat(salary) || 0,
            notes: notes || "",
        });

        this.save(jobs);
        this.closeModal();
         // تنضيف الخانات بعد الحفظ
        document.getElementById('job-salary').value = '';
        document.getElementById('job-notes').value = '';
        
        
    },

    save(jobs) {
        localStorage.setItem('os_jobs', JSON.stringify(jobs));
        this.render();
    },

    getJobs() {
        return JSON.parse(localStorage.getItem('os_jobs')) || [];
    },

    addJob(company, role, status = 'Applied') {
        const jobs = this.getJobs();
        jobs.push({
            id: Date.now(),
            company,
            role,
            appliedDate: new Date().toISOString(), // تخزين التاريخ بدقة للحسابات
            status,
            lastFollowUp: null
        });
        this.save(jobs);
    },

    deleteJob(id) {
        if (confirm("Are you sure you want to delete this application?")) {
            const jobs = this.getJobs().filter(j => j.id !== id);
            this.save(jobs);
        }
    },

    updateStatus(id, newStatus) {
        const jobs = this.getJobs().map(j => 
            j.id === id ? { ...j, status: newStatus } : j
        );
        this.save(jobs);
    },

    updateCharts() {
        const jobs = this.getJobs();
        
        // 1. تجهيز بيانات المصادر (Email, LinkedIn, etc.)
        const sources = ['Email', 'LinkedIn', 'Website', 'Other'];
        const sourceData = sources.map(s => jobs.filter(j => j.source === s).length);

        // 2. تجهيز بيانات الحالة (Applied, Interview, Rejected, Offer)
        const statuses = ['Applied', 'Interview', 'Rejected', 'Offer'];
        const statusData = statuses.map(s => jobs.filter(j => j.status === s).length);

        // رسم Chart المصادر (Doughnut Chart)
        const ctxS = document.getElementById('sourceChart').getContext('2d');
        if(window.mySourceChart) window.mySourceChart.destroy(); // حذف القديم عشان ميبقاش فيه "Shagginess"
        window.mySourceChart = new Chart(ctxS, {
            type: 'doughnut',
            data: {
                labels: sources,
                datasets: [{
                    data: sourceData,
                    backgroundColor: ['#3b82f6', '#0a66c2', '#10b981', '#64748b'],
                    borderWidth: 0
                }]
            },
            options: { plugins: { legend: { position: 'right', labels: { color: '#94a3b8' } } } }
        });

        // رسم Chart الحالات (Bar Chart)
        const ctxT = document.getElementById('statusChart').getContext('2d');
        if(window.myStatusChart) window.myStatusChart.destroy();
        window.myStatusChart = new Chart(ctxT, {
            type: 'bar',
            data: {
                labels: statuses,
                datasets: [{
                    label: 'Applications',
                    data: statusData,
                    backgroundColor: '#06b6d4'
                }]
            },
            options: { 
                scales: { 
                    y: { beginAtZero: true, ticks: { color: '#94a3b8' } },
                    x: { ticks: { color: '#94a3b8' } }
                },
                plugins: { legend: { display: false } }
            }
        });
    },

    renderAdvancedCharts() {
        const jobs = this.getJobs();
        if (jobs.length === 0) return;

        const sources = ['Email', 'LinkedIn', 'Website', 'Other'];
        
        // Data Processing Arrays
        const applicationsBySource = [];
        const interviewsBySource = [];
        
        let highestVolumeSource = "N/A";
        let maxVolume = 0;

        let highestSuccessSource = "N/A";
        let maxInterviews = 0;

        let totalInterviews = 0;
        let ghostedCount = 0;
        const now = new Date();

        const pipelineValues = {
            'Applied': 0,
            'Interview': 0,
            'Offer': 0
        };

        jobs.forEach(j => {
            if (pipelineValues.hasOwnProperty(j.status)) {
                pipelineValues[j.status] += j.salary;
            }
        });

        const totalValue = pipelineValues['Applied'] + pipelineValues['Interview'] + pipelineValues['Offer'];
        document.getElementById('total-pipeline-value').textContent = `$${totalValue.toLocaleString()}`;
        

        // رسم الـ Pipeline Chart (Horizontal Bar)
        const ctxPipe = document.getElementById('pipelineChart').getContext('2d');
        if(window.pipeChart) window.pipeChart.destroy();
        window.pipeChart = new Chart(ctxPipe, {
            type: 'bar',
            data: {
                labels: ['Applied', 'Interview', 'Offer'],
                datasets: [{
                    axis: 'y',
                    label: 'Potential Money',
                    data: [pipelineValues['Applied'], pipelineValues['Interview'], pipelineValues['Offer']],
                    backgroundColor: ['#64748b', '#3b82f6', '#10b981'],
                    borderRadius: 5
                }]
            },
            options: { indexAxis: 'y', plugins: { legend: { display: false } } }
        });

        // 1. Calculate the core data
        sources.forEach(source => {
            // Volume
            const appliedCount = jobs.filter(j => j.source === source).length;
            applicationsBySource.push(appliedCount);
            
            if (appliedCount > maxVolume) {
                maxVolume = appliedCount;
                highestVolumeSource = source;
            }

            // Success (Interviews + Offers)
            const successCount = jobs.filter(j => j.source === source && (j.status === 'Interview' || j.status === 'Offer')).length;
            interviewsBySource.push(successCount);
            totalInterviews += successCount;

            if (successCount > maxInterviews) {
                maxInterviews = successCount;
                highestSuccessSource = source;
            }
        });

        // 2. Calculate Ghosting Rate (Applied status for > 14 days)
        jobs.forEach(job => {
            const daysSince = Math.floor((now - new Date(job.appliedDate)) / (1000 * 60 * 60 * 24));
            if (daysSince >= 14 && job.status === 'Applied') {
                ghostedCount++;
            }
        });

        // 3. Update the Top KPI Text
        document.getElementById('stat-top-source').textContent = highestVolumeSource;
        document.getElementById('stat-best-source').textContent = maxInterviews > 0 ? highestSuccessSource : "None Yet";
        document.getElementById('stat-total-interviews').textContent = totalInterviews;
        document.getElementById('stat-ghost-rate').textContent = jobs.length > 0 ? ((ghostedCount / jobs.length) * 100).toFixed(0) + '%' : '0%';

        // 4. Render Chart 1: Volume (Doughnut)
        const ctxVol = document.getElementById('sourceVolumeChart').getContext('2d');
        if(window.volChart) window.volChart.destroy();
        window.volChart = new Chart(ctxVol, {
            type: 'doughnut',
            data: {
                labels: sources,
                datasets: [{
                    data: applicationsBySource,
                    backgroundColor: ['#f59e0b', '#0a66c2', '#10b981', '#64748b'], // Distinct colors
                    borderWidth: 0,
                    hoverOffset: 4
                }]
            },
            options: { 
                plugins: { legend: { position: 'bottom', labels: { color: '#94a3b8', font: {size: 11} } } },
                cutout: '70%' // Sleek thin ring
            }
        });

        // 5. Render Chart 2: Effectiveness (Grouped Bar Chart)
        const ctxEff = document.getElementById('sourceEffectivenessChart').getContext('2d');
        if(window.effChart) window.effChart.destroy();
        window.effChart = new Chart(ctxEff, {
            type: 'bar',
            data: {
                labels: sources,
                datasets: [
                    {
                        label: 'Total Applied',
                        data: applicationsBySource,
                        backgroundColor: '#334155', // Subdued color for attempts
                        borderRadius: 4
                    },
                    {
                        label: 'Interviews Landed',
                        data: interviewsBySource,
                        backgroundColor: '#10b981', // Highlight color for success
                        borderRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94a3b8', stepSize: 1 } },
                    x: { grid: { display: false }, ticks: { color: '#94a3b8' } }
                },
                plugins: {
                    legend: { position: 'top', align: 'end', labels: { color: '#94a3b8', boxWidth: 12 } }
                }
            }
        });
    },

    render() {
        const jobs = this.getJobs();
        const body = document.getElementById('job-list-body');
        const now = new Date();

        

        // Update Stats
        document.getElementById('total-applied').textContent = jobs.length;
        const interviews = jobs.filter(j => j.status === 'Interview').length;
        document.getElementById('total-interviews').textContent = interviews;
        document.getElementById('response-rate').textContent = 
            jobs.length > 0 ? ((interviews / jobs.length) * 100).toFixed(0) + '%' : '0%';

        // Render Table
        body.innerHTML = jobs.map(job => {
            const daysSince = Math.floor((now - new Date(job.appliedDate)) / (1000 * 60 * 60 * 24));
            
            // Logic الـ Ghosting: لو فات أكتر من 14 يوم والحالة لسه Applied
            const isGhosted = daysSince >= 14 && job.status === 'Applied';
            const needsFollowUp = daysSince >= 7 && daysSince < 14 && job.status === 'Applied';
            // تحديد الأيقونة حسب المصدر
            const getSourceIcon = (source) => {
                if (source === 'Email') return 'fa-envelope';
                if (source === 'LinkedIn') return 'fa-linkedin-in';
                if (source === 'Website') return 'fa-globe';
                return 'fa-arrow-up-right-from-square';
            };

            return `
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); ${isGhosted ? 'opacity: 0.6;' : ''}">
                    <td style="padding:15px;">
                        <div style="display:flex; align-items:center; gap:8px;">
                            <i class="fa-solid ${getSourceIcon(job.source)}" style="font-size:12px; color:var(--accent);"></i>
                            <strong>${job.company}</strong>
                            ${isGhosted ? '<span style="font-size:10px; background:#475569; padding:2px 6px; border-radius:4px;">GHOSTED 👻</span>' : ''}
                            ${needsFollowUp ? '⚠️' : ''}
                        </div>
                        <div style="color:var(--text-dim); font-size:12px; margin-top:4px;">
                            ${job.role} ${job.notes ? `<span title="${job.notes}" style="cursor:help; color:var(--accent); margin-left:5px;">💡</span>` : ''}
                        </div>
                    </td>
                    <td style="padding:15px;">
                        <div style="color:#10b981; font-weight:600; font-size:13px;">
                            ${job.salary ? `$${job.salary.toLocaleString()}` : '--'}
                        </div>
                        <div style="font-size:11px; color:var(--text-dim);">Est. Salary</div>
                    </td>
                    <td style="padding:15px;">
                        <div style="font-size:13px;">${new Date(job.appliedDate).toLocaleDateString()}</div>
                        <div style="font-size:11px; color:${isGhosted ? '#ef4444' : 'var(--text-dim)'}">${daysSince} days ago</div>
                    </td>
                    <td style="padding:15px;">
                        <select onchange="JobTracker.updateStatus(${job.id}, this.value)" style="background:#1e293b; color:white; border:none; border-radius:4px; font-size:12px; padding:4px;">
                            <option value="Applied" ${job.status === 'Applied' ? 'selected' : ''}>Applied</option>
                            <option value="Interview" ${job.status === 'Interview' ? 'selected' : ''}>Interview</option>
                            <option value="Rejected" ${job.status === 'Rejected' ? 'selected' : ''}>Rejected</option>
                            <option value="Offer" ${job.status === 'Offer' ? 'selected' : ''}>Offer</option>
                        </select>
                    </td>
                    <td style="padding:15px; text-align:right;">
                        ${job.source === 'Email' ? `
                            <button onclick="JobTracker.getTemplate(${job.id})" title="Copy Follow-up" style="background:none; border:none; color:var(--accent); cursor:pointer;">
                                <i class="fa-solid fa-paper-plane"></i>
                            </button>
                        ` : `
                            <a href="${job.sourceDetail}" target="_blank" title="Open Job Link" style="color:var(--accent); margin-right:10px;">
                                <i class="fa-solid fa-external-link"></i>
                            </a>
                        `}

                        ${job.cvLink !== "General CV" ? `
                            <a href="${job.cvLink}" target="_blank" title="View CV Sent" style="color:var(--text-dim); margin-right:10px;">
                                <i class="fa-solid fa-file-pdf">🗃️</i>
                            </a>
                        ` : ''}
                        <button onclick="JobTracker.getTemplate(${job.id})" title="Copy Email" style="background:none; border:none; color:var(--accent); cursor:pointer; margin-right:10px;">
                            <i class="fa-solid fa-paper-plane">🚀</i>
                        </button>
                        <button onclick="JobTracker.deleteJob(${job.id})" style="background:none; border:none; color:#ef4444; cursor:pointer;">
                            <i class="fa-solid fa-trash">🗑️</i>
                        </button>
                    </td>
                    
                </tr>
            `;
        }).join('');

        // تحديث الـ Stats فوق
        document.getElementById('total-applied').textContent = jobs.length;
        document.getElementById('total-interviews').textContent = jobs.filter(j => j.status === 'Interview').length;

        this.updateCharts();
        // جوه دالة render()
        //const interviews = jobs.filter(j => j.status === 'Interview').length;
        const total = jobs.length;
        const successRate = total > 0 ? ((interviews / total) * 100).toFixed(1) : 0;

        // البحث عن أفضل مصدر
        const sourceStats = {};
        jobs.filter(j => j.status === 'Interview').forEach(j => {
            sourceStats[j.source] = (sourceStats[j.source] || 0) + 1;
        });
        const bestSource = Object.keys(sourceStats).reduce((a, b) => sourceStats[a] > sourceStats[b] ? a : b, "N/A");

        document.getElementById('response-rate').textContent = `${successRate}%`;
        // ممكن تضيف ID جديد في الـ HTML لـ "Best Source"
        if(document.getElementById('best-source')) {
            document.getElementById('best-source').textContent = bestSource;
        }

        if (typeof this.renderAdvancedCharts === 'function') {
            this.renderAdvancedCharts();
        }

    },

    getTemplate(jobId) {
        const job = this.getJobs().find(j => j.id === jobId);
        if (!job) return;

        // Template احترافي متفصل على شغلك
        const emailBody = `
            Subject: Follow-up: ${job.role} Application - Mohamed Mansour

            Dear Hiring Team at ${job.company},

            I hope this email finds you well.

            I am writing to briefly follow up on my application for the ${job.role} position which I submitted on ${new Date(job.appliedDate).toLocaleDateString()}. 

            I am still very interested in this opportunity and believe my technical background in Well Testing operations and my current work on industrial-grade software projects would bring great value to your team.

            Could you please provide an update on the status of my application or let me know if any further information is required?

            Thank you for your time and consideration.

            Best Regards,
            Mohamed Mansour
            `.trim();

            // عرض الإيميل في الـ Console أو عمل Copy تلقائي
            navigator.clipboard.writeText(emailBody);
            alert(`Follow-up template for ${job.company} copied to clipboard! 📋`);
    },

    

};

// تشغيل السيستم أول ما الصفحة تحمل
document.addEventListener('DOMContentLoaded', () => {
    JobTracker.init();
});
