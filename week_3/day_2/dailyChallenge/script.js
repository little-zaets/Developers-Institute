//Daily Challenge: Mad Libs
/*
Get the value of each of the inputs in the HTML file when the button is clicked.
Make sure the values are not empty
Write a story that uses each of the values.
Make sure you check the console for errors when playing the game.
Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). 
The user could click the button at least three times and get a new story. Display the stories randomly.
*/

let button = document.getElementById("lib-button");
button.addEventListener("click", createStory);

let nounInput = document.querySelector("#noun");
let adjInput = document.querySelector("#adjective");
let nameInput = document.querySelector("#person");
let verbInput = document.querySelector("#verb");
let placeInput = document.querySelector("#place");

function createStory(event) {
	let story = `The ${nounInput.value} is very ${adjInput.value} and ${nameInput.value} is ${verbInput.value} in ${placeInput.value}.`;
	if (validate()) {
		document.getElementById("story").innerHTML = story;
	}
	else {
		document.getElementById("story").innerHTML = "";
	}
}

function validate() {
	if (nounInput.value == "") {
		alert("Please provide a noun");
		nounInput.focus();
		return false;
	}
	if (adjInput.value == "") {
		alert("Please provide an adjective");
		adjInput.focus();
		return false;
	}
	if (nameInput.value == "") {
		alert("Please provide a name");
		nameInput.focus();
		return false;
	}
	if (verbInput.value == "") {
		alert("Please provide a verb");
		verbInput.value.focus();
		return false;
	}
	if (placeInput.value == "") {
		alert("Please provide a place");
		placeInput.focus();
		return false;
	}
	else {
		return true;
	}
}
