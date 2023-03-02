const dmSwitch = document.getElementById("dmSwitch");
const dmSwitchIcon = document.getElementById("dmSwitchIcon");
const currentTheme = localStorage.getItem("theme");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");


if (currentTheme == "dark") {
  document.body.classList.add("dark-mode");
  dmSwitchIcon.classList.add('icon-dark');
}

dmSwitch.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
  dmSwitchIcon.classList.toggle('icon-dark');
  let theme = "light";
  if (document.body.classList.contains("dark-mode")) {
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
});

