const robots = [
	{
	id: 1,
	name: 'Leanne Graham',
	username: 'Bret',
	email: 'Sincere@april.biz',
	image: 'https://robohash.org/1?200x200'
	},
	{
	id: 2,
	name: 'Ervin Howell',
	username: 'Antonette',
	email: 'Shanna@melissa.tv',
	image: 'https://robohash.org/2?200x200'
	},
	{
	id: 3,
	name: 'Clementine Bauch',
	username: 'Samantha',
	email: 'Nathan@yesenia.net',
	image: 'https://robohash.org/3?200x200'
	},
	{
	id: 4,
	name: 'Patricia Lebsack',
	username: 'Karianne',
	email: 'Julianne.OConner@kory.org',
	image: 'https://robohash.org/4?200x200'
	},
	{
	id: 5,
	name: 'Chelsey Dietrich',
	username: 'Kamren',
	email: 'Lucio_Hettinger@annie.ca',
	image: 'https://robohash.org/5?200x200'
	},
	{
	id: 6,
	name: 'Mrs. Dennis Schulist',
	username: 'Leopoldo_Corkery',
	email: 'Karley_Dach@jasper.info',
	image: 'https://robohash.org/6?200x200'
	},
	{
	id: 7,
	name: 'Kurtis Weissnat',
	username: 'Elwyn.Skiles',
	email: 'Telly.Hoeger@billy.biz',
	image: 'https://robohash.org/7?200x200'
	},
	{
	id: 8,
	name: 'Nicholas Runolfsdottir V',
	username: 'Maxime_Nienow',
	email: 'Sherwood@rosamond.me',
	image: 'https://robohash.org/8?200x200'
	},
	{
	id: 9,
	name: 'Glenna Reichert',
	username: 'Delphine',
	email: 'Chaim_McDermott@dana.io',
	image:'https://robohash.org/9?200x200'
	},
	{
	id: 10,
	name: 'Clementina DuBuque',
	username: 'Moriah.Stanton',
	email: 'Rey.Padberg@karina.biz',
	image:'https://robohash.org/10?200x200'
	}
];
	
let row = document.getElementById("row");
let input = document.getElementById("searchText");
let mainCard = document.getElementsByClassName("customCol");

input.addEventListener("keyup", function () {
	
	let cards = document.getElementsByTagName("h6");
	
	for (let i = 0; i < cards.length; ++i) {
		let card = document.getElementById(`${i + 1}`);
		console.log(input.value.toUpperCase());
		console.log(card.textContent.toUpperCase());
		if (!card.textContent.toUpperCase().includes(input.value.toUpperCase())) {
			mainCard[i].style.display = "none";
		}
		else {
			mainCard[i].style.display = "";
		}
		console.log(card);
	}
});

function createCards() {
	for (item of robots) {
		createCard(item);
	}
}

function createCard(item) {
	let col = document.createElement("div");
	col.setAttribute("class", "col customCol");
	row.appendChild(col);
	let card = document.createElement("div");
	card.setAttribute("class", "card h-100 customCard");
	card.setAttribute("style", "background-image: url('https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%204/Day5/Mini%20Projects/Mini%20Project%201%20(Robots)/card-pattern.png'); background-color: royalblue; background-size: cover; border-radius: 0.5;");
	col.appendChild(card);
	let cardImg = document.createElement("img");
	cardImg.setAttribute("class", "card-img-top cardImg");
	cardImg.src = item.image;
	card.appendChild(cardImg);
	let cardBody = document.createElement("div");
	cardBody.setAttribute("class", "card-body customCardBody");
	card.appendChild(cardBody);
	let cardTitle = document.createElement("h5");
	cardTitle.setAttribute("class", "card-title");
	cardTitle.textContent = item.username;
	cardBody.appendChild(cardTitle);
	let cardName = document.createElement("h6");
	cardName.setAttribute("id", `${item.id}`)
	cardName.setAttribute("class", "card-text")
	cardName.textContent = item.name;
	cardBody.appendChild(cardName);
	let cardEmail = document.createElement("p");
	cardEmail.setAttribute("class", "card-text");
	cardEmail.textContent = item.email;
	cardBody.appendChild(cardEmail);
}

createCards();
