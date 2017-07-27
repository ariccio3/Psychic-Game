var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters= [];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterToGuess = letters[Math.floor(Math.random() * letters.length)];
 console.log(letterToGuess);

var guessesSoFar = function() {
	document.querySelector("#guessesSoFar").innerHTML = "Your Guesses So Far: " + guessedLetters.join(" ");
}

var guessesLeftUpdate = function(){
	document.querySelector("#guesses").innerHTML = "Guesses Left: " + guessesLeft;
};

document.onkeyup = function(event) {
	guessesLeft--;
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	guessedLetters.push(userGuess);
	guessesLeftUpdate();
	guessesSoFar();

	if (guessesLeft > 0) {
		if(userGuess === letterToGuess) {
			wins++;
			document.querySelector("#wins").innerHTML = "Wins: " + wins;
			alert("You Win!!");
		}
	} else if(guessesLeft === 0) {
		losses++;
		document.querySelector("#losses").innerHTML = "Losses: " + losses;
		alert("Sorry, you lose. Play again");
		reset();
	}
}

function reset() {
guesses = 9;
guessesLeft = 9;
guessedLetters = [];
guessesSoFar();
guessesLeftUpdate();
}