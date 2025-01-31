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
  const btnValue = e.target.textContent;
  if (!e.target.closest("button") || ["AC", "DEL", "=", "×"].includes(btnValue))
    return;
  screen.value += e.target.textContent;
});

equal.addEventListener("click", function () {
  try {
    if (screen.value === "")
      return;
    screen.value = eval(screen.value).toFixed(2);
  } catch (error) {
    alert(`Error: ${error.message}`);
    clearScreen();
  }
});

multi.addEventListener("click", function () {
  screen.value += "*";
});

delBtn.addEventListener("click", function () {
  screen.value = screen.value.slice(0, -1);
});
acBtn.addEventListener("click", clearScreen);

function clearScreen() {
  screen.value = "";
}
