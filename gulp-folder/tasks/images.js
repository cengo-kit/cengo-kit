const m = require('../gulp-modules');

m.gulp.task('images', () => {
  return m.gulp.src('app/images/**/*')
    .pipe(m.$.cache(m.$.imagemin({
      progressive: true,
      interlaced: true,
      // don't remove IDs from SVGs, they are often used
      // as hooks for embedding and styling
      svgoPlugins: [{cleanupIDs: false}]
    })))
    .pipe(m.gulp.dest('dist/images'));
});


m.gulp.task('images:cms', () => {
  return m.gulp.src('app/images/**/*')
    .pipe($.cache(m.$.imagemin({
      progressive: true,
      interlaced: true,
      // don't remove IDs from SVGs, they are often used
      // as hooks for embedding and styling
      svgoPlugins: [{cleanupIDs: false}]
    })))
    .pipe(m.gulp.dest('../Cms13/images'));
});
