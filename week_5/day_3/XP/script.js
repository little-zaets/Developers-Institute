// // Exercise 1: Comparison
// // Create a function called compareToTen that takes a number as an argument.
// // The function should return a Promise that tests if the value of the given argument is less or greater than 10.

function isMoreThanTen(num) {
	return promise = new Promise((resolve, reject) => {
		let str;
		if (!isNaN(num)) {
			if (num > 10) {
			str = `${num} is more than 10!`;
			}
			else {
			str = `${num} is less than 10!`
			}
			resolve(str);
		}
		else {
			reject(`${num} is not a string and/or not a number! ERROR`);
		}
	});
}
isMoreThanTen("string");
isMoreThanTen(15)
	.then(result => {
		console.log(result)
	});
isMoreThanTen(9)
	.then(result => {
		console.log(result)
	});

//Exercise 2: Promises
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
// Read about Promise.resolve() and Promise.reject().
// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// Add code to catch errors and console.log ‘Ooops something went wrong’.
let promise = new Promise((resolve, reject) => { 
	setTimeout(() => {	
		// Code to perform the promised task                                
		if (true) {
			resolve("success!"); 
			}
		else { 
			reject("Ooops something went wrong!"); 
		} 
	}, 4000);
});
promise
	.then(value => {
		console.log(value);
	})
	.catch(error => {
		console.log(error);
	})

//Exercise 3: Resolve and Reject
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
let aPromise = Promise.resolve(3);
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
let anotherPromise = Promise.reject("Boo!");
let anotherNotherPromise = new Promise((resolve, reject) => { 
	setTimeout(() => {
		// Code to perform the promised task                                
		aPromise.then(result => console.log(result));
	}, 1000);
	anotherPromise.catch(result => console.log(result));
});

