
gulp.task('serve', ['info:dev', 'scripts', 'inject', 'views', 'iconfont', 'fonts'], () => {
  gulp.info = "dev";
  gulp.start('styles');
  browserSync({
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
  gulp.watch('gulpfile.js', ['serve']);

  let timeout = null;
  gulp.watch([
    'app/*.html',
    'app/images/**/*',
    '.tmp/**/*.html',
    '.tmp/images/**/*',
    '.tmp/fonts/**/*',
    '.tmp/js/**/*',
    '.tmp/styles/**/*'
  ]).on('change', function (g) {
    if (timeout != null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      reload(g);
    }, 300);
  });
  gulp.watch('app/**/*.jade', ['views']);
  gulp.watch(['app/**/*.scss'], ['styles']);
  gulp.watch(['app/scripts/**/*.js', 'app/modules/**/*.js'], ['scripts']);
  gulp.watch('app/fonts/**/*', ['fonts']);
  gulp.watch('bower.json', ['inject', 'fonts']);
  gulp.watch('app/svg/*.svg', ['iconfont']);
});

gulp.task('serve:dist', ['build'], () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['dist']
    }
  });
});

gulp.task('serve:test', ['scripts'], () => {
  browserSync({
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

  gulp.watch('app/**/*.js', ['scripts']);
  gulp.watch('test/spec/**/*.js').on('change', reload);
  gulp.watch('test/spec/**/*.js', ['lint:test']);
});

gulp.task('serve:cms', ['info:cms', 'scripts:cms','images:cms', 'inject:cms', 'views', 'iconfont', 'fonts:cms'], () => {
  gulp.info = "cms";
  gulp.start('styles:cms');
  browserSync({
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
  gulp.watch('gulpfile.js', ['serve:cms']);

  let timeout = null;
  gulp.watch([
    'app/*.html',
    'app/images/**/*',
    '.tmp/**/*.html',
    '.tmp/images/**/*',
    '.tmp/fonts/**/*',
    '.tmp/js/**/*',
    '.tmp/styles/**/*'
  ]).on('change', function (g) {
    if (timeout != null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      reload(g);
    }, 300);
  });
  gulp.watch('app/**/*.jade', ['views']);
  gulp.watch(['app/**/*.scss'], ['styles:cms']);
  gulp.watch(['app/scripts/**/*.js', 'app/modules/**/*.js'], ['scripts:cms']);
  gulp.watch('app/fonts/**/*', ['fonts:cms']);
  gulp.watch('bower.json', ['inject', 'fonts:cms']);
  gulp.watch('app/svg/*.svg', ['iconfont']);
});
