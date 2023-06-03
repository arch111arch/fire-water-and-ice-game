let plChoice;
let computerScore =0;
let computerTotalScore =0;
let playerScore =0;
let playerTotalScore =0;
let highScore =0;
let playerLives =4;
let computerLives =4;
var victory = false;
let gold =0;
var shield = false;
var diamond =0;


function playerChoice (x){
  click();

  let buttons = document.getElementsByClassName ("button");
  let playerChoiceWrapper = document.getElementById("playerChoiceDisplay");
  
 for (let i=0; i<buttons.length; i++){
let p =(buttons [i].id);
if (x===rock) {
  
  let playerChoice = document.createElement('div');
playerChoice.className= "fireChoice";
playerChoice.value="fireChoice";
playerChoiceWrapper.innerHTML = ''; 
    playerChoiceWrapper.appendChild(playerChoice);
  console.log("You found rock.");
  plChoice = "rock";

}else if (x===paper){

  let playerChoice = document.createElement('div');
  playerChoice.className= "waterChoice";
  playerChoice.value="waterChoice";
  playerChoiceWrapper.innerHTML = ''; 
      playerChoiceWrapper.appendChild(playerChoice);
  console.log ("you found paper");
plChoice = "paper";
}
  else if(x===scissors){
    let playerChoice = document.createElement('div');
  playerChoice.className= "iceChoice";
  playerChoice.value="iceChoice";
  
  playerChoiceWrapper.innerHTML = ''; 
      playerChoiceWrapper.appendChild(playerChoice);
  console.log ("you found paper");
    console.log('You found scissors');
    plChoice = "scissors";
}

 }  

 computerChoice();
 winner();
 endRound();
 }
 
 let compChoice = 0;
function computerChoice (){
  
let computerChoiceWrapper = document.getElementById("computerChoiceDisplay");
  compChoice = Math.floor(Math.random()  * 3   );
  console.log(compChoice);
  
  if(compChoice == 0){
    compChoice = "rock";
    let computerChoice = document.createElement('div');
    computerChoice.className= "fireChoice";
    computerChoice.value="fireChoice";
    computerChoiceWrapper.innerHTML = ''; 
    computerChoiceWrapper.appendChild(computerChoice);
  
  }else if(compChoice == 1){
    compChoice = "paper";
    let computerChoice = document.createElement('div');
    computerChoice.className= "waterChoice";
    computerChoice.value="waterChoice";
    computerChoiceWrapper.innerHTML = ''; 
    computerChoiceWrapper.appendChild(computerChoice);

  }else if(compChoice == 2) {
    compChoice = "scissors";
    let computerChoice = document.createElement('div');
    computerChoice.className= "iceChoice";
    computerChoice.value="iceChoice";
    computerChoiceWrapper.innerHTML = ''; 
    computerChoiceWrapper.appendChild(computerChoice);

   }
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
function endRound() {
  maxScore = 3;
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

let computerChoiceWrapper = document.getElementById("computerChoiceDisplay");
let playerChoiceWrapper = document.getElementById("playerChoiceDisplay");
  
    let computerEmptyChoice = document.createElement('div');
    computerEmptyChoice.className= "emptyChoice";
    computerEmptyChoice.value="emptyChoice";
//resets computers choice on the card to no choice.
computerChoiceWrapper.innerHTML = '';    
computerChoiceWrapper.appendChild(computerEmptyChoice);
    console.log("Computer choice is reset");
//resets playerchoice on the card to no choice.
let playerEmptyChoice = document.createElement('div');
    playerEmptyChoice.className= "emptyChoice";
    playerEmptyChoice.value="emptyChoice";

playerChoiceWrapper.innerHTML = ''; 
    playerChoiceWrapper.appendChild(playerEmptyChoice);
    console.log("Player choice is reset");
    msg = "You won this Round.";
    document.getElementById("roundResult").innerHTML = msg;
    reveal2();
  
  }else if(maxScore === computerScore){
computerScore = 0;
playerScore = 0;

  let resetPlayerString = '<h2>' + playerScore + '</h2>';
  document.getElementById("playerScoreDisplay").innerHTML = 
  resetPlayerString;
  
  let resetComputerString = '<h2>' + computerScore + '</h2>';
    document.getElementById("computerScoreDisplay").innerHTML = resetComputerString;

let computerChoiceWrapper = document.getElementById("computerChoiceDisplay");
let playerChoiceWrapper = document.getElementById("playerChoiceDisplay");
    let computerEmptyChoice = document.createElement('div');
    computerEmptyChoice.className= "emptyChoice";
    computerEmptyChoice.value="emptyChoice";
//resets computers choice on the card to no choice.
computerChoiceWrapper.innerHTML = '';    
computerChoiceWrapper.appendChild(computerEmptyChoice);
    console.log("Computer choice is reset");
//resets playerchoice on the card to no choice.
let playerEmptyChoice = document.createElement('div');
    playerEmptyChoice.className= "emptyChoice";
    playerEmptyChoice.value="emptyChoice";

playerChoiceWrapper.innerHTML = ''; 
    playerChoiceWrapper.appendChild(playerEmptyChoice);
    console.log("Player choice is reset");

    msg = "Computer won this Round.";
    document.getElementById("roundResult").innerHTML = msg;
reveal();  
    
  }
  
}

