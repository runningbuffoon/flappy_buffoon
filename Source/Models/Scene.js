/* exported Scene */
"use strict";

function Scene() {
	this.gameDelegate = null;
	this.background = null;

	this.actor = null;
	this.background = null;
	this.objects = [];
	this.loop = function () {};


	Scene.prototype.start = function () {
		return this.loop;
	};

	Scene.prototype.handleKeyPress = null;
}
