var origString = "What is your name ?";
var origArray = origString.split(" ");
var tileValue = [];
var tileID = [];
var tilesTurned = 0;
var origMap = origArray.map((val1, a) => {
    return {value: val1, index: a};
    });
console.log(origMap);
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
    origArray.scramble();    
    for (var i = 0; i < origArray.length; i++){
        output += '<div class="game-tile" id="tile_'+i+'" onclick="revealTile(this,\''+origArray[i]+'\')"></div>';
    }
    document.getElementById("memory-game").innerHTML = output;
    var scrambledMap = origArray.map((val2) => {
    return {value: val2};
    });
        console.log(scrambledMap);
}

function revealTile(tile,val,scrambledMap){

     //making a move
    if (tile.innerHTML == "" && tileValue.length < origArray.length){        
            tile.style.background = "#fff";
            tile.style.color = "#f21a1d";
            tile.innerHTML = val;
            
            //first move
            if (tileValue.length == 0){
                tileValue.push(val);
                tileID.push(tile.id);

//is it the correct first word?
var mapIndex = document.write(scrambledMap.get(0));
        console.log(mapIndex);
                if (tileValue === mapIndex){console.log(true)}

            }
            //second move
            else if (tileValue.length == 1){
                tileValue.push(val);
                tileID.push(tile.id);

// here i need to work out to to compare the index values

                if (tileValue[0] == tileValue[1]){
                    tilesTurned += 2;

                    // new move
                    tileValue = [];
                    tileID = [];
                    
                    //is problem solved?
                    //yes
                    if (tilesTurned == gameQuestion.length){
                        function endProblem() {
                        var element = document.getElementById("button");element.classList.toggle("startClicked");
                         if (element.innerHTML === "Help"){
                            element.innerHTML = "Start";
                        } else {
                            element.innerHTML = "Help";}
                        };
                        setTimeout(endProblem, 500);
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
    
