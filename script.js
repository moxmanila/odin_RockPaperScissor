// Create the game Rock Paper Scissor, playabe only via the console.
// Declare three input variables (Rock,Paper,Scissor)



// User has to pick one of the three and execute
// Computer randomly chooses an option out of 3

function getComputerChoice () { 
      let i = Math.floor(Math.random()*3)


        if (i === 0) {
            console.log ("Rock")
        } else if (i === 1) {
            console.log ("Paper")
        }  else if (i === 2) {
            console.log ("Scissor")
        }
            else {
                console.log ("computerChoice Error")
        }
    
} 

// Order so that 0 = Rock, 1 = Paper, 2 = Scissor



// Execute a decision function on who is winning
// Declare the winner via console log

