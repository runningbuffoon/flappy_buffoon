/* exported Painter */

function Painter(context) {
	this.context = context;

	Painter.prototype.paint = function (scene) {
		this.context.clearRect(0, 0, 800, 600);
		console.log(scene);
		this.context.fillRect(scene.actor.position.x, scene.actor.position.y, scene.actor.dimension.width, scene.actor.dimension.height);
	}
}
