function Collision() {

	this.detect = function (object1, object2) {
		return object1.position.x < object2.position.x + object2.dimension.width &&
			object1.position.x + object1.dimension.width > object2.position.x &&
			object1.position.y < object2.position.y + object2.dimension.height &&
			object1.position.y + object1.dimension.height > object2.position.y;
	}
}
