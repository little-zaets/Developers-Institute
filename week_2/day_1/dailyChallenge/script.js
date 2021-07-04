//Exercise 1
//-----------------------------------------------------------
//remove banana
let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.shift();
console.log(fruits);

//sort in alphabetical order
fruits.sort();
console.log(fruits);

//add Kiwi to end of array
fruits.push("Kiwi");
console.log(fruits);

//remove Apples from array using different method from ex1
fruits.splice(0, 1);
console.log(fruits);

//reverse sort
fruits.reverse();
console.log(fruits);

//Exercise 2
//------------------------------------------------------------
//access element in multidimensional array
let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
let chosenFruit = moreFruits[1][1];
console.log(chosenFruit);