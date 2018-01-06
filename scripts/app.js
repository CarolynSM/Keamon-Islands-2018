var mobileNavIcon = document.querySelector("#mobile-nav-icon");

mobileNavIcon.addEventListener("touchstart", navSlide);

function navSlide() {
  var nav = document.querySelector(".mobile-nav");
  if (nav.style.display === "none") {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
  document.querySelector(".row-1").setAttribute("style", "margin-top:0;");
}
