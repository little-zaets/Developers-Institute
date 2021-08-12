function sendData(event) {
  	event.preventDefault();
	let item = document.getElementById('item').value;
	let qty = document.getElementById('qty').value;
	//create dict to hold data 
	let sdata = {
		item,
		qty
	}
	//fetch (/shopping) - frontend and backend on the same server and host (origin)
	fetch('http://localhost:8000/shopping',{
		method: 'POST',
		headers: {
			'Content-Type':'application/json'
		},
		body: JSON.stringify(sdata)
	})
	.then(res => res.json())
	.then(data => {
		console.log(data);
		//append this data to page
		document.getElementById('root').innerText += `\n${data.item}: ${data.qty}`;
	})
	.catch(err => {
		console.log(err);
	})
}
//fetch everytime page loads to continuously get and update displayed data
fetch('http://localhost:8000/shopping')
.then(res => res.json())
.then(data => {
    showList(data);
})
function showList(data) {
	let root = document.getElementById('root');
	root.innerHTML = "";
	data.forEach(item =>{
		let div = document.createElement('div');
		div.innerText= `${item.item}: ${item.qty}`;
		root.appendChild(div);
  	})
}