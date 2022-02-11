
/* declare consistent variables variables */
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")

let wins = 0
let ties = 0
let losses = 0

/*initialize game function */
game()


function computerPlay () { 
    /*define a list of possible choices and a method by which the computer's choice is randomly made */
    
    possibleChoices = ['rock', 'paper', 'scissors'];
    let computerChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
    return computerChoice;
}


/*compare computer choice and player choice */
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
/*evaluate outcome and increment corresponding variable */
function evaluateOutcome(outcome) {
        splitOutcome = outcome.split(' ')
        winLoseOrTie = splitOutcome[splitOutcome.length -1]
        
        if (winLoseOrTie == 'win!') {
            return wins ++
            }
        else if (winLoseOrTie == 'lose!') {
            return losses ++
            }
        else if (winLoseOrTie == 'tie!') {
            return ties ++
            }
}

/*adds ties, wins, and losses, evaluates and reports in document who won, lost, or if it is a tie after five games*/
function declareWinner() {
    gamesPlayed = wins+ties+losses
    winnerDeclaration = document.querySelector('.declarewinner')
    if (gamesPlayed == 5) {
        if (wins > losses && wins > ties) {
            winnerDeclaration.textContent =('You\'re a winner baby.')
            wins = 0
            ties = 0
            losses = 0
        }
        else if (losses > wins && losses > ties) {
            winnerDeclaration.textContent =('Sorry! Out of 5 games, you lost!')
            wins = 0
            ties = 0
            losses = 0
        }
        else {
            winnerDeclaration.textContent =('It\'s a tie! Play again.')
            wins = 0
            ties = 0
            losses = 0
        }
        
    }
}
/*clears the declareWinner text after player has played 5 games and plays again */
function clearDeclareWinner() {
    winnerDeclaration = document.querySelector('.declarewinner')
    winnerDeclaration.textContent = ''
}
/*counts the wins and losses and adds them to the document in a separate div*/
function tally(){
    count = document.querySelector('.tally')
    count.textContent = (`wins: ${wins}; losses: ${losses}; ties:${ties}`)
}


function game() {
    /*defines variables, and button and eventlisteners; paper triggers papergame, etc. probably can be refactored*/
    resultReport = document.querySelector('.results')
    rock.addEventListener('click', rockGame);
    paper.addEventListener('click', paperGame);
    scissors.addEventListener('click', scissorsGame)
    
    
/*if player clicks rock*/    
    function rockGame() {
        let playerSelection = 'rock';
        let computerSelection = computerPlay();
        outcome = playRound(computerSelection, playerSelection);
        resultReport = document.querySelector('.results')
        resultReport.textContent =(`You chose ${playerSelection} and the computer chose ${computerSelection}. ${outcome}`);
        evaluateOutcome(outcome)
        tally()
        clearDeclareWinner() 
        declareWinner()
    }
/*if player clicks paper*/
    function paperGame() {
        let playerSelection = 'paper';
        let computerSelection = computerPlay();
        outcome = playRound(computerSelection, playerSelection);
        resultReport = document.querySelector('.results')
        resultReport.textContent = (`You chose ${playerSelection} and the computer chose ${computerSelection}. ${outcome}`);
        evaluateOutcome(outcome)
        tally()
        clearDeclareWinner() 
        declareWinner()
    };
/*if player clicks scissors*/
    function scissorsGame() {
        let playerSelection = 'scissors';
        let computerSelection =computerPlay();
        outcome = playRound(computerSelection, playerSelection);
        resultReport = document.querySelector('.results')
        resultReport.textContent =(`You chose ${playerSelection} and the computer chose ${computerSelection}. ${outcome}`)
        evaluateOutcome(outcome)
        tally()
        clearDeclareWinner() 
        declareWinner()
    }
    
};

