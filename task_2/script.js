const btn = document.querySelector(".btn");
const active = document.querySelector(".active");
const notActive = document.querySelector(".not_active");

btn.addEventListener("click", () => {
  active.classList.toggle("opacity_0");
  notActive.classList.toggle("opacity_1");
});
