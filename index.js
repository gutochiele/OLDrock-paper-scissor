let playerScore = 0;
let compScore = 0;
let rounds = 0;

// console.log("The game begins!") 


let playerSelection = prompt("Lets play ROCK, PAPER, SCISSORS\nPut your choice below:");
playerSelection = playerSelection.toUpperCase();


function getComputerChoice(compRandom){
    return compRandom[Math.floor(Math.random()*compRandom.length)];
}
    const compRandom = (["ROCK", "PAPER", "SCISSORS"])

    let computerSelection = getComputerChoice(compRandom);

    let win = `You win! ${playerSelection} beats ${computerSelection}!`;
    let lose = `Oh no! You lose! ${computerSelection} beats ${playerSelection}!`;
    let draw = "It's a draw!";

    function playRound(playerSelection, computerSelection){     

    if (playerSelection === computerSelection){
        return draw, rounds++, console.log(draw);
    }   else if (playerSelection === "ROCK", computerSelection === "SCISSORS"){
        return win, playerScore++, rounds++, console.log(win);
    }   else if (playerSelection === "ROCK", computerSelection === "PAPER"){
        return lose, compScore++, rounds++, console.log(lose);
    }   else if (playerSelection === "PAPER", computerSelection === "ROCK"){
        return win, playerScore++, rounds++, console.log(win);
    }   else if (playerSelection === "PAPER", computerSelection === "SCISSORS"){
        return lose, compScore++, rounds++, console.log(lose);
    }   else if (playerSelection === "SCISSORS", computerSelection === "ROCK"){
        return lose, compScore++, rounds++, console.log(lose);
    }   else if (playerSelection === "SCISSORS", computerSelection === "PAPER"){
        return win, playerScore++, rounds++, console.log(win);
    }   else if (playerSelection !== ["ROCK", "PAPER", "SCISSORS"]){
        console.log("Sorry, I didn't understand that!");
    }

}

// function game(){
    
    // for (rounds = 0; rounds < 5; rounds++){

        playRound(playerSelection, computerSelection);{ 


            
        console.log("You chose: " + playerSelection);
        console.log("Computer chose: " + computerSelection);



        console.log(" Player Score: " + playerScore);
        console.log("Computer Score: " + compScore);
        console.log(`It's the round number ${rounds}!`)
    }
