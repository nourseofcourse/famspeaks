module.exports = function () {
  "use strict";

  return {
    options: {
			duration: 3,
			enabled: true
    },
		watch: {
			options: {
				title: 'Task Complete',
				message: 'Grunt tasks have finished running.'
			}
		}
  };
};
