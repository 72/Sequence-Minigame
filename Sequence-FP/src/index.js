import * as animate from "./animations.js";
import createTile from "./tile.js";

let board = document.getElementById("board");
let spinButton = document.getElementById("spinButton");
let tiles = [];
let numberOfTiles = 9;

function INIT() {
	for (let i = 0; i < numberOfTiles; i++) {
		let tile = createTile(i);
		board.appendChild(tile);
	}

	tiles = document.getElementsByClassName("tile");

	spinButton.addEventListener("click", function(e) {
		e.preventDefault();
		animate.spin(board, tiles);
	});
}

INIT();
