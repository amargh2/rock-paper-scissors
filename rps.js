function computerPlay () { 
    /*define a list of possible choices and a method by which the computer's choice is randomly made */
    
    possibleChoices = ['rock', 'paper', 'scissors'];
    let computerChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
    return computerChoice;
}

/* defining variable for the parameter of the following function */


/*function playerChoice(){
    let playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
    return playerSelection;
} */



function playRound(computerSelection, playerSelection) {
    /*outcomes if the player chooses rock */
    
    if (playerSelection == 'rock' && computerSelection == 'scissors') { 
        return(`You picked ${playerSelection} and the computer picked ${computerSelection}! You win!`)
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return(`You picked ${playerSelection} and the computer picked ${computerSelection}! You lose!`)
    }
    else if (playerSelection == 'rock' && computerSelection == 'rock') {
        return(`You picked ${playerSelection} and the computer picked ${computerSelection}! It's a tie!`)
    }
    
    /*outcomes if the player chooses paper */
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return(`You picked ${playerSelection} and the computer picked ${computerSelection}! You win!`)
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return(`You picked ${playerSelection} and the computer picked ${computerSelection}! You lose!`)
    }
    else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return(`You picked ${playerSelection} and the computer picked ${computerSelection}! It's a tie!`)
    }
    
    /*outcomes if the player chooses scissors*/
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return(`You picked ${playerSelection} and the computer picked ${computerSelection}! You win!`)
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return(`You picked ${playerSelection} and the computer picked ${computerSelection}! You lose!`)
    }
    else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return(`You picked ${playerSelection} and the computer picked ${computerSelection}! It's a tie!`)
    }
}

/*This next function is where the game will repeat itself five times and tally the wins and losses. */


function game() {
    let wins=0
    let notwins = 0

    for (let gameTries = 0; gameTries < 5; gameTries++) {
        let playerSelection = prompt('Rock, paper, or scissors?');
        let computerSelection = computerPlay();
        outcome = playRound(computerSelection, playerSelection);
        console.log(outcome);
        if (outcome.includes('win')) {
            wins += 1;
        }
        else {
            notwins += 1;
        }
    }
    console.log(`You won ${wins} games and lost or tied ${notwins}.`)
}

game()