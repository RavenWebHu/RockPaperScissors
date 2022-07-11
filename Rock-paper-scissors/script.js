function computerPlay(){
    let rn;
    rn = Math.floor(Math.random() * 9 );

    if (rn < 3){
        return "rock";
    }
    else if (rn > 2 && rn < 6){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection)  {
    let player = playerSelection.toLowerCase();
    let comp = computerSelection;

    if (player === "scissors" && comp === "paper"){
        return "You win, scissors beats paper!"
    }
    else if (player === "paper" && comp === "rock"){
        return "You win, paper beats rock!"
    }
    else if (player === "rock" && comp === "scissors"){
        return "You win, rock beats scissors!"
    }
    else if (comp === "scissors" && player === "paper"){
        return "You lose, scissors beats paper!"
    }
    else if (comp === "paper" && player === "rock"){
        return "You lose, paper beats rock!"
    }
    else if (comp === "rock" && player === "scissors"){
        return "You lose, rock beats scissors!"
    }
    else if (comp === "rock" && player === "rock"){
        return "It's a tie!"
    }
    else if (comp === "paper" && player === "paper"){
        return "It's a tie!"
    }
    else if (comp === "scissors" && player === "scissors"){
        return "It's a tie!"
    }
    else {
        return "Spock is not a valid option here :)";
    }
 
}

function game(){
    let computerSelection;
    let playerSelection;
    let wins = 0;
    let loses = 0;
    let round;
    let winner;

    for(let i = 0 ; i < 5 ; i++){
        playerSelection = window.prompt("Please show rock, paper or scissors");
        computerSelection = computerPlay();
        round = playRound(playerSelection, computerSelection);

        if (round.includes("Spock")){
            i--;
            console.log("Unvalid round!");
        }        
        else if(round.includes("win")){
            wins++;
        }
        else if(round.includes("tie")){
            i--;
        }
        else{
            loses++;
        }                

        console.log(computerSelection);
        console.log(round);
    }
    if (wins > loses){
        winner = "You've won this round!";
    }
    else if (wins === loses){
        winner = "This match is a tie!";
    }
    else{
        winner = "You've lost this round!";
    }

    console.log(winner);
}