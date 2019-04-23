import React from "react";

function GameButton(props){
	return(
		<div id="startButton" onClick={props.onClick}>
			{props.label}
		</div>
	);
}

function Tile(props){

	let tileDiv = document.createElement("div");
	tileDiv.className = "tile";
	tileDiv.setAttribute("data-name", "tile" + props.index);
	tileDiv.style.transform = "scale(0)";
	return tileDiv;

}

function GameBoard(props){

	// I don't know what happened here. I'll try to solve it again...

	// function createTiles(){
	// 	for (let i = 0; i < props.numberOfTiles; i++) {
	// 		// let tile = new Tile(i);
	// 		// game.board.appendChild(tile.div);
	// 		// game.tiles.push(tile);

	// 		let tileDiv = document.createElement("div");
	// 		tileDiv.className = "tile";
	// 		tileDiv.setAttribute("data-name", "tile" + i);
	// 		tileDiv.style.transform = "scale(0)";

	// 		// tileDiv.addEventListener("click", function(e) {
	// 		// 	e.preventDefault();
	// 		// 	console.log("here");
	// 		// 	// Game.tileClicked(this, game);
	// 		// });
	// 		console.log(tileDiv);


	// 		//return tileDiv;
	// 		_board.appendChild(tileDiv);


	// 		// tile.div.addEventListener("click", function(e) {
	// 		// 	e.preventDefault();
	// 		// 	Game.tileClicked(this, game);
	// 		// });
	// 	}
	// }

	return(
		<div id="board" className="">
			{/* {createTiles()} */}
			<div className="tile" data-name="tile0"></div>
			<div className="tile" data-name="tile1"></div>
			<div className="tile" data-name="tile2"></div>
			<div className="tile" data-name="tile3"></div>
			<div className="tile" data-name="tile4"></div>
			<div className="tile" data-name="tile5"></div>
			<div className="tile" data-name="tile6"></div>
			<div className="tile" data-name="tile7"></div>
			<div className="tile" data-name="tile8"></div>
		</div>
	);
}

export default class Board extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			tiles: null,
			label: "Start",
			showBoard: false,
			initialSequenceLength: 2,
			sequence: [],
			level: 1,
			stepToCheck: 0,
			numberOfTiles: 9,
			colors: {
				blue: "rgb(25, 153, 238)",
				pink: "pink",
				skyblue: "rgb(86, 204, 242)",
				purple: "rgb(155, 81, 224)",
				red: "rgb(235,87,87)",
				green: "rgb(39,174,96)",
				orange: "rgb(242,153,74)",
				yellow: "rgb(242,201,76)"
			}
		}

		//this.showTiles = this.showTiles.bind(this);
	}

	fadeOutStartButton(){
		let element = document.getElementById("startButton");
		element.style.transition = "all 0.55s cubic-bezier(0.25, .1, 0.25, 1.35)";
		element.style.opacity = "0";
		element.style.transform = "scale(0)";
	}

	toDefault(item){
		item.style.transition = "all 0.25s cubic-bezier(0.25, .1, 0.25, 1.35)";
		item.style.backgroundColor = "rgb(25, 153, 238)";
		item.style.opacity = "1";
		item.style.transform = "scale(1)";
	}

	highlightTile(item){
		item.style.transition = "all 0.33s cubic-bezier(0.25, .1, 0.25, 1.35)";
		item.style.backgroundColor = this.state.colors.purple;
		item.style.transform = "scale(1.2)";
		setTimeout(this.toDefault, 250, item);
	}

	showTiles(){
		this.state.tiles.map((tile, i) => {
			setTimeout(this.toDefault, 100*i, tile);
		});
	}

	createBoard(){
		this.setState(state => ({
			showBoard: !state.showBoard
		}));

		setTimeout(()=>{
			let boardDOM = Array.from(document.getElementById("board").children);
			this.setState(state => ({
				tiles: boardDOM
			}));
			this.showTiles()
		}, 600);
	}

	getRandomNumber(){
		// hero number
		let random = (Math.floor(Math.random()*9));
		// first time
		if(this.state.sequence[this.state.sequence.length-1] == undefined){
			return random;
		}
		// subsequent times
		else {
			// check previous number
			// if previous number is the same...
			if(random == this.state.sequence[this.state.sequence.length-1]){
				// check whether it is also the same as the number before that one.
				if(random == this.state.sequence[this.state.sequence.length-2]){
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

	buildSequence(){
		for(let i = 0; i < this.state.initialSequenceLength; i++){
			this.state.sequence.push(this.getRandomNumber());
		}
		//console.log(this.state.sequence);
	}

	showChallenge(){
		this.state.sequence.map((number, i)=>{
			setTimeout(() =>{
				let currentStep = this.state.sequence[i];
				let currentTile = this.state.tiles[currentStep];
				//console.log(currentTile);
				this.highlightTile(currentTile);
			}, 600*i);
		})
		// setTimeout(()=>{
		// 	this.enableClicks();
		// }, (this.sequence.length * 550));
	}

	startGame(e){
		e.preventDefault();
		this.fadeOutStartButton();

		setTimeout(()=>{
			this.createBoard()
		}, 600);

		setTimeout(()=>{
			this.buildSequence()
		}, 1000);

		setTimeout(()=>{
			this.showChallenge()
		}, 2200);
	}

	render(){
		return(
			<div>
				{this.state.showBoard ? (
					<GameBoard numberOfTiles={this.state.numberOfTiles} />
				) : (
					<div/>
				)}
				<GameButton label={this.state.label} onClick={(e)=> this.startGame(e)}/>
			</div>
		);
	}
}

// Defaults
Board.defaultProps = {
	label: "Start Game"
}