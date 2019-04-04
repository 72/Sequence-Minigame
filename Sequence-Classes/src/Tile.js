export default class Tile {

	constructor(index){
		// this.tile = {
		// 	clickTriggered: false,
		// 	div: createDiv(index),
		// 	id: index
		// }
		this.tileDiv = null;

		//return this.tile;
		this.createDiv(index);
	}

	createDiv(index){
		console.log("inside");
		this.tileDiv = document.createElement("div");
		this.tileDiv.className = "tile";
		this.tileDiv.setAttribute("data-name", "tile" + index);
		this.tileDiv.style.transform = "scale(0)";
		return this.tileDiv;
	}
}
