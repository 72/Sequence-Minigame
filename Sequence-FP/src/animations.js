let rotation = 0;

export function toDefault(item) {
	item.style.transition = "all 0.25s cubic-bezier(0.25, .1, 0.25, 1.35)";
	item.style.backgroundColor = "rgb(25, 153, 238)";
	item.style.transform = "scale(1)";
}

export function contract(item, withColor = false) {
	item.style.transition = "all 0.33s cubic-bezier(0.25, .1, 0.25, 1)";
	if (withColor === true) {
		item.style.backgroundColor = "pink";
	}
	item.style.transform = "scale(0.45)";
}

export function rotateBoard(board) {
	rotation += 90;
	board.style.transition = "all 1s cubic-bezier(0.25, .1, 0.25, 1.40)";
	board.style.transform = "rotate(" + rotation + "deg)";
}

export function staggeredDefault(tiles) {
	for (let i = 0; i < tiles.length; i++) {
		setTimeout(toDefault, 60 * i, tiles[i]);
	}
}

export function spin(board, tiles) {
	for (let i = 0; i < tiles.length; i++) {
		contract(tiles[i]);
	}
	setTimeout(rotateBoard, 150, board);
	setTimeout(staggeredDefault, 1000, tiles);
}

export function highlightTile(item){
	item.style.transition = "all 0.33s cubic-bezier(0.25, .1, 0.25, 1.35)";
	// item.style.backgroundColor = "rgb(86, 204, 242)";
	item.style.backgroundColor = "rgb(155, 81, 224)";
	item.style.transform = "scale(1.2)";
	setTimeout(toDefault, 250, item);
}
