// Create the game Rock Paper Scissor, playabe only via the console.



// Create a prompt to ask for an input

let playerSelection = "Scissor"

// Output Randomized Computerchoice
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



function playRound() {
    const computerSelection = getComputerChoice ()

    //Player picks Rock
    if (playerSelection == "Rock") {

        if (computerSelection === "Paper") {
            console.log ("Lose! Rock loses to Paper.")
        }
        else if (computerSelection === "Rock") {
            console.log ("Tie! Both picked Rock.")
        }
        else if (computerSelection === "Scissor") {
            console.log ("Win! Your Rock beat his Scissors!")
        }
    }

    //Player picks Paper
    else if (playerSelection == "Paper") {
        if (computerSelection === "Paper") {
            console.log ("Tie! You both picked Paper.")
        }
        else if (computerSelection === "Rock") {
            console.log ("Win! Your Paper beat his Rock.")
        }
        else if (computerSelection === "Scissor") {
            console.log ("Lose! Your Paper loses to his Scissors!")
        }
    }

    //Player picks Scissor
    else if (playerSelection == "Scissor")  {
        if (computerSelection === "Paper") {
            console.log ("Win! Your Scissor beat his Paper.")
        }
        else if (computerSelection === "Rock") {
            console.log ("Lose! His Rock beat your Scissor.")
        }
        else if (computerSelection === "Scissor") {
            console.log ("Tie! You both picked Scissor.")
        }
    }
  }

