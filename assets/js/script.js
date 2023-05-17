

//document.getElementById("demo").innerHTML = "dfg";
let plChoice;
let computerScore =0;
let computerTotalScore =0;
let playerScore =0;
let playerTotalScore =0;
let highScore =0;
let playerLives =5;
let computerLives =5;


//let pScoreMsg = document.getElementById("playerScoreDisplay").innerHTML = playerScoreStr;
//let cScoreMsg = document.getElementById("computerScoreDisplay").innerHTML = computerScoreStr; 

function change (){
  const myId = document.getElementById("demo");
  myId.style.color ="red";
  console.log ("color is red");
  kk = myId;
  document.getElementById ("kk");
  kk.style.color = "green";
  console.log ("color is green");
  
}

function playerChoice (x){


  let buttons = document.getElementsByClassName ("button");
 
  
 for (let i=0; i<buttons.length; i++){
let p =(buttons [i].id);
if (x===rock) {
  
  console.log("You found rock.");
  document.getElementById("playerChoiceDisplay").innerHTML = "<img src=\"/assets/images/fire_krita.png\" width=\"90px\" height=\"90px\" border=\"2px\">";
  plChoice = "rock";


}else if (x===paper){
  console.log ("you found paper");
  document.getElementById("playerChoiceDisplay").innerHTML = "<img src=\"/assets/images/water_krita.png\" width=\"90px\" height=\"90px\" border=\"2px\">";
plChoice = "paper";
}
  else if(x===scissors){
    console.log('You found scissors');
    document.getElementById("playerChoiceDisplay").innerHTML = "<img src=\"/assets/images/ice_krita.png\" width=\"90px\" height=\"90px\" border=\"2px\">";
    plChoice = "scissors";
}
 
//  if (p=="paper"){
   //console.log(buttons [i].id);
//console.log ("Yoy found" + p);
//break;
//  }else if (p=="rock"){
//    console.log ("you found" + p);
 //   break;
//  }
 }  
 console.log ("End of List");
 computerChoice();
 winner();
 endGame();
 }
 
 
 let compChoice = 0;

function computerChoice (){
  
//  let compChoice =0;
  
  compChoice = Math.floor(Math.random()  * 3 );
  console.log(compChoice);
  
  if(compChoice == 0){
    compChoice = "rock";
    //console.log(compChoice);
    document.getElementById("computerChoiceDisplay").innerHTML = "<img src=\"/assets/images/fire_krita.png\" width=\"90px\" height=\"90px\" border=\"2px\">";
  
  }else if(compChoice == 1){
    compChoice = "paper";
    //console.log(compChoice);
    document.getElementById("computerChoiceDisplay").innerHTML = "<img src=\"/assets/images/water_krita.png\" width=\"90px\" height=\"90px\" border=\"2px\">";

  }else if(compChoice == 2) {
    compChoice = "scissors";
    document.getElementById("computerChoiceDisplay").innerHTML = "<img src=\"/assets/images/ice_krita.png\" width=\"90px\" height=\"90px\" border=\"2px\">";
    //console.log(compChoice);
  }
}

function getWinner() {
  let joj = plChoice;
  let coc = compChoice;
  
  console.log(joj + coc);
  
  
}
let msg;

function winner (){
  
  
  if (plChoice === compChoice) {
    console.log("Its a draw.");
    msg = "Its a draw.";
  }
  
 else if(plChoice === "rock" && compChoice === "paper") {
    console.log("Paper covers rock. Computer wins!");
    msg = "Water extinguishes the Fire. Computer Wins.";
    computerScoreUp();
    
    
  }else if (plChoice === "rock" && compChoice =="scissors") {
    console.log("Rock beats scissors. you win.");
    msg = "Fire melts the Ice. You win!";
    playerScoreUp();
    
    
  }else if(plChoice === "paper" && compChoice === "rock"){
    console.log("Paper covers rock. you win.");
    msg = "Water extinguishes the Fire. You Win!";
    playerScoreUp();
    
    
  }else if(plChoice === "paper" && compChoice === "scissors") {
    console.log("Scissors cuts paper. Computer Wins");
    msg = "Ice freezes the Water. Computer Wins!";
    computerScoreUp();
    
    
  }else if(plChoice ==="scissors" && compChoice === "paper") {
    console.log("Scissors cuts paper. You win.")
    msg = "Ice freezes the water. You win";
    playerScoreUp();
    
    
    
  }else if(plChoice === "scissors" && compChoice === "rock"){
    console.log("Rock smashes scissors. Computer wins.");
    msg = "Fire melts the Ice. Computer wins!";
    computerScoreUp();
    
  } document.getElementById("roundResult").innerHTML = msg;
  
}

