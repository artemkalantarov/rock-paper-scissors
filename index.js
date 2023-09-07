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
function getUserChoice() {

    // Asks user for input answer to question and stores as local variable.
    let userChoice = prompt("What is your choice? Rock, Paper or Scissors?");

    //Capitalizes the answer
    userChoice = (userChoice.charAt(0)).toUpperCase() + (userChoice.slice(1)).toLowerCase();

    //Makes sure that user input is a valid option
    if (userChoice === "Rock" || userChoice === "Paper" || userChoice === "Scissors") {
        return userChoice;
    } else {
        console.log("Wrong answer. The answer must be only 'Rock', 'Paper', or 'Scissors'. The answer is not case sensitive,");
        getUserChoice();
    }
}

// Function checks who won the round by getting user's and computer's choice
// User's or computer's score increases depending on who won
// Returns an explanation of who won and what beat what
function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        return `It is a tie! Both players had ${playerSelection}!`
    } else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
                (playerSelection === "Scissors" && computerSelection === "Paper") ||
                (playerSelection === "Paper" && computerSelection === "Rock")) {
        playerScore++            
        if (playerSelection === "Scissors"){
            return `You won! ${playerSelection} beat ${computerSelection}!`
        } else {
            return `You won! ${playerSelection} beats ${computerSelection}!`
        } 
    } else {
        computerScore++
        if (computerSelection === "Scissors"){
            return `You lost! ${computerSelection} beat ${playerSelection}!`
        } else {
            return `You lost! ${computerSelection} beats ${playerSelection}!`
        }
    }
  }

// Function checks score at the end of the game and declares a winner
// Function also states the final score
function checkScore() {
    if (computerScore > playerScore) {
        return `Game over! Computer won! Score: ${computerScore} : ${playerScore}`
    } else if (playerScore > computerScore) {
        return `Game over! You won! Score: ${playerScore} : ${computerScore}`
    } else {
        return `Game over! It is a tie! Score: ${playerScore} : ${computerScore}`
    }
}

// Function starts the game and runs it for 5 rounds
// After all rounds are played, declares the winner
function game() {
    for (let i=1; i < 6; i++) {
        const playerSelection = getUserChoice();
        const computerSelection = getComputerChoice();
        console.log(`Round: ${i}`)
        console.log(playRound(playerSelection, computerSelection))
    }
    console.log(checkScore());
}

// Numeric variable for computer's score
let computerScore = 0

// Numeric variable for player's score
let playerScore = 0

// Calls the function to start the game
console.log(game());


