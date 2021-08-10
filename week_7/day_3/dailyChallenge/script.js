//Create an fs.js file and use the Node js File System to read the right-left file:
//”>” means go right
//”<” means go left
const fs = require('fs');

fs.readFile('rightleft.txt', (err, data) => {
  	if (err) {
    	console.log(err.message);
 	}
  	else {
		totalSteps(data.toString());
		firstTime(data.toString());
  	}
});
//Use the corresponding JavaScript operations to calculate the Total Steps between right > and left < (The answer should be: 74 steps to the right)
function totalSteps(data) {
	const dataArr = data.split("");
	const left = "<";
	const right = ">";
	let pos = 0;
	for (let i = 0; i < dataArr.length; ++i) {
		if (dataArr[i] == right) {
			++pos;
		}
		if (dataArr[i] == left) {
			--pos;
		}
	}
	console.log("Total Steps: ", pos);
}
//Use the corresponding JavaScript operations to calculate when we first reach the left side: -1 (The answer should be: In step 1795 you reach the left side)
function firstTime(data) {
	const dataArr = data.split("");
	const left = "<";
	const right = ">";
	let pos = 0;
	let steps = 0;
	for (let i = 0; i < dataArr.length; ++i) {
		++steps;
		if (dataArr[i] == right) {
			++pos;
		}
		if (dataArr[i] == left) {
			--pos;
			if (pos == -1) {
				break;
			}
		}
	}
	console.log("Total Steps: ", pos);
	console.log("First time in left side is in: ", steps + " steps");
}
