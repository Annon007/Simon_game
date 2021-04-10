var buttonColors=["red","green","blue","yellow"];
var buttonPattern=[];
var userClickedPattern = [];

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);

});
function nextSequence(){
    var buttonGenerate=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColors[buttonGenerate];
    buttonPattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

}
function playSound(name){
    var buttonSound= new Audio("sounds/"+name+".mp3");
    buttonSound.play();
}
function animatePress(colour){
    $("#"+colour).addClass("pressed");
     setTimeout(function(){
        $("#"+colour).removeClass("pressed");

     },100)
}