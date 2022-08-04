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


document.querySelector("#rock")
    .addEventListener("click", () => runRound(PLAYABLES.rock));
document.querySelector("#paper")
    .addEventListener("click", () => runRound(PLAYABLES.paper));
document.querySelector("#scissors")
    .addEventListener("click", () => runRound(PLAYABLES.scissors));

document.querySelector("#overlay > button:first-of-type")
    .addEventListener("click", reset);


function runRound(choice) {
    updateDisplay(playRound(choice, getComputerChoice()));

    if (getPoints(document.querySelector("#player-wins").textContent) >= 5)
        displayOverlay("Player Wins!");
    else if (getPoints(document.querySelector("#computer-wins").textContent)
        >= 5)
        displayOverlay("Bot Wins!");
}

function updateDisplay(outcome) {
    const playerWins = document.querySelector("#player-wins");
    const computerWins = document.querySelector("#computer-wins");

    computerWins.textContent = computerWins.textContent.trimEnd();
    playerWins.textContent = playerWins.textContent.trimEnd();

    switch (outcome) {
        case OUTCOMES.lose:
            computerWins.textContent =
                getUpdatedStatusString(computerWins.textContent);
            break;
        case OUTCOMES.win:
            playerWins.textContent =
                getUpdatedStatusString(playerWins.textContent);
            break;
    }
}

function displayOverlay(text) {
    const overlay = document.querySelector("#overlay");
    const winText = document.querySelector("#overlay > h1:first-of-type");

    winText.textContent = text;
    overlay.style.opacity = 1;
    overlay.style.pointerEvents = "all";
}

function reset() {
    document.querySelector("#player-wins").textContent = "Player: 0";
    document.querySelector("#computer-wins").textContent = "Computer: 0";

    const overlay = document.querySelector("#overlay");
    overlay.style.opacity = 0;
    overlay.style.pointerEvents = "none";
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

function getPoints(status) {
    return parseInt(status.slice(-1));
}

function getUpdatedStatusString(status) {
    let value;
    value = getPoints(status);
    value++;

    return status.slice(0, status.length - 1) + value.toString();
}