import Tile from "./Tile.js";
import * as Animate from "./Animations.js";

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
	}

	getRandomNumber(){
		// hero number
		let random = (Math.floor(Math.random()*9));
		// first time
		if(this.sequence[this.sequence.length-1] == undefined){
			return random;
		}
		// subsequent times
		else {
			// check previous number
			// if previous number is the same...
			if(random == this.sequence[this.sequence.length-1]){
				// check whether it is also the same as the number before that one.
				if(random == this.sequence[this.sequence.length-2]){
					this.getRandomNumber();
				} else {
					return random;
				}
			}
			// else, return number.
			else {
				return random;
			}
		}
	}
	
	buildSequence(game) {
		for(let i = 0; i < game.initialSequenceLength; i++){
			game.sequence.push(game.getRandomNumber());
		}
		//console.log(game.sequence);
	}

	showChallenge(game){
		game.sequence.map((number, i)=>{
			setTimeout(() =>{
				let currentStep = game.sequence[i];
				let currentTile = game.tiles[currentStep].div;
				Animate.highlightTile(currentTile);
			}, 600*i);
		})
	}

	correctOption(tile){
		Animate.clicked(tile);
		//console.log(this);
		//move to next level if this is the last step
		if(this.stepToCheck == (this.sequence.length-1)){
			console.log("at if");
			// setTimeout(Animate.toDefault, 260, tile);
			// this.moveToNextLevel();
		} else {
			console.log("at else");
			setTimeout(Animate.toDefault, 260, tile);
			//tile.toDefault(tile);
			this.stepToCheck++;
		}
	}

	static tileClicked(tile, game){
		let tileNumber = tile.dataset.name.slice(-1);
		// Get Tile from data
		//console.log(tile, tileNumber);

		if(game.sequence[game.stepToCheck] == tileNumber){
			//console.log("correct");
			game.correctOption(tile);
		} else {
			console.log("incorrect");
		}

		//setTimeout(Animate.toDefault, 260, tile);
	}

	static createBoard(game){
		// Create Board
		game.level = 1;
		game.message.innerHTML = "Level " + game.level;

		for (let i = 0; i < game.numberOfTiles; i++) {
			let tile = new Tile(i);
			game.board.appendChild(tile.div);
			game.tiles.push(tile);

			tile.div.addEventListener("click", function(e) {
				e.preventDefault();
				Game.tileClicked(this, game);
			});
		}
	}

	startGame(){
		// Setup DOM
		this.board = document.getElementById("board");
		this.startButton = document.getElementById("startButton");
		this.message = document.getElementById("gameMessage");
		// Init
		Animate.hide(startButton);
		setTimeout(Game.createBoard, 500, this);
		setTimeout(() => {
			//disableClicks();
			this.tiles.map((tile, i) => {
				setTimeout(tile.toDefault, 100*i, tile);
			});
			setTimeout(this.buildSequence, 500, this);
			setTimeout(this.showChallenge, 1250, this);
		}, 800);
	}
}