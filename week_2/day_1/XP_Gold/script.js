//Exercise 1

let me = ["my", "favorite", "color", "is", "blue"]
let result = me.join(" ");
console.log(result);

//Exercise 2

let str = "sugar";
let str1 = "mama";
str = str.replace('su', 'ma');
str1 = str1.replace('ma', 'su');
let newWord = str + " " + str1;
console.log(newWord);

//Exercise 3

let num1 = prompt("Please enter a number");
let num2 = prompt("Please enter another number");
let operation = prompt("Please enter an operation: sum, subtract, multiply, divide")


switch (operation) {
	case "sum":
		alert(Number(num1) + Number(num2));
		break;
	case "subtract":
		alert(Number(num1) - Number(num2));
		break;
	case "multiply":
		alert(Number(num1) * Number(num2));
		break;
	case "divide":
		alert(Number(num1) / Number(num2));
		break;
}
