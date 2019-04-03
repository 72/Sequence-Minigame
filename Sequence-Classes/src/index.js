import * as game from "./gamelogic.js";

let startButton = document.getElementById("startButton");

startButton.addEventListener("click", function(e) {
	e.preventDefault();
	game.startGame();
});

