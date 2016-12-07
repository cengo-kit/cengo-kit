const m = require('../gulp-modules');

m.gulp.task('styles', () => {
  return m.gulp.src('app/styles/*.scss')
    .pipe(m.$.plumber())
    .pipe(m.$.sourcemaps.init())
    .pipe(m.$.sassGlob())
    .pipe(m.$.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.', 'app/modules/**/*', require("bourbon").includePaths]
    }).on('error', m.$.sass.logError))
    .pipe(m.$.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
    .pipe(m.$.sourcemaps.write())
    .pipe(m.gulp.dest('.tmp/styles'))
    .pipe(m.reload({stream: true}));
});

m.gulp.task('styles:cms', () => {
  return m.gulp.src('app/styles/*.scss')
    .pipe(m.$.plumber())
    .pipe(m.$.sourcemaps.init())
    .pipe(m.$.sassGlob())
    .pipe(m.$.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.', 'app/modules/**/*', require("bourbon").includePaths]
    }).on('error', m.$.sass.logError))
    .pipe(m.$.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
    .pipe(m.$.sourcemaps.write())
    .pipe(m.gulp.dest('.tmp/styles'))
    .pipe(m.gulp.dest('../Cms13/styles'))
    .pipe(m.reload({stream: true}));
});
