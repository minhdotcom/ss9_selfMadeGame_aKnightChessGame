var knight = "<img src = 'img/knight.png' width='40'></img>";
var knightStep = "<img src = 'img/knightStep.png' width='40'></img>";
var black = "<img src = 'img/blackSquare.png' width='40'></img>";
var white = "<img src = 'img/whiteSquare.jpg' width='40'></img>";
var gameField = document.getElementById("gameField");
var board = "<table width = '300' cellspacing = '0' cellpadding='0' border = '0'>";
var isSquare = true;
var square;
var knightX;
var knightY;
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

function turn_square_black_white () {
    isSquare = !isSquare;
    if (isSquare) {
        square = black;
    } else {
        square = white;
    }
}

function draw_board () {
    board += "<tr>" +
        "<td></td>" +
        "<td>&nbsp&nbsp&nbsp&nbsp1</td>" +
        "<td>&nbsp&nbsp&nbsp&nbsp2</td>" +
        "<td>&nbsp&nbsp&nbsp&nbsp3</td>" +
        "<td>&nbsp&nbsp&nbsp&nbsp4</td>" +
        "<td>&nbsp&nbsp&nbsp&nbsp5</td>" +
        "<td>&nbsp&nbsp&nbsp&nbsp6</td>" +
        "<td>&nbsp&nbsp&nbsp&nbsp7</td>" +
        "<td>&nbsp&nbsp&nbsp&nbsp8</td>" +
        "</tr>"
    for (i = 0; i < 8; i++) {
        board += "<tr>" + "<td>" + (i + 1) + "&nbsp&nbsp&nbsp" + "</td>";
        isSquare = !isSquare;
        for (j = 0; j < 8; j++) {

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

function set_knight () {
    knightX = Number(prompt("Please input X for Knight.")) - 1;
    knightY = Number(prompt("Please input Y for Knight.")) - 1;
    board = "<table width = '300' cellspacing = '0' cellpadding='0' border = '0'>";
    draw_board();
    knightSteps[knightX][knightY] = 1;
}
