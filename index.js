(function () {
  'use strict';
  let stopLight = document.getElementById('stopLight');
  let slowLight = document.getElementById('slowLight');
  let goLight = document.getElementById('goLight');

  let stopButton = document.getElementById('stopButtton');
  let slowButton = document.getElementById('slowButton');
  let goButton = document.getElementById('goButton');
})();


stopButton.addEventListener('click', () => {
  if (stopLight.style.backgroundColor === 'red') {
    stopLight.style.backgroundColor = 'black';
    console.log(`${stopButton.textContent} bulb off`)
  } else {
    stopLight.style.backgroundColor = 'red';
    console.log(`${stopButton.textContent} bulb on`)
  }
})

slowButton.addEventListener('click', () => {
  if (slowLight.style.backgroundColor === 'yellow') {
    slowLight.style.backgroundColor = 'black';
    console.log(`${slowButton.textContent} bulb off`)
  } else {
    slowLight.style.backgroundColor = 'yellow';
    console.log(`${slowButton.textContent} bulb on`)
  }
})
goButton.addEventListener('click', () => {
  if (goLight.style.backgroundColor === 'green') {
    goLight.style.backgroundColor = 'black';
    console.log(`${goButton.textContent} bulb off`)
  } else {
    goLight.style.backgroundColor = 'green';
    console.log(`${goButton.textContent} bulb on`)
  }
})
stopButton.addEventListener('mouseenter', (e) => {
  console.log(`entered ${e.target.textContent} button.`)
})
stopButton.addEventListener('mouseleave', (e) => {
  console.log(`left ${e.target.textContent} button.`)
})
slowButton.addEventListener('mouseenter', (e) => {
  console.log(`entered ${e.target.textContent} button.`)
})
slowButton.addEventListener('mouseleave', (e) => {
  console.log(`left ${e.target.textContent} button.`)
})
goButton.addEventListener('mouseenter', (e) => {
  console.log(`entered ${e.target.textContent} button.`)
})
goButton.addEventListener('mouseleave', (e) => {
  console.log(`left ${e.target.textContent} button.`)
})

