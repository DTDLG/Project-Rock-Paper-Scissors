// Rock, Paper, Scissors game logic.
let computerChoice;
let userChoice;
// GET COMPUTER CHOICE
// Generate a random choice of rock, paper or scissors
function getComputerChoice(computerChoice) {
    let numberGenerator = Math.floor(Math.random() * 100) + 1;
    if (numberGenerator <= 30) {å
        return "ROCK";
    }
    else if (numberGenerator >= 61) {
        return "PAPER";
    }
    else {
        return "SCISSORS";
    }
}

// GET USER CHOICE.
// Ask for user input to get either rock, paper or scissors
function getUserChoice(userChoice) {
    userChoice = prompt("Rock, paper or scissors?");
    return userChoice.toUpperCase();
}

// DECLARE PLAYER SCORE VARIABLES.
let computerScore = 0;
let userScore = 0;

// PLAY A SINGLE ROUND.
// Check if computer and player choices are the same.
// Check player choice and compare to each possible computer choice.

// PLAY ENTIRE GAME (5 ROUNDS).
// Display current round results.
// Display total results.
// Start new round and get user and computer's choice.
// Repeat for a total of 5 rounds.