import Tile from "./Tile.js";
import * as animate from "./animations.js";

let sequence = [];
let initialSequenceLength = 2;
let level = 1;
let tiles = [];
let numberOfTiles = 9;
let stepToCheck = 0;
let gameBoard = null;


function showChallenge(){
	for (let i = 0; i < sequence.length; i++) {
		setTimeout(function(){
			let currentStep = sequence[i];
			let currentTile = tiles[currentStep].div;
			animate.highlightTile(currentTile);
		}, 600 * i);
	}
	setTimeout(enableClicks, (sequence.length * 550));
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
}

function disableClicks(){
	tiles.map(tile => {
		tile.clickTriggered = true;
	})
}

function enableClicks(){
	tiles.map(tile => {
		tile.clickTriggered = false;
	})
}


function moveToNextLevel(){
	level++;
	setTimeout(function(){
		disableClicks();
		animate.spin(gameBoard);
		stepToCheck = 0;
		sequence.push(getRandomNumer());
		setTimeout(function(){
			showChallenge();
		}, 2000);
	}, 600);
}


function setToDefault(tileDiv, tile){
	setTimeout(animate.toDefault, 260, tileDiv);
	setTimeout(function(){
		tile.clickTriggered = false;
	}, 550);
}


function correctOption(tileDiv, _tile){
	animate.clicked(tileDiv);
	// move to next level if this is the last step
	if(stepToCheck == (sequence.length-1)){
		setTimeout(animate.toDefault, 260, tileDiv);
		moveToNextLevel();
	} else {
		setToDefault(tileDiv, _tile);
		stepToCheck++;
	}
}

function wrongOption(tileDiv, _tile){
	disableClicks();
	tiles.map(tile =>{
		animate.hide(tile.div);
	})
	animate.toDefault(tiles[stepToCheck-1].div);
	animate.showError(tileDiv);
	//stopGame();
	//setToDefault(tileDiv, _tile);
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
	gameBoard = board;

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
	disableClicks();
	for (let i = 0; i < tiles.length; i++) {
		setTimeout(animate.toDefault, 100 * i, tiles[i].div);
	}
	setTimeout(buildSequence, 500);
	setTimeout(showChallenge, 1250);
}
