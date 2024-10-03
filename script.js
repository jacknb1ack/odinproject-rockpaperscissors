// the game is player agains computer
// the game start with computer make a random string which is: rock, paper, or scissors and return it

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

// the game then give user choice to select, which is: rock, paper, or scussors
function getHumanChoice() {
  return prompt("What is your choice? 'rock, paper, or scissor'");
}

// the game then compare user choice and computer random choice

function capitalize(string) {
  let firstChar = string.charAt(0).toUpperCase();
  let theRest = string.substr(1).toLowerCase();

  return firstChar + theRest;
}

function announceResult(string, humanChoice, computerChoice) {
  if (string === "win") {
    console.log("You win! " + capitalize(humanChoice) + " beats " + capitalize(computerChoice));
  } else if (string === "lose") {
    console.log("You lose! " + capitalize(computerChoice) + " beats " + capitalize(humanChoice));
  } else {
    console.log("Draw");
  }
}

function playRound(humanChoice, computerChoice) {
  humanChoice = getHumanChoice().toLowerCase();
  computerChoice = getComputerChoice();
  let result;

  if (humanChoice === "rock") {
    if (computerChoice === "scissor") {
      result = "win";
      humanScore = humanScore + 1;
    } else if (computerChoice === "paper") {
      result = "lose";
      computerScore = computerScore + 1;
    } else {
      result = "draw";
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      result = "win";
      humanScore = humanScore + 1;
    } else if (computerChoice === "scissor") {
      result = "lose";
      computerScore = computerScore + 1;
    } else {
      result = "draw";
    }
  } else {
    if (computerChoice === "paper") {
      result = "win";
      humanScore = humanScore + 1;
    } else if (computerChoice === "rock") {
      result = "lose";
      computerScore = computerScore + 1;
    } else {
      result = "draw";
    }
  }

  return announceResult(result, humanChoice, computerChoice);
}
// mark the score and keep it tracked whether user win or computer win
let humanScore = 0;
let computerScore = 0;
// announce whether user win or lose
playRound();
