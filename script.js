const currentWord = document.getElementById("random-word")


 // settings for how the game words and different outcomes
function functionality() {
    let lives = 6
    const words = ["food", "rain", "hunter", "submit", "valid", "opacity", "prejudice", "threaten", "productive", "forum"]
    const outcomes = {
        win: "Congratulations You Win",
        loss: "Game Over! You Died",
        wrongInput: "Invalid input. Choose a word from A-Z"

    }
   

    // choose random word and append to list in DOM
    let chosenWord = words[Math.floor(Math.random) * words.length]
    for (i = 0; i < chosenWord.length; i++) {
const listItem = document.createElement('li');
listItem.classList.add('letter') ;
currentWord.append(listItem)
}
}