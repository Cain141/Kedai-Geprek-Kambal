document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navbarNav = document.querySelector(".navbar-nav");
  const navbarExtraIcons = document.querySelectorAll(".navbar-extra .icon");

  function checkScreenWidth() {
    if (window.innerWidth <= 768) {
      navbarExtraIcons.forEach((icon) => {
        icon.style.display = "block";
      });
    } else {
      navbarExtraIcons.forEach((icon) => {
        icon.style.display = "none";
      });
    }
  }

  // Initial check
  checkScreenWidth();

  // Check on resize
  window.addEventListener("resize", checkScreenWidth);

  // Toggle navbar on hamburger menu click
  hamburgerMenu.addEventListener("click", function () {
    navbarNav.classList.toggle("active");
  });

  // Close the navbar when a link is clicked (optional)
  navbarNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        navbarNav.classList.remove("active");
      }
    });
  });
});
