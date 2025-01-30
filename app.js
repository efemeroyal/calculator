"use strict";

const switchBtn = document.querySelector(".switch");
const body = document.body;
const buttons = document.querySelector(".buttons");
const screen = document.querySelector("#screen");
const equal = document.querySelector(".equal");
const acBtn = document.querySelector(".clear-all");
const delBtn = document.querySelector(".del");
const multi = document.querySelector(".times");

switchBtn.addEventListener("click", function () {
  if (switchBtn.checked) {
    body.classList.add("light");
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
    body.classList.remove("light");
  }
});

buttons.addEventListener("click", function (e) {
  if (e.target === buttons) return;
  if (
    e.target.textContent === "AC" ||
    e.target.textContent === "DEL" ||
    e.target.textContent === "=" ||
    e.target.textContent === "×"
  )
    return;

    screen.value += e.target.textContent;

    

});

equal.addEventListener("click", function () {
  screen.value = eval(screen.value);
});

multi.addEventListener("click", function () {
  screen.value += "*";
});

delBtn.addEventListener('click', function(){
    screen.value = screen.value.slice(0, -1)
})
acBtn.addEventListener('click', function(){
    screen.value = '';
})