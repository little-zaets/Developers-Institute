//Exercise 3: Users and Style
/*
Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
*/

//Add a “light blue” background color and some padding to the <div>.
let newDiv = document.body.getElementsByTagName("div")[0];
newDiv.setAttribute('style', "background-color:lightblue; padding: 5px;");

//Do not display the first name (John) in the list.
let displayLi = document.getElementsByTagName("ul")[0].getElementsByTagName("li")[0];
displayLi.setAttribute("style", "display: none;");
console.log(displayLi);

//Add a border to the second name (Pete).
let pete = document.getElementsByTagName("ul")[0].getElementsByTagName("li")[1];
pete.setAttribute("style", "border: 2px solid blue;");
console.log(pete);

//Change the font size of the whole body.
document.body.setAttribute("style", "font-size: 1.5em;");

