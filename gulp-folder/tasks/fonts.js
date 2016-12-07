const m = require('../gulp-modules');

m.gulp.task('fonts', () => {
  return m.gulp.src(require('main-bower-files')('**/*.{eot,svg,ttf,woff,woff2}', function (err) {
  })
    .concat('app/fonts/**/*'))
    .pipe(m.gulp.dest('.tmp/fonts'))
    .pipe(m.gulp.dest('dist/fonts'));
});

m.gulp.task('fonts:cms', () => {
  return m.gulp.src(require('main-bower-files')('**/*.{eot,svg,ttf,woff,woff2}', function (err) {
  })
    .concat('app/fonts/**/*'))
    .pipe(m.gulp.dest('.tmp/fonts'))
    .pipe(m.gulp.dest('dist/fonts'))
    .pipe(m.gulp.dest('../Cms13/fonts'));
});
