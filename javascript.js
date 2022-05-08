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
            console.log("Player picked rock. Computer picked rock. Game ends in a draw.");
        }
        //if computer equals paper
        if (computerSelection == "paper") {
            console.log("Player picked rock. Computer picked paper. Computer wins.");
        }
        //if computer equals scissors
        if (computerSelection == "scissors") {
            console.log("Player picked rock. Computer picked scissors. Player wins.");
        }
    //if player equals paper
    } else if (playerSelection == "paper") {
        //if computer equals rock
        if (computerSelection == "rock") {
            console.log("Player picked paper. Computer picked rock. Player wins.");
        }
        //if computer equals paper
        if (computerSelection == "paper") {
            console.log("Player picked paper. Computer picked paper. Game ends in a draw.");
        }
        //if computer equals scissors
        if (computerSelection == "scissors") {
            console.log("Player picked paper. Computer picked scissors. Computer wins.");
        }
    //if player equals scissors
    } else if (playerSelection == "scissors") {
        //if computer equals rock
        if (computerSelection == "rock") {
            console.log("Player picked scissors. Computer picked rock. Computer wins.");
        }
        //if computer equals paper
        if (computerSelection == "paper") {
            console.log("Player picked scissors. Computer picked paper. Player wins.");
        }
        //if computer equals scissors
        if (computerSelection == "scissors") {
            console.log("Player picked scissors. Computer picked scissors. Game ends in a draw.");
        }
    } else {
        console.log("Error in playRound()");
    }
}

playRound("rock", computerPlay());
