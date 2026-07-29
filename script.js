let randomNumber = Math.floor (Math.Random ()*100)+1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector (".lastResult");
const lowOrHi = document.querySelector ("lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

function checkGuess() {
    alert("I am a placeholder")
}

function checkGuess () {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = "Previous Guesses:";
    }
    guesses.textContent = ${guesses.textContent} '${userGuess}';

    if (userGuess === randomNumber) {
        lastResult.textContent = "Congratulations! You got it right!";
        lastResult.style.backgrountColor = "green"
        lowOrHi. textContent = ""
        setGameOver ();
    }
        else if (guessCount===10) {
            lastResult.textContent = "!!!GAME OVER!!!";
            lowOrHi.textContent = ""
            setGameOver () ;
        }
    }
}