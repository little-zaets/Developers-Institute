//Exercise 2: Giphy API

//1. Create XMLHttpRequest object
let xhr = new XMLHttpRequest();
//2. Set the request
//CAN USE new searchUrlParams and put search parameters + api key in the created object 
xhr.open('GET', "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&offset=2&limit=10&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
xhr.responseType ='json'
//3. Send the request
xhr.send();
//4. Add events
xhr.onreadystatechange = function() {
  if (xhr.readyState == 0) {
    // unsent
    console.log("unsent")
  } else if(xhr.readyState == 1) {
    // open called
    console.log("open called")
  } else if (xhr.readyState == 2) {
    // response headers received
    console.log("response headers received")
  } else if (xhr.readyState == 3) {
    // response is loading (a data packet is received)
    console.log("response is loading")
  } else if (xhr.readyState == 4) {
  	console.log("xhr object = ", xhr)
    // request complete
    console.log("request complete")
    if (xhr.status != 200) { // analyze HTTP status of the response
    	alert(`Error ${xhr.status}: ${xhr.statusText}`);
  	} else {
		console.log(xhr.response.data);
  	}
  }
};