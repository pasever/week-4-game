let totalWins = localStorage.getItem("totalWins") || 0;
let totalLosses = localStorage.getItem("totalLosses") || 0;
let number1 = 0;
let number2 = 0;
let number3 = 0;
let number4 = 0;
let seconds;
let int;
let gameStart = false;

let currentRandomNumber = 0;
let currentGuessesNumber = 0;

let randomNumberRef = document.getElementById('randomNumber');
let countdownRef = document.getElementById('countdown');
let totalWinsRef = document.getElementById('totalWins');
let totalLossesRef = document.getElementById('totalLosses');
let finalScoreRef = document.getElementById('finalScore');


document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello World!");
    totalWinsRef.innerText = totalWins.toString()
    totalLossesRef.innerText = totalLosses.toString();
    countdownRef.innerText = '25';
});

document.getElementById('startingButton').addEventListener('click', () => {
    gameStart = true;
    document.getElementById('startingButton').style.display = 'none';
    generate();
})

function generate() {
    seconds = 25;
    currentRandomNumber = Math.floor(Math.random() * 101 + 29);
    randomNumberRef.innerText = currentRandomNumber.toString();

    // generate 4 numbers from 1 to 12 for each crystal
    number1 = Math.floor(Math.random() * 11 + 1);
    number2 = Math.floor(Math.random() * 11 + 1);
    number3 = Math.floor(Math.random() * 11 + 1);
    number4 = Math.floor(Math.random() * 11 + 1);

    int = setInterval(function () {
        seconds--;
        countdownRef.innerHTML = seconds;
        if (seconds === -1) {
            clearInterval(int); // Stops the interval
            lost();
        }
    }, 1000);

    totalWinsRef.innerText = totalWins.toString();
    totalLossesRef.innerText = totalLosses.toString();
}

let timer;
document.getElementById('firstCrystal').addEventListener('click', () => {
    if (!gameStart) return;
    currentGuessesNumber += number1;
    setTimeout(() => isGameOver(), 0)
})

document.getElementById('secondCrystal').addEventListener('click', () => {
    if (!gameStart) return;
    currentGuessesNumber += number2;
    isGameOver()
})

document.getElementById('thirdCrystal').addEventListener('click', () => {
    if (!gameStart) return;
    currentGuessesNumber += number3;
    isGameOver()
})

document.getElementById('fourthCrystal').addEventListener('click', () => {
    if (!gameStart) return;
    currentGuessesNumber += number4;
    isGameOver()
})

function isGameOver() {
    document.getElementById('finalScore').innerText = currentGuessesNumber;
    setTimeout(() => {
        if (currentRandomNumber < currentGuessesNumber) {
            lost()
        } else if (currentRandomNumber === currentGuessesNumber) {
            won();
        }
    }, 0)
}

timer = null;
function won() {
    clearInterval(int); //Stops the timer
    alert("Урааа! Ты молодец!");
    totalWins++;
    localStorage.setItem("totalWins", totalWins);
    totalWinsRef.innerText = totalWins.toString()
    reset();
}

function lost() {
    clearInterval(int);
    alert("Ну Натааааааааааш!!");
    totalLosses++;
    localStorage.setItem("totalLosses", totalLosses);
    totalLossesRef.innerText = totalLosses.toString();
    reset();
}

function reset() {
    currentGuessesNumber = 0;
    currentRandomNumber = 0;
    seconds = 25;

    document.getElementById('startingButton').style.display = 'block';
    finalScoreRef.innerText = currentGuessesNumber;
    countdownRef.innerText = seconds;
    randomNumberRef.innerText = currentRandomNumber;
}

