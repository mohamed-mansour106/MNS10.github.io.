// js/projects.js

const Projects = {
    init() {
        this.renderProjects();
    },

    // Default projects for Mohamed
    defaultProjects: [
        {
            title: "Well Testing Academy",
            description: "Educational platform for oil & gas community.",
            progress: 65,
            tag: "Education"
        },
        {
            title: "Engineering Calculators",
            description: "Building GOR and Hydrostatic Pressure tools.",
            progress: 40,
            tag: "Coding"
        }
    ],

    getProjects() {
        const saved = Storage.get('userProjects');
        return saved.length > 0 ? saved : this.defaultProjects;
    },

    renderProjects() {
        const grid = document.getElementById('projects-grid');
        const projects = this.getProjects();

        grid.innerHTML = projects.map(project => `
            <div class="stat-card">
                <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                    <span style="font-size: 12px; color: var(--accent); font-weight: bold;">${project.tag}</span>
                    <i class="fa-solid fa-ellipsis-vertical" style="color: var(--text-dim); cursor: pointer;"></i>
                </div>
                <h3 style="color: var(--text-main); font-size: 18px; margin: 10px 0;">${project.title}</h3>
                <p style="color: var(--text-dim); font-size: 13px; margin-bottom: 20px;">${project.description}</p>
                
                <div class="progress-container" style="background: #334155; height: 8px; border-radius: 10px; overflow: hidden;">
                    <div class="progress-bar" style="width: ${project.progress}%; background: var(--accent); height: 100%;"></div>
                </div>
                <div style="text-align: right; font-size: 12px; margin-top: 5px; color: var(--text-dim);">
                    ${project.progress}% Complete
                </div>
            </div>
        `).join('');
    },
    
};

// Function to show the modal
function openProjectModal() {
    document.getElementById('projectModal').style.display = 'flex';
}

// Function to hide the modal
function closeProjectModal() {
    document.getElementById('projectModal').style.display = 'none';
}

// Function to save the project
function saveNewProject() {
    const title = document.getElementById('p-title').value;
    const tag = document.getElementById('p-tag').value;
    const progress = document.getElementById('p-progress').value;

    if (!title || !tag) {
        alert("Please fill in the title and tag!");
        return;
    }

    const newProject = {
        title: title,
        description: "New custom engineering project.", // You can add a description input too
        progress: parseInt(progress) || 0,
        tag: tag
    };

    // 1. Get current projects
    const currentProjects = Projects.getProjects();
    
    // 2. Add the new one
    currentProjects.push(newProject);
    
    // 3. Save to localStorage
    Storage.save('userProjects', currentProjects);
    
    // 4. Refresh the UI and Close
    Projects.renderProjects();
    closeProjectModal();
    
    // 5. Clear inputs
    document.getElementById('p-title').value = '';
    document.getElementById('p-tag').value = '';
    document.getElementById('p-progress').value = 0;
}

// Initialize when the script loads
document.addEventListener('DOMContentLoaded', () => Projects.init());
