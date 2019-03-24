import createTile from "./tile.js";
import * as animate from "./animations.js";

let sequence = [];
let initialSequenceLength = 2;
let level = 0;
let stepInSequence = 0;
let tiles = [];
let numberOfTiles = 9;


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
	animate.contract(tile, true);
	setTimeout(animate.toDefault, 260, tile);
}

export function createBoard(board){
	for (let i = 0; i < numberOfTiles; i++) {
		let tile = createTile(i);
		tile.style.transform = "scale(0)";
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
