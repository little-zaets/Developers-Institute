//Exercise 1 : Location
//Analyze the code below. What will be the output?
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}
const {name, location: {country, city, coordinates: [lat, lng]}} = person;
console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
//output = I am John Doe from Vancouver, Canada. Latitude(49.287), Longitude(-123.1207)

//Exercise 2: Display Student Info
// Create a function called displayStudentInfo(studentObject) that accepts an object as a parameter.
// For example displayStudentInfo({first: 'Elie', last:'Schoppik'}).
// The function should return a string as seen in the example below.
// displayStudentInfo({first: 'Elie', last:'Schoppik'}) 
// // 'Your full name is Elie Schoppik'`
// Destructure this object inside the function.
function displayStudentInfo(studentObject) {
	const { first, last } = studentObject;
	console.log(`Your full name is ${studentObject.first} ${studentObject.last}`);
};
displayStudentInfo({ first: 'Elie', last: 'Schoppik' });

//Exercise 3: User & Id
// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.
// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 };
for (let [key, value] of Object.entries(users)) {
  console.log(`${key}'s ID: ${value * 2}`);
}

//Exercise 4 : Person Class
//Analyze the code below. What will be the output?
class Person {
  constructor(name) {
    this.name = name;
  }
}	
const member = new Person('John');
console.log(typeof member); //outcome = object

//Exercise 5 : Dog Class
//Analyze the options below:
class Dog {
  constructor(name) {
    this.name = name;
  }
};
//Which constructor will successfully extend the Dog class?

// 1.
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// };


// 2.
class Labrador extends Dog {
  constructor(name, size) {
    super(name);				//<-------------This one
    this.size = size;
  }
};


// 3.
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// };


// 4.
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// };

//Exercise 6 : Challenges
//1. Evaluate these (ie True or False):

//[2] === [2] //false
//{} === {} //false

//2. What is the value of property “number” for each object?
const object1 = { number: 5 }; //number = 5
const object2 = object1; //number = 5 for object 1 and object 2
const object3 = object2; //number = 5 for objects 1, 2 and 3
const object4 = { number: 5}; //number = 5
object1.number = 4; //object1: number = 4, object2: number = 4, object3: number = 4, object4: number = 5

//3. Create a class Animal with the attributes name, type and color
class Animal {
	constructor(animalName, type, color) {
		this.animalName = animalName;
		this.type = type;
		this.color = color;
	}
}
//4. Create a class Mamal that extends from the Animal class. It has a method called sound().
//5. Create a cow that accepts a name, type and color and has a sound method that moo’s her name, type and color.
class Mammal extends Animal {
	constructor(animalName, type, color, noise) {
		super(animalName, type, color);
		this.noise = noise;
	}
	sound() {
		console.log(`${this.noise}! I am ${this.animalName}, I am a ${this.type} and I am ${this.color}`);
	}
}
let cow = new Mammal("Bessy", "Cow", "black and white", "MOOOOOOOOOOO");
cow.sound();