function playerScoreUp() {
playerScore +=1;
playerTotalScore +=1;
var playerScoreStr = '<h2>' + playerScore + '</h2>';
document.getElementById ("playerScoreDisplay").innerHTML = playerScoreStr;
playerTotalScoreStr = '<h3>' + "Total Score: " + playerTotalScore + '</h3>';
  document.getElementById ("playerTotalScore").innerHTML = playerTotalScoreStr;
  
}

function computerScoreUp(){
  
computerScore +=1;
computerTotalScore +=1;
var computerScoreStr = '<h2>' + computerScore + '</h2>';
document.getElementById("computerScoreDisplay").innerHTML = computerScoreStr;
computerTotalScoreStr = '<h3>' + "Total Score: " + computerTotalScore + '</h3>';
  document.getElementById ("computerTotalScore").innerHTML = computerTotalScoreStr;

}

var maxScore;
function endGame() {
  maxScore = 7;
let resetCardChoice =  "<img src=\"/assets/images/empty2_krita.png\" width=\"90px\" height=\"90px\" border=\"2px\">"
;
  
  
  if(maxScore === playerScore){
   playerScore =0;
   computerScore = 0;
   
  let resetPlayerString = '<h2>' + playerScore + '</h2>';
  document.getElementById("playerScoreDisplay").innerHTML = 
  resetPlayerString;
  
  let resetComputerString = '<h2>' + computerScore + '</h2>';
    document.getElementById("computerScoreDisplay").innerHTML = resetComputerString;
    
// Reset choices in the cards.  
    document.getElementById("computerChoiceDisplay").innerHTML = resetCardChoice;
    document.getElementById("playerChoiceDisplay").innerHTML = resetCardChoice;
    // Reset choices end.

    msg = "Congratulations! Count Catula is defeated!";
    document.getElementById("roundResult").innerHTML = msg;
    reveal2();
    
   // alert("Congratulations! The evil Lord Catula is defeated. He will rise again. Can you defeat him again?");
   
   
    
  
  }else if(maxScore === computerScore){
computerScore = 0;
playerScore = 0;


  let resetPlayerString = '<h2>' + playerScore + '</h2>';
  document.getElementById("playerScoreDisplay").innerHTML = 
  resetPlayerString;
  
  let resetComputerString = '<h2>' + computerScore + '</h2>';
    document.getElementById("computerScoreDisplay").innerHTML = resetComputerString;
  
  // Reset choices in the cards.  
    document.getElementById("computerChoiceDisplay").innerHTML = resetCardChoice;
    document.getElementById("playerChoiceDisplay").innerHTML = resetCardChoice;
    // Reset choices end.
    

    msg = "Count Catula defeated you! Try again.";
    document.getElementById("roundResult").innerHTML = msg;
reveal();
  
    
  
    //alert("No! The evil Lord Catula has defeated you! Will you return to the castle and try again?");
    
  }
  
  
  
}

function reset() {
playerScore = 0;
computerScore =0;

document.getElementById("computerScoreDisplay").innerHTML = computerScoreStr;

document.getElementById("playerScoreDisplay").innerHTML = playerScoreStr;
}

function gameLoop(){
  
}

function reveal() {
  let roundOver = document.getElementById("computerWonRound");
  roundOver.style.display= "inline-block";
}

function hide() {
  let roundOver = document.getElementById("computerWonRound");
  roundOver.style.display= "none";
  playerLooseLife();
  
}

function reveal2() {
  let roundOver = document.getElementById("playerWonRound");
  roundOver.style.display= "inline-block";
}

function hide2() {
  let roundOver = document.getElementById("playerWonRound");
  roundOver.style.display= "none";
  computerLooseLife();
  
}

function computerLooseLife() {

  let computerLivesDisplay = document.getElementById("computerLivesDisplay");

  var x = document.getElementsByClassName("computerLife")[0];
    
   
  x.remove();


}

function playerLooseLife() {

  let playerLivesDisplay = document.getElementById("playerLivesDisplay");

  var x = document.getElementsByClassName("playerLife")[0];
    
   
  x.remove();


}