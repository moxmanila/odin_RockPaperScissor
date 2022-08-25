

// GET RANDOMIZED COMPUTERCHOICE
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

// GAME FUNCTION

let playerPoints = 0
let computerPoints = 0
//DEFINE MAX SCORE
const maxPoints = 5


function playRound(playerSelection) {
    const computerSelection = getComputerChoice ()
    //Player picks Rock (.toLowerCase turns input case insensitive)
    if (playerSelection.toLowerCase() == "rock") {

        if (computerSelection === "Paper") {
            scoreComputer.innerHTML ="computer " + ++computerPoints
            result.textContent = "Lose! Rock loses to Paper."
        }
        else if (computerSelection === "Rock") {
            result.textContent = "Tie! Both picked Rock."
        }
        else if (computerSelection === "Scissor") {
            scorePlayer.innerHTML ="player "+ ++playerPoints
            result.textContent = "Win! Your Rock beat his Scissors!"
        }
    }

    //Player picks Paper
    else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection === "Paper") {
            result.textContent = "Tie! You both picked Paper."
        }
        else if (computerSelection === "Rock") {
            scorePlayer.innerHTML ="player "+  ++playerPoints
            result.textContent = "Win! Your Paper beat his Rock."
        }
        else if (computerSelection === "Scissor") {
            scoreComputer.innerHTML ="computer "+  ++computerPoints
            result.textContent = "Lose! Your Paper loses to his Scissors!"
        }
    }

    //Player picks Scissor
    else if (playerSelection.toLowerCase() == "scissor")  {
        if (computerSelection === "Paper") {
            scorePlayer.innerHTML ="player "+ ++playerPoints
            result.textContent = "Win! Your Scissor beat his Paper.";
        }
        else if (computerSelection === "Rock") {
            scoreComputer.innerHTML ="computer "+ ++computerPoints
            result.textContent = "Lose! His Rock beat your Scissor."
        }
        else if (computerSelection === "Scissor") {
            result.textContent = "Tie! You both picked Scissor."
        }
    }  
    checkGameEnd ()
}


function checkGameEnd () {
    if (computerPoints == maxPoints) {
    result.textContent = "Computer Wins!!"

    rock.remove();
    scissor.remove();
    paper.remove();
    buttonContainer.appendChild(replay);

    } 
    else if (playerPoints == maxPoints) {
        result.textContent = "Player Wins"

    rock.remove();
    scissor.remove();
    paper.remove();
    buttonContainer.appendChild(replay);
    }
}


function replayGame () {
    playerPoints -= playerPoints;
    computerPoints -=computerPoints;
    scorePlayer.innerHTML ="player "+ 0
    scoreComputer.innerHTML ="computer "+ 0
    result.textContent = 'Let\'s play a game of RPS'

    replay.remove();
    buttonContainer.appendChild(rock)
    buttonContainer.appendChild(paper)
    buttonContainer.appendChild(scissor)
}
    


// UI FUNCTIONS //

// PLAYROUND BUTTONS
let buttonContainer = document.getElementById ('button-container');
let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissor = document.getElementById('scissor')

rock.addEventListener('click', function () {playRound('rock')});

paper.addEventListener('click', function () {playRound('paper')});

scissor.addEventListener('click', function () {playRound('scissor')});

// TEXTFIELD FOR RESULTS
let resultContainer = document.getElementById('result')
let result = document.createElement('div')
result.textContent = 'Let\'s play a game of RPS'
resultContainer.appendChild(result)

// TEXTFIELD FOR SCOREPOINTS
let scoreComputerContainer = document.getElementById('computerscore')
let scoreComputer = document.createElement('div')
scoreComputer.innerHTML = "computer " +computerPoints
scoreComputerContainer.appendChild(scoreComputer)

let scorePlayerContainer = document.getElementById('playerscore')
let scorePlayer = document.createElement('div')
scorePlayer.innerHTML = "player " +playerPoints
scorePlayerContainer.appendChild(scorePlayer)

// REPLAY BUTTON 

let replay = document.createElement('button')
replay.textContent = 'Play Again?'
replay.addEventListener('click', replayGame)
