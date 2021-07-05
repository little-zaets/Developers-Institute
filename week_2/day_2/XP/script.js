//Exercise 1
/*
Create 2 variables, x and y. Each of them should have a different numeric value.
Write an if/else statement that checks which number is bigger.
*/
console.log("--------------------------------------------------------------------");
console.log("Exercise 1:");
let x = 2;
let y = 5;
if (x > y) {
	console.log("x is the biggest number");
}
else if (x < y) {
	console.log("y is the biggest number");
}
else {
	console.log("Both numbers are equal");
}

//Exercise 2
/*
Create a variable called newDog where it’s value is “Chihuahua”.
Check and display how many letters are in newDog.
Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
Check if the variable newDog is equal to “Chihuahua”
if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
else, console.log ‘I dont care, I prefer cats’
*/
console.log("--------------------------------------------------------------------");
console.log("Exercise 2:");
let newDog = "Chihuahua";
let numLetters = newDog.length;
console.log("There are", numLetters, "characters in the string");
console.log("Uppercase: ", newDog.toUpperCase());
console.log("Lowercase: ", newDog.toLowerCase());
if (newDog === "Chihuahua") {
	console.log("I love Chihuahuas, it's my favorite dog breed");
}
else {
	console.log("I don't care, I prefer cats");
}

//Exercise 3
/*
Prompt the user for a number and save it to a variable.
Check whether the variable is even or odd.
If it is even, display: “x is an even number”. Where x is the actual number the user chose.
If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.
*/
console.log("--------------------------------------------------------------------");
console.log("Exercise 3:");
let num = prompt("Please enter a number");
if (num % 2 == 0) {
	alert(num + " is an even number");
}
else {
	alert(num + " is an odd number");	
}
//Exercise 4
/*
Using the array above, console.log the number of users in a group chat based on the following rules:
If there is no users (the users array is empty), console.log “no one is online”.
If there is 1 user, console.log “<name_user> is online”.
If there are 2 users, console.log “<name_user1> and <name_user2> are online”.
If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.
For example, if there are 5 users, it should display:
name_user1, name_user2 and 3 more are online
*/
console.log("--------------------------------------------------------------------");
console.log("Exercise 4:");
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
let numUsers = users.length;

if (numUsers > 0) {
	if (numUsers == 1) {
		console.log(users[0] + " is online");
	}
	if (numUsers == 2) {
		console.log(users[0] + " and " + users[1] + " are online");
	}
	else {
		console.log(users[0] + ", " + users[1] + " and " + (numUsers - 2) + " more are online");
	}
}
else {
	console.log("no one is online");
}