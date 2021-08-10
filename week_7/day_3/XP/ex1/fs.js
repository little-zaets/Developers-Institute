//Create a text file and write something inside (example: ‘Some Text To See’)
//Create an fs.js file, and inside use the Node JS File System to read the text file and console.log the output in the terminal
const fs = require('fs');

fs.readFile('./ex1.txt', (err, data) => {
	if (err) {
		console.log(err.message);
	}
	else { 
		console.log(data.toString());
	}
})