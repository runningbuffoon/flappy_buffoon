/* exported ObstacleProvider */
"use strict";

function ObstacleProvider() {

	var OBSTACLE_VELOCITY = new Velocity(-2, 0);

	this.getRandomObstaclePair = function (posX, width) {
		var hole = getRandomHole();
		var topObstacleHeight = hole.y;
		var botObstacleHeight = 600 - (hole.y + 150);

		var topObstacle = new PhysicObject(
			new Point(posX, 0),
			OBSTACLE_VELOCITY,
			new Dimensions(width, topObstacleHeight)
		);

		var botObstacle = new PhysicObject(
			new Point(posX, hole.y + 150),
			OBSTACLE_VELOCITY,
			new Dimensions(width, botObstacleHeight)
		);

		return {
			"topObstacle": topObstacle,
			"bottomObstacle": botObstacle
		};
	};

	function getRandomHole() {
		var posY = 350 * Math.random();

		return new Point(0, 50 + posY);
	}
}
