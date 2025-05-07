document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const courses = document.querySelectorAll(".card");

    searchInput.addEventListener("focus", () => {
      courses.forEach(div => div.classList.remove("hidden"));
    });

    searchInput.addEventListener("input", function () {
      const searchTerm = searchInput.value.toLowerCase();
      courses.forEach(course => {
        const text = course.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
          course.classList.remove("hidden");
        } else {
          course.classList.add("hidden");
        }
      });
    });
  });