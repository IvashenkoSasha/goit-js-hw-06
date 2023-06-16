const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', formValidator);
let data = {};

function formValidator(evt) {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);
    formData.forEach((value, name) => {
        if (value === '') {
            window.alert('Всі поля повинні бути заповненими!');
            data = {};
            formEl.reset()
        } else {
            data[name] = value;
        };
    });
    formEl.reset()
    console.log(data);
};
