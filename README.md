
# gulp-ljs
This is a gulp plugin for [ljs](https://github.com/phadej/ljs) - Literate Javascript.
Note, that there are two ways of literating your code:
* .lit.js -> .md and .lit.js -> .js (see [literate](https://www.npmjs.org/package/literate))
* .js -> .md \*THIS\*

Everything inside `/*` and `*/` is handled as markup. Your code will be transformed into the markup code environment.
Just to give you an idea:
```
/*
   # Literate me :-)
   Prosa..
   * item1
   * item2
*/
var awesome = "Awesome";
console.log(awesome);
```

## Usage
Install `gulp-ljs`:
```
npm install gulp-ljs --save-dev
```
Using this plugin is pretty straight forward. For the sake of sanity I replace *automatically* the extension of the filepath.
While the gulp-guys will hate this, I think that this this could save your day (when you forgot to set a replace pipe).
```
var ljs = require('gulp-ljs');

gulp.task('literate', function () {
  gulp.src('path/**/*.js')
    .pipe(ljs())
    .pipe(gulp.dest('path/'))
});

```

## Options
### code
Don't include the code in the markup file. `Default: true`
```
var ljs = require('gulp-ljs');

gulp.task('literate', function () {
  gulp.src('path/**/*.js')
    .pipe(ljs({code : false}))
    .pipe(gulp.dest('path/'))
});
```

