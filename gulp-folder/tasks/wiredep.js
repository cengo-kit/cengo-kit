gulp.task('wiredep', () => {
  gulp.src('app/styles/*.scss')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)+/
    }))
    .pipe(gulp.dest('app/styles'));

  gulp.src('app/layouts/layouts/*.jade')
    .pipe(wiredep({
      exclude: ['bootstrap-sass'],
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

  gulp.src('./../Website/Sites/1/templates/shared/*.cshtml')
    .pipe(wiredep({
      relativePath:false,
      ignorePath:  /^(\.\.\/)+/,
      exclude: ['bootstrap-sass'],
      fileTypes: {
        html: {
          replace: {
            js: '<script src="/{{filePath}}"></script>',
            css: '<link rel="stylesheet" href="/{{filePath}}" />'
          }
        }
      }
    }))
    .pipe(gulp.dest('./../Website/Sites/1/templates/shared/'));
});
