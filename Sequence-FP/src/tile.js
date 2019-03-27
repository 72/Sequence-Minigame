export default function Tile() {

	let tile = {
		clickTriggered = false;
	}
	let tileDiv = null;

	function create(index){
		createDiv(index);
	}


	function createDiv(index){
		tileDiv = document.createElement("div");
		tileDiv.className = "tile";
		tileDiv.setAttribute("data-name", "tile" + index);
		tileDiv.style.transform = "scale(0)";
	}

	function getTileDiv(){
		return tileDiv;
	}

	function checkClickedState(){
		return clickTriggered;
	}

	function toggleClickedState(){
		clickTriggered = !clickTriggered;
	}

	// ToDo: track clicked state here
}
