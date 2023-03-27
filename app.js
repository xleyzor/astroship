const features = document.querySelector(".dropdown-menu");
const dropdown = document.querySelector(".dropdown");
const arrow = document.querySelector(".arrows");

features.addEventListener("click", arrowfunction);

const mobileNavbar = document.querySelector(".mobileNavbar");
const toggleMenu = document.querySelector(".menu");
const navBar = document.querySelector(".navbar");

toggleMenu.addEventListener("click", function () {
  toggleMenu.classList.toggle("active");
  mobileNavbar.classList.toggle("display-block");
  navBar.classList.toggle("m-bottom-0");
});

function arrowfunction() {
  dropdown.classList.toggle("display-flex");

  arrow.classList.toggle("active");
}

const mobileFeatures = document.querySelector(".mobile-dropdown-menu");
const mobileDropdown = document.querySelector(".mobile-dropdown");
const arrowMobile = document.querySelector(".arrows-mobile");

mobileFeatures.addEventListener("click", function () {
  mobileDropdown.classList.toggle("display-flex");

  arrowMobile.classList.toggle("active");
});
