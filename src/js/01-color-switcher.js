const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let setChange = false;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function colorChange() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;

  if (setChange === true) {
    setTimeout(colorChange, 1000);
  } else {
    buttonStart.removeAttribute('disabled', true);
  }
}

buttonStart.addEventListener('click', () => {
  buttonStart.setAttribute('disabled', true);
  setChange = true;
  setTimeout(colorChange, 1000);
});
buttonStop.addEventListener('click', () => {
  setChange = false;
});
