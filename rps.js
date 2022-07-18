const PLAYABLES = {
    rock: "ROCK",
    paper: "PAPER",
    scissors: "SCISSORS"
};

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

function game() {
    const NUMBER_ROUNDS = 5;
    for (let i = 0; i < NUMBER_ROUNDS; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}