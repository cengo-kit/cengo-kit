const m = require('../gulp-modules');

m.gulp.task('cengo', ()=> {
  const type = process.argv[3];
  const name = process.argv[4];

  if (type == "--module" || type == "-m") {

    m.gulp.src(
      'cms/templates/module/**/*'
    )
      .pipe(m.$.replace(/{{module_name}}/g, name))
      .pipe(m.$.replaceName(/template/g, name))
      .pipe(m.gulp.dest('app/modules/' + name + "/"));
  }

  if (type == "--page" || type == "-p") {
    m.gulp.src(
      'cms/templates/page.jade'
    )
      .pipe(m.$.replaceName(/page/g, name))
      .pipe(m.gulp.dest('app/'));
  }

  m.gulp.start('inject:js');

});
