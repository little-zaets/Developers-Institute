//Exercise 1: HTTP
//Create a new folder, name it - node-server
//Create a server file, name it - myserver.js
const http = require('http');
//In this file, use http to create a server.:
const server = http.createServer((request, response) => {
	console.log("I am listening");
	//You should return at least three different lines of HTML to the browser. (Use only HTML tags, no HTML files)
	response.write("<h1>hello</h1>");
	response.write("<h2>hello2</h2>");
	response.write("<h3>hello3</h3>");
	response.end();
})
//Your server should run on http://localhost:3000/
server.listen(3000);