const squareSide = 100; //px
const wrapper = document.querySelector('.wrapper');
const overlay = document.querySelector('.overlay');
const startButton = document.querySelector('.start-button');
const retryButton = document.querySelector(".retry-button");
var boxes;
var completed = false;
var timer = 0;
var currentTime = Date.now();
startButton.addEventListener('click', toggleOverlay);
startButton.addEventListener('click', generateBoxes);

// while (completed !== true) {
//   timer += 1;
// }
function generateBoxes() {
  const perRow = Math.floor(document.body.offsetWidth / squareSide);
  const rows = Math.floor(document.body.offsetHeight / squareSide);
  for (i = 0; i < perRow * rows; i++) {
    let createDiv = document.createElement('div');
    wrapper.appendChild(createDiv);
    createDiv.classList.add('box');
    createDiv.addEventListener('mouseover', changeColor);
  }
  assignResetBtn();
  boxes = document.querySelectorAll('.box');
}
function changeColor(event) {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  const mix = `rgb(${r},${g},${b})`;
  event.target.style.backgroundColor = mix;
  console.log(`Div no. ${event.target.innerHTML} ${mix}`);
  if(!event.target.dataset.id) {
    event.target.dataset.id = 'completed';
    console.log("DATA-ID ADDED!!!");
  };
  checkForCompletion();
}

function checkForCompletion() {
  const boxes = document.querySelectorAll('.box');
  let boxeZ = Array.from(boxes);
  const boxID = boxeZ.every(function(box){
    return box.dataset.id == 'completed';
  });
  if(boxeZ.every(function(index){
    return index.dataset.id == 'completed';
  })) {
    completed = true;
    toggleCongrats();
    removeAllBoxes();
  }
}

function assignResetBtn() {
  let boxes = document.querySelectorAll('.box');
  let randomBox = boxes[Math.round(Math.random() * (boxes.length - 1))];

  randomBox.classList.add('reset');
  randomBox.innerHTML = 'RESET';
  const reset = document.querySelector('.reset');

  randomBox.addEventListener('mouseover', () => reset.style.cssText =
    'color: black; box-shadow: 2px 2px 40px 10px gold; transform: scale(1.1); transition: .4s');
  randomBox.addEventListener('mouseleave', () => reset.style.transform = 'scale(1)');
  randomBox.addEventListener('click', removeAllBoxes);
  randomBox.addEventListener('click', toggleOverlay)
}

function removeAllBoxes() {
  while (wrapper.hasChildNodes()) {
    wrapper.removeChild(wrapper.firstChild);
  }
}

function toggleOverlay() {
  overlay.classList.toggle('hiddenOverlay');
  overlay.style.transition = "all 1s";
}

function toggleCongrats() {
  const congrats = document.querySelector('.congrats');
  congrats.classList.toggle('hiddenCongrats');
}

retryButton.addEventListener('click', function () {
  toggleCongrats();
  removeAllBoxes();
  toggleOverlay();

})
