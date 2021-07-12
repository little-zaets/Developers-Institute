//Exercise 1: Change the Navbar

//In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, 
//using the setAttribute method.
let newDiv = document.getElementById("navBar");
newDiv.setAttribute("id", "socialNetworkNavigation");

//We are going to add a new <li> to the <ul>.
let ul1 = document.getElementsByTagName("ul");
//First, create a new <li> tag (use the createElement method).
let newLi = document.createElement("li");
//Create a new text node with “Logout” as its specified text.
let newLiText = document.createTextNode("Logout");
//Append the text node to the newly created list node (li).
newLi.appendChild(newLiText);
//Finally, append this updated list node to the unordered list above, using the appendChild method.
ul1[0].appendChild(newLi);
//Display the text of each link. (Hint: use the textContent property).
for (ul of ul1) {
	for (li of ul.children) {
		console.log(li.textContent);
	}
}
//Bonus: Use the firstElementChild and the lastElementChild properties to retrieve the first and last li elements from their parent element (ul). 
let ul2 = document.querySelector("ul");
let first = ul2.firstElementChild;
console.log(first);
let last = ul2.lastElementChild;
console.log(last);


