const m = require('../gulp-modules');

m.gulp.task('html', ['styles', 'scripts'], () => {
  return m.gulp.src(['app/*.html', '.tmp/*.html'])
    .pipe(m.$.useref({searchPath: ['.tmp', 'app', '.']}))
    .pipe(m.$.if('*.js', m.$.uglify()))
    .pipe(m.$.if('*.css', m.$.cssnano({safe: true, autoprefixer: false})))
    .pipe(m.$.if('*.html', m.$.htmlmin({collapseWhitespace: true})))
    .pipe(m.gulp.dest('dist'));
});

m.gulp.task('html:cms', () => {
  return m.gulp.src(['.tmp/*.html'])
    .pipe(m.$.useref({searchPath: ['.tmp', '.'], noconcat:false}))
    .pipe(m.$.if('*.css', m.$.cssnano({safe: true, autoprefixer: false})))
    .pipe(m.$.if('*.html', m.$.htmlmin({collapseWhitespace: true})))
    .pipe(m.gulp.dest('../Cms13/'));
});

