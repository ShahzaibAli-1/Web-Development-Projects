var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var started = false;
var level = 0;

$(document).keypress(function() {
    if (!started) {
  
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
    
  });


$('.btn').click(function() {
    
    let userChosenColour = this.id;  
    playSound(userChosenColour);
    animatePress(userChosenColour);
    userClickedPattern.push(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});




function nextSequence(){
    index = 0;
  level++;
  userClickedPattern = [];
  $("#level-title").text("Level " + level);
    let randomNumber = Math.floor(Math.random() *4);
    if(randomNumber>3){
        randomNumber = 3;
    }
var randomChosenColour = buttonColors[randomNumber];
playSound(randomChosenColour);
$("#"+randomChosenColour).fadeOut(90).fadeIn(90);
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);

}
function playSound(name){
var audio = new Audio("./sounds/"+name +".mp3");
audio.play()
}
function animatePress(name){
    $("#"+name).addClass("pressed");
 

setTimeout(function() {
    $("#"+name).removeClass("pressed");
}, 100);
}
function checkAnswer(currentLevel){

    if(gamePattern[currentLevel] == userClickedPattern[currentLevel]){
        
        if(gamePattern.length == userClickedPattern.length){
        var delay = 1000;
    
        setTimeout(function(){
    
            nextSequence();
        }, delay);
        console.log("success");}

    }





    else{
        var audio = new Audio("./sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over")},200);
            $("h1").text("Game Over, Press Any Key to Restart");

                startOver();
            
    }
}
function startOver(){

gamePattern = [];
started = false;
level = 0;

}