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

  if (type == "--modules" || type == "-ms") {
    // Confluence ten documanı http://www.regexr.com/ adresine kopyalayıp modules:([\w ,-]+) kodu yapıştırın sonra sol taraftan flags tıklayıp ignore case(i) ve global(g) ı aktif edin.
    // aşağıdaki tolls bölümünden list tıklayıp $1\n kodunu yapıştırın. çıkan çıktıyı bir txt dosyasına yapıştırıp "gulp cengo -ms name.txt" komutunu çalıştırın.
    let page = fs.readFileSync('./' + name, 'utf8');
    if (page) {
      let modulesLines = page.split('\n');
      modulesLines.forEach((line) => {
        const modules = line.split(',');
        modules.forEach((moduleName) => {
          if (moduleName) {
            moduleName = moduleName.replace(/[ \s]+/g, '');
            gulp.src(
              'cms/templates/module/**/*'
            )
              .pipe($.replace(/{{module_name}}/g, moduleName))
              .pipe($.replaceName(/template/g, moduleName))
              .pipe(gulp.dest('app/modules/' + moduleName + "/"));
          }
        });
      });
    }
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
