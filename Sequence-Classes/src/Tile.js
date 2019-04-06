export default class Tile {

	constructor(index){
		this.clickTriggered = false;
		this.div = this.createDiv(index);
		this.id = index;
		this.colors = {
			blue: "rgb(25, 153, 238)",
			pink: "pink",
			skyblue: "rgb(86, 204, 242)",
			purple: "rgb(155, 81, 224)",
			red: "rgb(235,87,87)",
			green: "rgb(39,174,96)",
			orange: "rgb(242,153,74)",
			yellow: "rgb(242,201,76)"
		};
	}

	createDiv(index){
		let tileDiv = document.createElement("div");
		tileDiv.className = "tile";
		tileDiv.setAttribute("data-name", "tile" + index);
		tileDiv.style.transform = "scale(0)";
		return tileDiv;
	}

	toDefault(tile){
		tile.div.style.transition = "all 0.25s cubic-bezier(0.25, .1, 0.25, 1.35)";
		tile.div.style.backgroundColor = tile.colors.blue;
		tile.div.style.opacity = "1";
		tile.div.style.transform = "scale(1)";
	}

	testVal(){
		return this.id;
	}

}
