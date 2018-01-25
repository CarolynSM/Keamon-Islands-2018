function mobileNavIcon(x) {
  x.classList.toggle("change");
  var panel = document.querySelector(".panel");
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = "400px";
  }
}

document.querySelector(".container").addEventListener("click", mobileNavIcon(event));
