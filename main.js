"use strict";

var canvas = document.getElementById('drawCanvas');
var context = canvas.getContext('2d');

var game = new Game();
var scene = new ScenesProvider().makeFlappy(new Scene());
scene.gameDelegate = game;

game.scenes.push(scene);

var painter = new Painter(context);

painter.loadImages(scene, function () {
	game.start(painter);
});

//game.start(new Painter(context));

window.addEventListener('keydown', function (e) {
	game.handleKeyPress(e.key);
});
