const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', inputExam);

function inputExam () {
    if (inputEl.value.length == inputEl.dataset.length) {
        if (inputEl.classList.contains('invalid')) {
            inputEl.classList.replace('invalid', 'valid');
        } else {
            inputEl.classList.add('valid');
        };
    } else {
        inputEl.classList.add('invalid');
    };
};