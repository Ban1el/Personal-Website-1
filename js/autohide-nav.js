const el_autohide = document.querySelector(".autohide");
const navbar = document.querySelector(".navbar");

if (el_autohide) {
  let last_scroll_top = 0;
  const offset = 0; // Set your desired offset value here (in pixels)

  window.addEventListener("scroll", function () {
    const scroll_top = window.scrollY;

    if (scroll_top < last_scroll_top - offset || scroll_top <= 0) {
      el_autohide.classList.remove("scrolled-down");
      el_autohide.classList.add("scrolled-up");
    } else if (scroll_top > last_scroll_top + offset) {
      el_autohide.classList.remove("scrolled-up");
      el_autohide.classList.add("scrolled-down");
    }

    last_scroll_top = scroll_top;
  });
}
