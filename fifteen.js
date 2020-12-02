var startTime, endTime;
var move = 0;
var bgm = new Audio("bgm.mp3");

function startGame() {
	bgm.play();
	startTime = performance.now();
}

function endGame() {
	endTime = performance.now();
	var timeScore = Math.round((endTime - startTime)/1000);
	document.getElementById("time").innerHTML = timeScore + " seconds";
	document.getElementById("move").innerHTML = move + " moves";
}

function select() {
    move++;
    var num = this.innerHTML;
    var pos = this.style.backgroundPosition;
    var id = this.id;
    
    document.getElementById("empty").style.backgroundPosition = pos;
    document.getElementById("empty").innerHTML = num;
    document.getElementById("empty").className = "tile";
    document.getElementById("empty").id = id;
    
    
    this.innerHTML = "";
    this.id = "empty";
    this.className = "empty";
    //check if game is finished
}

function init(){
    tiles = document.getElementsByClassName('tile');
    for(var i = 0; i < tiles.length; i++) {
        tiles[i].addEventListener("click", select);
    }
}

window.onload = init;
