module.exports = function () {
	"use strict";

	return {
		dev: {
			path: '<%= config.env.dev %>',
			app: 'Google Chrome'
		},
		prod: {
			path: '<% config.env.prod %>',
			app: 'Google Chrome'
		}
	}
}
