


// document.querySelector("button").addEventListener("click", function() {
// 	alert("I got clicked!");
// }	);







var buttons = document.querySelectorAll(".drum")

for (var i=0; i<buttons.length; i++) {
	buttons[i].addEventListener("click", function() {
		var drumLetter = this.innerHTML;
		playDrum(drumLetter);
		buttonAnimation(drumLetter);
	});
}

addEventListener("keydown", function(event) {
	var drumLetter = event.key;
	playDrum(drumLetter);
	buttonAnimation(drumLetter);
});



function playDrum (drumLetter) {

	switch(drumLetter) {
		case "w":
		var audio = new Audio("sounds/tom-1.mp3");
		audio.play();
		break;

		case "a":
		var audio = new Audio("sounds/tom-2.mp3");
		audio.play();
		break;

		case "s":
		var audio = new Audio("sounds/tom-3.mp3");
		audio.play();
		break;

		case "d":
		var audio = new Audio("sounds/tom-4.mp3");
		audio.play();
		break;

		case "j":
		var audio = new Audio("sounds/snare.mp3");
		audio.play();
		break;

		case "k":
		var audio = new Audio("sounds/crash.mp3");
		audio.play();
		break;

		case "l":
		var audio = new Audio("sounds/kick-bass.mp3");
		audio.play();
		break;

		default:
		console.log(buttonInnerHTML);
	}	
}

function buttonAnimation(drumLetter) {
	var drumClass = "." + drumLetter;
	var activeButton = document.querySelector(drumClass);
	activeButton.classList.add("pressed")
	setTimeout( function() {
		activeButton.classList.remove("pressed");
	}, 100)

}






