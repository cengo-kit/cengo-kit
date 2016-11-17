gulp.task('build', ['lint','views', 'html', 'images', 'fonts', 'extras'], () => {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('build:cms', ['info:cms', 'scripts:cms','images:cms', 'inject:js:cms', 'views', 'iconfont', 'styles:cms', 'fonts:cms'], () => {
  gulp.info = "cms";
});
