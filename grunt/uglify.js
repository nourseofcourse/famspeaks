module.exports = function () {
  "use strict";

  return {
    options: {
      beautify: false,
      mangle: false,
      compress: {
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
        drop_console: true
      }
    },
    min: {
      files: {
        '<%= config.dist %>/<%= config.destination.js %>/site.min.js': ['<%= config.dist %>/<%= config.destination.js %>/vendor.js', '<%= config.html %>/<%= config.destination.js %>/site.js']
      }
    }
  };
};