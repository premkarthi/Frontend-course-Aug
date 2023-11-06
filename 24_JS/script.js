let userList = [];

let form = document.querySelector('form');
let username = document.getElementById('username');
let email = document.getElementById('email');
let date = document.getElementById('date');
let degree = document.getElementById('degree');
let locationByUser = document.querySelectorAll('input[name="location"]');
let gender = document.querySelectorAll('input[name="gender"]');
let submit = document.getElementById('submit');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let userData = validateForm();
    if (userData) {
        userList.push(userData);
        console.log(userList);
        form.reset();
    }
});

function createError(input, parent) {
    let element = document.createElement('div');
    element.style.color = 'red';
    element.style.marginTop = '10px';
    element.innerText = `${input} is required`;
    parent.appendChild(element);
}

function validateForm() {
    let selectedLocationValues = Array.from(locationByUser)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.id);

    let genderValue = Array.from(gender)
        .find(radio => radio.checked)
        .id;

    let isValid = true;

    document.querySelectorAll('.error-message').forEach(element => element.remove());

    if (!username.value) {
        createError('Username', username.parentElement);
        isValid = false;
    }
    if (!email.value) {
        createError('Email', email.parentElement);
        isValid = false;
    }
    if (!date.value) {
        createError('Date', date.parentElement);
        isValid = false;
    }
    if (degree.value === '-1') {
        createError('Degree', degree.parentElement);
        isValid = false;
    }
    if (selectedLocationValues.length === 0) {
        createError('Location', locationByUser[0].parentElement);
        isValid = false;
    }
    if (!genderValue) {
        createError('Gender', gender[0].parentElement);
        isValid = false;
    }

    if (isValid) {
        return {
            username: username.value,
            email: email.value,
            date: date.value,
            degree: degree.value,
            locationByuser: selectedLocationValues,
            gender: genderValue,
        };
    } else {
        return null;
    }
}


