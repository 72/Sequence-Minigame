import React, { Component } from 'react';
import './App.css';
import Board from './Board';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h3>Sequence-React</h3>
				<Board />
			</div>
		);
	}
}

export default App;
