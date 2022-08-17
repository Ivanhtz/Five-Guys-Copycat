const buttonMenuOpen = document.querySelector(".header__menu");
const buttonMenuClose = document.querySelector(".mobile__menu__close");
const mobileMenu = document.querySelector(".mobile__menu");
const button = document.querySelector(".mobile__menu__button");
let menu = false;

buttonMenuOpen.addEventListener("click", () => {
  showMenu();
});

buttonMenuClose.addEventListener("click", () => {
  showMenu();
});

button.addEventListener("click", () => {
  showMenu();
});

const showMenu = () => {
  menu = !menu;

  if (menu) {
    mobileMenu.classList.add("show");
  } else {
    mobileMenu.classList.remove("show");
  }
};
