
let string

const guess = document.querySelector('.guess')
const restartBtn = document.getElementById('restart-btn')
const remainingGuess = document.getElementById('remaining-guess')
const output = document.getElementById('output')

const answerLetters = document.getElementById("letters");

const answerArr = []
// settings for how the game words and different outcomes

// defining the array of words to be used
const words = ["food", "rain", "hunter", "submit", "valid", "opacity", "prejudice", "threaten", "productive", "forum"]
let lives = 6


// choose random word 
const chosenWord = words[Math.floor(Math.random) * words.length]
const chosenWordLength = chosenWord.length

// storing possible outcomes in an object
const outcomes = {
    winner: "Congratulations You Win",
    loser: "Game Over! You Died",
    wrongInput: "Invalid input. Choose a word from A-Z"
}


function setup() {
    // setting up blank spaces to be displayed before a guess is made
    for (i = 0; i < chosenWordLength; i++) {
        answerArr[i] = "_"
    }

    string = answerArr.join("")
}












// function gameOver(winner){
//     if(win){
//         output.innerText = outcomes.winner
//     }else {output.innerText = outcomes.loser}
// }
// guess.value = ""


// reloads the game functionality when the restart button is clicked.
restartBtn.addEventListener('click', functionality)

window.onload = functionality()
