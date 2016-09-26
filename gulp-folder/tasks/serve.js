
gulp.task('serve', ['info:dev', 'inject:js', 'views', 'iconfont', 'styles', 'scripts', 'fonts'], () => {
  gulp.info = "dev";
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
  gulp.watch('app/layouts/layouts/default.jade', ['serve']);

  gulp.watch([
    'app/*.html',
    'app/images/**/*',
    '.tmp/fonts/**/*'
  ]).on('change', reload);
  gulp.watch('app/**/*.jade', ['views']);
  gulp.watch(['app/**/*.scss'], ['styles']);
  gulp.watch(['app/scripts/**/*.js', 'app/modules/**/*.js'], ['scripts']);
  gulp.watch('app/fonts/**/*', ['fonts']);
  gulp.watch('bower.json', ['wiredep', 'fonts']);
  gulp.watch('app/svg/*.svg', ['iconfont']);
  gulp.watch('app/modules/**/*.js', ['inject:js']);
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

gulp.task('serve:cms', ['info:cms', 'inject:js:cms', 'views', 'iconfont', 'styles', 'scripts', 'fonts'], () => {
  gulp.info = "cms";
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
  gulp.watch('app/layouts/layouts/default.jade', ['serve']);

  gulp.watch([
    'app/*.html',
    'app/images/**/*',
    '.tmp/fonts/**/*'
  ]).on('change', reload);
  gulp.watch('app/**/*.jade', ['views']);
  gulp.watch(['app/**/*.scss'], ['styles']);
  gulp.watch(['app/scripts/**/*.js', 'app/modules/**/*.js'], ['scripts']);
  gulp.watch('app/fonts/**/*', ['fonts']);
  gulp.watch('bower.json', ['wiredep', 'fonts']);
  gulp.watch('app/svg/*.svg', ['iconfont']);
  gulp.watch('app/modules/**/*.js', ['inject:js']);
});
