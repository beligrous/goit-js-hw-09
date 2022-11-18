const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const {
    elements: { delay: firstDelay, step, amount },
  } = e.currentTarget;

  for (let i = 0; i < amount.value; i += 1) {
    let position = i + 1;
    let delay = Number(firstDelay.value) + Number(step.value) * i;
    createPromise(position, delay)
      .then(result => {
        console.log(result);
      })
      .catch(result => {
        console.log(result);
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
