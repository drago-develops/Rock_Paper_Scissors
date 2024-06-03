var humanScore = 0;
var computerScore = 0;

function getHumanChoice(){
    const request = prompt("Please choose either Rock, Paper or Sciccors");
    var humanChoice = request.toUpperCase();
    if (humanChoice === "ROCK"){
        return humanChoice;
    } else if (humanChoice === "PAPER"){
        return humanChoice;
    } else if(humanChoice  === "SCISSORS"){
        return humanChoice;
    } else {
        alert("Please enter either Rock, Paper or Scissors. Please check your spelling")
    }
    
}
console.log(humanChoice);

function getComputerChoice(){
    const computerChoice = Math.floor((Math.random()*3)+1);
    if (computerChoice ===1){
        return "ROCK"
    } else if (computerChoice === 2){
        return "PAPER"
    } else if (computerChoice === 3){
        return "SCISSORS"
    };
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === "ROCK" && computerChoice === "SCISSORS"){
        console.log("Rock beats Scissors! You win!")
        humanScore ++
    } else if (humanChoice === "PAPER" && computerChoice === "ROCK"){
        console.log("Paper beats Rock! You win!")
        humanScore ++
    } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER"){
        console.log("Scissors beats Paper! You win!")
        humanScore ++
    } else if (computerChoice === "ROCK" && humanChoice === "SCISSORS"){
        console.log("Rock beats Scissors! You loose!")
        computerScore ++
    } else if (computerChoice === "PAPER" && humanChoice === "ROCK"){
        console.log("Paper beats Rock! You loose!")
        computerScore ++
    } else if (computerChoice === "SCISSORS" && humanChoice === "PAPER"){
        console.log("Scissors beats Paper! You loose!")
        computerScore ++
    } else{
        console.log("You drew same hand as computer, no score.")
    }
}