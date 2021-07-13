//Exercise 1
//Using DOM methods, remove the last paragraph in the <article> tag from the DOM.
let article = document.getElementsByTagName("article");
let toRemove = article[0].lastElementChild;
article[0].removeChild(toRemove);

//Add an event listener which will change the background color of the h2 tag from the DOM when clicked on.
let button = document.getElementById("bg");
button.addEventListener("click", function () {
	document.getElementsByTagName("h2")[0].style.backgroundColor = "lightblue";
});

//Set the font size of the h1 tag to a random pixel size between 0 to 100.(Check out this documentation)
let randPix = Math.floor(Math.random() * 100);
//console.log(randPix);
document.getElementsByTagName("h1")[0].style.fontSize = randPix + "px";

//Add an event listener which will hide the h3 when it’s clicked on (use the display property).
let button1 = document.getElementById("rm");
button1.addEventListener("click", function () {
	document.getElementsByTagName("h3")[0].style.display = "none";
	button1.style.display = "none";
});

//Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
let button2 = document.getElementById("bld");
let allP = document.getElementsByTagName("p");
//console.log(allP);
button2.addEventListener("click", function () {
	for (let i = 0; i < allP.length; ++i) {
		document.getElementsByTagName("p")[i].style.fontWeight = "bold";
	}
});

//When the “Submit” button of the form is clicked:
/// get the values of the input tags
/// make sure that they are not empty,
let values = document.forms.myForm;
let input1 = values.elements.fname.value;
let input2 = values.elements.lname.value;
let button4 = document.getElementById("myForm");
console.log(button4);
button4.addEventListener("submit", function (event) {
	if ((document.getElementById("fname").value).length != 0) {
		input1 = document.getElementById("fname").value;
		input2 = document.getElementById("lname").value;
		console.log(input1);
		console.log(input2);
		event.preventDefault();
		appendTable(input1, input2);
	}
	else {
		alert("Empty");
	}
});
console.log(document.getElementById("fname").value);
console.log(document.getElementById("lname").value);

/// then append them to a HTML table, in the div, below the form.
function appendTable(input1, input2) {
	let usersAnswer = document.getElementsByClassName("usersAnswer")[0];
	let table = document.createElement("TABLE");
	table.setAttribute("id", "answersTable");
	usersAnswer.appendChild(table);
	let row = table.insertRow(0);
	let cell = row.insertCell(0);
	let column = row.insertCell(1);
	cell.innerHTML = "<b>Firstname</b>";
	column.innerHTML = "<b>Lastname</b>";
	let row1 = table.insertRow(1);
	let cell1 = row1.insertCell(0);
	let column1 = row1.insertCell(1);
	cell1.innerHTML = `${input1}`;
	column1.innerHTML = `${input2}`;
}

//When you hover on the 2nd paragraph, it should fade out 
let p2 = allP[1];
p2.addEventListener("mouseover", fade);
function fade() {
	let intervalId = setInterval(function () {
		if (!p2.style.opacity) {
			p2.style.opacity = 1;
		}
		if (p2.style.opacity > 0) {
			p2.style.opacity -= 0.1;
		}
		else {
			clearInterval(intervalId);
		}
	}, 200);
}