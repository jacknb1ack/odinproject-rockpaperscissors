// the game is player against computer
// the game start with computer make a random choice which is: rock, paper, or scissors and return it

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else {
    return "scissor";
  }
}

//store user and computer score
let userScore = 0;
let compScore = 0;

//placeholder for announcement
const announceWinner = document.querySelector("#announce");

// play 1 round, compare userchoice and compchoice and check
// the result whether user win, lose or draw
let rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  playRound("rock");
});

let paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  playRound("paper");
});

let scissor = document.querySelector("#scissor");
scissor.addEventListener("click", () => {
  playRound("scissor");
});

function playRound(userChoice) {
  let compChoice = getComputerChoice();

  let result;
  if ((userChoice === "rock" && compChoice === "scissor") || (userChoice === "paper" && compChoice === "rock") || (userChoice === "scissor" && compChoice === "paper")) {
    userScore++;
    result = "win";
  } else if (userChoice == compChoice) {
    result = "draw";
  } else {
    compScore++;
    result = "lose";
  }
  updateScore();

  if (compScore == 5 || userScore == 5) {
    reset();
  } else {
    announce(result, userChoice, compChoice);
  }
}

//to update and display current score
function updateScore() {
  const uScore = document.querySelector(".uscore-value");
  uScore.textContent = userScore;

  const cScore = document.querySelector(".cscore-value");
  cScore.textContent = compScore;
}

//announce and reset gameplay if user or comp reach 5 points
function reset() {
  if (userScore > compScore) {
    announceWinner.textContent = "Game Over! You Won the Game";
  } else {
    announceWinner.textContent = "Game Over! You Lose the Game";
  }

  userScore = 0;
  compScore = 0;
}
//announce win or lose result for each round
function announce(string, userChoice, compChoice) {
  let result = "";
  if (string === "win") {
    result = "You win! " + capitalize(userChoice) + " beats " + capitalize(compChoice);
  } else if (string === "lose") {
    result = "You lose! " + capitalize(compChoice) + " beats " + capitalize(userChoice);
  } else {
    result = "Draw";
  }

  announceWinner.textContent = result;
}

function capitalize(string) {
  let firstChar = string.charAt(0).toUpperCase();
  let theRest = string.substr(1).toLowerCase();

  return firstChar + theRest;
}
