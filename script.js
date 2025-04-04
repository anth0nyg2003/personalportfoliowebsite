function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
  const toggleSwitch = document.getElementById("dark-mode-toggle");
  const body = document.body;
  const statusText = document.getElementById("dark-mode-status");

  // Check localStorage for dark mode preference
  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    toggleSwitch.checked = true;
    statusText.textContent = "Dark Mode";
  }

  toggleSwitch.addEventListener("change", () => {
    body.classList.toggle("dark-mode");

    // Update the text and save preference to localStorage
    if (body.classList.contains("dark-mode")) {
      statusText.textContent = "Dark Mode";
      localStorage.setItem("darkMode", "enabled");
    } else {
      statusText.textContent = "Light Mode";
      localStorage.setItem("darkMode", "disabled");
    }
  });
});
