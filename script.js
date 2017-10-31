function boxMaker() {
  for (i=0; i < 108; i++) {
    let wrapper = document.querySelector('.wrapper')
    let createDiv = document.createElement('div');
    wrapper.appendChild(createDiv);
    createDiv.classList.add('box');
    createDiv.addEventListener('mouseover', change);
    // createDiv.innerHTML = i;
    // let wrapperHeight = wrapper.offsetHeight;
    // let wrapperWidth = wrapper.offsetWidth;
  }
  let boxes = document.querySelectorAll('.box');
  resetMaker();
};
boxMaker();

function change(i) {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var mix = "rgb("+ r + "," + g + "," + b + ")";
  i.target.style.backgroundColor = mix;
  console.log("Div no. " + i.target.innerHTML + ' ' + mix);
}

const boxes = document.querySelectorAll('.box');

function resetMaker() {
    let boxes = document.querySelectorAll('.box');
  let randomBox = boxes[Math.floor(Math.random() * boxes.length)];
  randomBox.dataset.id = "specialBox";

  for (i = 0; i < boxes.length; i++) {
    let boxesArray = Array.from(boxes);

    if(boxesArray[i].dataset.id == 'specialBox') {
      console.log(i);
      let resetButton = document.createElement('button');
      boxesArray[i].appendChild(resetButton);
      resetButton.classList.add('reset');
      resetButton.innerHTML = "RESET";

      resetButton.addEventListener('mouseover', resetStyle);
      resetButton.addEventListener('mouseleave', zoomOut);
      resetButton.addEventListener('click', springClean);
    }
  }
}

function resetStyle() {
  document.querySelector('.reset').style.cssText = "color: black; border: 2px outset white;  box-shadow: 2px 2px 40px 10px gold; transform: scale(1.2) skew(30deg, 20deg); transition: .4s"
  console.log("Styled");
}

function zoomOut() {
  document.querySelector('.reset').style.transform ='scale(1)';
  console.log("Zoom Out");
}

function transform() {
  document.querySelector('.reset').style.transform= 'translateX(50px) rotate(50deg) translateY(15px)';
}

function springClean() {
  document.querySelector('.reset').style.cssText = "transform: rotate(1turn); transition: 2s;"
  for (i = 0; i < boxes.length; i++) {
    let boxesArray = Array.from(boxes);
    boxesArray[i].style.backgroundColor = "grey";
      let wrapper = document.querySelector('.wrapper')
      while (wrapper.hasChildNodes()) {
        wrapper.removeChild(wrapper.firstChild);
      }
    }
    boxMaker();
}
