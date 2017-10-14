/* exported Painter */
"use strict";

function Painter(context) {
	this.context = context;

	Painter.prototype.paint = function (scene) {
		this.context.clearRect(0, 0, 800, 600);
		this.context.fillRect(scene.actor.position.x, scene.actor.position.y, scene.actor.dimension.width, scene.actor.dimension.height);

		for (var i in scene.objects) {
			var object = scene.objects[i];
			this.context.fillRect(object.position.x, object.position.y, object.dimension.width, object.dimension.height);
		}
	};
}
