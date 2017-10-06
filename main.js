"use strict";


//var game = new Game();
//var scene = new Scene();
//
//game.


var canvas = document.getElementById('drawCanvas');
var context = canvas.getContext('2d');
var keyPresses = [];

window.addEventListener('keydown', function (e) {
	//	if (!keyPresses.includes(e.key)) {
	keyPresses.push(e.key);
	//	}
});

function Position2D(posX, posY) {
	this.x = posX;
	this.y = posY;
}

function Velocity2D(velX, velY) {
	this.x = velX;
	this.y = velY;
}

function Cube(posX, posY, length) {
	this.position = new Position2D(posX, posY);
	this.velocity = new Velocity2D(0, 0);
	this.size = length;
}

var cube = new Cube(200, 200, 50);

setInterval(runGame, 1000 / 60);

function runGame() {
	handleKeyPress();
	handleObjects();
	drawCanvas();
}

function handleKeyPress() {
	for (var keyIndex in keyPresses) {
		switch (keyPresses[keyIndex]) {
			case 'z':
				jump();
				break;
		}
	}

	keyPresses = [];
}

function handleObjects() {
	cube.position.x += cube.velocity.x;
	cube.position.y += cube.velocity.y;

	if (cube.position.y + cube.size >= 600) {
		cube.position.y = 600 - cube.size;
		cube.velocity.y = -cube.velocity.y / 1.5;
	}

	if (cube.position.y <= 0) {
		cube.position.y = 0;
		cube.velocity.y = -cube.velocity.y / 1.5;
	}

	cube.velocity.y += 20 / 60;
}

function drawCanvas() {
	context.clearRect(0, 0, 800, 600);
	context.fillStyle = "#F620FF";
	context.fillRect(cube.position.x, cube.position.y, cube.size, cube.size);
}

function jump() {
	if (cube.velocity.y >= 0) {
		cube.velocity.y = -5;
	} else {
		cube.velocity.y -= 5;
	}
}
