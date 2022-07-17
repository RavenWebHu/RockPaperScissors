let wins = 0;
let loses = 0;
let rounds = 0;

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

function game(selection){
    let computerSelection = computerPlay();
    let playerSelection = selection;

        round = playRound(playerSelection, computerSelection);
        
        if(round.includes("win")){
            wins++;
            rounds++;
        }
        else if(round.includes("tie")){
            return;
        }
        else{
            loses++;
            rounds++;
        }

        document.getElementById('playerw').innerHTML = wins;
        document.getElementById('compw').innerHTML = loses;

        if (rounds === 5){
            alert("Round is over");
            wins = 0;
            loses = 0;
            rounds = 0;
        }



        console.log(computerSelection);
        console.log(round);
    

}