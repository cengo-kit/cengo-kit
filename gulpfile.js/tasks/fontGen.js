var gulp = require('gulp');
var fontgen = require('gulp-fontgen');
var config = require("../config/fontGen");
var del = require('del');

var fontGenTask = function () {
    return gulp.src(config.source)
        .pipe(fontgen({
            dest: config.dest
        }))
        .pipe(fontgen({
            dest: config.destSource
        }));
};

var fontGenClean = function () {
    return del([config.destSource, config.dest + "/*.css"])
};
gulp.task('fontGenTask', fontGenTask);
gulp.task('fontGenClean', fontGenClean);
gulp.task('fontGen', ['fontGenTask', 'fontCssImport', 'fontGenClean']);
module.exports = fontGenTask;
