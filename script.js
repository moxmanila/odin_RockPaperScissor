// Create the game Rock Paper Scissor, playabe only via the console.


// Define Points for Player & Computer, and Define max 
// amount of Games being played
let playerPoints = 0
let computerPoints = 0
const maxPoints = 5


// Get Randomized Computerchoice
function getComputerChoice () { 
    let i = Math.floor(Math.random()*3)
        if (i === 0) {
           return "Rock"
        } else if (i === 1) {
            return "Paper"
        }  else if (i === 2) {
            return "Scissor"
        }
            else {
            console.log ("computerChoice Error")
        }
    
} 

// Function to decide a Winner between a Showoff
function playRound(playerSelection) {
    const computerSelection = getComputerChoice ()

    //Player picks Rock (.toLowerCase turns input case insensitive)
    if (playerSelection.toLowerCase() == "rock") {

        if (computerSelection === "Paper") {
            result.textContent = "Lose! Rock loses to Paper."
            computerPoints += 1
        }
        else if (computerSelection === "Rock") {
            result.textContent = "Tie! Both picked Rock."
        }
        else if (computerSelection === "Scissor") {
            result.textContent = "Win! Your Rock beat his Scissors!"
            playerPoints += 1
        }
    }

    //Player picks Paper
    else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection === "Paper") {
            result.textContent = "Tie! You both picked Paper."
        }
        else if (computerSelection === "Rock") {
            result.textContent = "Win! Your Paper beat his Rock."
            playerPoints += 1;
        }
        else if (computerSelection === "Scissor") {
            result.textContent = "Lose! Your Paper loses to his Scissors!"
            computerPoints += 1
        }
    }

    //Player picks Scissor
    else if (playerSelection.toLowerCase() == "scissor")  {
        if (computerSelection === "Paper") {
            result.textContent = "Win! Your Scissor beat his Paper.";
            playerPoints += 1;
        }
        else if (computerSelection === "Rock") {
            result.textContent = "Lose! His Rock beat your Scissor."
            computerPoints += 1
        }
        else if (computerSelection === "Scissor") {
            result.textContent = "Tie! You both picked Scissor."
        }
    }
    else {
        console.log ("Error, wrong input detected")
    }
}

    




    // Function 
function game () {
    while (computerPoints < maxPoints && playerPoints < maxPoints) {
        const choice = prompt ("Choose Rock, Paper or Scissor");
        playRound (choice);
        console.log ("Player =" + playerPoints + " Computer =" + computerPoints)
    }
    if (playerPoints == maxPoints) {
        console.log ("You win! Congratulations.")
    } 
    else if (computerPoints == maxPoints) {
        console.log ("Computer wins.. what a loss.")
    }
    else {
        console.log ("Error finding a winner.")
    }
    // Sets the Points back to zero
    playerPoints -= playerPoints;
    computerPoints -=computerPoints;
}


// UI FUNCTIONS //

// PLAYROUND BUTTONS
let rock = document.getElementById('rock').addEventListener('click', 
    function () {
        playRound('rock')
    });
let paper = document.getElementById('paper').addEventListener('click',
    function () {
        playRound('paper')
    });
let scissor = document.getElementById('scissor').addEventListener('click',
    function () {
        playRound('scissor')
    });

// TEXTFIELD FOR RESULTS
let resultContainer = document.getElementById('result')
let result = document.createElement('div')
resultContainer.appendChild(result)

// TEXTFIELD FOR SCOREPOINTS

let scoreContainer = document.getElementById('score')
let score = document.createElement('div')
scoreContainer.appendChild(score)
score.textContent = computerPoints