function getComputerChoice(compRandom){
    return compRandom[Math.floor(Math.random()*compRandom.lenght)];
}
    const compRandom = (["ROCK", "PAPER", "SCISSORS"])

    let computerSelection = getComputerChoice(compRandom);

console.log(computerSelection)

    function playRound(playerSelection, computerSelection){
    let win = `You win! ${playerSelection} beats ${computerSelection}!`;
    let lose = `Oh no! ${computerSelection} beats ${playerSelection}!`;
    let draw = "It's a draw!";
    playerSelection === playerSelection.toUpperCase();
    if (playerSelection = computerSelection){
        return draw;
    }   else if (playerSelection = "ROCK", computerSelection = "SCISSORS"){
        return win;
    }   else if (playerSelection = "ROCK", computerSelection = "PAPER"){
        return lose;
    }   else if (playerSelection = "PAPER", computerSelection = "ROCK"){
        return win;
    }   else if (playerSelection = "PAPER", computerSelection = "SCISSORS"){
        return lose;
    }   else if (playerSelection = "SCISSORS", computerSelection = "ROCK"){
        return lose;
    }   else if (playerSelection = "SCISSORS", computerSelection = "PAPER"){
        return win;
    }
}

   
  const playerSelection = "Paper";
  console.log(playRound(playerSelection, computerSelection));