document.addEventListener('DOMContentLoaded', () => {
    const firstName = document.querySelector('#first-name');
    const lastName = document.querySelector('#last-name');
    const username = document.querySelector('#username');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const confirmPassword = document.querySelector('#confirm-password');
    const submit = document.querySelector('#submit');

    const firstNameError = document.querySelector('#first-name-error');
    const lastNameError = document.querySelector('#last-name-error');
    const usernameError = document.querySelector('#username-error');
    const emailError = document.querySelector('#email-error');
    const passwordError = document.querySelector('#password-error');
    const confirmPasswordError = document.querySelector('#confirm-password-error');

    firstNameError.textContent = '';
    lastNameError.textContent = '';
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    submit.addEventListener('click', (event) => {
        event.preventDefault();
        
        let isValid = true;

        if (firstName.value === '' || !/^[a-zA-Z]+$/.test(firstName.value)) {
            firstNameError.textContent = 'Please enter a valid first name';

        }

        // ensure last name is not empty and does not ccntain numbers or special characters
        if (lastName.value === '' || !/^[a-zA-Z]+$/.test(lastName.value)) {
            lastNameError.textContent = 'Please enter a valid last name';
        }

        // ensure username is not empty and does not contain special characters
        if (username.value === '' || !/^[a-zA-Z]+$/.test(username.value)) {
            usernameError.textContent = 'Please enter a valid username';
            isValid = false;
        }

        // ensure email is not empty and is a valid email address
        if (email.value === '') {
            emailError.textContent = 'Please enter a valid email address';
            isValid = false;
        }

        // ensure password is not empty and is at least 6 characters long 
        if (password.value === '' || password.value.length < 6) {
            passwordError.textContent = 'Please enter a valid password';
            isValid = false;
        }

        // ensure password and confirm password are the same
        if (password.value !== confirmPassword.value) {
            confirmPasswordError.textContent = 'Passwords do not match';
            isValid = false;
        }

        // clear error messages when user starts typing
        firstName.addEventListener('keyup', () => {
            firstNameError.textContent = '';
        });

        lastName.addEventListener('keyup', () => {
            lastNameError.textContent = '';
        });

        username.addEventListener('keyup', () => {
            usernameError.textContent = '';
        });

        email.addEventListener('keyup', () => {
            emailError.textContent = '';
        });

        password.addEventListener('keyup', () => {
            passwordError.textContent = '';
        });

        confirmPassword.addEventListener('keyup', () => {
            confirmPasswordError.textContent = '';
        });


        if(isValid) {
            window.location.href = 'login.html';
        }
    });
});