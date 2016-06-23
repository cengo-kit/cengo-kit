// generated on 2016-06-09 using generator-webapp 2.1.0
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync = require('browser-sync');
const del = require('del');
const wiredep = require('wiredep').stream;
const cms = require('./cms/cms');
const series = require('stream-series');
const $ = gulpLoadPlugins();
const reload = browserSync.reload;
const rename = require('gulp-rename')

gulp.task('styles', () => {
  return gulp.src('app/styles/*.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sassGlob())
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.','app/modules/**/*',require("bourbon").includePaths]
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(reload({stream: true}));
});

gulp.task('iconfont', () => {
  return gulp.src('app/svg/*.svg')
    .pipe($.iconfontCss({
      fontName: 'icons',
      path: 'scss',
      targetPath: '../../styles/_icons.scss',
      fontPath: '../fonts/icons/'
    }))
    .pipe($.iconfont({
      fontName: 'icons',
      formats: ['ttf', 'eot', 'woff', 'woff2', 'svg']
    }))
    .pipe(gulp.dest('app/fonts/icons/'));
});

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

});

gulp.task('injectJs', () => {
  return gulp.src('app/layouts/layouts/*.jade')
    .pipe($.inject(series(gulp.src('./app/scripts/app.js', {read: false}), gulp.src(['./app/**/*.js', '!./app/scripts/app.js'], {
      read: false
    }).pipe(rename(function (path) {
      var paths = path.basename.split('/');
      path.dirname = "scripts/";
    }))), {
      relative: false,
      ignorePath: 'app',
      addRootSlash: false
    }))
    .pipe(gulp.dest('app/layouts/layouts/'));
});


gulp.task('scripts', () => {
  return gulp.src('app/**/*.js')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.sourcemaps.write('.'))
    .pipe(rename(function (path) {
      var paths = path.basename.split('/');
      path.dirname = "";
      path.basename = paths[paths.length - 1];
    }))
    .pipe(gulp.dest('.tmp/scripts'))
    .pipe(reload({stream: true}));
});

function lint(files, options) {
  return gulp.src(files)
    .pipe(reload({stream: true, once: true}))
    .pipe($.eslint(options))
    .pipe($.eslint.format())
    .pipe($.if(!browserSync.active, $.eslint.failAfterError()));
}

gulp.task('lint', () => {
  return lint('app/scripts/**/*.js', {
    fix: true
  })
    .pipe(gulp.dest('app/scripts'));
});
gulp.task('lint:test', () => {
  return lint('test/spec/**/*.js', {
    fix: true,
    env: {
      mocha: true
    }
  })
    .pipe(gulp.dest('test/spec/**/*.js'));
});

gulp.task('html', ['styles', 'scripts'], () => {
  return gulp.src(['app/*.html', '.tmp/*.html'])
    .pipe($.useref({searchPath: ['.tmp', 'app', '.']}))
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.cssnano({safe: true, autoprefixer: false})))
    .pipe($.if('*.html', $.htmlmin({collapseWhitespace: true})))
    .pipe(gulp.dest('dist'));
});

gulp.task('images', () => {
  return gulp.src('app/images/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true,
      // don't remove IDs from SVGs, they are often used
      // as hooks for embedding and styling
      svgoPlugins: [{cleanupIDs: false}]
    })))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('fonts', () => {
  return gulp.src(require('main-bower-files')('**/*.{eot,svg,ttf,woff,woff2}', function (err) {
  })
    .concat('app/fonts/**/*'))
    .pipe(gulp.dest('.tmp/fonts'))
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('extras', () => {
  return gulp.src([
    'app/*.*',
    '!app/*.html',
    '!app/**/*.jade'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});

gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

gulp.task('devGulpInfo', () => {
  gulp.info = "dev"
});
gulp.task('serve', ['devGulpInfo','wiredep', 'injectJs', 'iconfont', 'views', 'styles', 'scripts', 'fonts'], () => {
  gulp.info = "dev"
browserSync({
  notify: false,
  port: 9000,
  server: {
    baseDir: ['.tmp', 'app'],
    routes: {
      '/bower_components': 'bower_components'
    }
  }
});

gulp.watch([
  'app/*.html',
  'app/images/**/*',
  '.tmp/fonts/**/*'
]).on('change', reload);
gulp.watch('app/**/*.jade', ['views']);
gulp.watch('app/styles/**/*.scss', ['styles']);
gulp.watch('app/modules/**/*.scss', ['styles']);
gulp.watch(['app/scripts/**/*.js','app/modules/**/*.js'], ['scripts']);
gulp.watch('app/fonts/**/*', ['fonts']);
gulp.watch('bower.json', ['wiredep', 'fonts']);
gulp.watch('app/svg/*.svg', ['iconfont']);
gulp.watch('app/modules/**/*.js', ['injectJs']);
});

gulp.task('cmsGulpInfo', () => {
  gulp.info = "cms"
});
gulp.task('cms', ['cmsGulpInfo', 'views', 'styles', 'scripts', 'fonts'], () => {

  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.tmp', 'app'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

gulp.watch([
  'app/*.html',
  'app/images/**/*',
  '.tmp/fonts/**/*'
]).on('change', reload);
gulp.watch('app/**/*.jade', ['views']);
gulp.watch('app/styles/**/*.scss', ['styles']);
gulp.watch('app/scripts/**/*.js', ['scripts']);
gulp.watch('app/fonts/**/*', ['fonts']);
gulp.watch('bower.json', ['wiredep', 'fonts']);
});


gulp.task('views', () => {
  return gulp.src('app/*.jade')
    .pipe($.data((file) => {
        return {
          dev: (gulp.info == "dev"),
          cms: cms
        };
}))
.pipe($.plumber())
  .pipe($.jade({pretty: true}))
  .pipe(rename(function (path) {
    var paths = path.basename.split('/');
    path.dirname = "";
    path.basename = paths[paths.length - 1];
  }))
  .pipe(gulp.dest('.tmp'))
  .pipe(reload({stream: true}));
});


gulp.task('serve:dist', () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['dist']
    }
  });
});

gulp.task('serve:test', ['scripts'], () => {
  browserSync({
    notify: false,
    port: 9000,
    ui: false,
    server: {
      baseDir: 'test',
      routes: {
        '/scripts': '.tmp/scripts',
        '/bower_components': 'bower_components'
      }
    }
  });

gulp.watch('app/**/*.js', ['scripts']);
gulp.watch('test/spec/**/*.js').on('change', reload);
gulp.watch('test/spec/**/*.js', ['lint:test']);
});

// inject bower components
gulp.task('wiredep', () => {
  gulp.src('app/styles/*.scss')
  .pipe(wiredep({
    ignorePath: /^(\.\.\/)+/
  }))
  .pipe(gulp.dest('app/styles'));

gulp.src('app/layouts/layouts/*.jade')
  .pipe(wiredep({
    exclude: ['bootstrap-sass'],
    ignorePath: /^(\.\.\/)*\.\./
  }))
  .pipe(gulp.dest('app/layouts/layouts/'));
});


gulp.task('build', ['lint', 'html', 'images', 'fonts', 'extras'], () => {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});
