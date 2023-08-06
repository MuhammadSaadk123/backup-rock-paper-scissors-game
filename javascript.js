let outcome;
let computerScore=0;
let playerScore=0;
let userChoice;
let computerSelection;
//Create a function that randomizes a choice for the computer
function ComputerDecision() {
let getComputerChoice=Math.floor(Math.random() * 3)
    if (getComputerChoice===0) {
        computerSelection= "rock"
    }
    else if (getComputerChoice===1) {
        computerSelection= "paper"
    }
    else {computerSelection= "scissors"
}
return computerSelection
}

//Create a function that simulates a round between the computer and the user
function playRound() {
    if (playerScore===5 || computerScore===5) {
        return ""
    }
    ComputerDecision()
    if (computerSelection===userChoice) {
       outcome="Draw."
    }
     else if (userChoice==="rock" && computerSelection==="scissors") {
        outcome="Congratulations! Rock beats scissors.";
        playerScore++;
     }
     else if (userChoice==="rock" && computerSelection==="paper") {
         outcome="Commiserations! Paper beats rock.";
         computerScore++;
     }
     else if (userChoice==="paper" && computerSelection==="scissors") {
         outcome="Commiserations! Scissors beats paper.";
         computerScore++;
     }
     else if (userChoice==="paper" && computerSelection==="rock") {
        outcome="Congratulations! Paper beats rock.";
        playerScore++;
     }
     else if (userChoice==="scissors" && computerSelection==="rock") 
     {outcome="Commiserations! Rock beats scissors.";
      computerScore++;
    } 

     else if (userChoice=="scissors" && computerSelection=="paper")
        {outcome="Congratulations! Scissors beats paper.";
        playerScore++;
    }
    if (playerScore<5 && computerScore<5) {
 response.textContent=outcome + " " + "The current score is" + " " + playerScore + "-" + computerScore
 }
    else if (playerScore===5) {
        response.textContent="Congratulations! You have won with a score of" + " " + playerScore + "-" + computerScore
        tryAgain()
    }
    else if (computerScore===5) {
        response.textContent="Commiserations! You have lost with a score of" + " " + playerScore + "-" + computerScore
        tryAgain()
    }
}
//UserDecision Function 
function function1 () {
    if (playerScore<5 && computerScore<5) {
    rock.classList.add('playing');}
    userChoice="rock";
    playRound();
    if (playerScore<=5 && computerScore<=5) {
    document.getElementById("score").textContent=playerScore+"-"+computerScore}
}


function function2 () {
    if (playerScore<5 && computerScore<5) {
    paper.classList.add('playing')}
    userChoice="paper";
    playRound();
    if (playerScore<=5 && computerScore<=5) {
    document.getElementById("score").textContent=playerScore+"-"+computerScore}
    }

function function3 () {
    if (playerScore<5 && computerScore<5) {
    scissors.classList.add('playing')}
    userChoice="scissors";
    playRound();
    if (playerScore<=5 && computerScore<=5) {
    document.getElementById("score").textContent=playerScore+"-"+computerScore}
    }

  //simulates a round when clicked
  const rock=document.getElementById("rock")
  rock.style.backgroundColor="white"
  rock.addEventListener("click", function1)
 
  const paper=document.getElementById("paper")
  paper.style.backgroundColor="white"
  paper.addEventListener("click", function2)
 
  const scissors=document.getElementById("scissors")
  scissors.style.backgroundColor="white"
  scissors.addEventListener("click", function3)



  if (playerScore<=5 && computerScore<=5) {
    document.getElementById("score").textContent=playerScore+"-"+computerScore}
  
//loop
function tryAgain () {
document.getElementById("gameOver").style.display = "block";
const gameOver=document.querySelector('#gameOver');
gameOver.addEventListener("click", function4);
gameOver.style.fontSize="40px"
}

function function4 () {
document.getElementById("gameOver").style.display = "none"
playerScore=0;
computerScore=0;
document.getElementById("score").textContent=playerScore+"-"+computerScore;
response.textContent=""}
  
document.getElementById("gameOver").style.display = "none"

const score=document.getElementById("score")
score.style.fontSize="40px"

const response=document.getElementById("response")
response.style.fontSize="40px"
  

document.getElementById("rock").addEventListener("transitionend", myFunction);
document.getElementById("paper").addEventListener("transitionend", myFunction);
document.getElementById("scissors").addEventListener("transitionend", myFunction);


function myFunction() {
    rock.classList.remove('playing')
    paper.classList.remove('playing')
    scissors.classList.remove('playing')
}
// audio when clicking rock, paper scissors, background music



