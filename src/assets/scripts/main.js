/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

/*responsive menu*/
const hamburguer = document.querySelector('.menu-ham');
const links = document.querySelector('ul');
const bars = document.querySelectorAll('.menu-ham span');
hamburguer.addEventListener('click', function () {
    links.classList.toggle('show');
    bars.forEach(function (child) {
        child.classList.toggle('animation');
    });
});

/* Contact form */
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const matter = document.getElementById('matter');
const message = document.getElementById('message');

/* Show input error message */
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

/* Show success outline */
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

/* Check email is valid */
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Este email no es válido');
    }
}

/* Check required fields */
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, 'Este campo es obligatorio');
        } else {
            showSuccess(input);
        }
    });
}

/* Check input length */
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `Este campo debe tener más de ${min} caracteres`);
    } else if (input.value.length > max) {
        showError(input, `Este campo debe tener menos de ${max} caracteres`);
    } else {
        showSuccess(input);
    }
}


/* Get fieldname */
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

/* Event listeners */
form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([username, email, matter, message]);
    checkLength(username, 3, 15);
    checkLength(matter, 3, 10);
    checkEmail(email);
    checkLength(message, 6, 100);
});