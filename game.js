"use strict"
  
let userName = prompt("What is your name?");
let grantHealth = 10;
let userHealth = 40;
let userWins = 0;
let grantWins = 0;
let wannaPlay = prompt("do you want to play?");

if(wannaPlay == "yes"){
  while (userWins < 3 && grantWins < 1){
    removeRandomPoints();
    logPlayerPoints();
    checkRoundWinner();
    checkGameWinner();
  }
}

function removeRandomPoints(){
userHealth -= Math.floor(Math.random() * (3 - 1)) + 1;
grantHealth -= Math.floor(Math.random() * (3 - 1)) + 1;
}

function logPlayerPoints(){
  console.log(`${userName} has ${userHealth} health points's left.`)
  console.log(`Grant has ${grantHealth} health point's left.`)
}

function checkRoundWinner(){
  if (grantHealth < 1) {
    userWins += 1;
    console.log(`***${userName} wins this round***`);
    grantHealth = 10;
  } else if (userHealth < 1) {
    grantWins += 1;
    console.log(`***Grant wins this round***`);
  } ;
}

function checkGameWinner(){
  if(userWins === 3){
    console.log(`${userName} is the winner of the GAME!!`);
  } else if (grantWins === 1){
    console.log(`Grant is the winner of the GAME!!`); 
  }
}