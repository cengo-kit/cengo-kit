const m = require('../gulp-modules');

m.gulp.task('wiredep', () => {
  m.gulp.src('app/styles/*.scss')
    .pipe(m.wiredep({
      ignorePath: /^(\.\.\/)+/
    }))
    .pipe(m.gulp.dest('app/styles'));

  m.gulp.src('app/layouts/layouts/*.jade')
    .pipe(m.wiredep({
      exclude: ['bootstrap-sass'],
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(m.gulp.dest('app/layouts/layouts/'));
});

m.gulp.task('wiredep:cms', () => {
  m.gulp.src('app/styles/*.scss')
    .pipe(m.wiredep({
      ignorePath: /^(\.\.\/)+/
    }))
    .pipe(m.gulp.dest('app/styles'));

  m.gulp.src('./../Cms13/Sites/1/templates/shared/*.cshtml')
    .pipe(m.wiredep({
      relativePath: true,
      ignorePath: /^(\.\.\/)+/,
      exclude: ['bootstrap-sass'],
      fileTypes: {
        html: {
          replace: {
            js: function (filePath) {
              return '<script src="' + filePath.replace('HTML', '') + '"></script>';
            },
            css: function (filePath) {
              return '<link rel="stylesheet" href="' + filePath.replace('HTML', '') + '" />';
            }
          }
        }
      }
    }))
    .pipe(m.gulp.dest('./../Cms13/Sites/1/templates/shared/'));
});
