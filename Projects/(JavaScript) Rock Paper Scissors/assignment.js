function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3)
    if (rand == 2) {
        return "rock";
    } else if (rand == 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let userInput = prompt("Enter 0 for scissors, 1 for paper or 2 for rock!");
    let userChoice = parseFloat(userInput);

    if (isNaN(userChoice) || !Number.isInteger(userChoice)) {
        return "Error: Please enter a valid integer number.";
    }

    userChoice = parseInt(userChoice, 10);

    if (userChoice === 2) {
        return "rock";
    } else if (userChoice === 1) {
        return "paper";
    } else if (userChoice === 0) {
        return "scissors";
    } else {
        return "Oops! You picked a number that isn't 0, 1, or 2!";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if(humanChoice == "rock" && computerChoice == "scissors") {
            humanScore += 1;
        } else if (computerChoice == "rock" && humanChoice == "scissors") {
            computerScore += 1;
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore += 1;
        } else if (computerChoice == "paper" && humanChoice == "rock") {
            computerScore += 1;
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore += 1;
        } else if (computerChoice == "scissors" && humanChoice == "paper") {
            computerScore += 1;
        }
      }
    
    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(humanSelection + " Human");
        console.log(computerSelection + " Computer");
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`Human wins! Human score: ${humanScore}, computer score: ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Computer wins! Human score: ${humanScore}, computer score: ${computerScore}`);
    } else {
        console.log("Tie!")
    }
}

playGame();