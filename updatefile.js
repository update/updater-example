'use strict';

var through = require('through2');

/**
 * Export the "updater" function
 */

module.exports = function(app) {
  app.task('foo', function() {
    return updateExample(app, 'foo');
  });

  app.task('bar', function() {
    return updateExample(app, 'bar');
  });

  // register a "sub-updater"
  app.register('abc', function(abc) {
    this.task('default', function() {
      return updateExample(app, 'abc:default');
    });
  });
  app.task('default', ['foo']);
};

/**
 * Append the given string to `example.txt` and re-write the file to the current
 * working directory.
 *
 * The `.src` and `.dest` methods work exactly like gulp's (we use the same libs from the
 * gulp team under the hood)
 *
 * @param {Object} `app` Instance of update, to get the cwd. Pass `--dest` on the command line to set `app.options.dest`
 * @return {Stream} vinyl stream
 * @api public
 */

function updateExample(app, str) {
  var cwd = app.options.dest || app.cwd;
  return app.src('example.txt', {cwd: cwd})
    .pipe(append(str))
    .pipe(app.dest(cwd));
}

/**
 * Append the given `str` to `file.contents`
 *
 * @param {String} `str`
 * @return {Stream} vinyl stream
 * @api public
 */

function append(str) {
  return through.obj(function(file, enc, next) {
    file.contents = new Buffer(file.contents.toString() + str + '\n');
    next(null, file);
  });
}
