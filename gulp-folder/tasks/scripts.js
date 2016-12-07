const m = require('../gulp-modules');

m.gulp.task('scripts', () => {
  return m.gulp.src('app/**/*.js')
    .pipe(m.$.plumber())
    .pipe(m.$.sourcemaps.init())
    .pipe(m.$.babel())
    .pipe(m.$.sourcemaps.write('.'))
    .pipe(m.rename(function (path) {
      const paths = path.basename.split('/');
      path.dirname = "";
      path.basename = paths[paths.length - 1];
    }))
    .pipe(m.gulp.dest('.tmp/scripts'))
    .pipe(m.reload({stream: true}));
});

m.gulp.task('scripts:cms', () => {
  return m.gulp.src('app/**/*.js')
    .pipe(m.$.plumber())
    .pipe(m.$.sourcemaps.init())
    .pipe(m.$.babel())
    .pipe(m.$.sourcemaps.write('.'))
    .pipe(m.rename(function (path) {
      const paths = path.basename.split('/');
      path.dirname = "";
      path.basename = paths[paths.length - 1];
    }))
    .pipe(m.gulp.dest('.tmp/scripts'))
    .pipe(m.gulp.dest('../Cms13/scripts'))
    .pipe(m.reload({stream: true}));
});
