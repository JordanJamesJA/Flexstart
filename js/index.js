//NAVBAR RESPONSIVE

let active = document.getElementById("activePage");
let toggleButton = document.getElementById("icon");

function toggleActiveId() {
    active.classList.toggle("active");
}

toggleButton.addEventListener("click", toggleActiveId);
