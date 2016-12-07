const m = require('../gulp-modules');

m.gulp.task('cms', ['info', 'views', 'styles', 'scripts', 'fonts'], () => {

  m.browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.tmp', 'app'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  m.gulp.watch([
    'app/*.html',
    'app/images/**/*',
    '.tmp/fonts/**/*'
  ]).on('change', m.reload);
  m.gulp.watch('app/**/*.jade', ['views']);
  m.gulp.watch('app/styles/**/*.scss', ['styles']);
  m.gulp.watch('app/scripts/**/*.js', ['scripts']);
  m.gulp.watch('app/fonts/**/*', ['fonts']);
  m.gulp.watch('bower.json', ['wiredep', 'fonts']);
});

