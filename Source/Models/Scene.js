/* exported Scene */
function Scene() {
	this.background = null;

	this.actor = [];
	this.objects = [];
	this.loop = function () {};


	Scene.prototype.start = function () {
		return this.loop;
	};

	Scene.prototype.handleKeyPress = null;
}