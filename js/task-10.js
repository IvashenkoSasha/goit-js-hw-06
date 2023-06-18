function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const controlPanelEl = document.querySelector('#controls');
const inputEl = controlPanelEl.firstElementChild;
const createBtnEl = inputEl.nextElementSibling;
const destroyBtnEl = controlPanelEl.lastElementChild;
const wrapForBoxesEl = document.querySelector('#boxes');

let boxSize = 30;
let elementsToAppend = [];

createBtnEl.addEventListener('click', createBoxes)

function createBoxes() {
  const boxesCount = inputEl.value;
  for (let i = 0; i < boxesCount; i += 1){
    const el = document.createElement('div');
    el.style.width = `${boxSize}px`;
    el.style.height = `${boxSize}px`;
    el.style.backgroundColor = getRandomHexColor();
    elementsToAppend.push(el);
    boxSize += 10;
  };
  wrapForBoxesEl.append(...elementsToAppend);
  elementsToAppend = [];
};

destroyBtnEl.addEventListener('click', destroyBoxes)

function destroyBoxes() {
  wrapForBoxesEl.innerHTML = '';
};