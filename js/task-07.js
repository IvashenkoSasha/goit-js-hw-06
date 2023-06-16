const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', inputCheck);

function inputCheck() {
    textEl.style.fontSize = `${inputEl.value}px`;
};
