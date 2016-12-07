const m = require('../gulp-modules');

m.gulp.task('default', ['clean'], () => {
  m.gulp.start('build');
});

