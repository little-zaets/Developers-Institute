//Exercise 1 : Analyzing
//Analyze these pieces of code before executing them. What will be the outputs?
//------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result); //result = ['bread, 'carrot', 'potato', 'chicken', 'apple', 'orange'];

//------2------
const country = "USA";
console.log([...country]); //result = ['U', 'S', 'A'];

//------Bonus------
let newArray = [...[,,]];
console.log(newArray); //result = ['undefined', 'undefined'];

//Exercise 2 : Employees
//Using the map() method, say hello to the users using only their firstname (ie. “Hello Bradley”, “Hello Chloe” ect…)
let users = [ 	{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             	{ firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             	{ firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             	{ firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             	{ firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             	{ firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
				{ firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
];

let newUsers = users.map(person => `Hello ${person.firstName}`);
for (let user in newUsers) {
	console.log(newUsers[user]);
}	
//Using the filter() method, congratulate only the Full Stack Residents.
let fullStackers = users.filter((title => title.role === "Full Stack Resident")).map(employee => `Congratulations ${employee.firstName}`);
for (let employee in fullStackers) {
	console.log(fullStackers[employee]);
}	

//Exercise 3 : Star Wars
//1. Use the reduce() method to combine all of these into a single string.
let epic = ['a', ' long', ' time', ' ago', ' in a', ' galaxy', ' far far', ' away'];
let str = epic.reduce((previous, next) =>  previous + next );
console.log(str);

//Exercise 4 : Employees #2
let student = [	{name: "Ray", course: "Computer Science", isPassed: true}, 
               	{name: "Liam", course: "Computer Science", isPassed: false}, 
               	{name: "Jenner", course: "Information Technology", isPassed: true}, 
               	{name: "Marco", course: "Robotics", isPassed: true}, 
               	{name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
				{ name: "Jamie", course: "Big Data", isPassed: false }
];
//Use the filter() method to congratulate the students that passed the course.
let graduates = student.filter((grade => grade.isPassed === true)).map(graduate => `Congratulations ${graduate.name}`);
for (let graduate in graduates) {
	console.log(graduates[graduate]);
}