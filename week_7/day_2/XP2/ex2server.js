//In a server.js file, create your server using express:
const express = require('express');
const app = express();
//Create a route to the root of the app, using a GET request method.
//The path of the route should contain the route parameter id.
//The handler function of the route should respond with the value of the route parameter:
app.get('/:id', (req, res) => {
	console.log(req.params);
	res.send(req.params);
})
app.listen(3000, () => console.log("Server running on port 3000"));
