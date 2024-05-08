let userScore = 0;
let computerScore = 0;
let userChoice = "";
let computerChoice = "";

const pageTitle = document.querySelector("#page-title");
const playerScoreDisplay = document.querySelector("#player-score-display");
const computerScoreDisplay = document.querySelector("#computer-score-display");
const playerCurrentChoiceDisplay = document.querySelector("#player-current-choice-display");
const computerCurrentChoiceDisplay = document.querySelector("#computer-current-choice-display");
const playerRock = document.querySelector("#player-rock");
const playerPaper = document.querySelector("#player-paper");
const playerScissors = document.querySelector("#player-scissors");
const computerRock = document.querySelector("#computer-rock");
const computerPaper = document.querySelector("#computer-paper");
const computerScissors = document.querySelector("#computer-scissors");

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

function updateScoreboard(){
    pageTitle.textContent = "Rock Paper Scissors";

    playerScoreDisplay.textContent = "Player Score: " + userScore;
    computerScoreDisplay.textContent = "Computer Score: " + computerScore;
}

function updateChoice(){
    if (userChoice === "rock"){
        playerCurrentChoiceDisplay.style.paddingTop = "15px";
        playerCurrentChoiceDisplay.style.paddingBottom = "0px";
        playerCurrentChoiceDisplay.textContent = "🪨";
    } else if (userChoice === "paper"){
        playerCurrentChoiceDisplay.style.paddingTop = "0px";
        playerCurrentChoiceDisplay.style.paddingBottom = "15px";
        playerCurrentChoiceDisplay.textContent = "📃";
    } else if (userChoice === "scissors"){
        playerCurrentChoiceDisplay.style.paddingTop = "5px";
        playerCurrentChoiceDisplay.style.paddingBottom = "10px";
        playerCurrentChoiceDisplay.textContent = "✂️";
    }

    if (computerChoice === "rock"){
        computerCurrentChoiceDisplay.style.paddingTop = "15px";
        computerCurrentChoiceDisplay.style.paddingBottom = "0px";
        computerCurrentChoiceDisplay.textContent = "🪨";
    } else if (computerChoice === "paper"){
        computerCurrentChoiceDisplay.style.paddingTop = "0px";
        computerCurrentChoiceDisplay.style.paddingBottom = "15px";
        computerCurrentChoiceDisplay.textContent = "📃";
    } else if (computerChoice === "scissors"){
        computerCurrentChoiceDisplay.style.paddingTop = "5px";
        computerCurrentChoiceDisplay.style.paddingBottom = "10px";
        computerCurrentChoiceDisplay.textContent = "✂️";
    }
}

function playRound(){
    if (userChoice === "rock" && computerChoice === "rock"){
        updateChoice();
    } else if (userChoice === "rock" && computerChoice === "paper"){
        ++computerScore;
        updateScoreboard();
        updateChoice();
    } else if (userChoice === "rock" && computerChoice === "scissors"){
        ++userScore;
        updateScoreboard();
        updateChoice();
    }

    if (userChoice === "paper" && computerChoice === "rock"){
        ++userScore;
        updateScoreboard();
        updateChoice();
    } else if (userChoice === "paper" && computerChoice === "paper"){
        updateChoice();
    } else if (userChoice === "paper" && computerChoice === "scissors"){
        ++computerScore;
        updateScoreboard();
        updateChoice();
    }

    if (userChoice === "scissors" && computerChoice === "rock"){
        ++computerScore;
        updateScoreboard();
        updateChoice();
    } else if (userChoice === "scissors" && computerChoice === "paper"){
        ++userScore;
        updateScoreboard();
        updateChoice();
    } else if (userChoice === "scissors" && computerChoice === "scissors"){
        updateChoice();
    }

    if (userScore === 3 || computerScore === 3){
        endGame();
    }
}

function endGame(){
    if (userScore === 3){
        pageTitle.textContent = "You Win!";
        userScore = 0;
        computerScore = 0;
    } else if (computerScore === 3){
        pageTitle.textContent = "I Win!";
        userScore = 0;
        computerScore = 0;
    }
}

updateScoreboard();

const playerChoices = document.querySelector("#player-choices-display");

playerChoices.addEventListener("click", function(event){
    switch(event.target.id){
        case "player-rock":
            userChoice = "rock";
            break;
        case "player-paper":
            userChoice = "paper";
            break;
        case "player-scissors":
            userChoice = "scissors";
            break;
    }

    computerChoice = getComputerChoice();

    playRound();
});

playerChoices.addEventListener("mouseover", function(event){
    switch(event.target.id){
        case "player-rock":
            playerRock.style.boxShadow = "2px 2px 4px black";
            break;
        case "player-paper":
            playerPaper.style.boxShadow = "2px 2px 4px black";
            break;
        case "player-scissors":
            playerScissors.style.boxShadow = "2px 2px 4px black";
            break;
    }
});

playerChoices.addEventListener("mouseout", function(event){
    switch(event.target.id){
        case "player-rock":
            playerRock.style.boxShadow = "0px 0px 0px black";
            break;
        case "player-paper":
            playerPaper.style.boxShadow = "0px 0px 0px black";
            break;
        case "player-scissors":
            playerScissors.style.boxShadow = "0px 0px 0px black";
            break;
    }
});