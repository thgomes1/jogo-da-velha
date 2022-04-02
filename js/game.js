let board = ["", "", "", "", "", "", "", "", ""];
let player1 = "";
let player2 = "";
let playerTime = 0;
let symbols = ["./assets/o.png", "./assets/x.png"];
let gameOver = false;
let gameActualPlayers = document.getElementById("game-actual-players");
let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function handleMove(position) {
    if (gameOver) {
        return;
    }

    if (board[position] == "") {
        board[position] = symbols[playerTime];

        gameOver = isWin();

        if (gameOver == false) {
            playerTime = playerTime == 0 ? 1 : 0;

            playerTimeFunction();
        }
    }

    return gameOver;
}

function isWin() {
    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != "") {
            console.log("eu");
            return true;
        }
    }

    return false;
}

function checkWinner() {
    if (playerTime === 0) {
        let winner = player1;
        return winner;
    }
    if (playerTime === 1) {
        let winner = player2;
        return winner;
    }
}

function playerTimeFunction() {
    if (playerTime === 0) {
        gameActualPlayers.children[1].children[1].classList.remove("fa-solid", "fa-arrow-left");
        gameActualPlayers.children[0].children[1].classList.add("fa-solid", "fa-arrow-left");
    }
    if (playerTime === 1) {
        gameActualPlayers.children[0].children[1].classList.remove("fa-solid", "fa-arrow-left");
        gameActualPlayers.children[1].children[1].classList.add("fa-solid", "fa-arrow-left");
    }
}
