
import * as game from "./gamelogic.js";

let board = document.getElementById("board");
let startButton = document.getElementById("startButton");

function INIT() {
	game.createBoard(board);

	startButton.addEventListener("click", function(e) {
		e.preventDefault();
		game.startGame();
	});
}

INIT();
