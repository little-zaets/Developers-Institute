//Create a server file, name it - serverExpress.js
//Use express to create a server:
const express = require('express');
const app = express();
//for requests to the root URL ('/') using GET method
app.get('/', (req, res) => {
	//Return an HTML line of code (Use only HTML tags, no HTML files)
	res.send('<h1>This is an HTML tag</h1>');
})
//Your server should run on http://localhost:3000/
app.listen(3000);