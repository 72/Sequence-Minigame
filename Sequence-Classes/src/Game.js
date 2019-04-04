import Tile from "./Tile.js";

export default class Game {
	
	constructor(){
		this.createTile();
	}

	createTile(){
		//console.log("ätTile");
		this.tile = new Tile(2);
		console.log(this.tile);
	}


	static startGame(){
		console.log("here");
	}
}