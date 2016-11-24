gulp.task('iconfont', () => {
  del.bind(null, ['app/fonts/icons/'])
  return gulp.src('app/svg/*.svg')
    .pipe($.iconfontCss({
      fontName: 'icons',
      path: 'scss',
      targetPath: '../../styles/_icons.scss',
      fontPath: '../fonts/icons/'
    }))
    .pipe($.iconfont({
      fontName: 'icons',
      formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
      prependUnicode: true,
      normalize: false,
      appendCodepoints: true
    }))
    .pipe(gulp.dest('app/fonts/icons/'));
});


