let randomNumber = Math.floor(Math.random() * 10) + 1;
let remainingGuess = document.getElementById('remGuess');
let displayContent = document.getElementById('displayContent');
let previousGuess = document.getElementById('previousGuess');

function MatchTheGuess() {
    if (parseInt(remainingGuess.textContent) <= 0) {
        displayContent.textContent = "No attempts left! Please restart the game.";
        displayContent.className = "Invalid";
        return;
    }

    let input = parseInt(document.getElementById('userInput').value);

    if (isNaN(input) || input < 1 || input > 100) {
        displayContent.textContent = "Please enter a valid number between 1 and 100!";
        displayContent.className = "Invalid";
        return;
    }

    remainingGuess.textContent--;

    if (input === randomNumber) {
        displayContent.textContent = "Congratulations! You've guessed the correct number!";
        displayContent.className = "valid";
        remainingGuess.textContent = 0;
    } else {
        displayContent.textContent = `Try again! You have ${remainingGuess.textContent} attempts left.`;
        previousGuess.textContent += input + " ";
        displayContent.className = "try";
    }

    if (parseInt(remainingGuess.textContent) === 0 && input !== randomNumber) {
        displayContent.textContent = `Game Over! The correct number was ${randomNumber}.`;
        displayContent.className = "gameOver";
    }
}