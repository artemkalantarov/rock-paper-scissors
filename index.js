// Function generates computer's choice of rock, paper or scissors
function getComputerChoice() {

    //Generates a random number from 0-2
    let randNumber = Math.floor(Math.random() * 3)
    
    //Each number is matched with rock, paper or scissors
    if (randNumber === 0) {
        return "Rock";
    } else if (randNumber === 1) {
        return "Paper";
    } else {
        return "Scissors"
    }
}

// Function prompts user for user's choice and returns it
function getUserSelection(playerSelection) {
    //Capitalizes the answer
    return (playerSelection.charAt(0)).toUpperCase() + (playerSelection.slice(1)).toLowerCase();
}

// Function checks who won the round by getting user's and computer's choice
// User's or computer's score increases depending on who won
// Returns an explanation of who won and what beat what
function playRound(playerSelection) {
    playerSelection = getUserSelection(playerSelection);
    const computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        resultText.textContent = `It is a tie! Both players had ${playerSelection}!`
    } else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
                (playerSelection === "Scissors" && computerSelection === "Paper") ||
                (playerSelection === "Paper" && computerSelection === "Rock")) {
        playerScore++            
        if (playerSelection === "Scissors"){
            resultText.textContent = `You won! ${playerSelection} beat ${computerSelection}!`
        } else {
            resultText.textContent = `You won! ${playerSelection} beats ${computerSelection}!`
        } 
    } else {
        computerScore++
        if (computerSelection === "Scissors"){
            resultText.textContent = `You lost! ${computerSelection} beat ${playerSelection}!`
        } else {
            resultText.textContent = `You lost! ${computerSelection} beats ${playerSelection}!`
        }
    }
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    gameOver(playerScore, computerScore);
  }

// Function checks score at the end of the game and declares a winner
// Function also states the final score
function checkScore() {
    if (computerScore > playerScore) {
        return `Game over! Computer won!`
    } else if (playerScore > computerScore) {
        return `Game over! You won!`
    } else {
        return `Game over! It is a tie!`
    }
}

// Function starts the game and runs it for 5 rounds
// After all rounds are played, declares the winner
function gameOver(playerScore, computerScore) {
    if (playerScore === 5 || computerScore === 5) {
        resultText.textContent = checkScore();
        buttons.forEach(button => button.classList.add('hidden'));
        replayButton.classList.remove('hidden');
    }
    
}

function playAgain(){
    computerScore = 0;
    computerScoreDisplay.textContent = 0;
    playerScore = 0;
    playerScoreDisplay.textContent = 0;
    resultText.textContent = "Ready to Play?"
    buttons.forEach(button => button.classList.remove('hidden'));
    replayButton.classList.add('hidden');
}

// Numeric variable for computer's score
let computerScore = 0

// Numeric variable for player's score
let playerScore = 0
const buttonsContainer = document.querySelector('.buttons');
const replayButton = document.querySelector('.replay-button');
const resultText = document.querySelector('.result-text');
const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');
const buttons = document.querySelectorAll('.play-button');
buttons.forEach(button => button.addEventListener('click', () => playRound(button.id)));
replayButton.addEventListener('click', () => playAgain());

