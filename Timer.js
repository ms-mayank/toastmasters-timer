"use strict";
var timer;
var timerValue = document.getElementById("timer");

function start() {
  let sec = 0;
  let min = 0;
  const greenCardmin = document.getElementById("greencardmin");
  const greenCardsec = document.getElementById("greencardsec");
  const yellowCardmin = document.getElementById("yellowcardmin");
  const yellowCarsec = document.getElementById("yellowcardsec");
  const redCardmin = document.getElementById("redcardmin");
  const redCardsec = document.getElementById("redcardsec");
  const changeBgclr = document.getElementById("bodybg");
  changeBgclr.style.backgroundColor = "white";
  clearInterval(timer);
  timer = setInterval(() => {
    timerValue.innerHTML = `${min < 10 ? "0" + min : min} : ${
      sec < 10 ? "0" + sec : sec
    }`;
    if (min == 0 && sec == 0) {
    } else if (min == greenCardmin.value && sec == greenCardsec.value) {
      changeBgclr.style.backgroundColor = "rgba(0,206,35,255)";
    } else if (min == yellowCardmin.value && sec == yellowCarsec.value) {
      changeBgclr.style.backgroundColor = "rgba(255,243,109,255)";
    } else if (min == redCardmin.value && sec == redCardsec.value) {
      changeBgclr.style.backgroundColor = "rgba(219,5,3,255)";
    }
    sec++;
    if (sec % 60 == 0) {
      min += 1;
      sec = 0;
    }
  }, 1000);
}
function pause() {
  clearInterval(timer);
}
const reset = () => location.reload();
