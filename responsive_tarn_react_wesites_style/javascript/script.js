//scroll sticky navbar

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 130) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
  console.log(document.documentElement.scrollTop);
});


//responsive
const menus = document.querySelector(".links");
const menuBtn = document.querySelector(".fa-bars");
const closeBtn = document.querySelector(".fa-xmark");

menuBtn.addEventListener("click", () => {
  menus.classList.add("display");
});

closeBtn.addEventListener("click", () => {
  menus.classList.remove("display");
});