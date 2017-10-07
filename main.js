"use strict";

var canvas = document.getElementById('drawCanvas');
var context = canvas.getContext('2d');

var game = new Game();
var scene = new ScenesProvider().makeFlappy(new Scene());

game.scenes.push(scene);

game.start(new Painter(context));

window.addEventListener('keydown', function (e) {
	game.handleKeyPress(e.key);
});
