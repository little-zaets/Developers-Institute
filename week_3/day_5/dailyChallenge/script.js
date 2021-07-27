//Daily Challenge: JS Basics
//Write a JS program to print the letter A using stars.

let rows = 7;
let columns = 7;
for (let i = 0; i < rows; ++i) {
	let char = "";
	for (let j = 0; j <= i && j < rows; ++j) {
		if (i == 0 && j == 2) {
			char += "  ***  ";
			break;
		}
		if (i > 0 && i < 3 && j == 1) {
			char += " *";
		}
		if (i > 0 && i < 3 && j > 1 && j < ) {
			char += "*";
		}
		if (i == 3 && j > 0 && j < 6) {
			char += "***"
		}
		if (i > 0 && i > 3 && j == 5) {
			char += "* ";
			break;
		}
		console.log(char);
	}
	console.log(char);
}