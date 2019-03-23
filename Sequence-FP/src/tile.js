import * as animate from "./animations.js";

export default function createTile(index) {
	let tile = document.createElement("div");
	tile.className = "tile";
	tile.setAttribute("name", "tile" + index);

	function bump() {
		animate.contract(tile, true);
		setTimeout(animate.expand, 260, tile);
	}

	tile.addEventListener("click", function(e) {
		e.preventDefault();
		bump();
		// toDo
		// bump(item);
		// Effect: nextStageAnim
		//animateNextStage();
		// // Effect: rotate board
		// rotateBoard();
		// Effect: stagger bump animation.
		// for (let i = 0; i < tiles.length; i++) {
		//   // bump(tiles[i]);
		//   setTimeout(bump, 100 * i, tiles[i]);
		// }
	});

	return tile;
}
