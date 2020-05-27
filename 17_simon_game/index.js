

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keydown(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}


function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}













// addEventListener("keydown",startGame);

// function startGame(event) {
// 	removeEventListener("keydown",startGame);
// 	$("body").removeClass("game-over");
// 	var game = new SimonGame();
// 	game.playGame();
// }


// function SimonGame() {
// 	/* Variables */
// 	this.level = 0;
// 	this.buttonColors = ["blue","green","red","yellow"];
// 	this.buttonOrder = [];
// 	this.userState = 0;

// 	/* methods */
// 	this.rollDice = rollDice;
// 	this.playGame = playGame;
// 	this.animateButton = animateButton;
// 	this.animateNewLevel = animateNewLevel;
// 	this.gameOver = gameOver;
// }


// function rollDice(numSides) {
// 	/*
// 	 Rolls a dice with number of sides

// 	Parameters:
// 	numSides (number): natural number representing number of sides on dice

// 	Returns:
// 	(number): random integer in [1:numSides]
// 	*/
	
// 	var sumSides = 4;
// 	var diceRoll = Math.floor(numSides*Math.random()) + 1;
// 	return diceRoll;
// }

// function animateButton(buttonColor) {
// 	/* Animates a button based on color */
// 	var buttonClass = "." + buttonColor
// 	$(buttonClass).fadeOut().fadeIn();

// 	var audio = new Audio("sounds/" + buttonColor + ".mp3");
// 	audio.play();
// }



// function animateNewLevel() {
// 	this.level += 1;
// 	$("#level-title").text("Level " + this.level);
// 	var newButtonColor = this.buttonColors[rollDice(4)-1];
// 	this.buttonOrder.push(newButtonColor);
// 	this.animateButton(newButtonColor);
// }


// function userPlaysLevel(event) {
// 	console.log(event);
// 	var game = event.data.game;
// 	var buttonColor = event.target.id;
// 	animateButton(buttonColor);

// 	// if correct button clicked
// 	if (buttonColor === game.buttonOrder[game.userState]) {
// 		game.userState += 1;
// 		// if user completes level
// 		if (game.userState === game.buttonOrder.length) {
// 			game.userState = 0;
// 			$(".game-button").off("click", userPlaysLevel);
// 			game.playGame();
// 		}
// 	// if wrong button clicked
// 	} else {
// 		$(".game-button").off("click", userPlaysLevel);
// 		game.gameOver();
// 	}

// }

// function gameOver() {
// 	$("body").addClass("game-over");
// 	$("#level-title").text("☠️ Game over, press any key to start over ☠️");
// 	var audio = new Audio("sounds/wrong.mp3");
// 	audio.play();
// 	addEventListener("keydown",startGame);
// }

// function playGame() {
// 	// this.animateNewLevel();
// 	var that = this;
//  	setTimeout(function () {
//     	that.animateNewLevel();
//  	}, 750);
// 	$(".game-button").on("click", {game: this}, userPlaysLevel);
// }



// // addEventListener("keydown", function(event) {
// // 	alert("hello");
// // });

