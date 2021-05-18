let button = document.getElementById('btnSubmit');

button.onclick = (e) => {
    e.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let fullName = document.getElementById('fullName').value;
    let gender = document.forms["register"]["gender"].value;
    let email = document.getElementById('email').value;
    let age = document.getElementById('age').value;

    if (username.length < 3) {
        alert('Username must be more than 3 characters!');
        return;
    }

    if (password.length < 8) {
        alert('Password length is too short');
        return;
    }

    if (password != confirmPassword) {
        alert("Confirm Password must be same as password!");
        return;
    }

    if (!validateEmaile(email)) {
        alert('Invalid email address!');
        return;
    }

    if (age < 0) {
        alert('please input correct age!');
        return;
    }
}


function validateEmail(email) {

    if (email.length <= 2) {
        return false;
    }

    if (email.indexOf("@") == -1) {
        return false;
    }

    var dot = emailString.indexOf(".");
    if (dot <= atSymbol + 2) return false;

    if (dot === emailString.length - 1) return false;

    return true;
}