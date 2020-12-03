function select() {
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

window.onload = init;