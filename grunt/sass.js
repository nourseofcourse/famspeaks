module.exports = function () {
  "use strict";

  return {
    all: {
      options: {
        style:  'compressed', // compress stylesheet
				'sourcemap': 'auto', // allow browser to map generated CSS
        'precision': 7, // help avoid rounding errors
      },
			src: '<%= config.source.sass %>/site.scss',
      dest: '<%= config.html %>/<%= config.destination.css %>/site.css',
    },
  };
};