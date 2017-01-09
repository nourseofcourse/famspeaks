module.exports = function () {
  "use strict";

  return {
    timestamp: {
      options: {
        match: [ 'site.min.*.css'],
        position: 'overwrite',
        replacement: 'time',
      },
      files: {
        src: [ '<%= config.html %>/index.html']
      }
    }
  }
}