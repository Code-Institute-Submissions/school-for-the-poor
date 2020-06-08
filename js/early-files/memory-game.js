var gameQuestion = ["What", "What", "is", "is", "your", "your", "name", "name", "?", "?"];
var ans = "What is your name?";
var tileValue = [];
var tileID = [];
var tilesTurned = 0;
Array.prototype.scramble = function(){
    var i = this.length, j, tempValue;
    while (--i > 0){
        j = Math.floor(Math.random() * (i + 1));
        tempValue = this[j];
        this[j] = this[i];
        this[i] = tempValue;
    }
}

function newProblem(){
    tilesTurned = 0;
    var output = '';
    gameQuestion.scramble();
    for (var i = 0; i < gameQuestion.length; i++){
        output += '<div class="game-tile" id="tile_'+i+'" onclick="revealTile(this,\''+gameQuestion[i]+'\')"></div>';
    }
    document.getElementById("memory-game").innerHTML = output;
}

function revealTile(tile,val){

     //making a move
    if (tile.innerHTML == "" && tileValue.length < 2){        
            tile.style.background = "#fff";
            tile.style.color = "#f21a1d";
            tile.innerHTML = val;
            
            //first move
            if (tileValue.length == 0){
                tileValue.push(val);
                tileID.push(tile.id);
            }
            //second move
            else if (tileValue.length == 1){
                tileValue.push(val);
                tileID.push(tile.id);
                if (tileValue[0] == tileValue[1]){
                    tilesTurned += 2;

                    // new move
                    tileValue = [];
                    tileID = [];
                    
                    //is problem solved?
                    //yes
                    if (tilesTurned == gameQuestion.length){
                        function restart() {
                        var element = document.getElementById("button");element.classList.toggle("startClicked");
                         if (element.innerHTML === "Help"){
                            element.innerHTML = "Start";
                        } else {
                            element.innerHTML = "Help";}
                        };
                        setTimeout(restart, 500);
                        setTimeout(function() { 
                        swal({
                            title: "Congratulations!",
                            text: ans,
                            icon: "success",
                        }); }, 500);
                        }

                    //no
                    } else {
                        function turnbackTile(){
                        var tileA = document.getElementById(tileID[0]);
                        var tileB = document.getElementById(tileID[1]);
                        tileA.style.background = "#f21a1d";
                        tileA.innerHTML = "";
                        tileB.style.background = "#f21a1d";
                        tileB.innerHTML = "";
                        
                        // new move
                        tileValue = [];
                        tileID = [];
                        }
                    setTimeout(turnbackTile, 700);
                    }
                }
            }
        }

