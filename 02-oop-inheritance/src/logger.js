// 5 DONE
export function Logger() {
	this.log = function(eventName) {
		console.log("The " + eventName + " event has been emitted.");
	}
}
