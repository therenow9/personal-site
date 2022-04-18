const hamburger = document.querySelector(".hamburger ");
const nav_menu = document.querySelector(".nav__link");
const nav_item = document.querySelectorAll(".nav__link");
hamburger.addEventListener("click", toggleMenu);
nav_item.forEach((n) => n.addEventListener("click", toggleMenu));

function toggleMenu() {
  nav_menu.classList.toggle("hide");
}
