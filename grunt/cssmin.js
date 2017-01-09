module.exports = function () {
	"use strict";

	return {
		options: {
			shorthandCompacting: false,
			roundingPrevision: 1,
			sourceMap: true,
			keepSpecialComments: 0
		},
		target: {
			files: {
				'<%= config.html %>/<%= config.destination.css %>/site.min.css': ['<%= config.html %>/<%= config.destination.css %>/vendor.css', '<%= config.html %>/<%= config.destination.css %>/site.css']
			}
		}
	}
}
