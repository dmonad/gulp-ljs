var gljs = require('../');
var should = require('should');
var gutil = require('gulp-util');
var fs = require('fs');
var path = require('path');
var ljs = require('ljs');
var stream = require('stream');
require('mocha');

var createFile = function (filepath, contents) {
  var base = path.dirname(filepath);
  return new gutil.File({
    path: filepath,
    base: base,
    cwd: path.dirname(base),
    contents: contents
  });
}

describe('gulp-ljs', function() {
  describe('ljs()', function() {
    before(function() {
      this.testData = function (expected, newPath, done) {
        var newPaths = [newPath],
            expectedSourceMap;

        return function(newFile) {
          this.newPath = newPaths.shift();

          should.exist(newFile);
          should.exist(newFile.path);
          should.exist(newFile.relative);
          should.exist(newFile.contents);
          newFile.path.should.equal(this.newPath);
          newFile.relative.should.equal(path.basename(this.newPath));
          String(newFile.contents).should.equal(expected);
          console.log(String(newFile.path));

          if (done) {
            done.call(this);
          }
        }
      };
    });


    it('should compile a file', function(done) {
      var filepath = "test/fixtures/yattaiwc.js";
      var contents = new Buffer(fs.readFileSync(filepath));
      var expected = ljs(filepath, {code : true});

      gljs()
        .on('error', done)
        .on('data', this.testData(expected, "test/fixtures/yattaiwc.md", done))
        .write(createFile(filepath, contents));
    });

  });
});
