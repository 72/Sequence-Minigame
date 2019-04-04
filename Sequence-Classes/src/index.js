import Game from "./Game.js";

let startButton = document.getElementById("startButton");
let sequence = new Game();

startButton.addEventListener("click", function(e) {
	e.preventDefault();
	Game.startGame();
});

