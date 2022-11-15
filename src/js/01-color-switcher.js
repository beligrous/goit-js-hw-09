const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

refs.startBtn.addEventListener('click', onStartClick);
refs.stopBtn.addEventListener('click', onStopClick);

const colorizer = {
  start() {
    const intervalId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
  },
};

function onStartClick() {
  colorizer.start;
}

function onStopClick() {
  colorizer.stop;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
