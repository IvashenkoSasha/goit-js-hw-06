function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector('.change-color');
const bodyEl = document.body;
const colorText = document.querySelector('.color');

btnEl.addEventListener('click', randomeBackground);

function randomeBackground() {
  const randomeColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomeColor;
  colorText.textContent = randomeColor;
}
