//Init tooltips
tippy(".link", {
  placement: "bottom",
});

//Toggle mode
const toggle = document.querySelector(".js-change-theme");
const body = document.querySelector("body");
const profile = document.getElementById("profile");

// let currentTheme = localStorage.getItem("theme") || "light";
let currentTheme = localStorage.getItem("theme") || "light";
toggleTheme(currentTheme);

function toggleTheme(theme) {
  switch (theme) {
    case "dark":
      toggle.innerHTML = "☀️";
      body.classList.remove("light");
      body.classList.add("dark");
      profile.classList.remove("bg-white");
      profile.classList.add("bg-gray-900");
      localStorage.setItem("theme", "dark");
      currentTheme = "dark";
      break;

    case "light":
      toggle.innerHTML = "🌙";
      body.classList.remove("dark");
      body.classList.add("light");
      profile.classList.remove("bg-gray-900");
      profile.classList.add("bg-white");
      localStorage.setItem("theme", "light");
      currentTheme = "light";
      break;
  }
}

toggle.addEventListener("click", () => {
  if (currentTheme === "dark") {
    toggleTheme("light");
  } else {
    toggleTheme("dark");
  }
});
