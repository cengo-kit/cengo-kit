gulp.task('inject', function () {
  gulp.src('app/styles/*.scss')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)+/
    }))
    .pipe(gulp.dest('app/styles'));
  return gulp.src('app/layouts/layouts/*.jade')
    .pipe($.inject(series(gulp.src('./app/scripts/app.js', {read: false}), gulp.src(['./app/**/*.js', '!./app/scripts/app.js'], {
      read: false
    }).pipe(rename(function (path) {
      let paths = path.basename.split('/');
      path.dirname = "scripts/";
    }))), {
      relative: false,
      ignorePath: 'app',
      addRootSlash: false
    }))
    .pipe(wiredep({
      exclude: ['bootstrap-sass'],
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe($.header('\ufeff'))
    .pipe(gulp.dest('app/layouts/layouts/'));
});

gulp.task('inject:cms', function () {
  gulp.src('app/styles/*.scss')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)+/
    }))
    .pipe(gulp.dest('app/styles'));
  return gulp.src('../Cms13/Sites/1/templates/shared/*.cshtml')
    .pipe($.inject(series(gulp.src('./app/scripts/app.js', {read: false}), gulp.src(['./app/**/*.js', '!./app/scripts/app.js'], {
      read: false
    }).pipe(rename(function (path) {
      let paths = path.basename.split('/');
      path.dirname = "scripts/";
    }))), {
      relative: false,
      ignorePath: 'app',
      addRootSlash: true
    }))
    .pipe(wiredep({
      relativePath: true,
      ignorePath:  /^(\.\.\/)+/,
      exclude: ['bootstrap-sass'],
      fileTypes: {
        html: {
          replace: {
            js: function (filePath) {
              return '<script src="'+filePath.replace('HTML','')+'"></script>';
            },
            css: function (filePath) {
              return '<link rel="stylesheet" href="'+filePath.replace('HTML','')+'" />';
            }
          }
        }
      }
    }))
    .pipe($.header('\ufeff'))
    .pipe(gulp.dest('../Cms13/Sites/1/templates/shared/'));
});
