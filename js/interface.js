let squares = document.querySelectorAll(".square");
let infoPlayers = document.getElementById("info-players");
let errorMsg = document.getElementById("error-msg");
let body = document.querySelector("body");
let gameContainer = document.getElementById("game-container");
let gameWinner = document.getElementById("game-winner");

onload = function () {
    squares.forEach((square) => {
        square.addEventListener("click", handleClick);
    });
};

function handleClick(event) {
    if (sendPlayerInfo() == true) {
        return;
    }

    if (sendPlayerInfo() == false) {
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
    player1 = "";
    player2 = "";
    playerTime = 0;
    gameOver = false;

    infoPlayers.children[1].value = "";
    infoPlayers.children[3].value = "";

    gameActualPlayers.children[0].children[0].innerHTML = "";
    gameActualPlayers.children[1].children[0].innerHTML = "";

    gameActualPlayers.children[0].children[1].classList.remove("fa-solid", "fa-arrow-left");
    gameActualPlayers.children[1].children[1].classList.remove("fa-solid", "fa-arrow-left");

    squares.forEach((square) => {
        square.innerHTML = "";
    });
}

function sendPlayerInfo() {
    if (infoPlayers.children[1].value == "" || infoPlayers.children[3].value == "") {
        errorMsg.classList.add("empty-value");
        return true;
    }
    if (infoPlayers.children[1].value != "") {
        player1 = infoPlayers.children[1].value;
        player2 = infoPlayers.children[3].value;

        gameActualPlayers.children[0].children[0].innerHTML = player1;
        gameActualPlayers.children[1].children[0].innerHTML = player2;

        errorMsg.classList.remove("empty-value");

        playerTimeFunction();

        return false;
    }
}

function hideWinner() {
    gameContainer.style.filter = "none";
    gameWinner.style.display = "none";
}
