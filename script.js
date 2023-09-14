// Function generates computer's choice of rock, paper or scissors
function getComputerChoice() {

    let randNumber = Math.floor(Math.random() * 3)
    
    if (randNumber === 0) {
        return "Rock";
    } else if (randNumber === 1) {
        return "Paper";
    } else {
        return "Scissors"
    }
}

// Function checks who won the round by getting user's and computer's choice
function playRound(playerSelection) {
    playerSelection = (playerSelection.charAt(0)).toUpperCase() +
                        (playerSelection.slice(1)).toLowerCase();
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
function gameOver(playerScore, computerScore) {
    if (playerScore === 5 || computerScore === 5) {
        resultText.textContent = checkScore();
        buttons.forEach(button => button.classList.add('hidden'));
        replayButton.classList.remove('hidden');
    }
    
}

//Function to play the game again
function playAgain(){
    computerScore = 0;
    computerScoreDisplay.textContent = 0;
    playerScore = 0;
    playerScoreDisplay.textContent = 0;
    resultText.textContent = "Ready to Play?"
    buttons.forEach(button => button.classList.remove('hidden'));
    replayButton.classList.add('hidden');
}


let computerScore = 0
let playerScore = 0
const buttonsContainer = document.querySelector('.buttons');
const replayButton = document.querySelector('.replay-button');
const resultText = document.querySelector('.result-text');
const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');
const buttons = document.querySelectorAll('.play-button');

buttons.forEach(button => button.addEventListener('click', () => playRound(button.id)));
replayButton.addEventListener('click', () => playAgain());

