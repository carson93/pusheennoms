var active = [0,0], //[0] for register, [1] for login
    regForm = document.getElementById('registerform'),
    logForm = document.getElementById('loginform'),
    credForm = document.getElementById('credentialsForm'),
    newReg = document.getElementById('newRegister');

// click register button to show menu, second click hide menu
function register() {
    if (active[0] == 0) {
        regForm.style.display="block";
        logForm.style.display="none";
        active = [1,0];
    } else {
        regForm.style.display="none";
        active = [0,0];
    }
}

// click login button to show menu, second click hide menu
function login() {
    if (active[1] == 0) {
        regForm.style.display="none";
        logForm.style.display="block";
        active = [0,1];
    } else {
        logForm.style.display="none";
        active = [0,0];
    }
}

// attempt to log in
function submitCredentials(usernameDoesNotExist) {
    credForm.submit();
    if (usernameDoesNotExist) {
        alert('Username does not exist!');
    } 
}