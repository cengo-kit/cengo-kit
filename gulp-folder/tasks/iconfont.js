const m = require('../gulp-modules');

m.gulp.task('iconfont', () => {
  m.del.bind(null, ['app/fonts/icons/'])
  return m.gulp.src('app/svg/*.svg')
    .pipe(m.$.iconfontCss({
      fontName: 'icons',
      path: 'scss',
      targetPath: '../../styles/_icons.scss',
      fontPath: '../fonts/icons/'
    }))
    .pipe(m.$.iconfont({
      fontName: 'icons',
      formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
      prependUnicode: true,
      normalize: false,
      appendCodepoints: true
    }))
    .pipe(m.gulp.dest('app/fonts/icons/'));
});


