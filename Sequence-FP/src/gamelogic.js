import Tile from "./Tile.js";
import * as animate from "./animations.js";

let sequence = [];
let initialSequenceLength = 2;
let level = 0;
let tiles = [];
let numberOfTiles = 9;
let stepToCheck = 0;


function showChallenge(){
	moveToNextLevel();

	for (let i = 0; i < sequence.length; i++) {
		setTimeout(function(){
			let currentStep = sequence[i];
			let currentTile = tiles[currentStep].div;
			animate.highlightTile(currentTile);
		}, 600 * i);
	}
}

function getRandomNumer(){
	// hero number
	let random = (Math.floor(Math.random()*9));
	// first time
	if(sequence[sequence.length-1] == undefined){
		return random;
	}
	// subsequent times
	else {
		// check previous number
		// if previous number is the same...
		if(random == sequence[sequence.length-1]){
			// check whether it is also the same as the number before that one.
			if(random == sequence[sequence.length-2]){
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
	// console.log(sequence);
}

function moveToNextLevel(){
	level++;
}

function setToDefault(tileDiv, tile){
	setTimeout(animate.toDefault, 260, tileDiv);
	setTimeout(function(){
		tile.clickTriggered = false;
	}, 550);
}

function correctOption(tileDiv, _tile){
	animate.clicked(tileDiv);
	setToDefault(tileDiv, _tile);
	stepToCheck++;
}

function wrongOption(tileDiv, _tile){
	animate.showError(tileDiv);
	setToDefault(tileDiv, _tile);
}


function tileClicked(tileDiv){
	let tileNumber = tileDiv.dataset.name.slice(-1);
	let _tile = tiles[tileNumber];

	// Click control
	if(_tile.clickTriggered == false){
		_tile.clickTriggered = true;

		// If this is the correct step
		if(sequence[stepToCheck] == _tile.id){
			correctOption(tileDiv, _tile);
		} else {
			wrongOption(tileDiv, _tile);
		}
	}
}

export function createBoard(board){
	for (let i = 0; i < numberOfTiles; i++) {
		let tile = Tile(i);

		board.appendChild(tile.div);
		tiles.push(tile);

		tile.div.addEventListener("click", function(e) {
			e.preventDefault();
			tileClicked(this);
		});
	}
}

export function startGame(){
	for (let i = 0; i < tiles.length; i++) {
		setTimeout(animate.toDefault, 100 * i, tiles[i].div);
	}
	setTimeout(buildSequence, 500);
	setTimeout(showChallenge, 1250);
}
