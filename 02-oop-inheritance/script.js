// 1 DONE- 4 - 8 DONE
function Movie(title, year, duration) {
	this.title = title;
	this.year = year;
	this.duration = duration;
	this.cast = new Array();
	this.play = function() {};
	this.pause = function(){};
	this.resume = function(){}
	this.addCast = function(actors) {
		if(Array.isArray(actors)) {
			for(let i = 0; i<actors.length; i++) {
				this.cast.push(actors[i]);
			}
		} else {
			this.cast.push(actors);
		}

	};
	this.showCast = function() {
		for(let i = 0; i<this.cast.length; i++) {
			console.log(this.cast[i]);
		}
	}
}

// 2 DONE
let movie1 = new Movie("Notebook", 2004, 123);
let movie2 = new Movie("Star Wars: Episode II - Attack of the Clones", 2002, 142);
let movie3 = new Movie("SlumdogMillonaire", 2008, 120);

// 3
function EventEmitter() {
	this.on = function() {};
	this.emit = function(){};
	this.off = function(){}
}

// 5
/*
let logger = {
	this.log = function(info) {

	};
}
*/

// 6
var Social = function() {
	this.share = function(friendName) {
		console.log("Share " + this.title + " with " + friendName);
	},
	this.like = function(friendName) {
		console.log("Like " + this.title + " with " + friendName);
	}
}
//Object.assign(Movie, Social);
Social.call(movie1);

// 7 DONE
function Actor(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

let actor1 = new Actor("Ryan", "Gosling");
let actor2 = new Actor("Rachel", "McAdams");
let actor3 = new Actor("James", "Garner");
let actor4 = new Actor("Gena", "Rowlands");
let actors = [actor2, actor3, actor4];

movie1.addCast(actor1);
movie1.addCast(actors);
