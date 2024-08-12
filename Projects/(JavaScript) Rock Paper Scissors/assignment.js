let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const rand = Math.floor(Math.random() * 3);
    return choices[rand];
}

function playRound(humanChoice, computerChoice) {
    const resultDiv = document.getElementById("results");

    if (humanChoice === computerChoice) {
        resultDiv.textContent = `It's a tie! Both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore += 1;
        resultDiv.textContent = `You win this round! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore += 1;
        resultDiv.textContent = `Computer wins this round! ${computerChoice} beats ${humanChoice}.`;
    }

    resultDiv.textContent += ` Score: You ${humanScore} - Computer ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        const winner = humanScore === 5 ? "You" : "Computer";
        resultDiv.textContent += `\n${winner} wins the game!`;
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
}

document.getElementById("rock").addEventListener("click", () => playRound("rock", getComputerChoice()));
document.getElementById("paper").addEventListener("click", () => playRound("paper", getComputerChoice()));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors", getComputerChoice()));