var knight = "<img src = 'img/knight.png' width='40'></img>";
var knightStep = "<img src = 'img/knightStep.png' width='40'></img>";
var black = "<img src = 'img/blackSquare.png' width='40'></img>";
var white = "<img src = 'img/whiteSquare.jpg' width='40'></img>";
var gameField = document.getElementById("gameField");
var board = "<table width = '300' cellspacing = '0' cellpadding='0' border = '0'>";
var isSquare = true;
var square;
var knightX =0;
var knightY =0;
var knightStepX = 0;
var knightStepY = 0;

draw_board();
// set_knight();

// while (knightX >= 0 || knightY >= 0) {
//     set_knight();
// }
