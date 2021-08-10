//const cors = require('cors');
const express = require('express');
const app = express();

//app.use(cors);

app.get('/', (req, res) => {
	const user = {
		firstname: "John",
		lastname: "Doe"
	}
	console.log(user);
	res.send(user);
})
app.listen(3000, () => console.log("Server running on port 3000"));
