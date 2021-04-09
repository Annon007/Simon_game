var buttonColors=["red","green","blue","yellow"];
var buttonPattern=[];
function nexSequence(){
    var buttonGenerate=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColors[buttonGenerate];
    buttonPattern.push(randomChosenColour);
}