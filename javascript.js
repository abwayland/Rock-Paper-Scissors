let playerScore = 0;
let computerScore = 0;
let rounds = 0;

function computerPlay() {
    //create an array of strings [rock, paper, scissors]
    const strArr = ["rock", "paper", "scissors"];
    //pick random int between 0 and array length
    const index = Math.floor(Math.random() * 3);
    //return string at index of array
    return strArr[index];
}

function getRPSResult(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    //if player equals rock
    if (playerSelection == "rock") {
        //if computer equals rock
        if (computerSelection == "rock") {
            return("Player picked rock. Computer picked rock. Round ends in a draw.");
        }
        //if computer equals paper
        if (computerSelection == "paper") {
            computerScore++;
            return("Player picked rock. Computer picked paper. Computer wins round.");
        }
        //if computer equals scissors
        if (computerSelection == "scissors") {
            playerScore++;
            return("Player picked rock. Computer picked scissors. Player wins round.");
        }
    //if player equals paper
    } else if (playerSelection == "paper") {
        //if computer equals rock
        if (computerSelection == "rock") {
            playerScore++;
            return("Player picked paper. Computer picked rock. Player wins round.");
        }
        //if computer equals paper
        if (computerSelection == "paper") {
            return("Player picked paper. Computer picked paper. Round ends in a draw.");
        }
        //if computer equals scissors
        if (computerSelection == "scissors") {
            computerScore++;
            return("Player picked paper. Computer picked scissors. Computer wins round.");
        }
    //if player equals scissors
    } else if (playerSelection == "scissors") {
        //if computer equals rock
        if (computerSelection == "rock") {
            computerScore++;
            return("Player picked scissors. Computer picked rock. Computer wins round.");
        }
        //if computer equals paper
        if (computerSelection == "paper") {
            playerScore++;
            return("Player picked scissors. Computer picked paper. Player wins round.");
        }
        //if computer equals scissors
        if (computerSelection == "scissors") {
            return("Player picked scissors. Computer picked scissors. Round ends in a draw.");
        }
    } else {
        return("Player did not make valid choice.");
    }
}

function playRound(playerInput) {
    const result = getRPSResult(playerInput, computerPlay());
    rounds++;
    clearOutput();
    showOutput(result);
    showOutput(`Player: ${playerScore} | Computer: ${computerScore}`);
    if (rounds >= 5) {
        showOutput(`Player wins ${playerScore} rounds. Computer wins ${computerScore} rounds.`);
        if (computerScore > playerScore) {
            showOutput("Computer wins!");
        } else if (playerScore > computerScore) {
            showOutput("Player wins!");
        } else
        {
            showOutput("Game ends in a draw.");
        }
    }
}

function clearOutput() {
    const output = document.querySelector('.output');
    while(output.firstChild) {
        output.removeChild(output.firstChild);
    }
}

function showOutput(string) {
    const output = document.querySelector('.output')
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = string;
    output.appendChild(content);
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', function(e) {
  playRound(button.textContent);
}));