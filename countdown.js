const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secEl = document.getElementById('sec');


const energy = '21 August 2023';

function countdown() {
  const energyDate = new Date(energy);
  const currentDate = new Date();

  const totalSeconds = (energyDate - currentDate) / 1000; // seconds

  const days = Math.floor(totalSeconds / 3600 / 24); // days

  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secEl.innerHTML = formatTime(seconds);
}


function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Initial call
countdown();

setInterval(countdown, 1000);
