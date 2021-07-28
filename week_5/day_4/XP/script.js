//Exercise 1: Conversion
//Convert the below promise into async await:
/* fetch("https://swapi.dev/api/starships/9/")
 	.then(response => response.json())
	.then(console.log); arie adi: 037634180
*/
let test = async () => {
	let fetched = await (fetch("https://swapi.dev/api/starships/9/"));
	let response = await fetched.json();
	console.log(response);
}
test();

//Exercise 2: Analyze
//Analyze the code provided below what will be the outcome?
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
//Outcome: 
/*'calling'
wait 20 seconds (2000 milliseconds in the code, not 2500)
'resolved'
*/
