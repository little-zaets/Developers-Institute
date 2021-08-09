//Get document elements
const body = document.querySelector("body");
const form = document.getElementById("myForm");
const taskName = document.getElementById("taskName");
const description = document.getElementById("description");
const startDate = document.getElementById("startDate");
const endDate = document.getElementById("endDate");
form.addEventListener("submit", getInput);
let tasks = JSON.parse(localStorage.getItem('tasks'));
if (tasks == null) {
	tasks = [];
}
//get input data and push to objects array + push to local storage
function getInput(e) {
	e.preventDefault();
	let taskObj = {
		taskName: taskName.value,
		description: description.value,
		startDate: startDate.value,
		endDate: endDate.value,
		status: false
	};
	tasks.push(taskObj);
	localStorage.setItem("tasks", JSON.stringify(tasks.sort(({ startDate: a }, { startDate: b }) => {
		const datea = new Date(a);
		const dateb = new Date(b);
		if (datea > dateb) return 1;
		else if (dateb > datea) return -1;
		else return 0;
	})));
	console.log(taskObj);
	console.log(tasks);
	form.reset();
}
