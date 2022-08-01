// Create the game Rock Paper Scissor, playabe only via the console.
// Declare three input variables (Rock,Paper,Scissor)



// User has to pick one of the three and execute



// Computer randomly chooses an option out of 3

const playerSelection = "Rock"


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


// Execute a decision function that takes playerSelection
// and computerSelection and decides a winner by logging a text 
// "You Lose! Paper beats Rock"



function playRound() {
    const computerSelection = getComputerChoice ()

    if (computerSelection === "Paper") {
        console.log ("Lose")
    }
    else if (computerSelection === "Rock") {
        console.log ("Tie")
    }
    else if (computerSelection === "Scissor") {
        console.log ("Win")
    }
  
    //make it so that after executing playRound () the 


  }

playRound ();

