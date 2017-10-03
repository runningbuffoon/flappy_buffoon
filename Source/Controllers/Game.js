function Game() {
	this.scenes = [];

	this.activeScene = null;

	Game.prototype.handleKeyPress = function (event) {
		// maybe do something with the key
		// then defer to activeScene
	};
}
