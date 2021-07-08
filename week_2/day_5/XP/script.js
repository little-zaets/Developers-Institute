//Day 5 XP: Play The Game

function playTheGame() {
	let userNumber = window.confirm("Would you like to play the game?");
	if (userNumber == false) {
		alert("No problem, Goodbye");
		return;
	}
	userNumber = checkInput(userNumber);
	computerNumber = Math.floor(Math.random() * 11);
	test(userNumber, computerNumber);
}

function checkInput(userNumber) {
	userNumber = prompt("Please enter a number between 0 and 10");
	while (isNaN(userNumber) || userNumber < 0 || userNumber > 10 || userNumber == "") {
		if (isNaN(userNumber)) {
			alert("Sorry not a number");
			userNumber = prompt("Please enter a valid number between 0 and 10");
		}
		else if (userNumber < 0 || userNumber > 10) {
			alert("Sorry it’s not a good number");
			userNumber = prompt("Please enter a valid number between 0 and 10");
		}
	}
	userNumber = Number(userNumber);
	return userNumber;
}

function test(userNumber, computerNumber) {
	let guesses = 3; 
	while (guesses > 0) {
		let diff = userNumber - computerNumber;
		if (diff == 0) {
			alert("WINNER!");
			return;
		}
		if (diff > 0) {
			guesses--;
			if (guesses == 0) {
				alert("Your number is larger than the computer's, but you are out of attempts. Please play again");
				break;
			}
			alert("Your number is larger than the computer’s, guess again");
			userNumber = checkInput(userNumber);
			continue;
		}
		if (diff < 0) {
			guesses--;
			if (guesses == 0) {
				alert("Your number is smaller than the computer's, but you are out of attempts. Please play again");
				break;
			}
			alert("Your number is smaller than the computer’s, guess again");
			userNumber = checkInput(userNumber);
			continue;
		}
	}
}



