import React from "react";

function GameButton(props){
	return(
		<div id="startButton" onClick={props.onClick}>
			{props.label}
		</div>
	);
}

function Tile(props){
	return(
		<div className="tile"></div>
	);
}

function GameBoard(props){

	return(
		<div id="board" className="">
			<Tile />
			<Tile />
			<Tile />
			<Tile />
			<Tile />
			<Tile />
			<Tile />
			<Tile />
			<Tile />
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

	showTiles(){
		this.state.tiles.map((tile, i) => {
			setTimeout(this.toDefault, 100*i, tile);
		});
	}

	startGame(e){
		e.preventDefault();
		this.fadeOutStartButton();

		setTimeout(()=>{
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

		}, 600);

		
	}

	render(){
		return(
			<div>
				{this.state.showBoard ? (
					<GameBoard />
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