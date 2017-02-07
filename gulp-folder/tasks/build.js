gulp.task('build', ['info:dev','lint', 'scripts','views', 'inject', 'images', 'iconfont', 'fonts', 'extras'], () => {
  gulp.start('styles');
  gulp.start('html');
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('build:cms', ['info:cms', 'lint', 'scripts:cms','views', 'inject:cms','images:cms', 'iconfont', 'fonts:cms', 'extras'], () => {
    gulp.start('styles:cms');
  gulp.start('html:cms');
  gulp.info = "cms";
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});
