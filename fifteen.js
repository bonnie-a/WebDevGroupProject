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

/**
 * switches two tiles
 * @param {HTML DOM element} the tile which is being moved
 */
function move(tile) {
    //collect clicked tile info
    var num = tile.innerHTML;
    var pos = tile.style.backgroundPosition;
    var ID = tile.id;
    
    var e = document.getElementById("empty");
    
    //collect array positioning info of empty and clicked tile
    var objPos = POSITIONS.findIndex(element => element.id == ID);
    //var emptyPos = POSITIONS.findIndex(element => element.id == "empty");
        //alert("Clicked: " + (objPos + 1) + " " + POSITIONS[objPos].id + " Empty: "+ (emptyPos + 1) + " " + POSITIONS[emptyPos].id);
    
    //change empty tile to clicked tile
    e.style.backgroundPosition = pos;
    e.innerHTML = num;
    e.id = ID;
    
    //change clicked tile to empty tile
    tile.innerHTML = "";
    tile.id = "empty";
    
    //change positions in the array
    POSITIONS[objPos] = document.getElementById("empty");
    POSITIONS[EMPTY] = e;
    
    EMPTY = objPos;
    
    highlight();
}

/**
 * highlights movable tiles
 */
function highlight() {
    for (var i = 0; i < POSITIONS.length; i++){
        if (isMovable(POSITIONS[i])) {
            //POSITIONS[i].style.className = "movable";
            POSITIONS[i].style.borderColor = "red";
            POSITIONS[i].style.color = "#006600";
            POSITIONS[i].style.textDecoration = "underline";
        }
        else {
            POSITIONS[i].style.borderColor = "black";
            POSITIONS[i].style.color = "black";
            POSITIONS[i].style.textDecoration = "none";
        }
        console.log(POSITIONS[i].style.className);
    }
}

/**
 * called when the user clicks a tile, checks to see if tile is movable and then moves it if so
 */
function select() {
    //check if tile is movable
    if (isMovable(this)) {
        //move the tiles
        move(this);
        moves++;
    }
    
    //check if game is finished
}

/**
 * Checks to see if a tile is movable
 * @param {HTML DOM element} the tile that is being moved
 */
function isMovable(tile) {
    var movable = false;
    
    var pos = POSITIONS.findIndex(element => element.id == tile.id);
	var moveRight = pos + 1;
    var moveLeft = pos - 1;
	var moveUp = pos - 4;
	var moveDown = pos + 4;
    
    /*for (var i in POSITIONS)  {
        console.log("index " + i);
        console.log("id " + POSITIONS[i].id);
    }*/
    
    /*console.log("right " + moveRight);
    console.log("left " + moveLeft);
    console.log("up " + moveUp);
    console.log("down " + moveDown);*/
    
    if (moveRight < 16 && moveRight == EMPTY && pos != 3 && pos != 7 && pos != 11 && pos != 15) {
        movable = true;
    }
    else if (moveLeft > 0 && moveLeft == EMPTY  && pos != 0 && pos != 4 && pos != 8 && pos != 12) {
        movable = true;
    }
    else if (moveUp > 0 && moveUp == EMPTY ) {
        movable = true;
    }
    else if (moveDown < 16 && moveDown == EMPTY ) {
        movable = true;
    }
    
    return movable;
}

/**
 * Initializes the tiles.
 */
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
    
    highlight();
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
    
    startGame();
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

"use strict";
var EMPTY = 15;
var startTime, endTime;
var moves = 0;
var bgm = new Audio("bgm.mp3");
var POSITIONS = [];
window.onload = init;
