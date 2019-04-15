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

	/** 
	 * Leaving this function for reference. Explanation is worthwhile for future self:
	 * This implementation bite me because I was forced to pass the game instance every time I called the function. I tried to refactor it using 'this' instance of the game instance, however, I had to go down the rabbit hole of the different uses of 'this' (http://exploringjs.com/es6/ch_arrow-functions.html).
	 * I refactored it to use ES6 function arrow. And may need to update a bunch of other things in this file now.
	
	 // What I had:
	 showChallenge(game){
		game.sequence.map((number, i)=>{
			setTimeout(() =>{
				let currentStep = game.sequence[i];
				let currentTile = game.tiles[currentStep].div;
				Animate.highlightTile(currentTile);
			}, 600*i);
		})
	}
	// Abstract - Before
	showChallenge(){
		this.sequence.map(function(number, i){
			setTimeout(function(){
				this.generateRandomNumber();
				// toDo
			}, 500);
		})
	}

	// Abstract - ES6
	showChallenge(){
		this.sequence.map((number, i) => {
			setTimeout(() => {
				this.generateRandomNumber();
				// toDo
			}, 500);
		})
	}
	*/

	showChallenge(){
		this.sequence.map((number, i)=>{
			setTimeout(() =>{
				let currentStep = this.sequence[i];
				let currentTile = this.tiles[currentStep].div;
				Animate.highlightTile(currentTile);
			}, 600*i);
		})
		setTimeout(()=>{
			this.enableClicks();
		}, (this.sequence.length * 550));
	}

	setToDefault(tile){
		setTimeout(Animate.toDefault, 260, tile);
		setTimeout(() => {
			this.enableClicks();
		}, 350);
	}


	moveToNextLevel(){
		this.level++;
		// This format of function within a timeout loses the context of 'this' and catches the window object.
		//setTimeout(function(){}, 500);
		// - - - - - - - - - - 
		// Use arrow function instead ()=>{} to correctly point to the expected 'this' element (instance, not window object).
		//setTimeout(()=>{}, 500);
		setTimeout(() => {
			this.message.innerHTML = "Level " + this.level;
			Animate.spin(this.board);
			this.stepToCheck = 0;
			this.sequence.push(this.getRandomNumber());
			setTimeout(() => {
				this.showChallenge();
			}, 2000);
		}, 600);
	}

	correctOption(tile){
		Animate.clicked(tile);
		//move to next level if this is the last step
		if(this.stepToCheck == (this.sequence.length-1)){
			setTimeout(Animate.toDefault, 260, tile);
			this.moveToNextLevel();
		} else {
			this.setToDefault(tile);
			//setTimeout(Animate.toDefault, 260, tile);
			this.stepToCheck++;
		}
	}

	disableClicks(){
		this.tiles.map(tile => {
			tile.clickTriggered = true;
		});
	}

	enableClicks(){
		this.tiles.map(tile => {
			tile.clickTriggered = false;
		});
	}

	wrongOption(tile){
		// Hide all others
		this.tiles.map(item =>{
			Animate.toneDown(item.div);
		})
		// Show error
		Animate.showError(tile);
		Animate.toDefault(this.tiles[this.sequence[this.stepToCheck]].div);
	}

	static tileClicked(tile, game){
		let tileNumber = tile.dataset.name.slice(-1);
		let triggered = game.tiles[tileNumber].clickTriggered;

		if(triggered == false){
			game.disableClicks();
			if(game.sequence[game.stepToCheck] == tileNumber){
				//console.log("correct");
				game.correctOption(tile);
			} else {
				//console.log("incorrect");
				game.wrongOption(tile);
			}
		}
	}

	createBoard(game){
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
		setTimeout(this.createBoard, 500, this);
		setTimeout(() => {
			//disableClicks();
			this.tiles.map((tile, i) => {
				setTimeout(tile.toDefault, 100*i, tile);
			});
			setTimeout(this.buildSequence, 500, this);
			//setTimeout(this.showChallenge, 1250, this);
			//console.log(this, this.showChallenge);
			setTimeout(()=>{
				this.showChallenge();
			}, 1250);
			// setTimeout(this.showChallenge, 1250);
		}, 800);
	}
}