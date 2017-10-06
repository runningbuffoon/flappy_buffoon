/* exported ScenesProvider */

function ScenesProvider() {

	ScenesProvider.prototype.makeFlappy = function (scene) {
		scene.actor = new PhysicObject(new Point(50, 50), new Velocity(0, 0), new Dimensions(50, 50), null);
		scene.handleKeyPress = handleKeyPress;
		scene.loop = function () {
			handleKeyPress(scene);
			handleActor(scene);
		};

		return scene;
	}
}

function handleKeyPress(key) {
	switch (key) {
		case 'z':
			jump(this.actor);
			break;
	}
}

function jump(actor) {
	if (actor.velocity.y >= 0) {
		actor.velocity.y = -5;
	} else {
		actor.velocity.y -= 5;
	}
}

function handleActor(scene) {
	var cube = scene.actor;
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

	scene.actor = cube;
}
