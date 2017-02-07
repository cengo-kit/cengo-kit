gulp.task('info:dev', () => {
  gulp.info = "dev"
  $.bower();
});

gulp.task('info:cms', () => {
  gulp.info = "cms"
  gulp.src('bower.json').pipe(
    $.copy('../Cms13/')
  );
  $.bower({ cwd: '../Cms13/' });
});



