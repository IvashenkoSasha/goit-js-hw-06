const counter = document.querySelector('#counter');
const btnDecrement = counter.firstElementChild;
const btnIncrement = counter.lastElementChild;
const counterValue = document.querySelector('#value');
let value = 0;

btnDecrement.addEventListener('click', decrementCall)

function decrementCall() {
    value -= 1;
    counterValue.textContent = value;
};

btnIncrement.addEventListener('click', incrementCall)

function incrementCall() {
    value += 1;
    counterValue.textContent = value;
};