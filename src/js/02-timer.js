import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates);
    // if (selectedDates < this.defaultDate) {
    //   alert('Please choose a date in the future');
    // }
    // startBtn.disabled = false;
  },
};

const startBtn = document.querySelector('button[data-start]');
startBtn.disabled = true;

flatpickr('#datetime-picker', options);

options.onClose();
