gulp.task('wiredep', () => {
  gulp.src('app/styles/*.scss')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)+/
    }))
    .pipe(gulp.dest('app/styles'));

  gulp.src('app/layouts/layouts/*.jade')
    .pipe(wiredep({
      exclude: ['bootstrap-sass','modernizr'],
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest('app/layouts/layouts/'));
});

gulp.task('wiredep:cms', () => {
  gulp.src('app/styles/*.scss')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)+/
    }))
    .pipe(gulp.dest('app/styles'));

  gulp.src('./../Cms13/Sites/1/templates/shared/*.cshtml')
    .pipe(wiredep({
      relativePath: true,
      ignorePath:  /^(\.\.\/)+/,
      exclude: ['bootstrap-sass','modernizr'],
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
    .pipe(gulp.dest('./../Cms13/Sites/1/templates/shared/'));
});
