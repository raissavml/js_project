const message = {
  prompt:
    "Choose your weapon! You have some options: ROCK, PAPER, SCISSORS, or the secret weapon!",
  error: "ERROR: Please insert a valid choice, as: rock, paper or scissors",
  computerWinsPaper: "You Lose! Paper beats rock!",
  computerWinsRock: "Not this time! Rock beats scissors!",
  computerWinsScissors: "Just cut your paper! Best luck on the next one!",
  userWinsPaper: "A win for you! Paper beats rock!",
  userWinsRock: "Whaaat? You just smashed my scissors!",
  userWinsScissors: "You cut through my paper as a hot knife through butter!",
  userWinsUnplug: "No way you used this dirty secret! Please, be kind! I am running out of battery!",
  tie: "It is a tie! We seem to think alike!",
  quit: "Are you going already?"
};

const scoreboard = {
  player: 0,
  computer: 0
};

function computerPlay() {
  const randomChoice = Math.floor(Math.random() * 3);
  switch (randomChoice) {
    case 0:
      return "ROCK";
    case 1:
      return "PAPER";
    case 2:
      return "SCISSORS";
  }
}
function playerSelection(userPrompt) {
  const userSelection = prompt(message.prompt);
     if (userSelection !== null) {
      const userChoice = userSelection.toUpperCase();
      if (
        userChoice === "ROCK" ||
        userChoice === "PAPER" ||
        userChoice === "SCISSORS" ||
        userChoice === "UNPLUG"
      ) {
        return userChoice;
      } else if(userSelection===null){
      let i = 6;
      } else {
        console.log(message.error);
        playerSelection();
      }
  }
}
function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    console.log(
      `You: ${playerChoice}`,
      `Computer: ${computerChoice}`,
      message.tie,
      `This is our scoreboard: `,
      scoreboard
    );
  } else if (playerChoice === "UNPLUG") {
    scoreboard.player++;
    console.log(
      `You: ${playerChoice}`,
      `Computer: ${computerChoice}`,
      message.userWinsUnplug,
      `This is our scoreboard: `,
      scoreboard
    );
  } else {
    if (playerChoice === "ROCK") {
      if (computerChoice === "PAPER") {
        scoreboard.computer++;
        console.log(
          `You: ${playerChoice}`,
          `Computer: ${computerChoice}`,
          message.computerWinsPaper,
          `This is our scoreboard: `,
          scoreboard
        );
      } else {
        scoreboard.player++;
        console.log(
          `You: ${playerChoice}`,
          `Computer: ${computerChoice}`,
          message.userWinsRock,
          `This is our scoreboard: `,
          scoreboard
        );
      }
    }
    if (playerChoice === "PAPER") {
      if (computerChoice === "SCISSORS") {
        scoreboard.computer++;
        console.log(
          `You: ${playerChoice}`,
          `Computer: ${computerChoice}`,
          message.computerWinsScissors,
          `This is our scoreboard: `,
          scoreboard
        );
      } else {
        scoreboard.player++;
        console.log(
          `You: ${playerChoice}`,
          `Computer: ${computerChoice}`,
          message.userWinsPaper,
          `This is our scoreboard: `,
          scoreboard
        );
      }
    }
    if (playerChoice === "SCISSORS") {
      if (computerChoice === "ROCK") {
        scoreboard.computer++;
        console.log(
          `You: ${playerChoice}`,
          `Computer: ${computerChoice}`,
          message.computerWinsRock,
          `This is our scoreboard: `,
          scoreboard
        );
      } else {
        scoreboard.player++;
        console.log(
          `You: ${playerChoice}`,
          `Computer: ${computerChoice}`,
          message.userWinsScissors,
          `This is our scoreboard: `,
          scoreboard
        );
      }
    }
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    if(playRound(playerSelection === null)){
      break;
    }else {
      playRound(playerSelection(), computerPlay());
    };
  }
  if (scoreboard.player == scoreboard.computer) {
    console.log(
      "This was the final round, and it is a tie! Computers are really thinking like humans now days... Or maybe you are a human who thinks like a computer!", scoreboard
    );

  } else if (scoreboard.player > scoreboard.computer) {
    console.log(
      "This was the final round! You won! Congratulations!! Don't I deserve a rematch?", scoreboard
    );

  } else {
    console.log(
      "This was the final round! A win for the machines! Congrats to me! Maybe you will be luckier next time!", scoreboard
    );
  }
}

game();