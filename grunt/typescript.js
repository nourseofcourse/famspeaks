module.exports = function () {
	"use strict";

	return {
		base: {
			src: ['<%= config.source.typescript %>/*.ts'],
			dest: '<%= config.destination.typescript %>',
			options: {
				module: 'commonjs',
				target: 'es5',
				sourceMap: true,
				declaration: true
			}
		}
	}
}
