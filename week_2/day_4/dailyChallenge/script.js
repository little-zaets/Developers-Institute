/*
Prompt the user for several words (separated by commas).
Put the words into an array.
Console.log the words one per line, in a rectangular frame as seen below.
Check out the Hints and Requirements below.
For example, if the user gives you:
Hello, World, in, a, frame
you will transform it to : ["Hello", "World", "in", "a", "frame"]
The number of stars that wraps the sentence, must depend on the length of the longest word.
*/

let phrase = prompt("Please enter a phrase of least 2 words and separated by commas").split(",");
console.log(phrase);

function findLongestWord(input) {
	let longest = input[0];
	for (let i = 1; i < input.length; ++i) {
		if (input[i].length > longest.length) {
			longest = input[i];
		}
	}
	console.log(longest.length);
	return longest.length;
}

function wrapStars(phrase) {
	let strLen = findLongestWord(phrase) + 4;
	let star = "";
	for (let j = 0; j < strLen; ++j) {
		star += "*";
	}
	console.log(star);
	for (let i = 0; i < phrase.length; ++i) {
		let output = "* " + phrase[i];
		let spaces = strLen - output.length - 1;
		for (j = 0; j < spaces; ++j) {
			output += " ";
		}
		output += "*";
		console.log(output);
	}
	console.log(star);
}

wrapStars(phrase);
