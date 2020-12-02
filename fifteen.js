function select() {
    //check if tile is movable

    //move the tiles
    move(this);
    /*for (var i = 0; i < POSITIONS.length; i++) {
        alert(POSITIONS[i].id);
    }*/
    
    //check if game is finished
}

function move(tile) {
    //collect clicked tile info
    var num = tile.innerHTML;
    var pos = tile.style.backgroundPosition;
    var id = tile.id;
    alert(id);
    
    //collect array positioning info of empty and clicked tile
    var objPos = POSITIONS.findIndex(element => element.id == id);
    var emptyPos = POSITIONS.findIndex(element => element.id == "empty");
    alert("Clicked: " + objPos + " " + POSITIONS[objPos].id + " Empty: " + emptyPos + " " + POSITIONS[emptyPos].id);
    
    //change positions in the array
    const tmp = POSITIONS[objPos];
    POSITIONS[objPos] = POSITIONS[emptyPos];
    POSITIONS[emptyPos] = tmp;
    
    //change empty tile to clicked tile
    document.getElementById("empty").style.backgroundPosition = pos;
    document.getElementById("empty").innerHTML = num;
    //document.getElementById("empty").id = id;
    
    //change clicked tile to empty tile
    tile.innerHTML = "";
    //tile.id = "empty";
    //tile.className = "empty";
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

var POSITIONS = [];
window.onload = init;