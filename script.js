//Init tooltips
tippy(".link", {
  placement: "bottom",
});

//Toggle mode
const toggle = document.querySelector(".js-change-theme");
const body = document.querySelector("body");
const profile = document.getElementById("profile");

// let currentTheme = localStorage.getItem("theme") || "light";
let currentTheme = localStorage.getItem("theme");
toggleTheme(currentTheme);

function toggleTheme(theme) {
  switch (theme) {
    case "dark":
      toggle.innerHTML = "☀️";
      body.classList.remove("text-gray-900");
      body.classList.add("text-gray-100");
      profile.classList.remove("bg-white");
      profile.classList.add("bg-gray-900");
      localStorage.setItem("theme", "dark");
      currentTheme = "dark";
      break;

    case "light":
      toggle.innerHTML = "🌙";
      body.classList.remove("text-gray-100");
      body.classList.add("text-gray-900");
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
