"use strict";

// TODO - write your code here.
let randomDamage = () => Math.floor(Math.random() * 10) + 1;

randomDamage();
/*Declare an arrow function named chooseOption that has two parameters named opt1 and opt2. 
chooseOption does two things: 
Declares and initializes a variable named randNum to either a 0 or 1, randomly.
Returns opt1 if randNum is equal to 0 otherwise return opt2 . (Use a ternary operator)
*/

let chooseOption = (opt1, opt2) => {
  const randNum = Math.round(Math.random());
  return randNum === 0 ? opt1 : opt2;
};
chooseOption(1, 2);

/*Declare a function expression named attackPlayer that has one parameter named 
health which returns a number equal to health minus the result of the randomDamage function.
 */

let attackPlayer = function (health) {
  return health - randomDamage();
};
//console.log(attackPlayer);

/*Declare an arrow function named logHealth that has two parameters named player and health which has a console.log 
method to state the following message: “player health: health”.*/

let logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};
//console.log(logHealth);
logHealth();

/*Declare an arrow function named logDeath that has two parameters named winner and loser which has
 a console.log method to state the following message: “winner defeated loser”*/

let logDeath = (winner, loser) => console.log(`${winner} defeated ${loser}`);

/*Declare an arrow function named isDead that has one parameter named health which returns a 
boolean value of true or false based on the following condition: health <= 0;*/

let isDead = (health) => health <= 0;

/*Declare a function declaration named fight that has four parameters.
Parameters:
player1 - this will hold the name of the first player
player2 - this will hold the name of the second player
player1Health - this will hold the health of the first player
player2Health - this will hold the health of the second player*/

function fight(player1, player2, player1health, player2Health) {
  /*Declare and initialize a variable named attacker equal to the 
chooseOption function with player1 and player2 as arguments.*/
  while (true) {
    let attacker = chooseOption(player1, player2);

    /*If attacker is equal to player1. */
    if (attacker === player1) {
      /*Set player2Health equal to the result of 
    attackPlayer with player2Health as its argument.*/
      player2Health = attackPlayer(player2Health);
      /*Calls the logHealth function with player2 and player2Health 
      as its arguments*/
      logHealth(player2, player2Health);
      /*If the result of isDead with player2Health as an argument is true:
        Call the logDeath function with player1 and player2 as arguments.
        Break*/
      if (isDead(player2Health)) {
        logDeath(player1, player2);
        break;
      }
    } else {
      /*Sets player1Health equal to the attackPlayer function with 
       player1Health as its argument.*/
      player1health = attackPlayer(player1health);
      /*Call the logHealth function with player1 and player1Health 
      as its arguments.*/
      logHealth(player1, player1health);
      /*If the result of isDead with player1Health as an argument is true*/
      if (isDead(player1health)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}
fight("Mitch", "Adam", 100, 100);
