const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    playRound("ROCK",getComputerChoice())
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    playRound("PAPER",getComputerChoice())
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    playRound("SCISSORS",getComputerChoice())
});

var humanScore = 0;
var computerScore = 0;


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
    if (humanChoice === "ROCK" && computerChoice === "SCISSORS"){
        console.log("Rock beats Scissors! You win!")
        const p = document.createElement("p");
        p.textContent = "Rock beats Scissors! You win!";
        var resultsDiv = document.getElementById("results");
        resultsDiv.appendChild(p);
        humanScore ++
    } else if (humanChoice === "PAPER" && computerChoice === "ROCK"){
        console.log("Paper beats Rock! You win!")
        const p = document.createElement("p");
        p.textContent = "Paper beats Rock! You win!";
        var resultsDiv = document.getElementById("results");
        resultsDiv.appendChild(p);
        humanScore ++
    } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER"){
        console.log("Scissors beats Paper! You win!")
        const p = document.createElement("p");
        p.textContent = "Scissors beats Paper! You win!";
        var resultsDiv = document.getElementById("results");
        resultsDiv.appendChild(p);
        humanScore ++
    } else if (computerChoice === "ROCK" && humanChoice === "SCISSORS"){
        console.log("Rock beats Scissors! You loose!")
        const p = document.createElement("p");
        p.textContent = "Rock beats Scissors! You loose!";
        var resultsDiv = document.getElementById("results");
        resultsDiv.appendChild(p);
        computerScore ++
    } else if (computerChoice === "PAPER" && humanChoice === "ROCK"){
        console.log("Paper beats Rock! You loose!")
        const p = document.createElement("p");
        p.textContent = "Paper beats Rock! You loose!";
        var resultsDiv = document.getElementById("results");
        resultsDiv.appendChild(p);
        computerScore ++
    } else if (computerChoice === "SCISSORS" && humanChoice === "PAPER"){
        console.log("Scissors beats Paper! You loose!")
        const p = document.createElement("p");
        p.textContent = "Scissors beats Paper! You loose!";
        var resultsDiv = document.getElementById("results");
        resultsDiv.appendChild(p);
        computerScore ++
    } else{
        console.log("You drew same hand as computer, no score.")
        const p = document.createElement("p");
        p.textContent = "You drew same hand as computer, no score.";
        var resultsDiv = document.getElementById("results");
        resultsDiv.appendChild(p);
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

