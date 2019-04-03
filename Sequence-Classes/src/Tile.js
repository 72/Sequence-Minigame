export default function Tile(index) {

	let tile = {
		clickTriggered: false,
		div: createDiv(index),
		id: index
	}

	function createDiv(index){
		let tileDiv = document.createElement("div");
		tileDiv.className = "tile";
		tileDiv.setAttribute("data-name", "tile" + index);
		tileDiv.style.transform = "scale(0)";
		return tileDiv;
	}

	return tile;

}
