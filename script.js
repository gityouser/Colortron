const overlay = document.querySelector('.overlay');
const playButton = document.querySelector('.button');
const squareSide = 100;
const wrapper = document.querySelector('.wrapper');

function init() {
  // HACK: shitty reset
  wrapper.innerHTML = '';
  const perRow = Math.floor(document.body.offsetWidth / squareSide);
  const rows = Math.floor(document.body.offsetHeight / squareSide);
  for (i = 0; i < perRow * rows; i++) {
    let square = document.createElement('div');
    square.classList.add('box');
    wrapper.appendChild(square);
    square.addEventListener('mouseenter', changeColor);
  }
}

function changeColor(e) {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
}

function reset() {
  while (wrapper.hasChildNodes()) {
    wrapper.removeChild(wrapper.firstChild);
  }
}

window.onresize = init;

playButton.addEventListener('click', e => {
  overlay.classList.add('hidden');
  init();
});

setTimeout(() => {
  reset();
  overlay.classList.remove('hidden');
}, 10000);
