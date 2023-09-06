// Write out the algorithm for the project 

//Create a string variable for user's choice, set it to be empty 
let playerSelection = ""

// Create player score number variable which is zero at the beginning. 

let playerScore = 0

//Create a string variable for computer's choice. Set it to be empty,
let computerSelection = ""

//Create a computer score number variable which is zero at the beginning
let computerScore = 0

//Create a function to prompt a user to answer a question. User types in his choice for the question "Rock, paper or Scissors?" in the prompt that pops up.
//Check to see if answer is one of the allowed choice. If not, ask to enter a proper answer. 
//Capitalize and store it in the user's choice variable.

function getUserChoice() {

    //Asks user for input answer to question and stores as local variable.

    let userChoice = prompt("What is your choice? Rock, Paper or Scissors?");

    //Capitalizes the answer

    userChoice = (userChoice.charAt(0)).toUpperCase() + (userChoice.slice(1)).toLowerCase();

    if (userChoice === "Rock" || userChoice === "Paper" || userChoice === "Scissors") {
        playerSelection = userChoice
    } else {
        console.log("Wrong answer. The answer must be only 'Rock', 'Paper', or 'Scissors'. The answer is not case sensitive,");
        getUserChoice();
    }
}

//Create a function that generate's computer's choice
//Function get a random number from 0-2. Each number is assigned rock, paper or scissors.
//The returned value is then stored the computer's choice variable 

function getComputerChoice() {

    //Function generates a random number from 0-2
    let computerChoice = Math.floor(Math.random() * 3)
    
    //Each number is then assigns a global variable computerSelection with a certain string
    if (computerChoice === 0) {
        computerSelection = "Rock";
    } else if (computerChoice === 1) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors"
    }
}

//Create a function that compares the user's choice and computers choice, and determines a winner. 

function getWinner() {
    if (playerSelection === computerSelection) {
        return "It is a tie, Play again"
    } else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
                (playerSelection === "Scissors" && computerSelection === "Paper") ||
                (playerSelection === "Paper" && computerSelection === "Rock")) {
                    playerScore++;
                    return "Player won!" 
                } else {
                    computerScore++
                    return "Computer won!"
                    
                }
}
//Create a function to play a round when it is called.
function playRound() {
    getComputerChoice();
    getUserChoice();
    return getWinner();
}

//Create a function to check who won at the end of the game 
function checkScore() {
    if (playerScore === computerScore) {
        return "It's a tie!"
    } else if (playerScore > computerScore) {
        return "Player Won!"
    } else {
        return "Computer Won!"
    }
}

//Create a loop to play a game for 5 rounds 
function game() {
    for (let i=1; i < 6; i++){
        console.log("Round number: "+i)
        console.log(playRound())
        console.log("Player Choice: " + playerSelection)
        console.log("Computer Choice: " + computerSelection)
        console.log("Player score: " + playerScore)
        console.log("Computer score: "+ computerScore)
    }
    console.log("The result of the game: " + checkScore())
}

console.log(game())