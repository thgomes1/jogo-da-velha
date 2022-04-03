let squares = document.querySelectorAll(".square");
let infoPlayers = document.getElementById("info-players");
let errorMsg = document.getElementById("error-msg");
let body = document.querySelector("body");
let gameContainer = document.getElementById("game-container");
let gameWinner = document.getElementById("game-winner");
let infoSavedState = false;

onload = function () {
    squares.forEach((square) => {
        square.addEventListener("click", handleClick);
    });
};

function handleClick(event) {
    if (infoSavedState == false) {
        return;
    }

    if (infoSavedState == true) {
        let square = event.target;
        let position = square.id;

        if (handleMove(position)) {
            setTimeout(() => {
                gameContainer.style.filter = "blur(5px)";
                gameWinner.style.display = "flex";
                gameWinner.innerHTML = `<p>O Jogo Acabou - O vencedor foi ${checkWinner()}</p>
                                        <button onclick="hideWinner()">VOLTAR</button>`;
            }, 10);
        }

        updateSquare(position);
    }
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];

    square.innerHTML = `<img src="${symbol}"></img>`;
}

function resetMatch() {
    board = ["", "", "", "", "", "", "", "", ""];
    playerTime = 0;
    gameOver = false;

    squares.forEach((square) => {
        square.innerHTML = "";
    });
}
function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];

    playerName1 = "";
    playerName2 = "";
    playerTime = 0;
    gameOver = false;

    playerNameInput1.value = "";
    playerNameInput2.value = "";

    player1.innerHTML = "";
    player2.innerHTML = "";

    playerTimeIcon1.classList.remove("fa-solid", "fa-arrow-left");
    playerTimeIcon2.classList.remove("fa-solid", "fa-arrow-left");

    squares.forEach((square) => {
        square.innerHTML = "";
    });
}

function sendPlayerInfo() {
    if (playerNameInput1.value == "" || playerNameInput2.value == "") {
        errorMsg.classList.add("empty-value");

        return (infoSavedState = false);
    }

    if (playerNameInput1.value != "" || playerNameInput2.value != "") {
        playerName1 = playerNameInput1.value;
        playerName2 = playerNameInput2.value;

        player1.innerHTML = playerName1;
        player2.innerHTML = playerName2;

        errorMsg.classList.remove("empty-value");

        playerTimeFunction();

        return (infoSavedState = true);
    }
}

function hideWinner() {
    gameContainer.style.filter = "none";
    gameWinner.style.display = "none";
}
