handleRotate = () => {
  let date = new Date();
  let seconds = date.getSeconds() + "";
  let minutes = date.getMinutes() + "";
  let hours = date.getHours() + "";

  let SECONDS_DIV = document.getElementById("seconds");
  let MINUTES_DIV = document.getElementById("minutes");
  let HOURS_DIV = document.getElementById("hours");
  let TEXT = document.getElementById("clockText");

  seconds = seconds.padStart(2, "0");
  minutes = minutes.padStart(2, "0");
  hours = hours.padStart(2, "0");
  TEXT.innerText = hours + " : " + minutes + " : " + seconds;

  let secDegrees = Math.floor(90 + (seconds / 60) * 360);
  SECONDS_DIV.style.transform = "rotate(" + secDegrees + "deg)";

  let minDegrees = Math.floor(90 + (minutes / 60) * 360);
  MINUTES_DIV.style.transform = "rotate(" + minDegrees + "deg)";

  let houDegrees = Math.floor(90 + (hours / 12) * 360);
  HOURS_DIV.style.transform = "rotate(" + houDegrees + "deg)";
};

setInterval(handleRotate, 1000);
