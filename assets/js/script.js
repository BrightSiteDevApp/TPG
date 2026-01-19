'use strict';

/**
 * navbar variables
 */
const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * header sticky functionality
 */
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 20
    ? header.classList.add("active")
    : header.classList.remove("active");
});

/**
 * go top
 */
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 800
    ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});

/**
 * see more / see less toggle for long text
 */
function toggleText(el) {
  const shortText = el.parentElement.querySelector(".short-text");
  const fullText = el.parentElement.querySelector(".full-text");

  if (fullText.style.display === "none" || fullText.style.display === "") {
    fullText.style.display = "inline";
    shortText.style.display = "none";
    el.textContent = "See less...";
  } else {
    fullText.style.display = "none";
    shortText.style.display = "inline";
    el.textContent = "See more...";
  }
}
