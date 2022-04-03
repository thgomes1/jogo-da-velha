let board = ["", "", "", "", "", "", "", "", ""];
let playerName1 = "";
let playerName2 = "";
let playerNameInput1 = document.getElementById("player-name-input1");
let playerNameInput2 = document.getElementById("player-name-input2");
let playerTimeIcon1 = document.getElementById("player-time-icon1");
let playerTimeIcon2 = document.getElementById("player-time-icon2");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
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
            return true;
        }
    }

    return false;
}

function checkWinner() {
    if (playerTime === 0) {
        return playerName1;
    }
    if (playerTime === 1) {
        return playerName2;
    }
}

function playerTimeFunction() {
    if (playerTime === 0) {
        playerTimeIcon2.classList.remove("fa-solid", "fa-arrow-left");
        playerTimeIcon1.classList.add("fa-solid", "fa-arrow-left");
    }
    if (playerTime === 1) {
        playerTimeIcon1.classList.remove("fa-solid", "fa-arrow-left");
        playerTimeIcon2.classList.add("fa-solid", "fa-arrow-left");
    }
}
