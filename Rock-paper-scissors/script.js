let wins = 0;                                                           //Global variable for counting player wins
let loses = 0;                                                          //Global variable for counting player loses

function computerPlay(){                                                // Function for sleceting rock, paper, scissors randomly,
    let rn;                                                             // and channging the border style for the coresponding img tag
    rn = Math.floor(Math.random() * 9 );
    let active;
    let play;

    if (rn < 3){
        play = "comprock";
        active = document.getElementById(play);
        active.setAttribute('class', 'compimgactive');
        return "rock";
    }
    else if (rn > 2 && rn < 6){
        play = "comppaper";
        active = document.getElementById(play);
        active.setAttribute('class', 'compimgactive');
        return "paper";
    }
    else{
        play = "compscissors";
        active = document.getElementById(play);
        active.setAttribute('class', 'compimgactive');
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection)  {               //Function for selecting the winner and returning the round outcome massage 
    let player = playerSelection.toLowerCase();
    let comp = computerSelection;

    if (player === "scissors" && comp === "paper"){
        return "You win, scissors beats paper!";
    }
    else if (player === "paper" && comp === "rock"){
        return "You win, paper beats rock!";
    }
    else if (player === "rock" && comp === "scissors"){
        return "You win, rock beats scissors!";
    }
    else if (comp === "scissors" && player === "paper"){
        return "You lose, scissors beats paper!";
    }
    else if (comp === "paper" && player === "rock"){
        return "You lose, paper beats rock!";
    }
    else if (comp === "rock" && player === "scissors"){
        return "You lose, rock beats scissors!";
    }
    else if (comp === "rock" && player === "rock"){
        return "It's a tie!";
    }
    else if (comp === "paper" && player === "paper"){
        return "It's a tie!";
    }
    else if (comp === "scissors" && player === "scissors"){
        return "It's a tie!";
    }
 
}
function resetSelection(){                                              //Resets computer's choice css
    let div = document.getElementById('compselector');
    let compimgs = div.querySelectorAll('img');
    compimgs.forEach(resetCSS);
}
function resetCSS(img){
    img.setAttribute('class', 'compimg');
}


function game(selection){
    resetSelection();
    let computerSelection = computerPlay();
    let playerSelection = selection;
    let roundover = document.getElementById('roundover-inactive');
    let matchOutcome = document.getElementById('match-outcome'); 

        round = playRound(playerSelection, computerSelection);
        
        if(round.includes("win")){
            wins++;
        }
        else if(round.includes("tie")){
            return;
        }
        else{
            loses++;
        }

        document.getElementById('playerw').innerHTML = wins;
        document.getElementById('compw').innerHTML = loses;
        document.getElementById('roundstat').innerHTML = round;

        if (wins + loses === 5){
            if(wins > loses){
                matchOutcome.innerHTML = "You've won this match!"
            }
            else{
                matchOutcome.innerHTML = "You've lost this match!"
            }
            roundover.setAttribute('id', 'roundover-active')
        }
}

function resetGame(){
    wins = 0;
    loses = 0;
    let roundover = document.getElementById('roundover-active');
    roundover.setAttribute('id', 'roundover-inactive')
    resetSelection();
    document.getElementById('playerw').innerHTML = wins;
    document.getElementById('compw').innerHTML = loses;
    document.getElementById('roundstat').innerHTML = '';
}