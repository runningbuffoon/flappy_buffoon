/* exported ScenesProvider */

function ScenesProvider() {
	this.flappy = new Scene();
	this.flappy.actors.push(new PhysicObject(new Position2D()))
}
