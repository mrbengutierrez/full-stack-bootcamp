




function main() {
	if (checkRefresh() === true) {
		playGame();
	}

}

function checkRefresh() {
	//check for Navigation Timing API support
	if (window.performance) {
		console.info("window.performance works fine on this browser");
	}
	if (performance.navigation.type == 1) {
		console.info( "This page is reloaded" );
		return true;
	} else {
		console.info( "This page is not reloaded");
		return false;
	}
}

function rollDice() {
	/* Rolls a six sided die

	Returns:
	(number): returns a random integer in [1,6]
	*/
	var numSides = 6;
	var diceRoll = Math.floor(numSides * Math.random()) + 1;
	return diceRoll;
}


function playGame() {
	var images = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];



	// roll dice
	var roll1 = rollDice();
	var roll2 = rollDice();

	var image1 = images[roll1-1].toString();
	var image2 = images[roll2-1].toString();

	// Changes images 
	document.querySelector(".dice .img1").setAttribute("src", image1);
	document.querySelector(".dice .img2").setAttribute("src", image2);
	
	var flag = 	"🚩";	
	if (roll1 > roll2) { // player 1 wins
		document.querySelector("h1").innerHTML = flag + " Player 1 Wins!";
	}

	else if (roll1 < roll2) { // player 2 wins 
		document.querySelector("h1").innerHTML = "Player 2 Wins! " + flag;
	}

	else { // tie
		document.querySelector("h1").textContent = "It's a Tie!";
	}
}

main();

