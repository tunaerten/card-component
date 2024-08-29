"use strict";

const button = document.querySelector(".button-share");
const blogger = document.querySelector(".blogger");
const bloggerShare = document.querySelector(".blogger-share");

button.addEventListener("click", () => {
  blogger.classList.toggle("active");
});

document.body.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    blogger.classList.remove("active");
  }
});
document.addEventListener("click", (e) => {
  if (!button.contains(e.target)) {
    blogger.classList.remove("active");
  }
});
