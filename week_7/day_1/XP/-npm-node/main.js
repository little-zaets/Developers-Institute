//Exercise 1 : Hello Node.Js
//Create a new folder called - npm-node
//Create a JS file called - main.js
//Add the following code to the file main.js :
// let a = 5;
// let b = 10;
// //Write some more code in the main.js file so when you run it in the command prompt it logs Hello you are 15
console.log('Hello you are', a + b);

// //Exercise 2 : Hello Node.Js #2
console.log("Hi, thanks for running me with npm start!");

//Exercise 3 : Nodemon
// Install nodemon
// Write the following code, in a main.js file:
let a = 5;
let b = 10;
let x;
let c = 6;
x = a + b;
//Add some more code in the main.js so when you run it using nodemon, it logs the sum of a + b as a first run.
//Tip: you need to change the package.json file in order to achieve this.
console.log("First Run:", a + b);
//Update the main.js file to console.log the sum of x + c
console.log("Second Run:", x + c);