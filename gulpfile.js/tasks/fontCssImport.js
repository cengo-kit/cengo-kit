var gulp = require('gulp');
var config = require("../config/fontCssImport");
var ext_replace = require('gulp-ext-replace');

var fontCssImport = function () {

    return gulp.src(config.source)
        .pipe(ext_replace('.scss'))
        .pipe(gulp.dest(config.dest))
};

gulp.task('fontCssImport', fontCssImport);
module.exports = fontCssImport;
