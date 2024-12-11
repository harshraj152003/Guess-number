let randomNumber = Math.floor(Math.random() * 10) + 1;
let remainingGuess = document.getElementById('remGuess');
let displayContent = document.getElementById('displayContent');
let previousGuess = document.getElementById('previousGuess');
let restartButton = document.getElementById('restartButton');

function MatchTheGuess() {
    if (parseInt(remainingGuess.textContent) <= 0) {
        displayContent.textContent = "No attempts left! Please restart the game.";
        displayContent.className = "Invalid";
        restartButton.style.display = "block";
        return;
    }

    let input = parseInt(document.getElementById('userInput').value);

    if (isNaN(input) || input < 1 || input > 10) {
        displayContent.textContent = "Please enter a valid number between 1 and 10!";
        displayContent.className = "Invalid";
        document.getElementById('userInput').value = ""; 
        return;
    }

    remainingGuess.textContent--;

    if (input === randomNumber) {
        displayContent.textContent = "Congratulations! You've guessed the correct number!";
        displayContent.className = "valid";
        remainingGuess.textContent = 0;
        restartButton.style.display = "block"; 
    } else {
        displayContent.textContent = `Try again! You have ${remainingGuess.textContent} attempts left.`;
        previousGuess.textContent += input + " ";
        displayContent.className = "try";
        document.getElementById('userInput').value = "";
    }

    if (parseInt(remainingGuess.textContent) === 0 && input !== randomNumber) {
        displayContent.textContent = `Game Over! The correct number was ${randomNumber}.`;
        displayContent.className = "gameOver";
        restartButton.style.display = "block";
        document.getElementById('userInput').value = ""; 
    }
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    remainingGuess.textContent = 4;
    previousGuess.textContent = "Previous guesses: ";
    displayContent.textContent = "";
    displayContent.className = "";
    restartButton.style.display = "none"; 
    document.getElementById('userInput').value = ""; 
}