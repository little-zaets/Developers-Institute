let formInput = document.querySelector("form");
let div = document.getElementsByTagName("div")[0];
let input = document.getElementById("gsearch");
let deleteAll = document.getElementById("deleteAll");
deleteAll.addEventListener("click", function () {
	div.innerHTML = "";
});
formInput.addEventListener("submit", event => {
	event.preventDefault();
	createGetRequest(input.value);
});

function createGetRequest(input) {
	//1. Create XMLHttpRequest object
	let xhr = new XMLHttpRequest();
	//2. Set the request
	//CAN USE new searchUrlParams and put search parameters + api key in the created object 
	xhr.open('GET', `https://api.giphy.com/v1/gifs/random?q=${input}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
	xhr.responseType = 'json'
	input.textContent = "";
	//3. Send the request
	xhr.send();
	//4. Add events
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 0) {
			// unsent
			console.log("unsent")
		}
		else if (xhr.readyState == 1) {
			// open called
			console.log("open called")
		}
		else if (xhr.readyState == 2) {
			// response headers received
			console.log("response headers received")
		}
		else if (xhr.readyState == 3) {
			// response is loading (a data packet is received)
			console.log("response is loading")
		}
		else if (xhr.readyState == 4) {
			console.log("xhr object = ", xhr)
			// request complete
			console.log("request complete")
			if (xhr.status != 200) { // analyze HTTP status of the response
				alert(`Error ${xhr.status}: ${xhr.statusText}`);
			}
			else {
				createImg(xhr.response.data["fixed_height_small_url"]);
			}
		}
	};
}

function createImg(responseUrl) {
	let newDiv = document.createElement("div");
	newDiv.setAttribute("style", "width: 310px; height: 310px;")
	div.appendChild(newDiv);
	let gif = document.createElement("img");
	gif.setAttribute("style", "width: 250px; height: 250px;")
	gif.src = `${responseUrl}`;
	let buttons = document.createElement("button");
	buttons.textContent = "Delete";
	newDiv.appendChild(gif);
	newDiv.appendChild(buttons);
	buttons.addEventListener("click", deleteGif);
}

function deleteGif(event) {
	event.target.parentElement.remove();
}