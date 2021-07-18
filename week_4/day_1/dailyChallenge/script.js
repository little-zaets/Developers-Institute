
const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];
// Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
let pArray = [];
gameInfo.forEach(item => {
	// item["username"] += "!";
	pArray.push(item["username"]+"!");
});


// Create an array using forEach that contains the usernames of all players with a score bigger than 5.
psArray = [];
gameInfo.forEach(item => {
	let userScore = item["score"] > 5 ? psArray.push(item["username"]) : console.log(`${item["username"]}'s score is not higher than 5: ${item["score"]}`);
});
console.log("Array of users with a score higher than 5:\n", psArray);

// Find and display the total score of the users.
let total = 0;
gameInfo.forEach(item => {
	total += item["score"];
});
console.log("Sum of all scores:", total);