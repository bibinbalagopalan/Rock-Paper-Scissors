function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 0.33) {
      return "rock";
    } else if (randomNumber < 0.66) {
      return "paper";
    } else {
      return "scissors";
    }
  }
  console.log(getComputerChoice());
  
function getHumanChoice() {
    const userInput = prompt("Please choose rock, paper, or scissors:").toLowerCase();
    return userInput;
  }
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

// Display initial scores
console.log(`Human: ${humanScore}, Computer: ${computerScore}`);

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
  
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`);
    }
  
    // Display updated scores
    console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
  }
  
  // Example function calls
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  

    