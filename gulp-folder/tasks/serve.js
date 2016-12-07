const m = require('../gulp-modules');

m.gulp.task('serve', ['info:dev', 'scripts', 'inject:js', 'views', 'iconfont', 'fonts'], () => {
  m.gulp.info = "dev";
  m.gulp.start('styles');
  m.browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.tmp', 'app'],
      directory: true,
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });
  m.gulp.watch('m.gulpfile.js', ['serve']);

  m.gulp.watch([
    'app/*.html',
    'app/images/**/*',
    '.tmp/fonts/**/*'
  ]).on('change', m.reload);
  m.gulp.watch('app/**/*.jade', ['views']);
  m.gulp.watch(['app/**/*.scss'], ['styles']);
  m.gulp.watch(['app/scripts/**/*.js', 'app/modules/**/*.js'], ['scripts']);
  m.gulp.watch('app/fonts/**/*', ['fonts']);
  m.gulp.watch('bower.json', ['wiredep', 'fonts']);
  m.gulp.watch('app/svg/*.svg', ['iconfont']);
});

m.gulp.task('serve:dist', ['build'], () => {
  m.browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['dist']
    }
  });
});

m.gulp.task('serve:test', ['scripts'], () => {
  m.browserSync({
    notify: false,
    port: 9000,
    ui: false,
    server: {
      baseDir: 'test',
      routes: {
        '/scripts': '.tmp/scripts',
        '/bower_components': 'bower_components'
      }
    }
  });

  m.gulp.watch('app/**/*.js', ['scripts']);
  m.gulp.watch('test/spec/**/*.js').on('change', m.reload);
  m.gulp.watch('test/spec/**/*.js', ['lint:test']);
});

m.gulp.task('serve:cms', ['info:cms', 'scripts:cms', 'inject:js:cms', 'views', 'iconfont', 'fonts:cms'], () => {
  m.gulp.info = "cms";
  m.gulp.start('styles:cms');
  m.browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.tmp', 'app'],
      directory: true,
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });
  m.gulp.watch('m.gulpfile.js', ['serve:cms']);

  m.gulp.watch([
    'app/*.html',
    'app/images/**/*',
    '.tmp/fonts/**/*'
  ]).on('change', m.reload);
  m.gulp.watch('app/**/*.jade', ['views']);
  m.gulp.watch(['app/**/*.scss'], ['styles:cms']);
  m.gulp.watch(['app/scripts/**/*.js', 'app/modules/**/*.js'], ['scripts:cms']);
  m.gulp.watch('app/fonts/**/*', ['fonts:cms']);
  m.gulp.watch('bower.json', ['wiredep', 'fonts:cms']);
  m.gulp.watch('app/svg/*.svg', ['iconfont']);
});
