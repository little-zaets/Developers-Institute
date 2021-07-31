// HTMLElement.prototype.appendCustom = function () {
// 	for (const child of arguments) {
// 		this.append(child)
// 	}
// }
//Helper function for quickly creating DOM elements
const createElem = (tag, text = '', attributes = {}) => {
	const element = document.createElement(tag)
	
	element.innerText = text
	
	for (const key in attributes) {
		element.setAttribute(key, attributes[key])
	}
	
	return element
}
//retrieve DOM
const body = document.querySelector("body");
const form = document.getElementById("currencies");
const from = document.getElementById("from");
const to = document.getElementById("to");
const select = document.getElementsByTagName("select");
const button = document.getElementById("submit");
//universal function to fetch API data
const getData = async (url) => {
	try {
		const fetched = await fetch(url);
		if (fetched.status != 200) {
			throw new Error("Something went wrong: ");
		}
		else {
			const response = await fetched.json();
			return response;
		}
	}
	catch(error) {
		console.log("Error: ", error);
    }
}
//generate currencies and apply them to select options
const createCurrencies = async () => {
	const currencyList = "http://api.currencylayer.com/list?access_key=6b543e9294a71d26a6606f5449cf71a6&format=1";
	let list = await getData(currencyList);
	for (let item in list.currencies) {
		let option = createElem("option", `${item} - ${list.currencies[item]}`, {
			value: `${item}`,
			title: `${list.currencies[item]}`
		});
		if (item == "USD") {
			option.setAttribute("selected", "true");	
		}
		from.append(option.cloneNode(true));
		to.append(option);
	}
}
body.addEventListener("onload", createCurrencies);
//submit inputted amount and output resulting conversion
form.addEventListener("submit", submitInput);
async function submitInput(e) {
	e.preventDefault();
	//retrieve user input - amount needed to be converted
	let input = document.getElementById("amount").value;
	input = parseFloat(input);
	//get selected options for to and from
	let fromVal = from.options[from.selectedIndex].value;
	let toVal = to.options[to.selectedIndex].value;
	//call api + insert the currencies selected
	const realTimeRatesFrom = `http://api.currencylayer.com/live?access_key=6b543e9294a71d26a6606f5449cf71a6&currencies=${fromVal}&format=1`;
	const realTimeRatesTo = `http://api.currencylayer.com/live?access_key=6b543e9294a71d26a6606f5449cf71a6&currencies=${toVal}&format=1`;
	try {
		let valFrom = await getData(realTimeRatesFrom);
		let valTo = await getData(realTimeRatesTo);
		console.log(valFrom.success);
		console.log(valTo.success);
		if (!valFrom.success || !valTo.success) {
			throw new Error("API data retrieved had an error: ");
		}
		else {
			valFrom = 1/(valFrom.quotes[`USD${fromVal}`]); //default currency is USD -> dividing resulting value by 1 to perform conversion
			valTo = valTo.quotes[`USD${toVal}`];
			//conversion calculation for from, to and input amount
			let finalAmount = (valFrom * valTo) * input;
			//write output value to the document
			let output = document.getElementById("result").value = finalAmount;
		}
	}
	catch (error) {
		console.log("Error: ", error);
	}
}
