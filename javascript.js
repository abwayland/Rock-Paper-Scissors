let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    //create an array of strings [rock, paper, scissors]
    const strArr = ["rock", "paper", "scissors"];
    //pick random int between 0 and array length
    const index = Math.floor(Math.random() * 3);
    //return string at index of array
    return strArr[index];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    //if player equals rock
    if (playerSelection == "rock") {
        //if computer equals rock
        if (computerSelection == "rock") {
            return("Player picked rock. Computer picked rock. Game ends in a draw.");
        }
        //if computer equals paper
        if (computerSelection == "paper") {
            return("Player picked rock. Computer picked paper. Computer wins.");
            computerScore++;
        }
        //if computer equals scissors
        if (computerSelection == "scissors") {
            return("Player picked rock. Computer picked scissors. Player wins.");
            playerScore++;
        }
    //if player equals paper
    } else if (playerSelection == "paper") {
        //if computer equals rock
        if (computerSelection == "rock") {
            return("Player picked paper. Computer picked rock. Player wins.");
            playerScore++;
        }
        //if computer equals paper
        if (computerSelection == "paper") {
            return("Player picked paper. Computer picked paper. Game ends in a draw.");
        }
        //if computer equals scissors
        if (computerSelection == "scissors") {
            return("Player picked paper. Computer picked scissors. Computer wins.");
            computerScore++;
        }
    //if player equals scissors
    } else if (playerSelection == "scissors") {
        //if computer equals rock
        if (computerSelection == "rock") {
            return("Player picked scissors. Computer picked rock. Computer wins.");
            computerScore++;
        }
        //if computer equals paper
        if (computerSelection == "paper") {
            return("Player picked scissors. Computer picked paper. Player wins.");
            playerScore++;
        }
        //if computer equals scissors
        if (computerSelection == "scissors") {
            return("Player picked scissors. Computer picked scissors. Game ends in a draw.");
        }
    } else {
        return("Player did not make valid choice.");
    }
}

function promptPlayer() {
    //prompt player for input and store in variable
    const input = prompt("Do you pick rock, paper, or scissors?");
    //return variable
    return input;
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerInput = promptPlayer();
        const result = playRound(playerInput, computerPlay());
        console.log(result);
    }
}

game();
