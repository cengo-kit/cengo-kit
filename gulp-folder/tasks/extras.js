
gulp.task('extras', () => {
  return gulp.src([
    'app/*.*',
    '!app/*.html',
    '!app/**/*.jade'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});

gulp.task('extras:cms', () => {
  return gulp.src([
    'app/*.*',
    '!app/*.html',
    '!app/**/*.jade'
  ], {
    dot: true
  }).pipe(gulp.dest('../Cms13'));
});
