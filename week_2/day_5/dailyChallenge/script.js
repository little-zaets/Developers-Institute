//99 Bottles of Beer
/*
Have you heard the infamous song “99 Bottles of Beer?”
In ths exercise you need to console.log the lyrics to the song 99 Bottles of Beer as an output.

Prompt the user for a number to begin counting down bottles.
In the song everytime a bottle falls we subtract the bottles by 1.
What your code should do is:
instead of subtracting by 1, everytime a bottle drops the subtracted number should go up by 1
For example the first time a bottle drops we subtract by 1, the second time we subtract by 2 and so on.
*/

function countBottles() {
	let totalBottles = prompt("How many bottles do we have on the wall?");
	while (isNaN(totalBottles)) {
		totalBottles = prompt("How many bottles do we have on the wall? Please enter a number");
	}
	totalBottles = Number(totalBottles);
	let fallenBottles = 1; 
	for (let i = totalBottles; i >= 0 && fallenBottles <= totalBottles; ++i) {
		printLyrics(totalBottles, fallenBottles);
		totalBottles -= fallenBottles;
		++fallenBottles;
		console.log(`${totalBottles} bottles of beer on the wall`);
	}
}

function printLyrics(totalBottles, fallenBottles) {
	console.log(`${totalBottles} bottles of beer on the wall\n${totalBottles} bottles of beer`);
	if (fallenBottles < 2) {
		console.log(`Take ${fallenBottles} down, pass it around`);
	}
	else {
		console.log(`Take ${fallenBottles} down, pass them around`);
	}
}
countBottles();