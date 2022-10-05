let currentWord = document.getElementById("random-word")
const words = ["food", "rain", "hunter", "submit", "valid", "opacity", "prejudice", "threaten", "productive", "forum"]
let lives = 6
const outcomes = {
    win: "Congratulations You Win",
    loss: "Game Over! You Died",
    wrongInput: "Invalid input. Choose a word from A-Z"

}
// settings for how the game words and different outcomes
// function functionality() {
//     // choose random word and append to list in DOM
//     let chosenWord = words[Math.floor(Math.random) * words.length]
//     let chosenWordLength = chosenWord.length
//     for (i = 0; i < chosenWordLength; i++) {
//         const listItem = document.createElement('li');
//         listItem.classList.add('letter');
//         currentWord.append(listItem)
//     }
// }

// function check(ev) {
//     // const letterElements = document.querySelectorAll('.word .letter');
//    let character = ev.key;
//  listItem.innerText = `${character}`
// }


// window.addEventListener('keyup', check)