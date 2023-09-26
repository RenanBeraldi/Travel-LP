/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector("#nav-menu"),
  navToggle = document.querySelector("#nav-toggle"),
  navClose = document.querySelector("#nav-close");

// MENU SHOW
// Validate if constant exists
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// CLOSE MENU
// Validate if constant exists
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const hideMenu = () => {
  navMenu.classList.remove("show-menu");
};
navLink.forEach((link) => link.addEventListener("click", hideMenu));

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
  const header = document.querySelector("#header");
  this.scrollY >= 50 ? header.classList.add("blur-header") : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.querySelector("#scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((currentSection) => {
    const sectionHeight = currentSection.offsetHeight,
      sectionTop = currentSection.offsetTop - 58,
      sectionId = currentSection.getAttribute("id"),
      sectionsClass = document.querySelector(".nav__menu a[href*=" + sectionId + "]");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 3000,
  delay: 400,
  // reset: true,
});

sr.reveal(`.home__data, .explore__data, .explore__user, .footer__container`);
sr.reveal(`.home__card`, { delay: 600, distance: "100px", interval: 100 });
sr.reveal(`.about__data, .join__image`, { origin: "right" });
sr.reveal(`.about__image, .join__data`, { origin: "left" });
sr.reveal(`.popular__card`, { interval: 200 });
