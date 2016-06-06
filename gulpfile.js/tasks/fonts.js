var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');

var fonts = function (cb) {
    gulpSequence(
        'fontGenTask',
        'fontCssImport',
        'fontGenClean',
        cb
    )
};
gulp.task('fonts', fonts);
module.exports = fonts;
