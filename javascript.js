alert("Hello! Lets play a game. Best of 5.");

let userScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomNumber = (Math.random() * 100);

    if (randomNumber <= 33.3333){
        return "scissors";
    } else if ((randomNumber > 33.3333) && (randomNumber <= 66.6666)){
        return "paper";
    } else if ((randomNumber > 66.6666) && (randomNumber <= 100)){
        return "rock";
    }
}

function playGame(){
    let userChoice = prompt("Rock, paper, or scissors?", "").toLowerCase();

    let computerChoice = getComputerChoice();

    alert("I choose " + computerChoice + ".");

    if (userChoice === "rock" && computerChoice === "rock"){
        alert('User Score: ' + userScore + '\nComputer Score: ' + computerScore);
    } else if (userChoice === "rock" && computerChoice === "paper"){
        alert('User Score: ' + userScore + '\nComputer Score: ' + ++computerScore);
    } else if (userChoice === "rock" && computerChoice === "scissors"){
        alert('User Score: ' + ++userScore + '\nComputer Score: ' + computerScore);
    }

    if (userChoice === "paper" && computerChoice === "rock"){
        alert('User Score: ' + ++userScore + '\nComputer Score: ' + computerScore);
    } else if (userChoice === "paper" && computerChoice === "paper"){
        alert('User Score: ' + userScore + '\nComputer Score: ' + computerScore);
    } else if (userChoice === "paper" && computerChoice === "scissors"){
        alert('User Score: ' + userScore + '\nComputer Score: ' + ++computerScore);
    }

    if (userChoice === "scissors" && computerChoice === "rock"){
        alert('User Score: ' + userScore + '\nComputer Score: ' + ++computerScore);
    } else if (userChoice === "scissors" && computerChoice === "paper"){
        alert('User Score: ' + ++userScore + '\nComputer Score: ' + computerScore);
    } else if (userChoice === "scissors" && computerChoice === "scissors"){
        alert('User Score: ' + userScore + '\nComputer Score: ' + computerScore);
    }

    if (userScore === 3){
        endGame();
    } else if (computerScore === 3){
        endGame();
    } else {
        playGame();
    }
}

function endGame(){
    if (userScore === 3){
        alert("You Win!");
    } else if (computerScore === 3){
        alert("I Win!");
    }
}

playGame();

/*

For now, remove the logic that plays exactly five rounds.

Create three buttons, one for each selection.

Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. 
    (you can keep the console.logs for this step)

Add a div for displaying results and change all of your console.logs into DOM methods.

Display the running score, and announce a winner of the game once one player reaches 5 points.

*/