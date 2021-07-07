//Exercise 1: Information
/* 
Part 1
Create a function called infoAboutMe() that takes no parameter.
The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
Call the function.

console.log("--------------------------------------------------------------------");
console.log("Exercise 1 Part 1:");

function infoAboutMe() {
	console.log("My name is Rina. I am 28 and I am from Canada. I enjoy coding and googling everything.");
}

infoAboutMe();


Part 2
Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
Call the function twice with the following arguments:
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")

console.log("Exercise 1 Part 2:");
function infoAboutPerson(personName, personAge, personFavoriteColor) {
	console.log(`Your name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}`);
}

infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

/*
Part 3
Add a parameter personHobbies to the function infoAboutPerson(personName, personAge, personFavoriteColor, personHobbies).
The function should
console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
console.log the person’s hobbies one by one (ie. loop through the array of hobbies).
Call the function twice with the following arguments:
infoAboutPerson("David", 45, "blue", ["tennis", "painting"])
infoAboutPerson("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"])

console.log("Exercise 1 Part 3:");
function updatedInfo(personName, personAge, personFavoriteColor, personHobbies) {
	console.log(`Your name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor} and your hobbies are: `);
	for (let i = 0; i < personHobbies.length; ++i) {
		console.log(personHobbies[i]);
	}
}
updatedInfo("David", 45, "blue", ["tennis", "painting"])
updatedInfo("Josh", 12, "yellow", ["videogames", "hanging out with friends", "playing cards"])

//Exercise 2: Keyless Car
/*
Ask the user for their age, and save the value to a variable.
Create a function called checkDriverAge() that will notify the user if they are permitted to drive. They must be at least 18 to drive.
if the user is too young, alert “Sorry, you are too young to drive this car. Powering off”
if the user is old enough, alert “You are old enough to drive, Powering On. Enjoy the ride!”
if the user just turned 18, alert “Congratulations on your first year of driving. Enjoy the ride!”
Call the function.
Instead of using prompt to ask the user for their age, have the checkDriverAge() function accept an argument age.

console.log("--------------------------------------------------------------------");
console.log("Exercise 2:");
function checkDriverAge(givenAge) {
	if (isNaN(givenAge)) {
		return alert("Entered content is not a number, please refresh to try again");
	}
	if (givenAge < 18) {
		return alert("Sorry, you are too young to drive this car. Powering off");
	}
	else if (givenAge > 18) {
		return alert("You are old enough to drive, Powering On. Enjoy the ride!");
	}
	else {
		return alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

givenAge = prompt("Please enter your age");
checkDriverAge(givenAge);

//Exercise 3: Odd or Even

Create a function called checkNumber() that takes no parameter.
In the function, loop through numbers 0 to 100.
Add an if/else block
If the number is even, console.log "the number <number> is even"
Else, console.log "the number <number> is odd"
Call the function

console.log("--------------------------------------------------------------------");
console.log("Exercise 3: ");
function checkNumber() {
	let i = 0;
	while (i <= 100) {
		if (!(i % 2)) {
			console.log("The number " + i + " is even");
		}
		else {
			console.log("The number " + i + " is odd");
		}
		i++;
	}
}
checkNumber();

//Exercise 4: Find The Numbers Divisible By 23
/*
Create a function call isDivisible() that takes no parameter.
In the function, loop through numbers 0 to 500."
Console.log all the numbers divisible by 23.
At the end, console.log the sum of all numbers that are divisible by 23.

console.log("--------------------------------------------------------------------");
console.log("Exercise 4: ");
function isDivisible(divisor) {
	let numArr = [];
	for (let j = 0; j <= 500; ++j) {
		if (!(j % divisor)) {
			numArr.push(j);
			console.log(j + " is divisible by " + divisor);
		} 
	}
	console.log(numArr);
	let sum = 0;
	for (j = 1; j < numArr.length; ++j) {
		sum += numArr[j];
	}
	console.log(`The total sum is: ${sum}`);
}

isDivisible(23);
console.log("Bonus: ");
divisor = 3; 
isDivisible(divisor);
divisor = 45;
isDivisible(divisor);

//Exercise 5: Amazon Shopping

Create a function called checkBasket().
It should:
prompt the user for an item
let the user know if the item is in the basket
Hint: Use the in keyword inside the conditional

console.log("--------------------------------------------------------------------");
console.log("Exercise 5: ");
let amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
}
function checkBasket() {
	let item = prompt("Which item are you looking for?");
	//let basket = Object.keys(amazonBasket);
	if (item in amazonBasket) {
		return alert("The item is in the basket");
	}
	else {
		return alert("The item is not in the basket");
		}
	}

checkBasket();

//Exercise 6: What's in my Wallet
/*
Given a item price and an array representing the amount of change in your pocket, determine whether or not you can afford the item.
Change will always be represented in the following order: quarters, dimes, nickels, pennies.

console.log("--------------------------------------------------------------------");
console.log("Exercise 6: ");

let change = [2, 100, 15, 20];
let cost = 17.75;
function changeEnough(change, cost) {
	let total = calculateChange(change);
	console.log(`You have $${total} in your pocket. \nThe cost of the item is $${cost}. \n`);
	if (total >= cost) {
		console.log("You can afford this item.");
		return true;
	}
	else {
		console.log("You cannot afford this item.");
		return false;
	}
}

function calculateChange(change) {
	let quarters = 0.25
	let dimes = 0.10
	let nickels = 0.05
	let pennies = 0.01
	let y = 0;
	let total = 0;
	while (y <= change.length) {
		switch (y) {
			case 0:
				total += (change[y] * quarters);
				break;
			case 1: 
				total += (change[y] * dimes);
				break;
			case 2:
				total += (change[y] * nickels);
				break;
			case 3:
				total += (change[y] * pennies);
				break;
			default:
				break;
		}
		y++;
	}

	return total;
}
changeEnough(change, cost);
change1 = [0, 0, 15, 0];
changeEnough(change1, 0.75);

//Exercise 7: Shopping List

Add thestock and prices objects to your js file.
Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
Create a function called myBill() that takes no parameters.
The function should return the total price of your shoppingList. In order to do this you must follow these rules:
The item must be in stock.
If the item is in stock find out the price in the prices object.
Call the myBill() function.
Bonus: If the item is in stock, decrease the item’s stock by 1

console.log("--------------------------------------------------------------------");
console.log("Exercise 7: ");
let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList = ["banana", "blueberry", "apple"];
console.log("The items in the shopping list are: \n");
console.log(shoppingList);
console.log("The current stock is: ");
console.log(stock);
function myBill() {
	let totalBill = 0;
	for (let i = 0; i < shoppingList.length; ++i) {
		let item = shoppingList[i];
		if (item in stock) {
			let qty = stock[item];
			if (qty > 0) {
				totalBill += prices[item];
				stock[item]--;
			}
		}
	}
	console.log(`The total bill for 1 of each item in the list that are in stock is $${totalBill}.`);
	console.log("The remaining stock is: ");
	console.log(stock);
}
myBill();

//Exercise 8: Tips

John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

The calculator has the following rules:
1. Tip 20% when the bill is less than $50,
2. Tip 15% when the bill is between $50 and $200,
3. Tip 10% if the bill is more than $200.

Ask John for the amount of the bill.
Create the program explained above.
In the end, John would like to know:
Tip amount.
Final bill (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

console.log("--------------------------------------------------------------------");
console.log("Exercise 8: ");
let amount = prompt("How much was the bill?");
amount = Number(amount);
if (isNaN(amount)) {
	alert("Value entered is not a number, please refresh and try again")
}
function calculateBill(amount) {
	let tip = 0;
	if (amount < 50) {
		tip = 0.2 * amount;
	}
	else if (amount >= 50 && amount <= 200) {
		tip = 0.15 * amount;
	}
	else {
		tip = 0.10 * amount;	
	}
	let totalSum = amount + tip;
	console.log("You tipped $" + tip.toFixed(2));
	console.log("The final bill is $" + totalSum.toFixed(2));
}
calculateBill(amount);

//Exercise 9: Vacation Costs

Let’s create functions that calculate your vacation’s costs:
Define a function called hotelCost().
It should ask the user for the number of nights they would like to stay in the hotel.
If the user doesn’t answer or if the answer is not a number, ask again.
The hotel costs $140 per night. The function should return the total price of the hotel.
Define a function called planeRideCost().
It should ask the user for their destination.
The function should return a different price depending on the location.
“London”: 183$
“Paris” : 220$
All other destination : 300$
If the user doesn’t answer or if the answer is not a string, ask again.
Define a function called rentalCarCost().
It should ask the user for the number of days they would like to rent the car.
If the user doesn’t answer or if the answer is not a number, ask again.
Calculate the cost to rent the car. The car costs $40 everyday.
If the user rents a car for more than 10 days, they get a 5% discount.
The function should return the total price of the car rental.
Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost.
Call the function totalVacationCost()
Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function.
*/
console.log("--------------------------------------------------------------------");
console.log("Exercise 9: ");
function hotelCost() {
	let nights = prompt("How many nights will you be staying?");
	while (isNaN(nights) || nights == "") {
		nights = prompt("How many nights will you be staying? Please enter a valid number");
	}
	nights = Number(nights);
	let hotelCost = 140 * nights;
	console.log(hotelCost);
	return hotelCost;
}

function planeRideCost() {
	let planeCost = 0;
	let destination = prompt("Where are you flying?").toLowerCase();
	while (!isNaN(destination) || destination == "") {
		destination = prompt("Where are you flying? Please enter a valid destination").toLowerCase();
	}
	if (destination == "london") {
		planeCost = 183;
	}
	else if (destination == "paris") {
		planeCost = 220;
	}
	else {
		planeCost = 300;
	}
	console.log(planeCost);
	return planeCost;
}

function rentalCarCost(nights) {
	let rentalCost = 40 * nights;
	if (nights > 10) {
		rentalCost -= (0.05 * rentalCost);
	}
	console.log(rentalCost);
	return rentalCost;
}

function totalVacationCost() {
	let x = hotelCost();
	let y = planeRideCost();
	let z = rentalCarCost(x/140);
	let totalCost = x + y + z;
	console.log(`The hotel nights cost $${x.toFixed(2)}, the ticket costs $${y.toFixed(2)}, the rental car costs $${z.toFixed(2)}`);
	console.log(`The total cost for this vacation is $${totalCost.toFixed(2)}`);
}

totalVacationCost();