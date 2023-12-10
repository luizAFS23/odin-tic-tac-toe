const readline = require('readline');
const prompt = require("prompt-sync")();

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

const displayGameboard = () => {
    console.log(main_gameboard.gameboard[0], main_gameboard.gameboard[1], main_gameboard.gameboard[2]);
    console.log(main_gameboard.gameboard[3], main_gameboard.gameboard[4], main_gameboard.gameboard[5]);
    console.log(main_gameboard.gameboard[6], main_gameboard.gameboard[7], main_gameboard.gameboard[8]);
}


const choosePosition = () =>{
    for(let i = 0; i <= main_gameboard.gameboard.length; i++){
        rl.question("Please choose your position on the gameboard (1/9): ", function(number){
            if(main_gameboard.gameboard[number - 1] != '-'){
                    main_gameboard.gameboard[number - 1] = "X";
                    displayGameboard();
                    rl.close();
                }else{
                    console.log("This spot has already been claimed! Please choose another");
                }

        })
    }
}

const chosePosition = () =>{
    for(let i = 0; i <= main_gameboard.gameboard.length; i++){
        const input = prompt("Please choose your position on the gameboard (1/9): ");
        if(main_gameboard.gameboard[input - 1] == '-'){
            main_gameboard.gameboard[input - 1] = main_gameboard.player1;
            displayGameboard();
        }else{
            console.log("This spot has already been claimed! Please choose another");
        }

    }
}

chosePosition();