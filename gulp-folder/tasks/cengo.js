gulp.task('cengo', ()=> {
  var type = process.argv[3];
  var name = process.argv[4];

  if (type == "--module" || type == "-m") {

    gulp.src(
      'cms/templates/module/**/*'
    )
      .pipe($.replace(/{{module_name}}/g, name))
      .pipe($.replaceName(/template/g, name))
      .pipe(gulp.dest('app/modules/' + name + "/"));
  }

  if (type == "--page" || type == "-p") {
    gulp.src(
      'cms/templates/page.jade'
    )
      .pipe($.replaceName(/page/g, name))
      .pipe(gulp.dest('app/'));
  }

  gulp.start('inject');
});
