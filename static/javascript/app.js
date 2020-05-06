const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".bigone");
const links = document.querySelectorAll(".bigone li");
const people = document.querySelector(".people")
const falseright = document.querySelector(".falseright")
const right = document.querySelector(".right")
const log = document.querySelector(".four")
const dual = document.querySelector(".dual")

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});
people.addEventListener("click", () => {
  falseright.classList.toggle("open");
  right.classList.toggle("open");
  people.classList.toggle("open");
  log.classList.toggle("open");

});
people.addEventListener("mouseenter", () => {
  dual.classList.toggle("open");
  people.classList.toggle("open2");

});
dual.addEventListener("mouseleave", () => {
  dual.classList.toggle("open");
  people.classList.toggle("open2");
});