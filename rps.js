const PLAYABLES = {
    rock: "ROCK",
    paper: "PAPER",
    scissors: "SCISSORS"
};

const OUTCOMES = {
    tie: "Tie",
    lose: "Lose",
    win: "Won"
}

function isTie(playerSelection, computerSelection) {
    return playerSelection.toUpperCase() === computerSelection.toUpperCase();
}

function isLoss(playerSelection, computerSelection) {
    return (playerSelection.toUpperCase() === PLAYABLES.rock &&
            computerSelection.toUpperCase() === PLAYABLES.paper)
        || (playerSelection.toUpperCase() === PLAYABLES.paper &&
            computerSelection.toUpperCase() === PLAYABLES.scissors)
        || (playerSelection.toUpperCase() === PLAYABLES.scissors &&
            computerSelection.toUpperCase() === PLAYABLES.rock);
}

function playRound(playerSelection, computerSelection) {
    return isTie(playerSelection, computerSelection)
        ? OUTCOMES.tie
        : isLoss(playerSelection, computerSelection)
            ? OUTCOMES.lose
            : OUTCOMES.win;
}

function getVictoryString(result, playerSelection, computerSelection) {
    let context = (result === OUTCOMES.tie)
        ? "ties with"
        : (result === OUTCOMES.lose)
            ? "loses to"
            : "beats";

    return "You " + result + "! " + playerSelection + " " + context + " " +
        computerSelection;
}

function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return PLAYABLES.rock;
        case 1:
            return PLAYABLES.paper;
        default:
            return PLAYABLES.scissors;
    }
}

function getPlayerChoice() {
    let choice = "";
    do {
        choice = prompt("What do you want to play? Rock/Paper/Scissors")
                    .toUpperCase();
    } while (!(Object.values(PLAYABLES).includes(choice)));
    return choice;
}

// function game() {
//     let playerWins = 0, computerWins = 0;

//     while (playerWins < 5 && computerWins < 5) {
//         let playerSelection = getPlayerChoice();
//         let computerSelection = getComputerChoice();
//         console.log(getVictoryString(
//             playRound(playerSelection, computerSelection)
//         ));
//     }
// }


button = document.querySelector<button>(".start-game");