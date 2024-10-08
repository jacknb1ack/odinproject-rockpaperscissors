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

let userScore = 0;
let compScore = 0;

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
  announce(result, userChoice, compChoice);
  return result;
}

function updateScore() {
  const uScore = document.querySelector(".uscore-value");
  uScore.textContent = userScore;

  const cScore = document.querySelector(".cscore-value");
  cScore.textContent = compScore;
}

function announce(string, userChoice, compChoice) {
  let result = "";
  if (string === "win") {
    result = "You win! " + capitalize(userChoice) + " beats " + capitalize(compChoice);
  } else if (string === "lose") {
    result = "You lose! " + capitalize(compChoice) + " beats " + capitalize(userChoice);
  } else {
    result = "Draw";
  }

  const announceWinner = document.querySelector("#announce");
  announceWinner.textContent = result;
}

function capitalize(string) {
  let firstChar = string.charAt(0).toUpperCase();
  let theRest = string.substr(1).toLowerCase();

  return firstChar + theRest;
}
