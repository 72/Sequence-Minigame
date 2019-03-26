export default function createTile(index) {
	// Create Tile
	let tile = document.createElement("div");
	tile.className = "tile";
	tile.setAttribute("data-name", "tile" + index);

	return tile;
	// ToDo: track clicked state here
}
