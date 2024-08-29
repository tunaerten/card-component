"use strict";

const button = document.querySelector(".button-share");
const blogger = document.querySelector(".blogger");
const bloggerShare = document.querySelector(".blogger-share");

button.addEventListener("click", () => {
  blogger.classList.toggle("active");
});
