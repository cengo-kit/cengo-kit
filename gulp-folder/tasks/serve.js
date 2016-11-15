
gulp.task('serve', ['info:dev', 'scripts', 'inject:js', 'views', 'iconfont', 'styles', 'fonts'], () => {
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

gulp.task('serve:cms', ['info:cms', 'scripts:cms', 'inject:js:cms', 'views', 'iconfont', 'styles:cms', 'fonts:cms'], () => {
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
  gulp.watch('gulpfile.js', ['serve:cms']);

  gulp.watch([
    'app/*.html',
    'app/images/**/*',
    '.tmp/fonts/**/*'
  ]).on('change', reload);
  gulp.watch('app/**/*.jade', ['views']);
  gulp.watch(['app/**/*.scss'], ['styles:cms']);
  gulp.watch(['app/scripts/**/*.js', 'app/modules/**/*.js'], ['scripts:cms']);
  gulp.watch('app/fonts/**/*', ['fonts:cms']);
  gulp.watch('bower.json', ['wiredep', 'fonts:cms']);
  gulp.watch('app/svg/*.svg', ['iconfont']);
});
