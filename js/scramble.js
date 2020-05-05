function makeGame (){
    var el = document.getElementById("scramble-game");
    var str = "What is your name ?";
    var scrambledQuestion = str.split(/\s/).sort(
    function(){
        return 0.5-Math.random()
    })
    .join(' ');

console.log(scrambledQuestion);
document.getElementById("scramble-game").innerHTML = scrambledQuestion;
}