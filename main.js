// Покраска всех карточек

const productCard = document.querySelector('.card');
const changeColorFirstCard = document.querySelector('#change-color-first-card');


const greenColorHash = '#00FF00';
const blueColorHash = '#0000FF';

changeColorFirstCard.addEventListener('click', () => {
    productCard.style.backgroundColor = greenColorHash;
})

// Покраска первой карточки

const productCards = document.querySelectorAll('.card');
const changeColorAllCards = document.querySelector('#change-color-all-cards');

changeColorAllCards.addEventListener('click', () => {
    productCards.forEach((card) => card.style.backgroundColor = blueColorHash)
})

// открыть google

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
    const answer = confirm('Вы действительно хотите открыть google?');

    if (answer === true) {
        window.open('https://google.com')
    } else {
        return;
    }
}

// Вывод консоль лог

const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click', () => outputConsoleLog('дз номер 6'))

function outputConsoleLog(message) {
    alert(message)
    console.log(message)
}

// Вывод консоли при наведении курсора на заголовок

const title = document.querySelector('.title')

title.addEventListener('mouseover', titleOutputConsole)

function titleOutputConsole() {
    console.log(title)
}

// Изменение собственного цвета кнопки

const changeOwnColorButton = document.querySelector('#change-button-own-color');

console.log(changeOwnColorButton)

changeOwnColorButton.addEventListener('click', changeOwnColor)

function changeOwnColor() {
    console.log(changeOwnColorButton)
    changeOwnColorButton.classList.toggle('blue_button')
}