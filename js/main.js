// Variables
let firstPassword = document.getElementById('first-password')
let secondPassword = document.getElementById('second-password')
let choiceLength = document.getElementById('length')
let choiceNumber = document.getElementById('number');
let choiceSpecial = document.getElementById('special-character');
let errorMessage = document.querySelector('.error-message')
let btnGenerate = document.querySelector('.generator__btn')
let passwordLength = 0

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const specials = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"]

btnGenerate.addEventListener('click', () => {
    let firstRandomPwd = ''
    let secondRandomPwd = ''
    let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    errorMessage.textContent = ''

    // Check choiceLength
    if (choiceLength.value === '') {
        passwordLength = 15
    } else if (choiceLength.value < 5 || choiceLength.value > 18) {
        errorMessage.textContent = "Select a length from 5 to 18"
        passwordLength = 0
    } else {
        passwordLength = choiceLength.value
    }

    // Characters based on the users preference
    if (choiceNumber.checked && choiceSpecial.checked) {
        for (let i = 0; i < numbers.length; i++) {
            characters.push(numbers[i])
        }
        for (let i = 0; i < specials.length; i++) {
            characters.push(specials[i])
        }
    } else if (choiceSpecial.checked) {
        for (let i = 0; i < specials.length; i++) {
            characters.push(specials[i])
        }
    } else if (choiceNumber.checked) {
        for (let i = 0; i < numbers.length; i++) {
            characters.push(numbers[i])
        }
    }

    // Password generator
    for (let i = 0; i < passwordLength; i++) {
        firstRandomPwd += characters[Math.floor(Math.random() * (characters.length))]
        secondRandomPwd += characters[Math.floor(Math.random() * (characters.length))]
    }

    firstPassword.textContent = firstRandomPwd
    secondPassword.textContent = secondRandomPwd
})

// ================= //
// Toggle light mode //
// ================= //
function isLight() {
    return localStorage.getItem('light-mode');
}

function toggleRootClass() {
    document.querySelector(':root').classList.toggle('light');
}

function toggleLocalStorageItem() {
    if (isLight()) {
        localStorage.removeItem('light-mode');
    } else {
        localStorage.setItem('light-mode', 'set');
    }
}

if (isLight()) {
    toggleRootClass();
}

document.querySelector('.theme-icon').addEventListener('click', () => {
    toggleLocalStorageItem();
    toggleRootClass();
});

// ============= //
// COPY ON CLICK //
// ============= //
const btnCopyFirstPwd = document.getElementById('btn-copy-first-pwd')
const btnCopySecondPwd = document.getElementById('btn-copy-second-pwd')

btnCopyFirstPwd.addEventListener('click', () => {
    navigator.clipboard.writeText(firstPassword.innerText)
})
btnCopySecondPwd.addEventListener('click', () => {
    navigator.clipboard.writeText(secondPassword.innerText)
})