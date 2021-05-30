let button = document.getElementById('btnSubmit');

function validate(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirmPassword').value;
    let fullName = document.getElementById('fullName').value;
    var gender = document.getElementsByName("gender");
    let email = document.getElementById('email').value;
    let age = document.getElementById('age').value;

    let messaage = document.getElementById("form-response");
    let agreement = document.getElementById("terms");

    if (username.length < 3) {
        messaage.innerHTML = '<p class="error-message">Username must be more than 3 characters!</p>';
        scroll();
        return;
    }

    var isNumeric = false;
    var isAlpha = false;
    var isUpper = false;

    for (let i = 0; i < password.value.length; i++) {
        if (password.value[i] >= '0' && password.value[i] <= '9') {
            isNumeric = true;
        }

        if (password.value[i] >= 'a' && password.value[i] <= 'z') {
            isAlpha = true;
        }

        if (password.value[i] >= 'A' && password.value[i] <= 'Z') {
            isUpper = true;
        }

    }

    if (!isNumeric || !isAlpha || !isUpper || password.length < 5 || password.length > 12) {

        messaage.innerHTML = '<p class="error-message">Inavlid password input!</p>';
        scroll();
        return;
    }

    if (password.value != confirmPassword) {
        messaage.innerHTML = '<p class="error-message">Confirm Password must be same as password!</p>';
        scroll();
        return;
    }

    if (fullName.length == 0) {
        messaage.innerHTML = '<p class="error-message">Full Name cannot be empty!</p>';
        scroll();
        return;
    }

    var selectedGender = "";
    for (let index = 0; index < gender.length; index++) {
        if (gender[index].checked) {
            selectedGender = gender[index].value;
            break;
        }

    }

    if (selectedGender == "") {
        messaage.innerHTML = '<p class="error-message">Please select gender!</p>';
        scroll();
        return;
    }

    if (!validateEmail(email)) {
        messaage.innerHTML = '<p class="error-message">Invalid email address!</p>';
        scroll();
        return;
    }

    if (age < 0) {
        messaage.innerHTML = '<p class="error-message">Please input correct age!</p>';
        scroll();
        return;
    }

    if (!(age >= '0' && age <= '9')) {
        messaage.innerHTML = '<p class="error-message">Age must be numeric!</p>';
        scroll();
        return;
    }

    if (!agreement.checked) {
        messaage.innerHTML = '<p class="error-message">Please accept the terms and conditions!</p>';
        scroll();
        return;
    }


    messaage.innerHTML = '<p class="success-message">Thank you for registration!</p>';
    scroll();

}


var validateEmail = (email) => {

    if (email.length <= 2) {
        return false;
    }

    if (email.indexOf("@") == -1) {
        return false;
    }

    var dot = email.indexOf(".");
    if (dot <= email.indexOf("@") + 2) return false;

    if (dot === email.length - 1) return false;

    return true;
}

var scroll = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}