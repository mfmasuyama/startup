import * from "EventEmitter";

// 1 DONE- 4 DONE - 8 DONE
export function Movie(title, year, duration) {
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
