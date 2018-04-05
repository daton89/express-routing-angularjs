const conf = require('./gulp.conf');
const middleware = require('./proxy');

module.exports = function () {
  return {
    server: {
      baseDir: [
        conf.paths.tmp,
        conf.paths.src
      ],
      middleware: [
        middleware
      ]
    },
    open: false
  };
};
