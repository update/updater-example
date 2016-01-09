'use strict';

var through = require('through2');

module.exports = function(app) {
  var cwd = app.options.dest || app.cwd;

  app.task('foo', function() {
    // here, "this" is the task instance
    return app.src('example.txt', {cwd: cwd})
      .pipe(append(this.name))
      .pipe(app.dest(cwd));
  });

  app.task('bar', function() {
    return app.src('example.txt', {cwd: cwd})
      .pipe(append(this.name))
      .pipe(app.dest(cwd));
  });

  // register an updater (this could be required from node_modules instead)
  app.register('abc', function(abc) {
    // here, "this" is the updater instance (abc)
    this.task('one', function() {
      return app.src('example.txt', {cwd: cwd})
        .pipe(append(abc.name + ':' + this.name))
        .pipe(app.dest(cwd));
    });
    this.task('default', ['one']);
  });

  app.task('default', ['foo']);
};

function append(str) {
  return through.obj(function(file, enc, next) {
    file.contents = new Buffer(file.contents.toString() + str + '\n');
    next(null, file);
  });
}
