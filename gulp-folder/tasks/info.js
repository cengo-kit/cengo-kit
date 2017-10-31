gulp.task('info:dev', () => {
  gulp.info = "dev"
  $.bower();
});

gulp.task('info:cms', () => {
  gulp.info = "cms"
  gulp.src('bower.json').pipe(
    $.copy('../Cms13/')
  );
  setTimeout(function () {
    $.bower({ cwd: '../Cms13/' });
  },5000)
});



