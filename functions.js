var knight = "<img src = 'img/knight.png' width='40'></img>";
var knightStep = "<img src = 'img/knightStep.png' width='40'></img>";
var black = "<img src = 'img/blackSquare.png' width='40'></img>";
var white = "<img src = 'img/whiteSquare.jpg' width='40'></img>";
var isPlayer1 = true;
var isSquare = true;
var square;
var knightX;
var knightY;
var currentKnightX = -1;
var currentKnightY = -1;
var knightSteps = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0]
];

function turn_player () {
    isPlayer1 = !isPlayer1;
}
function turn_square_black_white () {
    isSquare = !isSquare;
    if (isSquare) {
        square = black;
    } else {
        square = white;
    }
}
function draw_board () {
    var gameField = document.getElementById("gameField");
    var board = "<table width = '300' cellspacing = '0' cellpadding='0' border = '0'>";
    var player = document.getElementById("player");
    player.innerHTML = isPlayer1 ? "Player 1 's turn" : "Player 2 's turn";
    board += "<tr align='center'><td></td><td>1</td><td>2</td><td>3</td> <td>4</td>" +
        "<td>5</td><td>6</td><td>7</td><td>8</td></tr>"
    for (let i = 0; i < 8; i++) {
        board += "<tr>" + "<td>" + (i + 1) + "&nbsp&nbsp&nbsp" + "</td>";
        isSquare = !isSquare;
        for (let j = 0; j < 8; j++) {

            turn_square_black_white()
            if (j == knightX && i == knightY) {
                board += "<td>" + knight + "</td>";
            } else if (knightSteps[j][i] == 1) {
                board += "<td>" + knightStep + "</td>";
            } else {
                board += "<td>" + square + "</td>";
            }
        }
        board += "</tr>";
    }
    board += "</table><br/><br/><button onclick='set_knight()'>Set knight</button><br/><br/>";
    gameField.innerHTML = board;
}
function check_move () {
    if (
        (!(currentKnightX == -1 && currentKnightY == -1) &&
        !(Math.abs(currentKnightX - knightX) == 1 && Math.abs(currentKnightY - knightY) == 2) &&
        !(Math.abs(currentKnightX - knightX) == 2 && Math.abs(currentKnightY - knightY) == 1)) ||
        (currentKnightX - knightX == 0 && currentKnightY - knightY == 0)
    ) {
        return true;
    } else return false;
}
function set_knight () {
    turn_player();
    console.log(isPlayer1);
    do {
        knightX = Number(prompt("Please input X for Knight.")) - 1;
        knightY = Number(prompt("Please input Y for Knight.")) - 1;
    } while (
        check_move()
        )
    // board = "<table width = '300' cellspacing = '0' cellpadding='0' border = '0'>";
    draw_board();
    knightSteps[knightX][knightY] = 1;
    currentKnightX = knightX;
    currentKnightY = knightY;
    if (check_win()) {
        alert(isPlayer1 ? "Player 2" : "Player 1" + " won!");
    }
}
function check_win () {
    var checkWin = false;
    var checkX1 = (knightX - 1 >= 1 && knightX - 1 <= 8)? knightX - 1 : '';
    var checkX2 = (knightX + 1 >= 1 && knightX + 1 <= 8)? knightX + 1 : '';
    var checkX3 = (knightX - 2 >= 1 && knightX - 2 <= 8)? knightX - 2 : '';
    var checkX4 = (knightX + 2 >= 1 && knightX + 2 <= 8)? knightX + 2 : '';
    var checkY1 = (knightY - 1 >= 1 && knightY - 1 <= 8)? knightY - 1 : '';
    var checkY2 = (knightY + 1 >= 1 && knightY + 1 <= 8)? knightY + 1 : '';
    var checkY3 = (knightY - 2 >= 1 && knightY - 2 <= 8)? knightY - 2 : '';
    var checkY4 = (knightY + 2 >= 1 && knightY + 2 <= 8)? knightY + 2 : '';

    if (checkX1 != '') {
        if (checkY3 != '') {
            if (knightSteps[checkX1][checkY3] == 1) {
                checkWin = true;
            } else checkWin = false;
        }
        if (checkY4 != '') {
            if (knightSteps[checkX1][checkY4] == 1) {
                checkWin = true;
            } else checkWin = false;
        }
    }
    if (checkX2 != '') {
        if (checkY3 != '') {
            if (knightSteps[checkX2][checkY3] == 1) {
                checkWin = true;
            } else checkWin = false;
        }
        if (checkY4 != '') {
            if (knightSteps[checkX2][checkY4] == 1) {
                checkWin = true;
            } else checkWin = false;
        }
    }
    if (checkX3 != '') {
        if (checkY1 != '') {
            if (knightSteps[checkX3][checkY1] == 1) {
                checkWin = true;
            } else checkWin = false;
        }
        if (checkY2 != '') {
            if (knightSteps[checkX3][checkY2] == 1) {
                checkWin = true;
            } else checkWin = false;
        }
    }
    if (checkX4 != '') {
        if (checkY1 != '') {
            if (knightSteps[checkX4][checkY1] == 1) {
                checkWin = true;
            } else checkWin = false;
        }
        if (checkY2 != '') {
            if (knightSteps[checkX4][checkY2] == 1) {
                checkWin = true;
            } else checkWin = false;
        }
    }
    return checkWin;
}