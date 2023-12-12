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


(function theGame(){

    for(let i = 0; i <= main_gameboard.gameboard.length; i++){
        const input = prompt("Please choose your position on the gameboard (1/9): ");
        if(main_gameboard.gameboard[input - 1] == '-'){
            main_gameboard.gameboard[input - 1] = main_gameboard.player1;
        }else{
            console.log("This spot has already been claimed! Please choose another");
        }

        let randomIndex = Math.floor(Math.random() * (main_gameboard.gameboard.length + 1)); 
        if(main_gameboard.gameboard[randomIndex] == 'X') { continue; }else{
            main_gameboard.gameboard[randomIndex] = main_gameboard.player2;
            displayGameboard();
        }

        if(main_gameboard.gameboard[0] == main_gameboard.gameboard[1] == main_gameboard.gameboard[2] === 'X'){
            console.log("Congratulations, you WON!")
            break;
        }
        if(main_gameboard.gameboard[3] == main_gameboard.gameboard[4] == main_gameboard.gameboard[5] == 'X'){
            console.log("Congratulations, you WON!")
            break;
        }
        if(main_gameboard.gameboard[6] == main_gameboard.gameboard[7] == main_gameboard.gameboard[8] == 'X'){
            console.log("Congratulations, you WON!")
            break;
        }
        if(main_gameboard.gameboard[0] == main_gameboard.gameboard[3] == main_gameboard.gameboard[6] == 'X'){
            console.log("Congratulations, you WON!")
            break;
        }
        if(main_gameboard.gameboard[1] == main_gameboard.gameboard[4] == main_gameboard.gameboard[7] == 'X'){
            console.log("Congratulations, you WON!");
            break;
        }
        if(main_gameboard.gameboard[2] == main_gameboard.gameboard[5] == main_gameboard.gameboard[8] == 'X'){
            console.log("Congratulations, you WON!");
            break;
        }
        if(main_gameboard.gameboard[0] == main_gameboard.gameboard[4] == main_gameboard.gameboard[8] == 'X'){
            console.log("Congratulations, you WON!");
            break;
        }
        if(main_gameboard.gameboard[2] == main_gameboard.gameboard[4] == main_gameboard.gameboard[6] == 'X'){
            console.log("Congratulations, you WON!");
            break;
        }
        if(main_gameboard.gameboard.includes('-') == false){
            console.log("Tie");
            break;
        }

    }

})();
