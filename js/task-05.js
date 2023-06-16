const inputEl = document.querySelector('#name-input');
const nameEL = document.querySelector('#name-output');

inputEl.addEventListener('input', nameChange)

function nameChange() {
    nameEL.textContent = inputEl.value;
    if (inputEl.value === '') {
        nameEL.textContent = 'Anonymous';
    }
};

