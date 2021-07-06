//Exercise 1 : Your Favorite Colors
/*
Create an array called colors where the value is a list of your favorite colors.
Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
Hint : create an array of suffixes to do the Bonus
*/
console.log("--------------------------------------------------------------------");
console.log("Exercise 1:");
let colors = ["salmon", "azure", "jade", "coral", "green", "fuschia", "royal", "violet"];
let suffix = ["st", "nd", "rd", "th"];
let i = 0;
while (i < colors.length) {
	if (i < suffix.length) {
		for (let j = 0; j < suffix.length; ++j, ++i) {
			console.log("My " + (j + 1) + suffix[j] + " choice is " + colors[j]);
		}
	}
	else {
		let j = suffix.length - 1; 
		console.log("My " + (i + 1) + suffix[j] + " choice is " + colors[i]);
		++i;
	}
}

//Exercise 2: List of People
/*
Write code to remove “Greg” from the people array.
Write code to replace “James” to “Jason”.
Write code to add your name to the end of the people array.
Using a loop, iterate through the people array and console.log each person.
Using a loop, iterate through the people array and after you console.log “Jason” exit the loop.
Write code to make a copy of the people array using slice. The copy should NOT include “Mary” or your name.
Write code that console.logs Mary’s index. take a look at indexOf on google.
Write code that gives the indexOf “Foo” (this should return -1). Why does it return -1
Create a variable called last which value is the last element of the array.
Hint: What is the relationship between the index of the last element in the array and the length of the array?
*/
console.log("--------------------------------------------------------------------");
console.log("Exercise 2:");
let people = ["Greg", "Mary", "Devon", "James"];
console.log("Initial array:\n", people);
for (let i in people) {
	if (people[i] == "Greg") {
		console.log("Remove Greg from the array:");
		people.splice(i, 1);
		console.log(people);
	}
	if (people[i] == "James") {
		console.log("Replace James with Jason:");
		people.splice(i, 1, "Jason");
		console.log(people);
	}
}
console.log("Add my name to the end of the array:");
if (!people.includes("Rina")) {
	people.push("Rina");
	console.log(people);
}
console.log("Iterate through all the names in the array:");
for (let i = 0; i < people.length; ++i) {
	console.log(people[i]);
	if (people[i] == "Jason") {
		console.log("Exit from loop after Jason");
		break;
	}
}
console.log("Use slice to create a copy of the array, and remove myself and Mary:");
let newList;
for (i = 0; i < people.length; ++i) {
	if (people[i] == "Mary" || people[i] == "Rina") {
		if (i == (people.length - 1)) {
			newList = people.slice(0, i);
			people = newList;
		}
		else {
			newList = people.slice(i + 1);
			people = newList;
		}	
	}	
}
console.log(newList);

let people1 = ["Greg", "Mary", "Devon", "James", "Rina"];
console.log("New full array:\n", people1);
console.log("Mary's index is: " + people1.indexOf("Mary"));

console.log("The index for 'Foo' is: " + people1.indexOf("Foo") + " because the indexOf function returns -1 when the search parameter is not found");

let last = people1.length - 1;
console.log("The index of last is: " + (people1.length - 1) + ". The value of last is: " + people1[people1.length - 1]);

//Exercise 3: Repeat the Question 
/*
Prompt the user for a number, while the number is smaller than 10 continue asking the user for a new number.
Tip : Which while loop is more relevant for this situation?
Hint : Check the data type you receive from the prompt (ie. typeof method)
*/
console.log("--------------------------------------------------------------------");
console.log("Exercise 3:");
let num = 0;
do {
	num = prompt("Please enter a number");
}
while (num < 10 || isNaN(num));

//Exercise 4: Attendance
/*
Given the object provided where the key is the students name and the value is the country they are from.
Prompt the student for their name :
If the name is in the object, console.log the name of the student and the country they come from.
example: "Hi! I'm [name], and I'm from [country]."
Hint: Look up the statement if ... in
If the name is not in the object, console.log: "Hi! I'm a guest."
*/
console.log("--------------------------------------------------------------------");
console.log("Exercise 4:");
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}
let guest = prompt("Please enter your name");
let result = 0;
for (let x in guestList) {
	if (x == guest) {
		result = 1; //Use of additional variable: for...in loop for objects - is there a method/way to check if the iteration has reached the last object (before exiting the loop)?
		console.log("Hi! I'm " + x + ", and I'm from " + guestList[x] + ".");
		break;
	}
}
if (result == 0) {
	console.log("Hi! I'm a guest.");
}

//Exercise 5: Family
/*
Create an object called family with a few key value pairs.
Console.log the keys. (using a for loop).
Console.log the values. (using a for loop).
*/
console.log("--------------------------------------------------------------------");
console.log("Exercise 5:");
let family = {
	mother: "Nadia",
	father: "Dmitry",
	brother: "Vitaly",
	grandmother: "Zhanna",
	grandfather: "Yaakov"
}
console.log("Iterating over keys:");
for (let y in family) {
	console.log(`${y}`);
}
console.log("Iterating over values:");
for (let z in family) {
	console.log(`${family[z]}`);
}

//Exercise 6: 
/*
Given the object below, console.log “my name is Rudolf the raindeer”
*/
console.log("--------------------------------------------------------------------");
console.log("Exercise 6:");
let details = {
	my: 'name',
	is: 'Rudolf',
	the: 'raindeer'
};
let text = "";
let array = Object.entries(details);
for (let [key, value] of array) {
	text += " " + key + " " + value;
}
console.log(text);


//Exercise 7: Secret Group
/*
A group of friends have decided to start a secret society. 
The society’s name will be the first letter of each of their names sorted in alphabetical order.
Hint: a string is an array of letters
Console.log the name of their secret society.
*/
console.log("--------------------------------------------------------------------");
console.log("Exercise 7:");
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
console.log("Initial array: \n", names);
names.sort();
console.log("Sorted array: \n", names);
let secret = "";
for (let i = 0; i < names.length; ++i) {
	secret += names[i][0];
}
console.log("Name of secret society: \n", secret);
