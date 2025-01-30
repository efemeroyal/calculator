"use strict";

const switchBtn = document.querySelector(".switch");
const body = document.body;

switchBtn.addEventListener("click", function () {
  if (switchBtn.checked) {
      body.classList.add("light");
      body.classList.remove("dark");
  } else {
      body.classList.add("dark");
      body.classList.remove("light");
  }
});
