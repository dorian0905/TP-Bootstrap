const navBar = document.getElementById("navbar-fixed");
const subNav = document.querySelectorAll(".subNav a");
console.log(subNav);
console.log(navBar);
window.addEventListener("scroll", () => {
  //   console.log("tutu");
  //   console.log(window.scrollY);
  subNav.forEach((link) => {
    if (window.scrollY > 577) {
      navBar.classList.add("active");
      link.classList.add("active");
    } else {
      navBar.classList.remove("active");
    }
  });
});
