const play = prompt("Do you want to play a game");
if (play === "no") {
  console.log("bye")
} else if (play === "yes") {

const name = prompt("What is your name?");

let player = 40;
let Grant = 10;
let playerWins = 0;

const reduceHealth = () => {
  return Math.floor(Math.random()*2+1);
}

while (player >= 0 && playerWins <= 3) {


 if (Grant <= 0) {
  Grant = 10;
  playerWins ++;
  console.log(`${name} has beaten Grant. ${name} must win ${3 - playerWins} more time(s).`);


} if (playerWins === 3) {
    console.log(name + " has won the game!");
    break;
} if (player <= 0) {
    console.log("Grant has won the game!");
    break;
} 
player -= reduceHealth();
Grant -= reduceHealth();
console.log(`Grant has ${Grant} health`);
console.log(`${name} has ${player} health`);
}
}


