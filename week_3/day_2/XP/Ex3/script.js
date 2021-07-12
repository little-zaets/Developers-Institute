//Exercise 3
/*
Write a JavaScript program to calculate the volume of a sphere.
*/
let inputBtn = document.getElementById("submit");
inputBtn.addEventListener("submit", calculateRadius);

function calculateRadius(event) {
	let myForm = document.getElementById("MyForm");
	let radius = MyForm.elements.radius;
	let valueRadius = radius.value;
	//same as MyForm.elements.radius.value;
	valueRadius = Math.abs(valueRadius);
	let valueVolume = (4 / 3) * Math.PI * Math.pow(valueRadius, 3);
	valueVolume = valueVolume.toFixed(4);
	document.getElementById('volume').value = valueVolume;
	event.preventDefault();
}
