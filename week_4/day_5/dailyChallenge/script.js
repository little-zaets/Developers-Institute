//Daily Challenge: Anagram
//Create a function that takes in two strings as two parameters 
//and returns a boolean that indicates whether or not the first string is an anagram of the second string.
let isAnagram = (first, second) => sortStr(first) == sortStr(second);
function sortStr(str) {
	return str.toLowerCase().split("").sort().join("").trim();
}
console.log(isAnagram("Dusty", "stUdy")); //true
console.log(isAnagram("night", "  thing  ")); //true
console.log(isAnagram("   state", "taste  ")); //true
console.log(isAnagram("cider", "cried")); //true
console.log(isAnagram("elbow   ", "       below")); //true
console.log(isAnagram("turbine", "study")); //false