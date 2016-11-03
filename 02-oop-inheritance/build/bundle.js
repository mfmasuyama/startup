"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Actor = Actor;
// 7 DONE
function Actor(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.EventEmitter = EventEmitter;
// 3 DONE
function EventEmitter() {
	this.eventHandlers = new Array();
	this.on = function (name, callback) {
		this.eventHandlers.push({
			name: name,
			callback: callback(name)
		});
	};
	this.emit = function (name) {
		var i = 0;
		while (this.eventHandlers[i].name !== name) {
			i++;
		}
		this.eventHandlers[i].callback();
	};
	this.off = function (name) {
		var i = 0;
		while (this.eventHandlers[i].name !== name) {
			i++;
		}
		this.eventHandlers[i].pop();
	};
}
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Logger = Logger;
// 5 DONE
function Logger() {
	this.log = function (eventName) {
		console.log("The " + eventName + " event has been emitted.");
	};
}
"use strict";

var _movie = require("movie");

var _movie2 = _interopRequireDefault(_movie);

var _logger = require("logger");

var _logger2 = _interopRequireDefault(_logger);

var _social = require("social");

var _social2 = _interopRequireDefault(_social);

var _actor = require("actor");

var _actor2 = _interopRequireDefault(_actor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 2 DONE
var movie1 = new _movie2.default("Notebook", 2004, 123);
var movie2 = new _movie2.default("Star Wars: Episode II - Attack of the Clones", 2002, 142);
var movie3 = new _movie2.default("SlumdogMillonaire", 2008, 120);

_social2.default.call(movie1);

// 7 DONE
var actor1 = new _actor2.default("Ryan", "Gosling");
var actor2 = new _actor2.default("Rachel", "McAdams");
var actor3 = new _actor2.default("James", "Garner");
var actor4 = new _actor2.default("Gena", "Rowlands");
var actors = [actor2, actor3, actor4];

movie1.addCast(actor1);
movie1.addCast(actors);
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Movie = Movie;

var _eventEmitter = require("eventEmitter");

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 1 DONE- 4 DONE - 8 DONE
function Movie(title, year, duration) {
	this.inheritFrom = EventEmitter;
	this.inheritFrom();
	this.title = title;
	this.year = year;
	this.duration = duration;
	this.cast = new Array();
	this.play = function () {
		this.emit("play");
	};
	this.pause = function () {
		this.emit("pause");
	};
	this.resume = function () {
		this.emit("resume");
	};
	this.addCast = function (actors) {
		this.cast = this.cast.concat(actors);
	};
	this.showCast = function () {
		this.cast.forEach(function (actor) {
			console.log(actor);
		});
	};
}
"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
// 6 DONE
var Social = exports.Social = function Social() {
	this.share = function (friendName) {
		console.log("Share " + this.title + " with " + friendName);
	}, this.like = function (friendName) {
		console.log("Like " + this.title + " with " + friendName);
	};
};
