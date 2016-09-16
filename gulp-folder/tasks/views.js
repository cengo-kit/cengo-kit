gulp.task('views', () => {
  return gulp.src('app/jade/*.jade')
    .pipe($.data( (file) => {
      return {
        dev: (gulp.info == "dev") ? true : false,
        cms:{
          image: require('./data/image.js'),
          page: require('./data/page.js'),
          imageGallery: require('./data/imageGallery.js'),
          subPage: require('./data/subPage.js')
        }
      };
    }))
    .pipe($.plumber())
    .pipe($.jade({pretty: true}))
    .pipe(gulp.dest('.tmp'))
    .pipe(reload({stream: true}));
});

