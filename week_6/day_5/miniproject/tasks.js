//helper function to append a few elements at a time
HTMLElement.prototype.appendCustom = function () {
	for (const child of arguments) {
		this.append(child)
	}
	return this;
}
//Helper function for quickly creating DOM elements
const createElem = (tag, text = '', attributes = {}) => {
	const element = document.createElement(tag)
	
	element.innerText = text
	
	for (const key in attributes) {
		element.setAttribute(key, attributes[key])
	}
	
	return element
}
function displayTasks() {
	const data = JSON.parse(localStorage.getItem('tasks'));
	const button = document.querySelector('clearAll');
	const wrapper = document.getElementById("taskWrapper");
	if (data == null) {
		wrapper.setAttribute("class", "noTasks");
		wrapper.innerHTML = "No Tasks to Show";
	}
	else {
		wrapper.innerHTML = "";
		data.forEach((item, key) => {
			const editing = (typeof item.editing == 'undefined') ? false : item.editing;
			let day = 24 * 60 * 60 * 1000;
			let start = item.startDate;
			start = new Date(start);
			let end = item.endDate;
			end = new Date(end);
			const daysLeft = Math.round(Math.abs((start - end) / day));
			const checkbox = createElem("input", "", { name: "isDone", type: "checkbox", id: key, onclick: "doneClicked()" });
			checkbox.checked = item.status;
			const container = createElem("dl", "", { id: "listTasks" });
			if (item.status) {
				container.classList.add("task-done");
			}
			if (end < new Date()) {
				container.classList.add("task-exp");
			}
			if (editing) {
				wrapper.append(
					container.appendCustom(
						createElem("div", "", { class: "task-top" }).appendCustom(
							createElem("input", "", { value: item.taskName, type: "text", id: `${key}-name` }),
							createElem("textarea", item.description, { value: item.description, id: `${key}-description` }),
							createElem("dt", `Start Date: ${item.startDate}`, { id: "start", class: "task" }),
							createElem("dt", `Days Remaining: ${daysLeft}`, { id: "days", class: "task" }),
							checkbox,
							createElem("label", "Done?", { for: "isDone", type: "checkbox" }),
						),
						createElem("button", "Delete Task", { id: key, class: "view delete", onclick: "deleteTask()" }),
						createElem("button", "Save", { id: key, class: "view save", onclick: "saveTask()" })
					)
				)
			}
			else {
				wrapper.append(
					container.appendCustom(
						createElem("div", "", { class: "task-top" }).appendCustom(
							createElem("button", `${item.taskName}`, { type: "button", id: "task", class: "collapsible", style: "font-size: 1em; font-weight: bold; cursor: pointer; border: none; background: inherit; text-align: left; padding: 0", onclick: "expandDesc()" }),
							createElem("dt", `${item.description}`, { id: "description", class: "description" }),
							createElem("dt", `Start Date: ${item.startDate}`, { id: "start", class: "task" }),
							createElem("dt", `Days Remaining: ${daysLeft}`, { id: "days", class: "task" }),
							checkbox,
							createElem("label", "Done?", { for: "isDone", type: "checkbox" }),
						),
						createElem("button", "Delete Task", { id: key, class: "view delete", onclick: "deleteTask()" }),
						createElem("button", "Edit", { id: key, class: "view edit", onclick: "editTask()" })
					)
				)
			}
		})
	}
}
function doneClicked() {
	console.log(event.target.checked);
	const tasks = JSON.parse(localStorage.getItem('tasks'));
	localStorage.setItem("tasks", JSON.stringify(tasks.map((task, key) => {
		if (parseInt(event.target.id) == key) {
			return { ...task, status: event.target.checked };
		}
		else return task;
	})));
	displayTasks();
}
const deleteBtn = document.getElementById("delete");
function deleteTask() {
	const tasks = JSON.parse(localStorage.getItem('tasks'));
	localStorage.setItem("tasks", JSON.stringify(tasks.filter((task, key) => {
		console.log(key);
		console.log(event.target.id);
		return key != parseInt(event.target.id);
	})));
	event.target.parentElement.remove();
}
function editTask() {
	const tasks = JSON.parse(localStorage.getItem('tasks'));
	localStorage.setItem("tasks", JSON.stringify(tasks.map((task, key) => {
		if (parseInt(event.target.id) == key) {
			return { ...task, editing: true };
		}
		else return task;
	})));
	displayTasks();
}
function saveTask() {
	const tasks = JSON.parse(localStorage.getItem('tasks'));
	localStorage.setItem("tasks", JSON.stringify(tasks.map((task, key) => {
		if (parseInt(event.target.id) == key) {
			console.log("equal");
			const taskName = document.getElementById(`${key}-name`).value;
			const description = document.getElementById(`${key}-description`).value
			return { ...task, editing: false, description, taskName };
		}
		else return task;
	})));
	displayTasks();
}
function expandDesc() {
	let content = event.target.nextElementSibling;
	if (content.style.display == "block") {
		content.style.display = "none";
	}
	else {
		content.style.display = "block";
	}
}
function clearAll() {
	localStorage.clear();
	displayTasks();
}
