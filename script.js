let currentWord = document.getElementById("random-word")

// settings for how the game words and different outcomes
function functionality() {
    const words = ["food", "rain", "hunter", "submit", "valid", "opacity", "prejudice", "threaten", "productive", "forum"]
    let lives = 6
    const outcomes = {
        win: "Congratulations You Win",
        loss: "Game Over! You Died",
        wrongInput: "Invalid input. Choose a word from A-Z"

    }
}

const guess = document.querySelector('.guess')
const restartBtn = document.getElementById('restart-btn')
const remainingGuess = document.getElementById('remaining-guess')
const output = document.getElementById('output')

let letterGuessed = input

// choose random word and append to list in DOM
let chosenWord = words[Math.floor(Math.random) * words.length]
let chosenWordLength = chosenWord.length
//     for (i = 0; i < chosenWordLength; i++) {
// if(guess === chosenWord[i]){

// }
//     }


