export default function createTile(index) {
	let tile = document.createElement("div");
	tile.className = "tile";
	tile.setAttribute("name", "tile" + index);

	return tile;
}
