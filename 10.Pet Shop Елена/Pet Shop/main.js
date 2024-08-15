//Burger Menu
const burgerMenuBtn = document.querySelector(".burger-menu-btn");
const burgerMenuBtnClose = document.querySelector(".close-burger-menu-btn");
const nav = document.querySelector(".nav");
const body = document.querySelector(".body");
const overlay = document.querySelector(".overlay");

burgerMenuBtn.addEventListener("click", () => {
  nav.classList.add("js-burger-menu");
  overlay.classList.add("js-overlay");
  body.style.overflow = "hidden";
});

burgerMenuBtnClose.addEventListener("click", () => {
  nav.classList.remove("js-burger-menu");
  overlay.classList.remove("js-overlay");
  body.style.overflow = "auto";
});

overlay.addEventListener("click", () => {
  nav.classList.remove("js-burger-menu");
  overlay.classList.remove("js-overlay");
  body.style.overflow = "auto";
});
// console.log("Hello");