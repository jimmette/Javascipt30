let space = document.getElementById("spacing");
let blur = document.getElementById("blur");
let color = document.getElementById("color");
let imgDiv = document.getElementById("imgBar");
let jsSpan = document.getElementById("js");

space.value = "0";
blur.value = "0";
color.value = "#ff0066";
jsSpan.style.color = "#ff0066";

function handleSpacing(e) {
  let value = e.target.value;
  imgDiv.style.padding = value + "px";
}

function handleBluring(e) {
  let value = e.target.value;
  imgDiv.style.filter = "blur(" + value + "px)";
}

function handleColoring(e) {
  let value = e.target.value;
  imgDiv.style.backgroundColor = value;
  jsSpan.style.color = value;
}

space.addEventListener("input", handleSpacing);
blur.addEventListener("input", handleBluring);
color.addEventListener("input", handleColoring);
