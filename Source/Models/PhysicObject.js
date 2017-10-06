/* exported PhysicObject */

function PhysicObject(point2D, velocity2D, dimension, sprite) {
	this.position = point2D;
	this.velocity = velocity2D;
	this.dimension = dimension;
	this.sprite = sprite;
}
