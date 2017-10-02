/*jshint enforceall: true, browser: true, devel: true*/

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

	cube.velocity.y += 10 / 60;
}

function drawCanvas() {
	context.clearRect(0, 0, 800, 600);
	context.fillRect(cube.position.x, cube.position.y, cube.size, cube.size);
}

function jump() {
	cube.velocity.y = -5;
}
