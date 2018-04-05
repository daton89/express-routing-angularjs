const conf = require('./gulp.conf');
const middleware = require('./proxy');

module.exports = function () {
  return {
    server: {
      baseDir: [
        conf.paths.dist
      ],
      middleware: [
        middleware
      ]
    },
    open: false
  };
};
