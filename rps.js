const PLAYABLES = {
    rock: "ROCK",
    paper: "PAPER",
    scissors: "SCISSORS"
};

function isTie(playerSelection, computerSelection) {
    return playerSelection.toUpperCase() === computerSelection.toUpperCase();
}

function isLoss(playerSelection, computerSelection) {
    return (playerSelection.toUpperCase() === PLAYABLES.rock && computerSelection.toUpperCase() === PLAYABLES.paper)
        || (playerSelection.toUpperCase() === PLAYABLES.paper && computerSelection.toUpperCase() === PLAYABLES.scissors)
        || (playerSelection.toUpperCase() === PLAYABLES.scissors && computerSelection.toUpperCase() === PLAYABLES.rock);
}

function playRound(playerSelection, computerSelection) {
    let result;
    let context;

    if (isTie(playerSelection, computerSelection)) {
        result = "Tie";
        context = "ties with"
    }
    else if (isLoss(playerSelection, computerSelection)) {
        result = "Lose";
        context = "loses to"
    }
    else {
        result = "Won";
        context = "beats"
    }

    return "You " + result + "! " + playerSelection + " " + context + " " + computerSelection;
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
        choice = prompt("What do you want to play? Rock/Paper/Scissors").toUpperCase();
    } while (!(Object.values(PLAYABLES).includes(choice)));
    return choice;
}

function game() {
    const NUMBER_ROUNDS = 5;
    for (let i = 0; i < NUMBER_ROUNDS; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}