function reset() {
playerScore = 0;
computerScore =0;

document.getElementById("computerScoreDisplay").innerHTML = computerScoreStr;

document.getElementById("playerScoreDisplay").innerHTML = playerScoreStr;
}

function reveal() {
  looseRoundSound();
  let roundOver = document.getElementById("computerWonRound");
  roundOver.style.display= "inline-block";
  shieldSaver();
}

function hide() {
  let roundOver = document.getElementById("computerWonRound");
  roundOver.style.display= "none";
  gameOver(); 
}

function reveal2() {
  winRoundSound();
  let roundOver = document.getElementById("playerWonRound");
  roundOver.style.display= "inline-block";
  lootGenerator();
}

function hide2() {
  let roundOver = document.getElementById("playerWonRound");
  roundOver.style.display= "none";
  computerLooseLife();
  document.getElementById("lootContainer").innerHTML = "";
  
  gameOver();
}

function reveal3() {
  victorySound();
  score();
  let roundOver = document.getElementById("playerWonTheGame");
  roundOver.style.display= "inline-block";
  
}

function hide3() {
  let roundOver = document.getElementById("playerWonTheGame");
  roundOver.style.display= "none";
  
}

function reveal4() {
  defeatSound();
  score();
  let roundOver = document.getElementById("playerLostTheGame");
  roundOver.style.display= "inline-block";
  
}

function hide4() {
  let roundOver = document.getElementById("playerLostTheGame");
  roundOver.style.display= "none";
  
}

function openShop(){
  
  let enterShop = document.getElementById('shop');
  enterShop.style.display= 'inline-block';
}

function closeShop() {
  let exitShop = document.getElementById('shop');
  exitShop.style.display= 'none';
}

function computerLooseLife() {

  let computerLivesDisplay = document.getElementById("computerLivesDisplay");
  var x = document.getElementsByClassName("computerLife")[0];

  x.remove();
  computerLives -=1;
  console.log("Computer Lives : " + computerLives);
}

function playerLooseLife() {
  
  let playerLivesDisplay = document.getElementById("playerLivesDisplay");
  var x = document.getElementsByClassName("playerLife")[0];
  x.remove();
  playerLives -=1;
  console.log("player Lives : " + playerLives);
 
}

