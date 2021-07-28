//Daily Challenge 2: Morse Code

let morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`

///Create three functions that use promises which can be chained.
//Call the first function toJs():
// this function should take the morse json object provided above, 
//and convert it to a morse javascript object.
// if the morse javascript object is empty, throw an error (use reject)
//else return morse javascript object (use resolve)
let toJs = () => {
	let parsedObj = JSON.parse(morse);
	return new Promise((resolve, reject) => {
		if (Object.keys(parsedObj).length === 0) {
			reject(new Error("Empty"));
		}
		else {
			resolve(parsedObj);
		}
	})
}
// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.
// This function should asks the user for a word or a sentence
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with it’s morse translation of the user’s word.
let input = prompt("Please enter a word or phrase to translate").toLowerCase().split("");
let toMorse = (morseJS) => {
	let objArr = Object.getOwnPropertyNames(morseJS);
	let translated = [];
	return new Promise((resolve, reject) => {
		for (char of input) {
			if (!objArr.includes(char)) {
				reject(new Error("Unsupported character entered"));
			}
			else {
				translated.push(morseJS[char]); 
			}
		}
		console.log(translated);
		resolve(translated);
	})
}
//The last function called joinWords(), should join the morse translation by using line break.
let joinWords = translation => {
	return new Promise((resolve) => {
		resolve(`'${input.join("")}' gives you:\n` + translation.join("\n"));
	})
}

toJs(morse)
	.then(toMorse)
	.then(joinWords)
	.then(console.log)
	.catch(error => console.log('Oops! Something went wrong...\n', error))