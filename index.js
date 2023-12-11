const prompt = require("prompt-sync")();

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


function choosePosition(){

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

function enemyAI(){
    for(let i = 0; i <= main_gameboard.gameboard.length; i++){
        let randomIndex = Math.floor(Math.random() * (main_gameboard.gameboard.length + 1));
        
        if(main_gameboard.gameboard[randomIndex] == 'X') continue; else{
            main_gameboard.gameboard.splice(randomIndex, 0, 'O');
        }
    }

}



choosePosition();
enemyAI();