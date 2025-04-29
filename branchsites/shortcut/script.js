// JavaScript for Tab Functionality
document.addEventListener("DOMContentLoaded", () => {
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Remove active class from all tabs and panels
      tabLinks.forEach((tab) => tab.classList.remove("active"));
      tabPanels.forEach((panel) => panel.classList.remove("active"));

      // Add active class to the clicked tab and corresponding panel
      link.classList.add("active");
      const targetPanel = document.getElementById(link.dataset.tab);
      targetPanel.classList.add("active");
    });
  });
});