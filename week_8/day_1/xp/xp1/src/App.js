import './App.css';

/////Exercise 3:
function App() {
	const sum = 5 + 5;
	return (
    <div>
		<h1>React is {sum} times better with JSX</h1>
    </div>
  );
}

// /////Exercise 4:
const listItems = <ul>
	<li>Apples</li>
	<li>Bananas</li>
	<li>Cherries</li>
</ul>
function App() {
  return (
    <div>
		  <h1>I am a Header.</h1>
		  <h1>I am a Header too.</h1>
		{listItems}
    </div>
  )
}
export default App;

/////Exercise 5: JSX and Form
function App() {
  return (
    <div>
		  <input type="text" />
    </div>
  )
}
export default App;

/////Exercise 6: Object
//Render the output in a React App
const object = {
  first_name: 'Bob',
  last_name: 'Dylan'
};
function App() {
  return (
	<div>
		<h1>My firstname is {object.first_name}</h1>
	 	 <h2>My lastname is {object.last_name}</h2>
	</div>
	  
  )
}
export default App;

/////Exercise 7 : Array & Map
function App() {
	const animals = ['Horse', 'Turtle', 'Elephant', 'Monkey'];
	return (
		<div>
			{
				animals.map((animal, index) => (
					< ul >
						<li key={index}>{animal}</li>
					</ul >
				))
			}	
		</div>
	)
}
export default App;

//Update the previous map function to create a new array of <li>‘s. Each <li> corresponds to one animal from the animals array.
function App() {
	const animals = [{label: 'Horse'},{label: 'Turtle'},{label: 'Elephant'},{label: 'Monkey'}];
	return (
		<div>
			{
				animals.map((animal, index) => (
					< ul>
						<li key={index}>{animal.label}</li>
					</ul >
					))
			}
		</div>
	)
}
export default App;