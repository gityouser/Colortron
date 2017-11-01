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
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
}

window.onresize = init;

init();
