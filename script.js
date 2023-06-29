// Function to generate computer's choice
function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

// Update the game result and log the win/loss
function updateResult(result) {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = result;

    // Log the win/loss
    if (result === "You win!") {
        console.log("Win");
    } else if (result === "You lose!") {
        console.log("Loss");
    }
}

// Event listeners for each button
const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerSelection = button.id;
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        updateResult(result);
    });
});
