//Create an empty array
let listTasks = [];
const toDo = document.getElementsByClassName("listTasks")[0];
let submit = document.getElementById("submit");
let input = document.getElementById("input");
console.log(toDo);
submit.addEventListener("click", function addTask() {
	if (input.value.length > 0) {
		let task = document.createElement("div");
		task.setAttribute("class", "listItem");
		let checkBox = document.createElement("input");
		checkBox.setAttribute("type", "checkbox");
		checkBox.setAttribute("style", "text-align: center;");
		let textBox = document.createTextNode(input.value);
		task.appendChild(checkBox);
		console.log(textBox.value);
		task.appendChild(textBox);
		toDo.appendChild(task);

	}
});
