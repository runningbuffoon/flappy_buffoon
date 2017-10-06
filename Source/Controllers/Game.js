/* exported Game */
"use strict";

function Game() {
	this.scenes = [];

	this.activeScene = new Scene();

	Game.prototype.handleKeyPress = function (event) {
		// maybe do something with the key
		// then defer to activeScene
		this.activeScene.handleKeyPress(event);
	};

	Game.prototype.start = function () {
		this.activeScene = this.scenes[0];
		this.activeScene.start();
	};
}
