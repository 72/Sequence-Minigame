import * as animate from "./animations.js";
import * as game from "./gamelogic.js";

export default function createTile(index) {
	let tile = document.createElement("div");
	tile.className = "tile";
	tile.setAttribute("name", "tile" + index);

	function bump() {
		animate.contract(tile, true);
		setTimeout(animate.toDefault, 260, tile);
	}

	tile.addEventListener("click", function(e) {
		e.preventDefault();
		bump();
	});

	return tile;
}
