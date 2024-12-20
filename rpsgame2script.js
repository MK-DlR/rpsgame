// all logic of game inside this function:
const game = () => {
  // score section, start at 0
  let humanScore = 0;
  let computerScore = 0;
  let inform = document.querySelector("#show-text");

  // function to play game
  const playGame = () => {
    const rockBtn = document.querySelector(".rock"); // rock
    const paperBtn = document.querySelector(".paper"); // paper
    const scissorBtn = document.querySelector(".scissor"); // scissors
    const humanChoices = [rockBtn, paperBtn, scissorBtn];
    const computerChoices = ["rock", "paper", "scissors"];

    // function to start playing game
    humanChoices.forEach((option) => {
      option.addEventListener("click", function () {
        const choiceNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerChoices[choiceNumber];
        // function to check who wins
        winner(this.innerText, computerChoice);
        // calling end of game when a score reaches 5
      });
    });
  };

  // function to decide winner
  function getWinner() {
    if (humanScore === 5) {
      inform.textContent = "You won the game!";
    } else if (computerScore === 5) {
      inform.textContent = "You lost the game!";
    }
  }

  const winner = (humanChoice, computerChoice) => {
    const playerScoreBoard = document.querySelector(".p-count");
    const computerScoreBoard = document.querySelector(".c-count");
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice === computerChoice) {
      inform.textContent = "It's a tie!";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore += 1;
      inform.textContent = "You win! Rock beats scissors.";
      playerScoreBoard.textContent = humanScore;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore += 1;
      inform.textContent = "You win! Paper beats rock.";
      playerScoreBoard.textContent = humanScore;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore += 1;
      inform.textContent = "You win! Scissors beats paper.";
      playerScoreBoard.textContent = humanScore;
    } else {
      computerScore += 1;
      inform.textContent = "You lose!";
      computerScoreBoard.textContent = computerScore;
    }
    return getWinner();
  };
  playGame();
};
game();
