// 1 - 4 - 8
function Movie(title, year, duration) extends EventEmitter {
	this.title = title;
	this.year = year;
	this.duration = duration;
	this.play = function() {};
	this.pause = function(){};
	this.resume = function(){}
	this.anotherCast = [];
}

// 2
let notebook = new Movie("Notebook", 2004, 123);
let starWars = new Movie("Star Wars: Episode II - Attack of the Clones", 2002, 142);
let slumdogMillonaire = new Movie("SlumdogMillonaire", 2008, 120);

// 3
function EventEmitter() {
	this.on = function() {};
	this.emit = function(){};
	this.off = function(){}
}

// 5
function Logger() {
	this.log = function(info) {

	};
}

// 6 -- Object.assign
function Social() {
	this.share = function(friendName) {
	};
	this.like = function(friendName) {
	}
}

function Actor(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

let actor = new Actor();
