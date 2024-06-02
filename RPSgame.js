function getHumanChoice(){
    var humanChoice = prompt("Please choose either Rock, Paper or Sciccors");
    if (humanChoice.toUpperCase === "ROCK"){
        return humanChoice;
    } else if (humanChoice.toUpperCase === "PAPER"){
        return humanChoice;
    } else if(humanChoice.toUpperCase === "SCISSORS"){
        return humanChoice;
    } else {
        alert("Please enter either Rock, Paper or Scissors. Please check your spelling")
    }
    
}
console.log(getHumanChoice());
