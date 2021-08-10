const exp = require('express');
const app = exp();

// app.use('/', exp.static(__dirname + '/public'));

app.use(exp.static('public'));

app.get('/', (req, res) => {
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));