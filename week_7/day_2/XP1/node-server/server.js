//Exercise 2: http/json
//Create a server file, name it - server.js
//In this file, use http to create a server:
const http = require('http');

const server = http.createServer((request, response) => {
	console.log("I am listening");
	//Send the below Javascript Object to the browser:
	const user = {
		firstname: 'John',
		lastname: 'Doe'
	}
// 	//need to stringify to send text always - http protocal accepts only strings
	response.end(JSON.stringify(user));
})
//Your server should run on http://localhost:8080/
server.listen(8080);