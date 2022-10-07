
// // defining the array of words to be used

const win = document.createElement('p');
const h1 = document.querySelector(".landingh1")
const words = ["food", "hunter", "opacity", "prejudice", "threaten", "productive", "forum"];
const body = document.querySelector('body')
// storing possible outcomes in an object
const outcomes = {
    winner: "Congratulations You Win!",
    loser: "Game Over! You Died",
    wrongInput: "Invalid input. Choose a word from A-Z"
}
const darkModeBtn = document.querySelector('.dark-btn')



// // choose random word 
const chosenWord = words[Math.floor(Math.random() * words.length)];
let storeAnswer = []
let updateBlank;
let guesses = 10;
const correctAnswer = [];
const isGameOver = () => {
    if (storeAnswer.length === correctAnswer.length) {
        return true
    }
}

const isALoss = () => {
    if (guesses < 1) {
        return true
    }
}

function startGame() {
    for (let i = 0; i < chosenWord.length; i++) {
        correctAnswer[i] = "_";
    }

    updateBlank = correctAnswer.join(" ");
    document.getElementById("answer").innerHTML = updateBlank;
}


// setting up blank spaces to be displayed before a guess is made
function filling() {
    // to select what letter has been typed
    let letter = document.getElementById("letter").value;
    if (letter.length > 0) {
        for (let i = 0; i < chosenWord.length; i++) {
            if (chosenWord[i] === letter) {
                correctAnswer[i] = letter;
                storeAnswer.push(letter);

                console.log(correctAnswer.toString())
                console.log(storeAnswer.toString())

            }

        }
        if (isGameOver()) {
            h1.innerText = outcomes.winner
        } else if (guesses < 1) {
            h1.innerText = outcomes.loser;
            
        }
        

        // if(isALoss()){
        //     h1.innerText = outcomes.loser
        // }

        guesses--;
        document.getElementById("remaining-guess").innerHTML = "remaining guesses: " + guesses;
        document.getElementById("answer").innerHTML = correctAnswer.join(" ");

     
    }
    
}

function restart() {
    letter = ''
    guesses = 10
    document.getElementById("remaining-guess").innerHTML = "remaining guesses: " + guesses
    h1.innerHTML = "Guess a <span>letter</span>"

    for (let i = 0; i < chosenWord.length; i++) {
        correctAnswer[i] = "_";
    }

    updateBlank = correctAnswer.join(" ");
    document.getElementById("answer").innerHTML = updateBlank;

}

function darkMode() {
    const backgrndColor = document.querySelector(".content-landing")
    const whiteBox = document.querySelector(".whitebox")
    const answerSPaces = document.getElementById("answer")

    backgrndColor.style.background = '#1C1D25FB'
    whiteBox.style.background = 'none'
    whiteBox.style.border = '2px solid #e3d5ca'
    answerSPaces.style.color = '#dad7cd'

}




// EventListeners
const restartButton = document.getElementById('restart-btn')
const guessClick = document.getElementById('guessClick')
guessClick.addEventListener('click', filling)
restartButton.addEventListener('click', restart)
darkModeBtn.addEventListener('click', darkMode)

startGame()










