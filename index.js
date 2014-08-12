var through = require('through2');
var ljs = require('ljs');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var Buffer = require('buffer').Buffer;
var path = require('path');
var merge = require('merge');


/*
 * Simply apply ljs on the stream
 */
module.exports = function (opt) {
  function transform(file, enc, cb) {
    if (file.isNull()) return cb(null, file);
    if (file.isStream()) return cb(new PluginError('gulp-ljs', 'Streaming not supported'));

    var data;
    var dest = gutil.replaceExtension(file.path, '.md');

    var options = merge({
      code: true
    }, opt);

    try {
      data = ljs(file.path, {code : true}); //coffee.compile(str, options);
    } catch (err) {
      return cb(new PluginError('gulp-ljs', err));
    }
    file.contents = new Buffer(data);
    file.path = dest;
    cb(null, file);
  }

  return through.obj(transform);
};
