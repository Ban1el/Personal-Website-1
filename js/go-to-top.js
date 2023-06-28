const goTopBtn = document.querySelector(".go-top-btn");

window.addEventListener("scroll", checkHeight);

function checkHeight() {
  if (window.scrollY > 200) {
    goTopBtn.classList.remove("disable-gt-btn");
    goTopBtn.classList.add("enable-gt-btn");
  } else {
    goTopBtn.classList.add("disable-gt-btn");
    goTopBtn.classList.remove("enable-gt-btn");
  }
}
