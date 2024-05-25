const sideBar = document.querySelector(".side__bar");
const openHam = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const sections = document.querySelector(".side__bar--sections");

function reset() {
  sideBar.style.backgroundColor = "#fff";
}

openHam.addEventListener("click", (event) => {
  event.stopPropagation();
  openHam.classList.add("hide");
  closeBtn.classList.remove("hide");

  sideBar.style.backgroundColor = "#6082B6";
  sections.classList.remove("hide");
});

closeBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  closeBtn.classList.add("hide");
  openHam.classList.remove("hide");

  reset();
  sections.classList.add("hide");
});

document.body.addEventListener("click", () => {
  if (!openHam.classList.contains("hide")) return;

  closeBtn.classList.add("hide");
  openHam.classList.remove("hide");

  reset();
  sections.classList.add("hide");
});

sideBar.addEventListener("click", (event) => {
  event.stopPropagation();
});
