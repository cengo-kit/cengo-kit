gulp.task('copy', function () {
  gulp.src('copy/**/*')
    .pipe(gulp.dest('.tmp/copy'));
});
gulp.task('copy:cms', function () {
  gulp.src('copy/**/*')
    .pipe(gulp.dest('../Cms13/copy'));
});
