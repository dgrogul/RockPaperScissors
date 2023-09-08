let playerScore = 0;
let computerScore = 0;
let gameOver = 5;

// Define a function to play a round
function playRound(playerSelection) {
    if (gameOver === 0) return;
    // Generate a random computer choice (rock, paper, or scissors)
    const choices = ["Rock", "Paper", "Scissors"];
    const computerSelection = choices[Math.floor(Math.random() * 3)];

    // Determine the winner
    let result;
    if (playerSelection === computerSelection) {
        result = "It's a tie!";
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        result = `You win! ${playerSelection} beats ${computerSelection}.`;
        playerScore++;
    } else {
        result = `Computer wins! ${computerSelection} beats ${playerSelection}.`;
        computerScore++;
    }

    // Display the result on the webpage
    const resultDisplay = document.getElementById("result");
    resultDisplay.textContent = result;
 
    // Update the scores on the webpage
    const scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = `Player: ${playerScore} - Computer ${computerScore}`;

    //Check if the game is over
    if (playerScore === gameOver || computerScore === gameOver) {
        // Display the winner
        const winnerDisplay = document.getElementById("winner");
        if (playerScore > computerScore) {
            winnerDisplay.textContent = "You win the game!";
        } else if (computerScore > playerScore) {
            winnerDisplay.textContent = "Computer wins the game!";
        }
        // set gameover to 0 to prevent further rounds
        gameOver === 0; 

    }
}


// Add event listeners to the buttons
const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");

rockButton.addEventListener("click", () => {
    playRound("Rock");
});

paperButton.addEventListener("click", () => {
    playRound("Paper");
});

scissorsButton.addEventListener("click", () => {
    playRound("Scissors");
});