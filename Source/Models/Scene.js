/* exported Scene */
"use strict";

function Scene() {
	this.background = null;

	this.actor = null;
	this.objects = [];
	this.loop = function () {};


	Scene.prototype.start = function () {
		return this.loop;
	};

	Scene.prototype.handleKeyPress = null;
}
