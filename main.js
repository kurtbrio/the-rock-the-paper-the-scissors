const playerMoveDisplay = document.getElementById("player-move");
const computerMoveDisplay = document.getElementById("computer-move");
const resultDisplay = document.getElementById("game-result");
const possibleChoices = document.querySelectorAll(".choice");

const winCounterDisplay = document.getElementById("win-counter");
const loseCounterDisplay = document.getElementById("lose-counter");
const drawCounterDisplay = document.getElementById("draw-counter");

let playerMove;
let winCount = 0;
let loseCount = 0;
let drawCount = 0;

possibleChoices.forEach((choice) => {
  choice.addEventListener("click", (event) => {
    playerMove = event.target.id;
    playerMoveDisplay.innerHTML = playerMove;

    let computerMove = randomComputerMove();
    computerMoveDisplay.innerHTML = computerMove;

    let gameResult = result(computerMove);
    resultDisplay.innerHTML = gameResult;

    scoreCounter(gameResult);
    winCounterDisplay.innerHTML = winCount;
    loseCounterDisplay.innerHTML = loseCount;
    drawCounterDisplay.innerHTML = drawCount;
  });
});

function randomComputerMove() {
  let randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

  if (randomNumber === 1) {
    return "rock";
  }
  if (randomNumber === 2) {
    return "paper";
  }
  if (randomNumber === 3) {
    return "scissors";
  }
}

const result = (computerMove) => {
  if (playerMove === computerMove) {
    return "Draw";
  } else if (playerMove === "rock" && computerMove === "paper") {
    return "Lose";
  } else if (playerMove === "rock" && computerMove === "scissors") {
    return "Win";
  } else if (playerMove === "paper" && computerMove === "rock") {
    return "Win";
  } else if (playerMove === "paper" && computerMove === "scissors") {
    return "Lose";
  } else if (playerMove === "scissors" && computerMove === "rock") {
    return "Lose";
  } else if (playerMove === "scissors" && computerMove === "paper") {
    return "Win";
  }
};

const scoreCounter = (gameResult) => {
  if (gameResult === "Win") {
    return (winCount += 1);
  }
  if (gameResult === "Lose") {
    return (loseCount += 1);
  }
  if (gameResult === "Draw") {
    return (drawCount += 1);
  }
};
