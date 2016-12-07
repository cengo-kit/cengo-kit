gulp.task('build', ['lint', 'scripts','views', 'inject', 'html', 'images', 'iconfont', 'fonts', 'extras'], () => {
  gulp.start('styles');
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('build:cms', ['info:cms', 'scripts:cms','images:cms', 'inject:cms', 'views', 'iconfont', 'fonts:cms'], () => {
    gulp.start('styles:cms');
  gulp.info = "cms";
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});
