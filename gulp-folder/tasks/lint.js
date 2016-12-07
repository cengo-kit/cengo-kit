const m = require('../gulp-modules');


function lint(files, options) {
  return m.gulp.src(files)
    .pipe(m.reload({stream: true, once: true}))
    .pipe(m.$.eslint(options))
    .pipe(m.$.eslint.format())
    .pipe(m.$.if(!m.browserSync.active, m.$.eslint.failAfterError()));
}

m.gulp.task('lint', () => {
  return lint('app/scripts/**/*.js', {
    fix: true
  })
    .pipe(m.gulp.dest('app/scripts'));
});

m.gulp.task('lint:test', () => {
  return lint('test/spec/**/*.js', {
    fix: true,
    env: {
      mocha: true
    }
  })
    .pipe(m.gulp.dest('test/spec/**/*.js'));
});

