var navbar = document.getElementById("navbar")

window.onscroll = function() {
    "use strict"
    if (document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
};