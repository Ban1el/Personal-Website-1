//About
//Shows the items upon clicking.

function showContent(content_name) {
  //Education variables
  var educationDiv = document.getElementById("educationContent");
  var educationButton = document.getElementById("educationButton");
  //Experience variables
  var experienceButton = document.getElementById("experienceButton");
  var experienceDiv = document.getElementById("experienceContent");
  //Seminar Variables
  var seminarDiv = document.getElementById("certificateContent");
  var seminarButton = document.getElementById("certificateButton");

  if (content_name == "education") {
    educationButton.classList.add("active");
    educationDiv.style.display = "block";

    experienceButton.classList.remove("active");
    experienceDiv.style.display = "none";
    seminarButton.classList.remove("active");
    seminarDiv.style.display = "none";
  } else if (content_name == "experience") {
    experienceButton.classList.add("active");
    experienceDiv.style.display = "block";

    educationButton.classList.remove("active");
    educationDiv.style.display = "none";
    seminarButton.classList.remove("active");
    seminarDiv.style.display = "none";
  } else if (content_name == "certificate") {
    seminarButton.classList.add("active");
    seminarDiv.style.display = "block";

    educationButton.classList.remove("active");
    educationDiv.style.display = "none";
    experienceButton.classList.remove("active");
    experienceDiv.style.display = "none";
  }
}

//Hamburger
// Hides navbar items after clicking on a item.
const navbarToggler = document.querySelector(".navbar-toggler");
const mainNav = document.querySelector("#main-nav");
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (mainNav.classList.contains("show")) {
      const collapse = new bootstrap.Collapse(mainNav);
      collapse.hide();
      navbarToggler.setAttribute("aria-expanded", "false");
    }
  });
});