function gameOver() {

  if (playerLives === 0 ) {
console.log("Player lost the game!");
let gameOverMsg = "You are defeated. Play again? ";
    document.getElementById("roundResult").innerHTML = gameOverMsg;
    victory = false;
    
    reveal4();
    playerLives =4;
computerLives =4;
restoreComputerLives();
restorePlayerLives();
document.getElementById("playerGoldCounter").innerHTML = '<h2>' + 0 + '</h2>';
document.getElementById("playerDiamondCounter").innerHTML = '<h2>' + 0 + '</h2>';

let shieldSaveWrapper = document.getElementById("shieldDisplay");
shieldSaveWrapper.innerHTML = ''; 
shield = false;
  }
else if (computerLives === 0) {
console.log("Victory! You won the game!");
let gameWonMsg = "You won the game! Play again?";
    document.getElementById("roundResult").innerHTML = gameWonMsg;
    victory = true;

reveal3();
playerLives =4;
computerLives =4;
restoreComputerLives();
restorePlayerLives();
document.getElementById("playerGoldCounter").innerHTML = '<h2>' + 0 + '</h2>';
document.getElementById("playerDiamondCounter").innerHTML = '<h2>' + 0 + '</h2>';

let shieldSaveWrapper = document.getElementById("shieldDisplay");
shieldSaveWrapper.innerHTML = ''; 
shield = false;
}

}
// adds highscore. Resets TotalScore for player and computer. Sets Defeated to False. Lives are worth 100. Victory over computer is worth 1000.
function score(){
let livesBonus = playerLives * 100;
let computerDefeated = 1000;
let goldBonus = gold * 10;
let diamondBonus = diamond * 1000;

playerTotalScore += livesBonus;
playerTotalScore += goldBonus;
playerTotalScore += diamondBonus;
  
if(victory === true){
playerTotalScore += computerDefeated;
}

// Writes score to the gameover screen

// player won

let endGameGoldString = '<h3>' + gold + "x10 " + " = Gold Bonus: "   + goldBonus + '</h3>';
document.getElementById("endGameGoldCounter").innerHTML = endGameGoldString;

let endGameDiamondString = '<h3>' + diamond + "x1000 " + " = Diamond Bonus: "   + diamondBonus + '</h3>';
document.getElementById("endGameDiamondCounter").innerHTML = endGameDiamondString;

let endGameLivesString = '<h3>' + playerLives + "x100 " + " = Lives Bonus: "   + livesBonus + '</h3>';
document.getElementById("endGameLivesCounter").innerHTML = endGameLivesString;

let endGameVictoryString = '<h3>' + "Victory Bonus: "   + computerDefeated + '</h3>';
document.getElementById("endGameVictoryCounter").innerHTML = endGameVictoryString;

let endGameTotalScoreString = '<h3>' + "Your Total Score: " + playerTotalScore + '</h3>';
document.getElementById("endGameTotalScore").innerHTML = endGameTotalScoreString;

// computer won

 let looseGameGoldString = '<h3>' + gold + "x10 " + " = Gold Bonus: "   + goldBonus + '</h3>';
document.getElementById("looseGameGoldCounter").innerHTML = looseGameGoldString;

 let looseGameDiamondString = '<h3>' + diamond + "x1000 " + " = Diamond Bonus: "   + diamondBonus + '</h3>';
document.getElementById("looseGameDiamondCounter").innerHTML = looseGameDiamondString;

let looseGameTotalScoreString = '<h3>' + "Your Total Score: " + playerTotalScore + '</h3>';
document.getElementById("looseGameTotalScore").innerHTML = looseGameTotalScoreString;

//end

if(playerTotalScore > highScore){
  highScore = playerTotalScore;
  let highscoreString = '<h3>' + "HIGHSCORE: " + highScore + '</h3>';
  document.getElementById("highscoreArea").innerHTML = highscoreString;
}

victory = false;
playerTotalScore =0;
computerTotalScore =0;
gold =0;
diamond =0;
let resetComputerTotalString = '<h3>' + "Total Score: " + computerTotalScore + '</h3>';
let resetPlayerTotalString = '<h3>' + "Total Score: " + playerTotalScore + '</h3>';

document.getElementById("computerTotalScore").innerHTML = resetComputerTotalString;
document.getElementById("playerTotalScore").innerHTML = resetPlayerTotalString;

}

// Creates 4 lives after the game has ended.
function restoreComputerLives() {
  let computerWrapper = document.getElementById("computerLivesDisplay");
  computerWrapper.innerHTML = '';
  
let i= 0;
  do {
    let heart = document.createElement('div');
    heart.className= "computerLife";
    heart.value="computerLife";
    computerWrapper.appendChild(heart);
  i++;
}
while(i < 4);
  console.log("NEw HEart");
}

// Creates 4 lives after the game has ended.
function restorePlayerLives() {
  let playerWrapper = document.getElementById("playerLivesDisplay");
  playerWrapper.innerHTML = '';
  
let i= 0;
  do {
    let heart = document.createElement('div');
    heart.className= "playerLife";
    heart.value="playerLife";
    playerWrapper.appendChild(heart);
  i++;
}
while(i < 4);
  console.log("NEw HEart");
}

