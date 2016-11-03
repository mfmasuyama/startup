// 6 DONE
export var Social = function() {
	this.share = function(friendName) {
		console.log("Share " + this.title + " with " + friendName);
	},
	this.like = function(friendName) {
		console.log("Like " + this.title + " with " + friendName);
	}
}
