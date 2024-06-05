// Toggle class active

const navbarNav = document.querySelector(".navbar-nav");

// ketika humburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.targer)) {
    navbarNav.classList.remove("active");
  }
});