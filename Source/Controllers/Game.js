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
		var scene = this.activeScene;
		this.sceneLoop = setInterval(function () {
			scene.loop();
			painter.paint(scene);
		}, 1000 / 60);
	};
    
    this.pause = function() {
        clearInterval(this.sceneLoop);
    };
}
