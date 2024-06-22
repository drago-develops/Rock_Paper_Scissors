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

// function getHumanChoice(){
//     const request = prompt("Please choose either Rock, Paper or Scissors");
//     var humanChoice = request.toUpperCase();
//     if (humanChoice === "ROCK"){
//         return humanChoice;
//     } else if (humanChoice === "PAPER"){
//         return humanChoice;
//     } else if(humanChoice  === "SCISSORS"){
//         return humanChoice;
//     } else {
//         alert("Please enter either Rock, Paper or Scissors. Please check your spelling");
//         return getHumanChoice();
//     }
//};
function getComputerChoice(){
    const computerChoice = Math.floor((Math.random()*3)+1);
    if (computerChoice ===1){
        return "ROCK"
    } else if (computerChoice === 2){
        return "PAPER"
    } else if (computerChoice === 3){
        return "SCISSORS"
    };
};
//const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();




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
};
//playRound(humanSelection, computerSelection);

document.addEventListener("click", function(){
    document.getElementById("score").innerHTML = `Your score: ${humanScore}! Computer score: ${computerScore}!`;
})


function gameResults(){
    if (humanScore>computerScore){
        console.log(`Congratulations, you've won! Your score is ${humanScore} and computer score is ${computerScore}.`);
    } else if (humanScore<computerScore){
        console.log(`Computer has won, better luck next time. Your score is ${humanScore} and computer score is ${computerScore}.`);
    } else {
        console.log("It's a draw, play one more round.")
    }
};
gameResults();

