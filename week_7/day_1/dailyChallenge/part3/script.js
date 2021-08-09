//Use the exported module in a script.js file.
const currentDate = require('./main.js');
const http = require('http');
//Create a server with http, set the response header and respond with a message
//that outputs the current date and time from the exported module.
const server = http.createServer((request, response) => {
	JSON.stringify(currentDate.myDate);
	console.log('I am listening....');
	response.writeHead(200);
	response.write("The current date is: " + currentDate.myDate());
	response.end();
});
server.listen(8080);	