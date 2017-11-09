/* exported Painter */
"use strict";

function Painter(context) {
	this.context = context;
	var loadedImages = {
		"actor": new Image(),
		"objects": {}
	};

	Painter.prototype.loadImages = function (scene, callback) {
		loadedImages.actor.src = scene.actor.sprite.imageName;
		loadedImages.actor.onload = function () {
			loadedImages.objects.background = new Image();
			loadedImages.objects.background.src = scene.background.imageName;

			loadedImages.objects.background.onload = function () {
				callback();
			};
		};
	};

	Painter.prototype.paint = function (scene) {
		this.context.clearRect(0, 0, 800, 600);

		drawBackground(scene.background);

		drawActor(scene.actor);

		for (var i in scene.objects) {
			var object = scene.objects[i];
			if (object.sprite === undefined || object.sprite.imageName !== "clear") {
				//				this.context.fillRect(object.position.x, object.position.y, object.dimension.width, object.dimension.height);

				this.context.beginPath();
				if (object.position.y === 0) {
					this.context.moveTo(object.position.x, object.position.y);
					this.context.lineTo(object.position.x + object.dimension.width, object.position.y);
					this.context.lineTo(object.position.x + (object.dimension.width / 2), object.position.y + object.dimension.height);
				} else {
					this.context.moveTo(object.position.x, object.position.y + object.dimension.height);
					this.context.lineTo(object.position.x + object.dimension.width, object.position.y + object.dimension.height);
					this.context.lineTo(object.position.x + (object.dimension.width / 2), object.position.y);
				}
				this.context.fillStyle = "#FFFFFF";
				this.context.fill();
			}
		}
	};

	function drawActor(actor) {
		context.save();
		context.translate(actor.position.x + (actor.dimension.width / 2), actor.position.y + (actor.dimension.width / 2));
		var angle = getActorAngle(actor);
		context.rotate(angle * Math.PI / 180);
		//		context.fillRect(-actor.dimension.width / 2, -actor.dimension.width / 2, actor.dimension.width, actor.dimension.height);
		context.drawImage(loadedImages.actor, -actor.dimension.width / 2, -actor.dimension.width / 2, actor.dimension.width, actor.dimension.height);
		context.restore();
	}

	function getActorAngle(actor) {
		return 45 * (actor.velocity.y / 30);
	}

	function drawBackground(bgImg) {
		if (!bgImg.position) {
			bgImg.position = new Point(0, 0);
		} else {
			bgImg.position.x += bgImg.velocity.x;
			if (bgImg.position.x === -800) {
				bgImg.position.x = 0;
			}
		}

		context.drawImage(loadedImages.objects.background, bgImg.position.x, 0, 800, 600);
		context.drawImage(loadedImages.objects.background, bgImg.position.x + 800, 0, 800, 600);
	}
}
