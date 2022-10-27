function getComputerChoice(compRandom){
    return compRandom[Math.floor(Math.random()*compRandom.length)];
}
    const compRandom = (["ROCK", "PAPER", "SCISSORS"])

    let computerSelection = getComputerChoice(compRandom);

console.log("Computer draws: " + computerSelection)

    function playRound(playerSelection, computerSelection){
    let win = `You win! ${playerSelection} beats ${computerSelection}!`;
    let lose = `Oh no! You lose! ${computerSelection} beats ${playerSelection}!`;
    let draw = "It's a draw!";


    if (playerSelection === computerSelection){
        return draw;
    }   else if (playerSelection === "ROCK", computerSelection === "SCISSORS"){
        return win;
    }   else if (playerSelection === "ROCK", computerSelection === "PAPER"){
        return lose;
    }   else if (playerSelection === "PAPER", computerSelection === "ROCK"){
        return win;
    }   else if (playerSelection === "PAPER", computerSelection === "SCISSORS"){
        return lose;
    }   else if (playerSelection === "SCISSORS", computerSelection === "ROCK"){
        return lose;
    }   else if (playerSelection === "SCISSORS", computerSelection === "PAPER"){
        return win;
    }
}


function game(playRound){

    for (let i = 0; i < 5; i++) {
    
        
        let playerSelection = prompt("Lets play ROCK, PAPER, SCISSORS\nPut your choice below:");
        playerSelection = playerSelection.toUpperCase();
        
        console.log(playRound(playerSelection, computerSelection));





     }

// let playerSelection = prompt("Lets play ROCK, PAPER, SCISSORS\nPut your choice below:");
// playerSelection = playerSelection.toUpperCase();

// console.log(playRound(playerSelection, computerSelection));

    }