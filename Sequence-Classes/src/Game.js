import Tile from "./Tile.js";

export default class Game {
	
	constructor(){
		//DOM
		this.board;
		this.startButton;
		this.message;

		//VARS
		this.sequence = [];
		this.initialSequenceLength = 2;
		this.level = 1;
		this.tiles = [];
		this.numberOfTiles = 9;
		this.stepToCheck = 0;

		//Init
		//this.createTile();
	}

	tileClicked(tile){
		//console.log("ätTile");
		//this.tile = new Tile(2);
		console.log('here' + tile);
	}

	startGame(){
		// Setup DOM
		this.board = document.getElementById("board");
		this.startButton = document.getElementById("startButton");
		this.message = document.getElementById("gameMessage");
		// Create Board
		this.level = 1;
		this.message.innerHTML = "Level " + this.level;
		//console.log(this.numberOfTiles);
		for (let i = 0; i < this.numberOfTiles; i++) {
			let tile = new Tile(i);
			//console.log(tile.div);
			this.board.appendChild(tile.div);
			this.tiles.push(tile);

			tile.div.addEventListener("click", function(e) {
				e.preventDefault();
				let tileNumber = this.dataset.name.slice(-1);
				//console.log(tileNumber);
				this.tileClicked(tileNumber).bind(this);
				// let _tile = this.tiles[tileNumber];
				// console.log(tileNumber, _tile);
				//this.tileClicked(this);
			});
		}
		//console.log(this.tiles);

		// For
		// for (let i = 0; i < this.tiles.length; i++) {
		// 	setTimeout(this.tiles[i].toDefault, 100 * i, this.tiles[i]);
		// }

		// map
		this.tiles.map((tile, i) => {
			//console.log(tile, i);
			setTimeout(tile.toDefault, 100*i, tile);
		});


		//console.log(this.board);
	}


	// static startGame(game){
	// 	game.board = document.getElementById("board");
	// 	game.startButton = document.getElementById("startButton");
	// 	game.message = document.getElementById("gameMessage");
	// 	// Create Board
	// 	game.level = 1;
	// 	game.message.innerHTML = "Level " + game.level;
	// 	console.log(game.numberOfTiles);
	// 	for (let i = 0; i < game.numberOfTiles; i++) {
	// 		let tile = new Tile(i);
	// 		console.log(tile.div);
	// 		game.board.appendChild(tile.div);
	// 		// this.tiles.push(tile);
	// 		// tile.div.addEventListener("click", function(e) {
	// 		// 	e.preventDefault();
	// 		// 	//console.log(this);
	// 		// 	tileClicked(this);
	// 		// });
	// 	}

	// 	//console.log(this.board);
	// }
}