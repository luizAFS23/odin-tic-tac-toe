const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });


const main_gameboard = {
    gameboard: ['-', '-', '-',
                '-', '-', '-',
                '-', '-', '-'],
    player1: "X",
    player2: "O"
}

const displayGameboard = () =>{
    console.log(main_gameboard.gameboard);
}

const choosePosition = () =>{
    console.log("Please choose your position on the gameboard ")
}