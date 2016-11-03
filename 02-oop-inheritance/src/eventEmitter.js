// 3 DONE
export function EventEmitter() {
	this.eventHandlers = new Array();
	this.on = function(name, callback) {
		this.eventHandlers.push({
			name : name,
			callback : callback(name)
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
