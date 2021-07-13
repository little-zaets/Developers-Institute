//Daily Challenge : Show Only The Letters
//Create an input type text that takes/shows only letters.
//Hint: use the keyup or the keydown events and remove any character that is not a letter.
//Hint : Check out keycodes in Javascript or Regular Expressions

input.addEventListener("keydown", typeLetters);
function typeLetters(event) {
	if (event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode == 8) {
		let input = document.getElementById("input").value;
	}
	else {
		event.preventDefault();
	}
}