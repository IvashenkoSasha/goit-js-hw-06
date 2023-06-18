const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', formValidator);


function formValidator(evt) {
    let varToCheckRight = true;
    let data = {};
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);
    formData.forEach((value, name) => {
        if (value === '') {
            window.alert('Всі поля повинні бути заповненими!');
            varToCheckRight = false;
            formEl.reset();
            return;
        } else {
            data[name] = value;
        };
    });
    formEl.reset()
    if (varToCheckRight !== false) {
        console.log(data);
    }
};
