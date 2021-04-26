const username = document.getElementById('userName');
const userNameMsg = document.getElementById('userNameMsg');
const password = document.getElementById('password');
const passwordMsg = document.getElementById('passwordMsg');

username.addEventListener("keyup", addChecker);
password.addEventListener('keyup', lengthCheck);

function addChecker (e) {
    if(e.target.value.includes('@')) {
        userNameMsg.textContent = 'Gebruikersnaam mag geen @ bevatten';
    } else {
        userNameMsg.textContent = '';
    }
}


function lengthCheck (e) {
    if(e.target.value.length === 0) {
        passwordMsg.textContent = '';
    } else if(e.target.value.length <= 5) {
        passwordMsg.textContent = 'Wachtwoord is te kort, gebruik minimaal 6 tekens"n';
    }
    else {
        passwordMsg.textContent = '';
    }
}


