//In a script.js file create a server with http and console.log a message:
let http = require('http');

const server = http.createServer((request, response) => {
	console.log('I am listening....');
	response.writeHead(361);
	response.end("<h1>Hi there at the frontend<h2>");
});
server.listen(3000);	