const m = require('../gulp-modules');

m.gulp.task('build', ['lint','views', 'html', 'images', 'fonts', 'extras'], () => {
  return m.gulp.src('dist/**/*').pipe(m.$.size({title: 'build', gzip: true}));
});

m.gulp.task('build:cms', ['info:cms', 'scripts:cms','images:cms', 'inject:js:cms', 'views', 'iconfont', 'fonts:cms'], () => {
  m.gulp.start('styles:cms');
  m.gulp.info = "cms";
});
