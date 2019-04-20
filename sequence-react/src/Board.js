import React from "react";

function GameButton(props){
	return(
		<div id="startButton">
			{props.label}
		</div>
	);
}

function Tile(props){
	return(
		<div className="tile">

		</div>
	);
}

function GameBoard(props){
	return(
		<div id="board" className="">

		</div>
	);
}

export default class Board extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			tiles: null,
			label: "Start"
		}
	}


	render(){
		return(
			<div>
			<GameBoard />
			<GameButton label={this.state.label} />
			</div>
		);
	}
}

// Defaults
Board.defaultProps = {
	label: "Start Game"
}