fetch('http://localhost:3000')
	.then(res => res.json())
	.then(data => {
    	let root = document.getElementsByClassName('body')[0];
      	root.innerHTML = data.message
    })
    .catch(e => {
     	 console.log(e);
    })

	