// computer section
function getComputerChoice() {
  const computerChoices = ["Rock", "Paper", "Scissors"];
  let computerChoice =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  return computerChoice.toLowerCase();
}
// computer choice is assigned

// human section
function getHumanChoice() {
  const humanChoice = prompt("Rock, paper, or scissors?");
  return humanChoice.toLowerCase();
}
// user choice is prompted

// score section
let humanScore = 0;
let computerScore = 0;
// user and computer scores start at 0

// play entire game section
function playGame() {
  // play round section
  function playRound(
    humanChoice = getHumanChoice(),
    computerChoice = getComputerChoice()
  ) {
    console.log(humanChoice);
    console.log(computerChoice);
    if (humanChoice === computerChoice) {
      humanScore += 1;
      computerScore += 1;
      console.log("It's a tie!");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore += 1;
      console.log("You win! Rock beats scissors.");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore += 1;
      console.log("You win! Paper beats rock.");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore += 1;
      console.log("You win! Scissors beats paper.");
    } else {
      computerScore += 1;
      console.log("You lose!");
    }
  }
}
playGame();
console.log(
  "Player score: " + humanScore + " || Computer Score: " + computerScore
);
