import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
Notiflix.Notify.init({});

const startBtn = document.querySelector('button[data-start]');
const daysElem = document.querySelector('span[data-days]');
const hoursElem = document.querySelector('span[data-hours]');
const minutesElem = document.querySelector('span[data-minutes]');
const secondsElem = document.querySelector('span[data-seconds]');
let ms = 0;
let dateNow = 0;
let userDate = 0;
let intId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userDate = selectedDates[0];
    dateNow = Date.now();

    if (userDate < dateNow) {
      Notiflix.Notify.warning('Please choose a date in the future');
      return;
    }
    startBtn.disabled = false;
  },
};

startBtn.addEventListener('click', onStartClick);
startBtn.disabled = true;

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function onStartClick() {
  intId = setInterval(() => {
    dateNow = Date.now();
    ms = userDate - dateNow;
    let time = convertMs(ms);
    daysElem.textContent = time.days;
    hoursElem.textContent = time.hours;
    minutesElem.textContent = time.minutes;
    secondsElem.textContent = time.seconds;
  }, 1000);

  if (ms < 0) {
    clearInterval(intId);
  }
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
