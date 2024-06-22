alert("Play 5 rounds against computer in a classic game of Rock Paper and Scissors.")

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const resultsDiv = document.getElementById("results");
const scoreDiv = document.getElementById("score");
const humanHand = document.getElementById("humanHand");
const computerHand = document.getElementById("computerHand");

let humanSelection = '';
let humanScore = 0;
let computerScore = 0;

rock.addEventListener("click", () => {
    humanSelection = "ROCK";
    playRound(humanSelection, getComputerChoice());
    updateScore();
});

paper.addEventListener("click", () => {
    humanSelection = "PAPER";
    playRound(humanSelection, getComputerChoice());
    updateScore();
});

scissors.addEventListener("click", () => {
    humanSelection = "SCISSORS";
    playRound(humanSelection, getComputerChoice());
    updateScore();
});

function getComputerChoice(){
    const computerChoice = Math.floor((Math.random() * 3) + 1);
    if (computerChoice === 1) return "ROCK";
    if (computerChoice === 2) return "PAPER";
    if (computerChoice === 3) return "SCISSORS";
}

function playRound(humanChoice, computerChoice){
    let resultText = '';
    if (humanChoice === "ROCK" && computerChoice === "SCISSORS" ||
        humanChoice === "PAPER" && computerChoice === "ROCK" ||
        humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        resultText = `${humanChoice} beats ${computerChoice}! You win!`;
        humanScore++;
    } else if (computerChoice === "ROCK" && humanChoice === "SCISSORS" ||
               computerChoice === "PAPER" && humanChoice === "ROCK" ||
               computerChoice === "SCISSORS" && humanChoice === "PAPER") {
        resultText = `${computerChoice} beats ${humanChoice}! You lose!`;
        computerScore++;
    } else {
        resultText = `You drew the same hand as the computer, no score.`;
    }

    const li = document.createElement("li");
    li.textContent = resultText;
    resultsDiv.appendChild(li);

    humanHand.innerHTML = humanChoice;
    computerHand.innerHTML = computerChoice;
}

function updateScore() {
    scoreDiv.innerHTML = `Your score: ${humanScore}! Computer score: ${computerScore}!`;
    endOfTheGame();
}

function endOfTheGame(){
    if (humanScore === 5){
        alert("CONGRATULATIONS! YOU HAVE WON THE GAME! REFRESH THE PAGE TO PLAY AGAIN!");
    } else if (computerScore === 5){
        alert("OH NO! YOU HAVE LOST THE GAME! REFRESH THE PAGE TO PLAY AGAIN!");
    };
};

