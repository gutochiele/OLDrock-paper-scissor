let playerScore = 0;
let compScore = 0;
let rounds = 0;

console.log("The game begins!") 


let playerSelection = prompt("Lets play ROCK, PAPER, SCISSORS\nPut your choice below:");
playerSelection = playerSelection.toUpperCase();


function getComputerChoice(compRandom){
    return compRandom[Math.floor(Math.random()*compRandom.length)];
}
    const compRandom = (["ROCK", "PAPER", "SCISSORS"])

    let computerSelection = getComputerChoice(compRandom);


    function playRound(playerSelection, computerSelection){
    // let win = 'win';
    // let lose = 'lose';
    // let draw = 'draw';
    // const result = ([lose, win, draw]);

    if (playerSelection === computerSelection){
        return draw;
    }   else if (playerSelection === "ROCK", computerSelection === "SCISSORS"){
        return playerScore++, win;
    }   else if (playerSelection === "ROCK", computerSelection === "PAPER"){
        return compScore++, lose;
    }   else if (playerSelection === "PAPER", computerSelection === "ROCK"){
        return playerScore++, win;
    }   else if (playerSelection === "PAPER", computerSelection === "SCISSORS"){
        return compScore++, lose;
    }   else if (playerSelection === "SCISSORS", computerSelection === "ROCK"){
        return compScore++, lose;
    }   else if (playerSelection === "SCISSORS", computerSelection === "PAPER"){
        return playerScore++, win;
}
}

// function game(){
    
    // for (rounds = 0; rounds < 5; rounds++){

        playRound(playerSelection, computerSelection);{ 

        console.log("Computer draws: " + computerSelection);
        console.log("You chose: " + playerSelection);
        if (draw) {
            console.log("It's a draw!");
            
        } else if (lose){
            console.log(`Oh no! You lose! ${computerSelection} beats ${playerSelection}!`);
           
        } else if (win){
            console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
            
        }

        console.log(" Player Score: " + playerScore);
        console.log("Computer Score: " + compScore);
    }
