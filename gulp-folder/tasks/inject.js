const m = require('../gulp-modules');

m.gulp.task('inject:js',['wiredep'], () => {
  return m.gulp.src('app/layouts/layouts/*.jade')
    .pipe(m.$.inject(m.series(m.gulp.src('./app/scripts/app.js', {read: false}), m.gulp.src(['./app/**/*.js', '!./app/scripts/app.js'], {
      read: false
    }).pipe(m.rename(function (path) {
      let paths = path.basename.split('/');
      path.dirname = "scripts/";
    }))), {
      relative: false,
      ignorePath: 'app',
      addRootSlash: false
    }))
    .pipe(m.gulp.dest('app/layouts/layouts/'));
});

m.gulp.task('inject:js:cms',['wiredep:cms'], () => {
  return m.gulp.src('../Cms13/Sites/1/templates/shared/*.cshtml')
    .pipe(m.$.inject(m.series(m.gulp.src('./app/scripts/app.js', {read: false}), m.gulp.src(['./app/**/*.js', '!./app/scripts/app.js'], {
      read: false
    }).pipe(m.rename(function (path) {
      let paths = path.basename.split('/');
      path.dirname = "scripts/";
    }))), {
      relative: false,
      ignorePath: "app",
      addRootSlash: true
    }))
    .pipe(m.gulp.dest('../Cms13/Sites/1/templates/shared/'));
});
