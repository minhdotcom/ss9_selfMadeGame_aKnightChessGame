function draw_board () {
    for (i = 1; i <= 8; i++) {
        board += "<tr>";
        isSquare = !isSquare;
        for (j = 1; j <= 8; j++) {
            isSquare = !isSquare;
            if (isSquare) {
                square = black;
            } else {
                square = white;
            }
            if (j == knightX && i == knightY) {
                board += "<td>" + knight + "</td>";
            } else if (j == knightStepX && i == knightStepY) {
                board += "<td>" + knightStep + "</td>";
            } else {
                board += "<td>" + square + "</td>";
            }
        }
        board += "</tr>";
    }
    board += "</table><br/><br/><button onclick='set_knight()'>Move knight</button>";
    gameField.innerHTML = board;
}

function set_knight () {
    knightX = Number(prompt("Please input X for Knight."));
    knightY = Number(prompt("Please input Y for Knight."));
    draw_board();
    knightStepX = knightX;
    knightStepY = knightY;
}
