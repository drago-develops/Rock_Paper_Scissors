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