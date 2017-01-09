module.exports = function () {
  "use strict";

  return {
    options: {
			'livereload': true,
    },
		sass: {
			files: ['<%= config.source.sass %>/**/**.scss', '<%= config.source.sass %>/**.scss'],
			tasks: ['sass:all', 'cachebreaker:timestamp', 'notify:watch']
		},
    // watch html files, only used for live reload
    html: {
      files: ['<%= config.app %>/*.html'],
      tasks: []
    },
    typescript: {
      files: ['<%= config.source.typescript %>/**/*.ts'],
      tasks: ['newer:typescript:base', 'notify:watch']
    }
  };
};
