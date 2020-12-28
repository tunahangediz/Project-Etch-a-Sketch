const container = document.querySelector(".container");
const button3 = document.querySelector(".button3");
const button2 = document.querySelector(".button2");
const button4 = document.querySelector(".button4");
const button1 = document.querySelector(".button1");

eventListeners();

function eventListeners() {
  window.addEventListener("DOMContentLoaded", makeDiv());
  container.addEventListener("mouseover", changeColor);
  button3.addEventListener("click", clear);
  button2.addEventListener("click", changeAB);
  button4.addEventListener("click", changeAB);
  button1.addEventListener("click", changeAB);
  
}
function changeAB(e) {
  // const a =document.querySelectorAll(".cells");
  // console.log(a.length);
  // for (let i = 0; i < a.length; i++) {
  //     a[i].remove();
  //bu benim yöntemim
  // }
  while (container.firstElementChild != null) {
    container.removeChild(container.firstElementChild);
  }
  if (e.target.className=="button button2") {
    makeDiv(32, 32);
  }
  else if(e.target.className=="button button4"){
    makeDiv(64,64);
  }
  else {
    makeDiv(16,16);
  }
  
  
  
  
}

function clear(e) {
  const cells = container.children;
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = "";
  }
}

function changeColor(e) {
  if (e.target.className === "cells") {
    e.target.style.backgroundColor = "#01BEBF";
  }
}

function makeDiv(rows = 16, cols = 16) {
  for (let i = 0; i < rows * cols; i++) {
    const div = document.createElement("div");
    div.setAttribute("style", `height:${640 / rows}px`);
    div.style.width = `${640 / rows}px`;
    div.className = "cells";
    container.appendChild(div);
  }
}
