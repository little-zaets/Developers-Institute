// //Exercise 1: Scope

// // Analyse the code below, and predict what will be the value of a in all the following functions.
// // Write your prediction as comments in a js file.

// //#1
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a); //a = 3
// }

// //#2
// var a = 0;
// function q2() {
//     a = 5; //a = 5
// }

// function q22() {
//     alert(a); //a = 5
// }

// //#3
// function q3() {
//     window.a = "hello"; //a = "hello"
// }

// function q32() {
//     alert(a); //a = "hello"
// }

// //#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a); //a = "test"
// }


// //#5
// var a = 2;
// if (true) {
// 	var a = 5;
// }
// alert(a); //a = 5

// //Exercise 2: Ternary Operator
// // You need to modify the function called experiencePoints()
// // Create a variable called experiencePoints.
// // Assign to this variable, a ternary operator (ie. change the conditional block into a ternary operator).
// function winBattle() {
//     return true;
// }

// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }

// experiencePoints()

// let experiencePoints = winBattle(true) ? "return 10" : "return 1";
// console.log(experiencePoints);

// //Exercise 3: Colors

// // Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// // Hint : Use the array methods taught in class.

// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// // Check if this array includes the color “Violet”.
// console.log(colors.includes("Violet"));
// // Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// colors.forEach((color, index) => {
// 	console.log(`#${index + 1} choice is ${color}.`);
// });

//Exercise 4: Colors #2
let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th", "st", "nd", "rd"];
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class.
color.forEach((color, i) => {
	let j = (i + 1) % 10;
	if ( (1 <= j && j <= 3) && ( 11 > i || i > 13) ) {
		console.log(`${j}${ordinal[j]} choice is ${color}`);
	}
	else {
		console.log(`${j}${ordinal[0]} choice is ${color}`);
	}
});