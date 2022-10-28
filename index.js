let playerScore = 0;
let compScore = 0;
let rounds = 0;

function getComputerChoice(compRandom){
    return compRandom[Math.floor(Math.random()*compRandom.length)];
}
    const compRandom = (["ROCK", "PAPER", "SCISSORS"])

    let computerSelection = getComputerChoice(compRandom);


    function playRound(playerSelection, computerSelection){
    let win = `You win! ${playerSelection} beats ${computerSelection}!`;
    let lose = `Oh no! You lose! ${computerSelection} beats ${playerSelection}!`;
    let draw = "It's a draw!";


    if (playerSelection === computerSelection){
        return draw;
    }   else if (playerSelection === "ROCK", computerSelection === "SCISSORS"){
        return win, playerScore++;
    }   else if (playerSelection === "ROCK", computerSelection === "PAPER"){
        return lose, compScore++;
    }   else if (playerSelection === "PAPER", computerSelection === "ROCK"){
        return win, playerScore++;
    }   else if (playerSelection === "PAPER", computerSelection === "SCISSORS"){
        return lose, compScore++;
    }   else if (playerSelection === "SCISSORS", computerSelection === "ROCK"){
        return lose, compScore++;
    }   else if (playerSelection === "SCISSORS", computerSelection === "PAPER"){
        return win, playerScore++;
    }
}


// function game(){
//     console.log("The game begins!")
//     for (rounds = 0; rounds < 5; rounds++){
//         playRound(playerSelection, computerSelection); 

//     alert("Computer draws: " + computerSelection)
//     alert("You chose: " + playerSelection)

//     }
//     console.log(" Player Score: " + playerScore);
//     console.log("Computer Score: " + compScore);
// }

// let playerSelection = prompt("Lets play ROCK, PAPER, SCISSORS\nPut your choice below:");
// playerSelection = playerSelection.toUpperCase();
    