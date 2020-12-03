function startGame() {
	bgm.play();
	startTime = performance.now();
}

function endGame() {
	endTime = performance.now();
	var timeScore = Math.round((endTime - startTime)/1000);
	document.getElementById("time").innerHTML = timeScore + " seconds";
	document.getElementById("moves").innerHTML = moves + " moves";
	
	var congratz = document.getElementById("congratz");
	if(congratz.style.display === "block") {
		congratz.style.display = "none";
	} else {
		congratz.style.display = "block";
	}
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

function shuffler(){
    tiles = document.getElementsByClassName('tile');
    var pos = 15;
    var squares = [];
    var random;
    var num;
    var test = false;

    for(var i = 0; i < 2000; i++){
        squares [0] = pos - 1;
        squares [1] = pos - 4;
        squares [2] = pos + 1;
        squares [3] = pos + 4;
        test = false;
        
        while(test === false){
            random = Math.floor(Math.random() * 4); 
            if(typeof tiles[squares[random]] != 'undefined'){
                num = squares[random];
                swapEmpty(tiles[num]);
                pos = squares[random];
                test = true;
            }
        }
        
    }
}

function swapEmpty(tile){
    var num = tile.innerHTML;
    var pos = tile.style.backgroundPosition;
    var id = tile.id;
    
    document.getElementById("empty").style.backgroundPosition = pos;
    document.getElementById("empty").innerHTML = num;
    document.getElementById("empty").className = "tile";
    document.getElementById("empty").id = id;
    
    
    tile.innerHTML = "";
    tile.id = "empty";
    tile.className = "empty";
}

var startTime, endTime;
var moves = 0;
var bgm = new Audio("bgm.mp3");
var POSITIONS = [];
window.onload = init;
