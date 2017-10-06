/* exported Game */
"use strict";

function Game() {
	this.scenes = [];

	this.activeScene = new Scene();

	var sceneLoop;

	this.handleKeyPress = function (event) {
		// maybe do something with the key
		// then defer to activeScene
		this.activeScene.handleKeyPress(event);
	};

	this.start = function (painter) {
		this.activeScene = this.scenes[0];
		sceneLoop = setInterval(this.activeScene.loop, 1000 / 60);
		setInterval(function () {
			painter.paint(this.activeScene);
		}, 1000 / 60);
	};
}
