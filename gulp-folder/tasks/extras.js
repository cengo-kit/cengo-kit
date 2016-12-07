const m = require('../gulp-modules');

m.gulp.task('extras', () => {
  return m.gulp.src([
    'app/*.*',
    '!app/*.html',
    '!app/**/*.jade'
  ], {
    dot: true
  }).pipe(m.gulp.dest('dist'));
});

m.gulp.task('extras:cms', () => {
  return m.gulp.src([
    'app/*.*',
    '!app/*.html',
    '!app/**/*.jade'
  ], {
    dot: true
  }).pipe(m.gulp.dest('../Cms13'));
});
