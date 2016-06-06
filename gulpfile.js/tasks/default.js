var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');

var defaultTask = function (cb) {
    gulp.info = "dev";
    gulpSequence(
        'clean',
        [
            'bower'
        ],
        [
            'images',
            'svg:sprite'
        ],
        'fonts',
        'watch',
        [
            'scripts:standalone',
            'styles'
        ],

        cb
    )
};
gulp.task('default', defaultTask);
module.exports = defaultTask;
