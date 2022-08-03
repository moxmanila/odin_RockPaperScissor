// Create the game Rock Paper Scissor, playabe only via the console.



// Create a function that gives the player a Choice of 



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

function playRound(playerSelection) {
    const computerSelection = getComputerChoice ()

    //Player picks Rock (.toLowerCase turns input case insensitive)
    if (playerSelection.toLowerCase() == "rock") {

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
    else if (playerSelection.toLowerCase() == "paper") {
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
    else if (playerSelection.toLowerCase() == "scissor")  {
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
    // Player types a wrong input
    else {
        console.log ("Error, wrong input detected")
    }
}

  // game() = prompt Player what he uses, return the promptInput 
  // execute the playRound with the promptInput as playerSelection

  function game () {
    const choice = prompt ("Choose Rock, Paper or Scissor");
    playRound (choice);
  }

  //expand to  5 rounds for each one to play.

  // Let the game keep log of wins / losses
  // Declare a Winner after 5 Rounds

