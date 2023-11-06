const passwordBtn = document.getElementById("password");

const lengt = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@!~#$%^&*()_{}[]<>-/=";

const another = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password="";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (lengt > password.length) {
        password += another[Math.floor(Math.random() * another.length)];
    }

    passwordBtn.value = password;
}

function copyPassword() {
    passwordBtn.select();
    document.execCommand("copy");
}
