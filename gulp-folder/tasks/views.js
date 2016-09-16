gulp.task('views', () => {
  return gulp.src('app/*.jade')
    .pipe($.data((file) => {
      return {
        dev: (gulp.info == "dev"),
        cms: cms
      };
    }))
    .pipe($.plumber())
    .pipe($.jade({pretty: true}))
    .pipe(rename(function (path) {
      var paths = path.basename.split('/');
      path.dirname = "";
      path.basename = paths[paths.length - 1];
    }))
    .pipe(gulp.dest('.tmp'))
    .pipe(reload({stream: true}));
});

