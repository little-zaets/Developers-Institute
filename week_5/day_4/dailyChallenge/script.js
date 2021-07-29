//Daily Challenge: Promises
// Implement a simple version of Promise.all.
// This function should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.
let boolean = true; 
let boolean1 = false;
Promise.all([
	new Promise((resolve, reject) => {
		let response1 = 10;
		if (boolean) {
			resolve(response1);
		}
		else {
			reject(response1);
		}
	}),
	new Promise((resolve, reject) => {
		let response2 = "HAZAW!";
		if (boolean1) {
			resolve(response2);
		}
		else {
			reject(response2);
		}
	}),
	new Promise((resolve, reject) => {
		let response3 = 30;
		if (boolean) {
			resolve(response3);
		}
		else {
			reject(response3);
		}
	})
]).then(console.log).catch(error => console.log("REJECTED: ", error));

/*const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});
Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
  });*/