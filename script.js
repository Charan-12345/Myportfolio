document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("darkModeToggle");
    const body = document.body;
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    // Dark mode toggle
    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
        toggleButton.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });

    // Menu toggle for mobile
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Preserve dark mode state
    if (localStorage.getItem("darkMode") === "true") {
        body.classList.add("dark-mode");
        toggleButton.textContent = "☀️";
    }
});
