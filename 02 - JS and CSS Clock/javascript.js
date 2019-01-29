handleRotate = () => {
  let date = new Date();
  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let hours = date.getHours();

  console.log("Hours: ", hours);

  let SECONDS_DIV = document.getElementById("seconds");
  let MINUTES_DIV = document.getElementById("minutes");
  let HOURS_DIV = document.getElementById("hours");
  let TEXT = document.getElementById("clockText");

  TEXT.innerText = hours + " : " + minutes + " : " + seconds;

  let secDegrees = Math.floor(90 + (seconds / 60) * 360);
  console.log(secDegrees);
  console.log(SECONDS_DIV);
  SECONDS_DIV.style.transform = "rotate(" + secDegrees + "deg)";
  console.log("rotation(" + secDegrees + "deg)");

  let minDegrees = Math.floor(90 + (minutes / 60) * 360);
  console.log(minDegrees);
  console.log(MINUTES_DIV);
  MINUTES_DIV.style.transform = "rotate(" + minDegrees + "deg)";
  console.log("rotation(" + minDegrees + "deg)");

  let houDegrees = Math.floor(90 + (hours / 12) * 360);
  console.log(houDegrees);
  console.log(HOURS_DIV);
  console.log("Transform: ", HOURS_DIV.style.transform);
  HOURS_DIV.style.transform = "rotate(" + houDegrees + "deg)";
  // HOURS_DIV.style.transform = "rotation(" + houDegrees + "deg)";
  console.log("rotation(" + houDegrees + "deg)");
};

setInterval(handleRotate, 1000);
