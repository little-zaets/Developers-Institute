//Daily Challenge : HTML Form
// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, send the data as JSON.
let form = document.querySelector("form");
console.log(form);
form.addEventListener("submit", event => {
	event.preventDefault();
	let user = document.getElementById("firstname");
	console.log(user.value);
	let dict = {
		firstname: document.getElementById("firstname").value,
		lastname: document.getElementById("lastname").value
	}
	console.log(dict);
	document.getElementById("output").innerHTML = JSON.stringify(dict);
});