const m = require('../gulp-modules');

m.gulp.task('views', () => {
  return m.gulp.src('app/*.jade')
    .pipe(m.$.data((file) => {
      return {
        dev: (m.gulp.info == "dev"),
        cms: m.cms
      };
    }))
    .pipe(m.$.plumber())
    .pipe(m.$.jade({pretty: true}))
    .pipe(m.rename(function (path) {
      var paths = path.basename.split('/');
      path.dirname = "";
      path.basename = paths[paths.length - 1];
    }))
    .pipe(m.gulp.dest('.tmp'))
    .pipe(m.reload({stream: true}));
});

