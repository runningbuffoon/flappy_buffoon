/* exported ObstacleProvider */
"use strict";

function ObstacleProvider() {

	var OBSTACLE_VELOCITY = new Velocity(-2, 0);

	this.getRandomObstaclePair = function (posX, width) {
		var hole = getRandomHole(posX, width);
		var topObstacleHeight = hole.position.y;
		var botObstacleHeight = 600 - (hole.position.y + 150);

		var topObstacle = new PhysicObject(
			new Point(posX, 0),
			OBSTACLE_VELOCITY,
			new Dimensions(width, topObstacleHeight)
		);

		var botObstacle = new PhysicObject(
			new Point(posX, hole.position.y + 150),
			OBSTACLE_VELOCITY,
			new Dimensions(width, botObstacleHeight)
		);

		return {
			"topObstacle": topObstacle,
			"hole": hole,
			"bottomObstacle": botObstacle
		};
	};

	function getRandomHole(posX, width) {
		var posY = 350 * Math.random();

		var object = new PhysicObject(new Point(posX, 50 + posY), OBSTACLE_VELOCITY, new Dimensions(width, 150), new Sprite("clear"));
		object.hasScored = false;
		return object;
	}
}