// Extra Life
function extraLife() {
  let playerWrapper = document.getElementById("playerLivesDisplay");
  
    let heart = document.createElement('div');
    heart.className= "playerLife";
    heart.value="playerLife";
    playerWrapper.appendChild(heart);
    playerLives +=1;
    console.log("player Lives : " + playerLives);
}

// Lootgenerator

let lootResult = 0;

function lootGenerator (){
  
let lootArea = document.getElementById("lootArea");
  
lootResult = Math.floor(Math.random()  * 10 );

let bagOfGoldLoot = "<img src=\"assets/images/bagofgold.png\" width=\"70px\" height=\"70px\">";
let lifePotionLoot = "<img src=\"assets/images/lifepotion.png\" width=\"70px\" height=\"70px\">";
let shieldLoot = "<img src=\"assets/images/shield.png\" width=\"70px\" height=\"70px\">";
let diamondLoot = "<img src=\"assets/images/diamond.png\" width=\"70px\" height=\"70px\">";
  
  if(lootResult == 0){
    gold += 100;
  let goldTotal = gold;
  console.log("You found 100 gold.");
  document.getElementById("lootArea").innerHTML = '<h3>' + "You found a Bag of Gold!" + '</h3>';
  document.getElementById("lootContainer").innerHTML = bagOfGoldLoot;
  document.getElementById("playerGoldCounter").innerHTML = '<h2>' + goldTotal + '</h2>';

  }else if(lootResult == 1) {
    gold += 100;
    let goldTotal = gold;
    console.log("You found 100 gold.");
    document.getElementById("lootArea").innerHTML = '<h3>' + "You found a Bag of Gold!" + '</h3>';
    document.getElementById("lootContainer").innerHTML = bagOfGoldLoot;
    document.getElementById("playerGoldCounter").innerHTML = '<h2>' + goldTotal + '</h2>';

  }else if(lootResult == 2){
      
    diamond +=1;
    console.log("You found a Diamond!");
    document.getElementById("lootArea").innerHTML = '<h3>' + "You found a Diamond!" + '</h3>';
    document.getElementById("lootContainer").innerHTML = diamondLoot;
    document.getElementById("playerDiamondCounter").innerHTML = '<h2>' + diamond + '</h2>';
   
  }else if(lootResult == 3) {
    gold += 100;
    let goldTotal = gold;
    console.log("You found 100 gold.");
    document.getElementById("lootArea").innerHTML = '<h3>' + "You found a Bag of Gold!" + '</h3>';
    document.getElementById("lootContainer").innerHTML = bagOfGoldLoot;
    document.getElementById("playerGoldCounter").innerHTML = '<h2>' + goldTotal + '</h2>';

  }else if(lootResult == 4) {
    console.log("ExtraLife");
    document.getElementById("lootContainer").innerHTML = lifePotionLoot;
    document.getElementById("lootArea").innerHTML = '<h3>' + "You got a Life-potion!" + '</h3>';
    extraLife();

  }else if(lootResult == 5) {
    gold += 100;
    let goldTotal = gold;
    console.log("You found 100 gold.");
    document.getElementById("lootArea").innerHTML = '<h3>' + "You found a Bag of Gold!" + '</h3>';
    document.getElementById("lootContainer").innerHTML = bagOfGoldLoot;
    document.getElementById("playerGoldCounter").innerHTML = '<h2>' + goldTotal + '</h2>';

}else if(lootResult == 6) {
  
  if (shield === false){
  let shieldWrapper = document.getElementById("shieldDisplay");
  let lootShield = document.createElement('div');
  shield = true;

  lootShield.className = "playerShield";
  lootShield.value = "playerShield";
  shieldWrapper.appendChild(lootShield);

  console.log("You got the Shield");
  document.getElementById("lootContainer").innerHTML = shieldLoot;
    document.getElementById("lootArea").innerHTML = '<h3>' + "You got the Shield!" + '</h3>';
}
else if (shield === true){
   console.log("You allready have the shield.");
  lootGenerator();
}

}else if(lootResult == 7){
      
  diamond +=1;
  console.log("You found a Diamond!");
  document.getElementById("lootArea").innerHTML = '<h3>' + "You found a Diamond!" + '</h3>';
  document.getElementById("lootContainer").innerHTML = diamondLoot;
  document.getElementById("playerDiamondCounter").innerHTML = '<h2>' + diamond + '</h2>';

}else if(lootResult == 8) {
  gold += 100;
  let goldTotal = gold;
  console.log("You found 100 gold.");
  document.getElementById("lootArea").innerHTML = '<h3>' + "You found a Bag of Gold!" + '</h3>';
  document.getElementById("lootContainer").innerHTML = bagOfGoldLoot;
  document.getElementById("playerGoldCounter").innerHTML = '<h2>' + goldTotal + '</h2>';

}else if(lootResult == 9) {
  console.log("ExtraLife");
  document.getElementById("lootContainer").innerHTML = lifePotionLoot;
  document.getElementById("lootArea").innerHTML = '<h3>' + "You got a Life-potion!" + '</h3>';
  extraLife();
}
}

