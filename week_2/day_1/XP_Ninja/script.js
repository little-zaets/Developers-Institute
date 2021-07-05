
//Exercise 1 - Nemo
console.log("--------------------------------------------------------------------");
console.log("Exercise 1 - Nemo:");
let str = prompt("Please enter a sentence which includes the word 'Nemo'");
console.assert(str != null, "Empty string entered");
if (str.includes("Nemo")) {
	let found = str.indexOf("Nemo");
	console.log("I found Nemo at index", found);
}
else {
	console.log("I can't find Nemo");
}
console.log("--------------------------------------------------------------------");
console.log("Exercise 2 - Evaluaton:");

//Exercise 2 - Evaluation
/*
 5 >= 1 --> true
0 === 1 --> false
4 <= 1 --> false
1 != 1 --> false
"A" > "B" --> false
"B" < "C" --> true
"a" > "A" --> true
"b" < "A" --> false
true === false --> false
true != true --> false
*/

console.log(5 >= 1);
console.log(0 === 1);
console.log(4 <= 1);
console.log(1 != 1);
console.log("A" > "B");
console.log("B" < "C");
console.log("a" > "A");
console.log("b" < "A");
console.log(true === false);
console.log(true != true);
console.log("--------------------------------------------------------------------");
console.log("Exercise 2 - Evaluaton(2):");

//Exercise 2 - Evaluation(2)
/*
let c;
let a = 34;
let b = 21;
a = 2;
a + b

1. a + b = 23
2. c is undefined
3. console.log(3 + 4 + '5') will output '75'
*/

console.log(3 + 4 + '5');