import * as game from "./gamelogic.js";

export default function createTile(index) {
	let tile = document.createElement("div");
	tile.className = "tile";
	tile.setAttribute("name", "tile" + index);

	tile.addEventListener("click", function(e) {
		e.preventDefault();
		game.tileClicked(this);
	});

	return tile;
}
