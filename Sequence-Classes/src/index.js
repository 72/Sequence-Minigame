import Game from "./Game.js";

let startButton = document.getElementById("startButton");
let sequenceGame = new Game();

startButton.addEventListener("click", function(e) {
	e.preventDefault();
	sequenceGame.startGame();
});

