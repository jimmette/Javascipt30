let audioBoom = new Audio("sounds/boom.wav");
let audioClap = new Audio("sounds/clap.wav");
let audioHihat = new Audio("sounds/hihat.wav");
let audioKick = new Audio("sounds/kick.wav");
let audioOpenhat = new Audio("sounds/openhat.wav");
let audioRide = new Audio("sounds/ride.wav");
let audioSnare = new Audio("sounds/snare.wav");
let audioTink = new Audio("sounds/tink.wav");
let audioTom = new Audio("sounds/tom.wav");

function actionKeyDown(event) {
  let id = document.getElementById("key" + event.key.toUpperCase());
  id.className = "keyDown";

  switch (event.key) {
    case "a":
    case "A":
      audioBoom.play();
      break;
    case "s":
    case "S":
      audioClap.play();
      break;
    case "d":
    case "D":
      audioHihat.play();
      break;
    case "f":
    case "F":
      audioKick.play();
      break;
    case "g":
    case "G":
      audioOpenhat.play();
      break;
    case "h":
    case "H":
      audioSnare.play();
      break;
    case "j":
    case "J":
      audioTink.play();
      break;
    case "k":
    case "K":
      audioTom.play();
      break;
  }
}

function actionKeyUp(event) {
  let id = document.getElementById("key" + event.key.toUpperCase());
  id.className = "key";
}

function createEventListenerForKeys() {
  let body = document.querySelector("body");
  body.addEventListener("keydown", actionKeyDown);
  body.addEventListener("keyup", actionKeyUp);
}

createEventListenerForKeys();
