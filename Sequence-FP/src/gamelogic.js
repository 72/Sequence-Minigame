import Tile from "./tile.js";
import * as animate from "./animations.js";

let sequence = [];
let initialSequenceLength = 2;
let level = 0;
let tiles = [];
let numberOfTiles = 9;
let stepToCheck = 0;
let clickTriggered = false;

function showChallenge(){
	moveToNextLevel();

	for (let i = 0; i < sequence.length; i++) {
		setTimeout(function(){
			let currentStep = sequence[i];
			let currentTile = tiles[currentStep];
			animate.highlightTile(currentTile);
		}, 600 * i);
	}
}

function getRandomNumer(){
	// hero number
	let random = (Math.floor(Math.random()*9));
	// first time
	if(sequence[sequence.length-1] === undefined){
		return random;
	}
	// subsequent times
	else {
		// check previous number
		// if previous number is the same...
		if(random == sequence[sequence.length-1]){
			// check whether it is also the same as the number before that one.
			if(random == sequence[sequence.length-1]){
				getRandomNumer();
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

function buildSequence(){
	for(let i = 0; i < initialSequenceLength; i++){
		sequence.push(getRandomNumer());
	}
}

function moveToNextLevel(){
	level++;
}

function tileClicked(tile){
	// ToDo: Track clicks in the tile instance, not here.
	console.log(Tile.)

	// if(clickTriggered == false){
	// 	clickTriggered = true;
	// 	console.log(sequence[stepToCheck]);
	// 	let tileNumber = tile.dataset.name.slice(-1);
	// 	if(sequence[stepToCheck] == tileNumber){
	// 		animate.contract(tile, true);
	// 		// setTimeout(animate.toDefault, 260, tile);
	// 		stepToCheck++;
	// 	} else {
	// 		animate.showError(tile);
	// 		// setTimeout(animate.toDefault, 260, tile);
	// 	}
	// 	setTimeout(function(){
	// 		animate.toDefault(tile);
	// 		setTimeout(function(){
	// 			clickTriggered = false;
	// 		}, 300)
	// 	}, 260);
	// }
}

export function createBoard(board){
	for (let i = 0; i < numberOfTiles; i++) {
		let tile = Tile.create(i);
		
		board.appendChild(tile);
		tiles.push(tile);

		tile.addEventListener("click", function(e) {
			e.preventDefault();
			tileClicked(this);
		});
	}
}

export function startGame(){
	for (let i = 0; i < tiles.length; i++) {
		setTimeout(animate.toDefault, 100 * i, tiles[i]);
	}
	setTimeout(buildSequence, 500);
	setTimeout(showChallenge, 1250);
}
