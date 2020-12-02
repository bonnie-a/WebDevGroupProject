function startGame() {
	bgm.play();
	startTime = performance.now();
}

function endGame() {
	endTime = performance.now();
	var timeScore = Math.round((endTime - startTime)/1000);
	document.getElementById("time").innerHTML = timeScore + " seconds";
	document.getElementById("moves").innerHTML = moves + " moves";
}

function move(tile) {
    //collect clicked tile info
    var num = tile.innerHTML;
    var pos = tile.style.backgroundPosition;
    var id = tile.id;
    
    //collect array positioning info of empty and clicked tile
    var objPos = POSITIONS.findIndex(element => element.id == id);
    var emptyPos = POSITIONS.findIndex(element => element.id == "empty");
    alert("Clicked: " + (objPos + 1) + " " + POSITIONS[objPos].id + " Empty: " + (emptyPos + 1) + " " + POSITIONS[emptyPos].id);
    
    //change empty tile to clicked tile
    document.getElementById("empty").style.backgroundPosition = pos;
    document.getElementById("empty").innerHTML = num;
    document.getElementById("empty").id = id;
    
    //change clicked tile to empty tile
    tile.innerHTML = "";
    tile.id = "empty";
    
    //change positions in the array
    POSITIONS[objPos] = document.getElementById("empty");
    POSITIONS[emptyPos] = tile;
}

function select() {
    //check if tile is movable

    //move the tiles
    move(this);
    moves++;
    
    //check if game is finished
}

function init(){
    //add listeners
    tiles = document.getElementsByClassName('tile');
    for(var i = 0; i < tiles.length; i++) {
        tiles[i].addEventListener("click", select);
    }
    
    //add shuffle button listener
    
    //create position array (should be updated after shuffle)
    POSITIONS = document.getElementsByClassName('tile');
    POSITIONS = Array.from(POSITIONS);
}

var startTime, endTime;
var moves = 0;
var bgm = new Audio("bgm.mp3");
var POSITIONS = [];
window.onload = init;
