module.exports = function () {
	"use strict";

	return {
		all: {
			dest: {
				js: '<%= config.html %>/<%= config.destination.js %>/vendor.js',
				css: '<%= config.html %>/<%= config.destination.css %>/vendor.css'
			},
			/*mainFiles: {
				// example 'font-awesome': ['css/font-awesome.css'],
			},*/
			include: [
				'jquery',
        'webfontloader',
        'magnific-popup',
        'animsition'
			],
			includeDev: true
		}
	}
}
