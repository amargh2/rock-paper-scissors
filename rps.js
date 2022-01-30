function computerPlay () { 
    /*define a list of possible choices and a method by which the computer's choice is randomly made */
    
    possibleChoices = ['rock', 'paper', 'scissors'];
    let computerChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
    return computerChoice;
}

function playerChoice() {
    let choice = prompt('Rock, paper or scissors?').toLowerCase();
    return choice;
}

/*function choiceCheck(choice) {
    if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        console.log('That\'s not one of the available choices! Pick rock, paper, or scissors!');
        choice = prompt('Rock, paper, or scissors?');
    }
    else {
        return choice
    }
} */

/*take the player selection and computer selection and compare them to see whether it is a win, a tie, or a loss, and return a string */

function playRound(computerSelection, playerSelection) {
    /*outcomes if the player chooses rock */
    
    if (playerSelection == 'rock' && computerSelection == 'scissors') { 
        return ('You win!')
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return('You lose!')
    }
    else if (playerSelection == 'rock' && computerSelection == 'rock') {
        return('It\'s a tie!')
    }
    
    /*outcomes if the player chooses paper */
    if (playerSelection == 'paper' && computerSelection == 'rock') { 
        return ('You win!')
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return('You lose!')
    }
    else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return('It\'s a tie!')
    }
    
    /*outcomes if the player chooses scissors*/
    if (playerSelection == 'scissors' && computerSelection == 'paper') { 
        return ('You win!')
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return('You lose!')
    }
    else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return('It\'s a tie!')
    }
}

/*This next function is where the game will repeat itself five times and tally the wins and losses. */


function game() {
    /*declare variables for wins, ties, and losses that will be incremented as they accumulate in the for loop */    
    let wins=0
    let ties = 0
    let losses = 0

    /*this loop gets the player's choice, the computer's choice, compares them, and reports the outcome to the player. then the outcome is tallied
    and the corresponding variable is incremented */
    for (let gameTries = 0; gameTries < 5; gameTries++) {
        let playerSelection = playerChoice();
        let computerSelection = computerPlay();
        outcome = playRound(computerSelection, playerSelection);
        console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}. ${outcome}.`);
        if (outcome == "You win!") {
            wins += 1;
        }
        else if (outcome == "It's a tie!") {
            ties += 1;
        }
        else if (outcome == "You lose!") {
            losses += 1;
        }
    }
    
    /*report the wins and losses and declare a winner */

    console.log(`Out of 5 games, you won ${wins} games, lost ${losses}, and tied ${ties}.`)
    if (wins > losses) {
        console.log('You won more games than the computer! Congrats!')
    }
    else if (losses > wins) {
        console.log('The computer won more games than you, but don\'t let it get you down.')
    }
    else if (wins == losses) {
        console.log('It\'s a tie! Better play again!')
    }
}

game()