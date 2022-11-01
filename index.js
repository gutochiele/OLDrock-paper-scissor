//CREATES THE GAME FUNCIOTN AND INITIAL STATS
let playerScore = 0;
let compScore = 0;
let rounds = 0;
function game(){
    
    //GETS THE PLAYER INPUT TO THE GAME

    let playerSelection = prompt("Lets play ROCK, PAPER, SCISSORS\nPut your choice below:");
    playerSelection = playerSelection.toUpperCase();

    //GETS THE RANDOM COMPUTER INPUT TO THE GAME
    function getComputerChoice(compRandom){
    return compRandom[Math.floor(Math.random()*compRandom.length)];}
    const compRandom = (["ROCK", "PAPER", "SCISSORS"])
    let computerSelection = getComputerChoice(compRandom);

    //DEFINE THE OUTCOME OF THE GAME
    let win = `You win! ${playerSelection} beats ${computerSelection}!`;
    let lose = `Oh no! You lose! ${computerSelection} beats ${playerSelection}!`;
    let draw = "It's a draw!";
    let playerError = "I'm sorry, I didn't understand that!"

    //DEFINE THE GAME RULES
    function playRound(playerSelection, computerSelection){     
    
        if (playerSelection === computerSelection){
            return draw, console.log(draw), rounds++;
        }   else if (playerSelection !== "ROCK" && playerSelection !== "PAPER" && playerSelection !== "SCISSORS"){
                    return playerError, console.log("I didn't understand that, try again!")
        }   else if (playerSelection === "ROCK", computerSelection === "SCISSORS"){
                    return win, playerScore++, console.log(win), rounds++; 
        }   else if (playerSelection === "ROCK", computerSelection === "PAPER"){
                    return lose, compScore++, console.log(lose), rounds++; 
        }   else if (playerSelection === "PAPER", computerSelection === "ROCK"){
                    return win, playerScore++, console.log(win), rounds++; 
        }   else if (playerSelection === "PAPER", computerSelection === "SCISSORS"){
                    return lose, compScore++, console.log(lose), rounds++; 
        }   else if (playerSelection === "SCISSORS", computerSelection === "ROCK"){
                    return lose, compScore++, console.log(lose), rounds++; 
        }   else if (playerSelection === "SCISSORS", computerSelection === "PAPER"){
                    return win, playerScore++, console.log(win), rounds++; 
        }
    }     

    //LOOP FOR 5 ROUNDS
    for (;rounds < 5;) {
            
            playRound(playerSelection, computerSelection);{
            console.log("You chose: " + playerSelection);
            console.log("Computer chose: " + computerSelection);
            console.log("Player Score: " + playerScore);
            console.log("Computer Score: " + compScore);
            console.log(`Round ${rounds}/5!`)   
            console.log("------------------------------------")
            game();
            }
    }
}
//CALL FOR THE GAME FUNCTION TO BEGIN
game();

//DISPLAY THE RESULT
if (playerScore > compScore) {
    console.log("You WON! :D")
} else {
    console.log("You LOST! :(")
}