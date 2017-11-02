const squareSide = 100;
const wrapper = document.querySelector('.wrapper');

function boxMaker() {
  const perRow = Math.floor(document.body.offsetWidth / squareSide);
  const rows = Math.floor(document.body.offsetHeight / squareSide);
  for (i = 0; i < perRow * rows; i++) {
    let createDiv = document.createElement('div');
    wrapper.appendChild(createDiv);
    createDiv.classList.add('box');
    createDiv.addEventListener('mouseover', change);
  }
  resetMaker();
}

function change(event) {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  const mix = `rgb(${r},${g},${b})`;
  event.target.style.backgroundColor = mix;
  console.log('Div no. ' + event.target.innerHTML + ' ' + mix);
}

function resetMaker() {
  let boxes = document.querySelectorAll('.box');
  let randomBox = boxes[Math.round(Math.random() * (boxes.length - 1))];

  // No need to set data-id!
  // randomBox.dataset.id = "specialBox";

  let resetButton = document.createElement('button');
  randomBox.appendChild(resetButton);
  resetButton.classList.add('reset');
  resetButton.innerHTML = 'RESET';

  resetButton.addEventListener('mouseover', resetStyle);
  resetButton.addEventListener('mouseleave', zoomOut);
  resetButton.addEventListener('click', springClean);
}

function resetStyle() {
  document.querySelector('.reset').style.cssText =
    'font-family: Helvetica, Arial, sans-serif; color: black; box-shadow: 2px 2px 40px 10px gold; transform: scale(1.1); transition: .4s';
}

function zoomOut() {
  document.querySelector('.reset').style.transform = 'scale(1)';
  console.log('Zoom Out');
}

function springClean() {
  toggleOverlay();
  while (wrapper.hasChildNodes()) {
    wrapper.removeChild(wrapper.firstChild);
  }
}

const overlay = document.querySelector('.overlay');
const button = document.querySelector('.button');
button.addEventListener('click', toggleOverlay);
function toggleOverlay() {
  overlay.classList.toggle('hidden');
  overlay.style.transition = "all 1s";
  boxMaker();
}
