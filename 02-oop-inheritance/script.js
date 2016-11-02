// 1 DONE- 4 DONE - 8 DONE
function Movie(title, year, duration) {
	this.inheritFrom = EventEmitter;
  	this.inheritFrom();
	this.title = title;
	this.year = year;
	this.duration = duration;
	this.cast = new Array();
	this.play = function() {
		this.emit("play");
	};
	this.pause = function(){
		this.emit("pause");
	};
	this.resume = function(){
		this.emit("resume");
	}
	this.addCast = function(actors) {
		this.cast = this.cast.concat(actors);
	};
	this.showCast = function() {
		this.cast.forEach(function(actor) {
			console.log(actor);
		});
	}
}

// 2 DONE
let movie1 = new Movie("Notebook", 2004, 123);
let movie2 = new Movie("Star Wars: Episode II - Attack of the Clones", 2002, 142);
let movie3 = new Movie("SlumdogMillonaire", 2008, 120);

// 3 DONE
function EventEmitter() {
	this.eventHandlers = new Array();
	this.on = function(name, callback) {
		this.eventHandlers.push({
			name : name,
			callback : callback
			/*callback: function() {
				console.log(event);
			}*/
		});
	};
	this.emit = function(name){
		let i = 0;
		while (this.eventHandlers[i].name !== name) {
			i++;
		}
		this.eventHandlers[i].callback();
	};
	this.off = function(name){
		let i = 0;
		while (this.eventHandlers[i].name !== name) {
			i++;
		}
		this.eventHandlers[i].pop();
	};
}

// 5 DONE
function Logger() {
	/*this.addEventListener(Movie.play(), log("played"));
	this.addEventListener(Movie.pause(), log("paused"));
	this.addEventListener(Movie.resume(), log("resumed"));*/
	this.log = function(info) {
		console.log("The " + info + " event has been emitted.");
	}
}

// 6 DONE
var Social = function() {
	this.share = function(friendName) {
		console.log("Share " + this.title + " with " + friendName);
	},
	this.like = function(friendName) {
		console.log("Like " + this.title + " with " + friendName);
	}
}
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
