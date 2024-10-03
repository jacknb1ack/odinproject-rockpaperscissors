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
// the game then compare user choice and computer random choice
// mark the score and keep it tracked whether user win or computer win
// announce whether user win or lose
