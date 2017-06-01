
gulp.task('images', () => {
  return gulp.src(['!app/images/**/*.db','app/images/**/*'])
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true,
      // don't remove IDs from SVGs, they are often used
      // as hooks for embedding and styling
      svgoPlugins: [{cleanupIDs: false}]
    })))
    .pipe(gulp.dest('dist/images'));
});


gulp.task('images:cms', () => {
  return gulp.src(['!app/images/**/*.db','app/images/**/*'])
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true,
      // don't remove IDs from SVGs, they are often used
      // as hooks for embedding and styling
      svgoPlugins: [{cleanupIDs: false}]
    })))
    .pipe(gulp.dest('../Cms13/images'));
});
