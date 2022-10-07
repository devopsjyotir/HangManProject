
// // defining the array of words to be used
const words = ["food", "rain", "hunter", "submit", "valid", "opacity", "prejudice", "threaten", "productive", "forum"];

// storing possible outcomes in an object
const outcomes = {
    winner: "Congratulations You Win",
    loser: "Game Over! You Died",
    wrongInput: "Invalid input. Choose a word from A-Z"
}


// // choose random word 
const chosenWord = words[Math.floor(Math.random() * words.length)];

let updateBlank;
let guesses = 10;
const selectedWordArr = [];

function startGame() {
    for (let i = 0; i < chosenWord.length; i++) {
        selectedWordArr[i] = "_";
    }

    updateBlank = selectedWordArr.join(" ");
    document.getElementById("answer").innerHTML = updateBlank;
}


// setting up blank spaces to be displayed before a guess is made
function filling() {
    let letter = document.getElementById("letter").value;
    if (letter.length > 0) {
        for (let i = 0; i < chosenWord.length; i++) {
            if (chosenWord[i] === letter) {
                selectedWordArr[i] = letter;
            }

        }

        guesses--;
        document.getElementById("remaining-guess").innerHTML = "remaining guesses: " + guesses;
        document.getElementById("answer").innerHTML = selectedWordArr.join(" ");
    }
}


// EventListeners
const guessClick = document.getElementById('guessClick')
guessClick.addEventListener('click', filling)
startGame()










