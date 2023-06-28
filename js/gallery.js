//Buttons
var forsakenCategory = document.getElementById("gallery-forsaken");
var smhCategory = document.getElementById("gallery-smh");
var ggCategory = document.getElementById("gallery-gg");
var allCategory = document.getElementById("gallery-all");

//Containers
var forsaken = document.getElementsByClassName("category-forsaken");
var sammy = document.getElementsByClassName("category-smh");
var gg = document.getElementsByClassName("category-gg");

var gallery_selector = document.getElementsByClassName("gallery-selected");

forsakenCategory.addEventListener("click", function (event) {
  event.preventDefault();

  enable_category(forsaken);
  disable_category(sammy);
  disable_category(gg);

  disable_selector();
  forsakenCategory.classList.add("gallery-selected");
});

smhCategory.addEventListener("click", function (event) {
  event.preventDefault();

  disable_all();
  enable_category(sammy);

  disable_selector();
  smhCategory.classList.add("gallery-selected");
});

ggCategory.addEventListener("click", function (event) {
  event.preventDefault();

  disable_all();
  enable_category(gg);

  disable_selector();
  ggCategory.classList.add("gallery-selected");
});

allCategory.addEventListener("click", function (event) {
  event.preventDefault();

  enable_category(forsaken);
  enable_category(sammy);
  enable_category(gg);

  disable_selector();
  allCategory.classList.add("gallery-selected");
});

function enable_category(category) {
  for (var i = 0; i < category.length; i++) {
    category[i].classList.remove("d-none");

    category[i].classList.remove("animate");
    category[i].style.animation = "none"; // Remove the animation style
    void category[i].offsetWidth; // Trigger reflow to reset the animation
    category[i].style.animation = null; // Reset the animation style
    category[i].classList.add("animate");
  }
}

function disable_category(category) {
  for (var i = 0; i < category.length; i++) {
    category[i].classList.add("d-none");
  }
}

function disable_selector() {
  for (var i = 0; i < gallery_selector.length; i++) {
    gallery_selector[i].classList.remove("gallery-selected");
  }
}

function disable_all() {
  disable_category(gg);
  disable_category(forsaken);
  disable_category(sammy);
}

//View Modal

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("gallery-item")) {
    const imgElement = e.target.previousElementSibling;
    const src = imgElement.getAttribute("src");

    document.querySelector(".modal-img").src = src;

    const myModal = new bootstrap.Modal(
      document.getElementById("gallery-modal")
    );
    myModal.show();
  }
});
