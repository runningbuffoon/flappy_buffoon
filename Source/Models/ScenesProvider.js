/* exported ScenesProvider */
"use strict";

function ScenesProvider() {

	ScenesProvider.prototype.makeFlappy = function (scene) {
		scene.actor = new PhysicObject(new Point(50, 50), new Velocity(0, 0), new Dimensions(50, 50), null);

		scene.objects.push(new PhysicObject(new Point(550, 0), new Velocity(-2, 0), new Dimensions(50, 200), null));
		scene.objects.push(new PhysicObject(new Point(550, 400), new Velocity(-2, 0), new Dimensions(50, 200), null));

		scene.handleKeyPress = handleKeyPress;

		scene.loop = function () {
			//			handleKeyPress(scene);
			handleActor(scene.actor);

			for (var objectIndex in scene.objects) {
				handleObject(scene.objects[objectIndex]);
                if (new Collision().detect(scene.actor,scene.objects[objectIndex])) {
                    scene.gameDelegate.pause();
                }
			}
		};

		return scene;
	}
}

function handleKeyPress(key) {
	switch (key) {
		case 'z':
			jump(this.actor);
			break;

		case 'd':
			moveRight(this.actor);
			break;

		case 'q':
			moveLeft(this.actor);
	}
}

function moveRight(actor) {
	actor.velocity.x = 10;
}

function moveLeft(actor) {
	actor.velocity.x = -10;
}

function jump(actor) {
	if (actor.velocity.y >= 0) {
		actor.velocity.y = -5;
	} else {
		actor.velocity.y -= 5;
	}
}

function handleActor(cube) {
	cube.position.x += cube.velocity.x;
	cube.position.y += cube.velocity.y;

	cube.velocity.x = cube.velocity.x * 0.95;

	if (cube.position.y + cube.dimension.height >= 600) {
		cube.position.y = 600 - cube.dimension.height;
		cube.velocity.y = -cube.velocity.y / 1.5;
	}

	if (cube.position.y <= 0) {
		cube.position.y = 0;
		cube.velocity.y = -cube.velocity.y / 1.5;
	}

	cube.velocity.y += 20 / 60;
}

function handleObject(object) {
	object.position.x += object.velocity.x;
	object.position.y += object.velocity.y;

	if (object.position.x + object.dimension.width < 0) {
		object.position.x = 800;
	}
}
