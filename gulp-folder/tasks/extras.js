
gulp.task('extras', () => {
  return gulp.src([
    'app/**/*',
    '!app/fonts{/**,}',
    '!app/images{/**,}',
    '!app/layouts{/**,}',
    '!app/modules{/**,}',
    '!app/scripts{/**,}',
    '!app/styles{/**,}',
    '!app/svg{/**,}',
    '!app/*.html',
    '!app/**/*.jade'
  ], {
    dot: true,
  }).pipe(gulp.dest('dist'));
});

gulp.task('extras:cms', () => {
  return gulp.src([
    'app/**/*',
    '!app/fonts{/**,}',
    '!app/images{/**,}',
    '!app/layouts{/**,}',
    '!app/modules{/**,}',
    '!app/scripts{/**,}',
    '!app/styles{/**,}',
    '!app/svg{/**,}',
    '!app/*.html',
    '!app/**/*.jade'
  ], {
    dot: true
  }).pipe(gulp.dest('../Cms13'));
});
