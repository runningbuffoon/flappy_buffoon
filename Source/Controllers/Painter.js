/* exported Painter */
"use strict";

function Painter(context) {
	this.context = context;

	Painter.prototype.paint = function (scene) {
		this.context.clearRect(0, 0, 800, 600);

		drawActor(scene.actor);

		for (var i in scene.objects) {
			var object = scene.objects[i];
			if (object.sprite === undefined || object.sprite.imageName !== "clear") {
				this.context.fillRect(object.position.x, object.position.y, object.dimension.width, object.dimension.height);
			}
		}
	};

	function drawActor(actor) {
		context.save();
		context.translate(actor.position.x + (actor.dimension.width / 2), actor.position.y + (actor.dimension.width / 2));
		var angle = getActorAngle(actor);
		context.rotate(angle * Math.PI / 180);
		context.fillRect(-actor.dimension.width / 2, -actor.dimension.width / 2, actor.dimension.width, actor.dimension.height);
		context.restore();
	}

	function getActorAngle(actor) {
		if (actor.velocity.y < 0) {
			return 45 * (actor.velocity.y / 30);
		} else {
			return 45 * (actor.velocity.y / 30);
		}
	}
}