// LootGenerator end

// If player has got a Shield, and the computer winds the Round, the Life is saved and the shild is erased. Otherwise Player loose 1 Life.
function shieldSaver() {
  let shieldSaveWrapper = document.getElementById("shieldDisplay");

  if (shield === false){
    lifeSteal();

  }else if (shield === true){
    document.getElementById("looseArea").innerHTML = '<h3>' + "The Shield Protected you!" + '</h3>';
    shieldSaveWrapper.innerHTML = ''; 
    shield = false;
   console.log("The shield saved you.");
   console.log("player Lives : " + playerLives);

  }
}

function lifeSteal(){

let steal =0;
let computerWrapper = document.getElementById("computerLivesDisplay");

steal = Math.floor(Math.random()  * 2   );
  
  if(steal == 0){
    let heart = document.createElement('div');
    heart.className= "computerLife";
    heart.value="computerLife";
    computerWrapper.appendChild(heart);
    computerLives +=1;
    document.getElementById("looseArea").innerHTML = '<h3>' + "Computer steal One Life!" + '</h3>';
    console.log("Computer steals a life.");
    playerLooseLife();
    
  }else if(steal == 1){
    document.getElementById("looseArea").innerHTML = '<h3>' + "You Lose One Life." + '</h3>';
playerLooseLife();
console.log("Player loose 1 life.");

  }
}

function buyLife(){

  if(gold>99){
    extraLife();
    gold -= 100;
    let goldTotal = gold;
    document.getElementById("playerGoldCounter").innerHTML = '<h2>' + goldTotal + '</h2>';
    buyLifeSound();
  }

}

function buyShield(){

if(gold>24){
  if (shield === false){
    let shieldWrapper = document.getElementById("shieldDisplay");
    let lootShield = document.createElement('div');
    shield = true;
  
    lootShield.className = "playerShield";
    lootShield.value = "playerShield";
    shieldWrapper.appendChild(lootShield);
    buyShieldSound();
    console.log("You bought a Shield");
   
    gold -= 25;
    let goldTotal = gold;
    
    document.getElementById("playerGoldCounter").innerHTML = '<h2>' + goldTotal + '</h2>';
}

}
}

function buyShieldSound() {
  var audio = new Audio("assets/sound/item-equip.mp3");
  audio.play();
  audio.volume = 0.2;
}

function buyLifeSound() {
  var audio = new Audio("assets/sound/bonus.mp3");
  
  audio.play();
  audio.volume = 0.2;
}

function winRoundSound() {
  var audio = new Audio("assets/sound/level-complete.mp3");
  
  audio.volume = 0.1;
  audio.play();
}

function looseRoundSound() {
  var audio = new Audio("assets/sound/failure-drum.mp3");
  
  audio.volume =0.1;
  audio.play();
}

function victorySound() {
  var audio = new Audio("assets/sound/success-fanfare.mp3");
  
  audio.volume = 0.2;
  audio.play();
}
function defeatSound() {
  var audio = new Audio("assets/sound/loose.mp3");
  
  audio.volume = 0.1;
  audio.play();
}

function click() {
  var audio = new Audio("assets/sound/click.mp3");
  audio.volume = 0.02;
  
  audio.play();
}