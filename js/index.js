//NAVBAR RESPONSIVE
let navbar = document.getElementsByClassName("navbar")[0];
let active = document.getElementById("activePage");
let toggleButton = document.getElementById("icon");

function toggleActiveId() {
  active.classList.toggle("active");

  if (active.classList.contains("active")) {
    navbar.style.background = "white";
  } else {
    navbar.style.background = "";
  }
}

toggleButton.addEventListener("click", toggleActiveId);
