const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', formValidator);


function formValidator(evt) {
    let data = {};
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);
    formData.forEach((value, name) => {
        if (value === '') {
            window.alert('Всі поля повинні бути заповненими!');
            data = false;
            formEl.reset();
        } else {
            data[name] = value;
        };
    });
    formEl.reset()
    if (data !== false) {
        console.log(data);
    }
};
