/*
Write a JavaScript program that recreates the pattern below.
Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out “nested for loops” on Google).
Do this Daily Challenge by youself, without looking at the answers on the internet.

*  
* *  
* * *  
* * * *  
* * * * *
* * * * * *

*/
console.log("Using one loop: ");
let star = "";
for (let i = 0; i < 6; ++i) {
	star += "* ";
	console.log(star);
}
console.log("Using a nested loop: ");
let star1 = [];
for (i = 0; i <= 3; ++i) {
	for (let j = 0; j < i; ++j) {
		star1.push("*");
		console.log(star1.join(" "));
	}
}