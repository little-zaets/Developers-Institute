//Use the exported module in a script.js file.
const mainjs = require('./main.js');
//In the script.js file declare a variable const b = 5; 

const b = 5
const a = mainjs.largeNumber;
//and use it to output the sum of the imported module + b
console.log(a + b);