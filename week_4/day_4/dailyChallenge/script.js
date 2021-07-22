//Daily Challenge : Creating Objects
// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
class Video {
	constructor(title, uploader, time) {
		this.title = title;
		this.uploader = uploader;
		this.time = time;
	}
	//Create a method called watch() which displays a string as follows:
	//“uploader parameter watched all time parameter of title parameter!”
	watch() {
		console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
	}
}
//Instantiate a new Video instance and call the watch() method.
let video1 = new Video("Reservoir Dogs", "Alice", 5940);
video1.watch();
//Instantiate a second Video instance with different values.
let video2 = new Video("Pulp Fiction", "Dima", 10680);
video2.watch();
//Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// let video3 = new Video("Django", "Morris", 10100);
// let video4 = new Video("Hateful Eight", "Jimmy", 6070);
// let video5 = new Video("Kill Bill", "Harold", 8739);
let data = [
	["Django", "Morris", 10100],
	["Hateful Eight", "Jimmy", 6070],
	["Kill Bill", "Harold", 8739],
	["Inglorious Basterds", "Glennis", 8776],
	["Kill Bill 2", "James", 5990]
];
// Bonus: Loop through the array to instantiate those instances.
for (item of data) {
	new Video(...item).watch();
}
