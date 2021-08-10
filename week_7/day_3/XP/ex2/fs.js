// //Create an fs.js file, and use the Node js File System to create a new text file and write to it:
const fs = require('fs');

fs.writeFile('test.txt', "You have just written a new file!\n", (err, data) => {
	if (err) {
		console.log(err.message);
	}
	else {
		console.log('Successfully written!');
	}
})

// //Use the Node js File System to append some other text to the text file. (Example:”Buy orange juice”)
fs.appendFile('test.txt', "You have just appended to a file!", (err, data) => {
	if (err) {
		console.log(err.message);
	}
	else {
		console.log('Successfully appended!');
	}
})

//Use the Node js File System to delete the file:
fs.unlink('test.txt', (err) => {
	if (err) {
		console.log(err.message);
	}
	else {
		console.log('Successfully deleted!');
	}
})