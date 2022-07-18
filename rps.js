const PLAYABLES = {
    rock: "ROCK",
    paper: "PAPER",
    scissors: "SCISSORS"
};



function game() {
    const NUMBER_ROUNDS = 5;
    for (let i = 0; i < NUMBER_ROUNDS; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}