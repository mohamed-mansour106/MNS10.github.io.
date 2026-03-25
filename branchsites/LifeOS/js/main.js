// js/main.js
const navLinks = document.querySelectorAll('.nav-link');
const tabs = document.querySelectorAll('.tab-content');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // 1. Remove active class from all links and tabs
        navLinks.forEach(l => l.classList.remove('active'));
        tabs.forEach(t => t.classList.remove('active'));

        // 2. Add active class to clicked link
        link.classList.add('active');

        // 3. Show the corresponding tab
        const tabId = link.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});




/*********************************screen ******************************** */
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
}

// تعديل بسيط على كود التبديل بين الـ Tabs عشان يقفل القائمة تلقائياً في الموبايل بعد الاختيار
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 1024) {
            toggleSidebar(); // يقفل القائمة بعد ما تختار الـ Tab
        }
    });
});
