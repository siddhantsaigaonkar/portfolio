document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const btn = document.getElementById("darkModeBtn");
  const btnMobile = document.getElementById("darkModeBtnMobile");

  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
  }

  function toggleTheme() {
    html.classList.toggle("dark");

    if (html.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }

  btn?.addEventListener("click", toggleTheme);
  btnMobile?.addEventListener("click", toggleTheme);
});




