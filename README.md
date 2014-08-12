
# gulp-ljs
This is a gulp plugin for [ljs](https://github.com/phadej/ljs) - literate Javascript.
Note that there are two ways of literating your code.
* .lit.js -> .md and .lit.js -> js (see [literate](https://www.npmjs.org/package/literate))
* .js -> .md **THIS**

Everything inside `/*` and `*/` is handled as markup. Your code will be transformed into the markup code environment.
Just to give you an idea:
```
/*
   # Header
   Prosa..
   * item1
   * item2
*/
var awesome = "Awesome";
console.log(awesome);
```

## Usage
```
var ljs = require('gulp-ljs');

gulp.task('literate', function () {
  gulp.src('path/**/*.js')
    .pipe(ljs())
    .pipe(gulp.dest('path/'))
});

```

## Options

Don't include the code in the markup file.
```
var ljs = require('gulp-ljs');

gulp.task('literate', function () {
  gulp.src('path/**/*.js')
    .pipe(ljs({code : false}))
    .pipe(gulp.dest('path/'))
});
```

