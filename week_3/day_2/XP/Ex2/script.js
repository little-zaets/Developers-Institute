//Exercise 2: Transform the Sentence
//Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph.
function getBoldItems() {
	let p = document.getElementsByTagName("strong");
	return p;
}
//getBoldItems();

//Create a function called highlight() that changes the color of all the bold text to blue.
function highlight() {
	let p1 = getBoldItems();
	for (let i = 0; i < p1.length; ++i) {
		p1[i].style.color = "blue";
	}
}
highlight();

//Create a function called return_normal() that changes the color of all the bold text back to black.
function return_normal() {
	let p2 = document.getElementsByTagName("strong");
	if (p2.length != 0) {
		for (let i = 0; i < p2.length; ++i) {
			p2[i].style.color = "black";
		}
	}
}
return_normal();

//Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto the paragraph), 
//and the function return_normal() onmouseout(ie.when the mouse pointer is moved out of the paragraph). 

//Changes in HTML file