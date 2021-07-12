//Exercise 2: Users
/*
Bonus
Add a class called student_list to both of the <ul>'s.
Add the classes university and attendance to the first <ul>.
*/
//In the HTML, change the name “Pete” to “Richard”.
let textNode = document.getElementsByClassName("list")[0].getElementsByTagName("li");
textNode[1].textContent = "Richard";

//Change each first name of the two <ul>'s to your name.
let i = 0;
let text = document.getElementsByClassName("list");
while (i < 2) {
	text[i].firstElementChild.textContent = "Rina";
	++i;
}

//At the end of each <ul> add a <li> that says “Hey students”.
let lists = document.getElementsByClassName("list");
for (let ul of lists) {
	let newLi = document.createElement("li");
	let newLiText = document.createTextNode("Hey students");
	newLi.appendChild(newLiText);
	ul.appendChild(newLi);
}

//Delete the name Sarah from the second <ul>.
let toDel = document.getElementsByClassName("list")[1].getElementsByTagName("li");
lists[1].removeChild(toDel[1]);