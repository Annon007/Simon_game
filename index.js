var buttonColors=["red","green","blue","yellow"];
var buttonPattern=[];
var userClickedPattern = [];

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);

});
function nextSequence(){
    var buttonGenerate=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColors[buttonGenerate];
    buttonPattern.push(randomChosenColour);
    playSound(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(10).fadeOut(100).fadeIn(100);
    

}
function playSound(name){
    var buttonSound= new Audio("sounds/"+name+".mp3");
    buttonSound.play();
}