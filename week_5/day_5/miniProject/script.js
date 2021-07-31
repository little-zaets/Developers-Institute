//retrieve DOM elements
let names = document.querySelector("#name");
let height = document.querySelector("#height");
let gender = document.querySelector("#gender");
let birthYear = document.querySelector("#birth-year");
let homeWorld = document.querySelector("#home-world");
let button = document.querySelector("#button");

//retrieve api info 
let retrieve = async() => {
	loading();
	let randomize = Math.floor(Math.random() * 99);
	let apiUrl = "https://swapi.dev/api/people/" + randomize + "/";
	try {
		let fetched = await fetch(apiUrl);
		if (fetched.status != 200) {
			throw new Error("Something went wrong: ");
		}
		else {
			let response = await fetched.json();
			let planet = await getPlanet(response.homeworld);
			displayInfo(response, planet);
			console.log(response);
		}
	}
	catch(error) {
		displayError(error);
		console.log("Something went wrong...");
    }
}
button.addEventListener("click", retrieve);

//display results
let displayInfo = (response, planet) => {
	names.innerText = `Name: ${response.name}`;
	height.innerText = `Height: ${response.height}`;
	gender.innerText = `Gender: ${response.gender}`;
	birthYear.innerText = `Birth Year: ${response.birth_year}`;
	homeWorld.innerText = `Home World: ${planet}`;
}
//loading icon after click
function loading() {
	names.innerHTML = '<i class="fa fa-cog fa-spin fa-2x "></i> <p>Loading...</p>';
	height.innerText = "";
	gender.innerText = "";
	birthYear.innerText = "";
}

//on 404 error
function displayError() {
	names.innerText = "Oh No! That person isn't available.";
	height.innerText = "";
	gender.innerText = "";
	birthYear.innerText = "";
}

//fetch planet via the url provided in the original response
const getPlanet = async(response) => {
	let newUrl = response;
	let planetFetch = await fetch(newUrl);
	if (planetFetch.status != 200) {
		throw new Error("Something went wrong: ");
	}
	else {
		let planetResp = await planetFetch.json();
		console.log(planetResp.name);
		return planetResp.name;
	}
}