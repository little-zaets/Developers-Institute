//Daily Challenge 1:
// Create two functions that use promises which can be chained.
// The first function called makeAllCaps(), should take an array of words as an argument and capitalize them.
// The second function called sortWords(), should sort the words in alphabetical order.
// If the array contains anything but strings, it should throw an error.


let makeAllCaps = str => {
	let promise = new Promise((resolve, reject) => {
		console.log(str);
		let valid = str.every(value => typeof value == "string")
		console.log(valid);
		console.log(str);
		if (valid) {
			console.log(str.map(item => item.toUpperCase()));
			resolve(str.map(item => item.toUpperCase()));
		}
		else {
			reject(new Error("value provided is not a string!"));
		}
	})
	return promise;
}

let sortWords = array => {
	let anotherPromise = new Promise((resolve, reject) => {
		if (array) {
			resolve(array.sort());
		}
		else {
			reject(new Error("Ooops! Something went wrong!"));
		}
	})
	return anotherPromise;
}

let newPromise = ["hello", "goodbye", "sunshine", "moonrise", "xavier"];
let anotherPromise = "12345"
makeAllCaps(newPromise)
	.then(sortWords)
	.then(finalResult => console.log("The result: ", finalResult))
	.catch(error => console.log("Error: ", error))
