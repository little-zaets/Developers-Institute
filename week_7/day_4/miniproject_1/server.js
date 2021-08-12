const cors = require('cors');
const exp = require('express');
const bp = require('body-parser');
const fs = require('fs');

const app = exp();
app.use(cors());
app.use(bp.urlencoded({extended:false}));
app.use(bp.json());

app.use('/',exp.static(__dirname+'/public'));
//placeholder/pseudopath - used by frontend as access point to server
app.post('/shopping',(req,res)=>{
	console.log(req.body);
	let slist = [];
	try {
		const f = fs.readFileSync('./list');
		slist = JSON.parse(f)
	}
	catch(e) {
		console.log(e);
	}
	finally {
		slist.push(req.body);
	}

	fs.writeFile('./list', JSON.stringify(slist), err => {
    	if(err) {
      	console.log('Could not write to file');
    	}
  	})
  	res.send(req.body) //appending just one item
})

app.get('/shopping', (req,res) => {
  	let slist = [];
  	try {
    	const f = fs.readFileSync('./list');
    	slist = JSON.parse(f);
  	}
  	catch(e) {
    	res.send('GET failed: data not found')
  	}
  	res.send(slist)
})

app.listen(8000)