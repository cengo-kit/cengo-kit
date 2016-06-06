var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');

var defaultTask = function (cb) {
    gulp.info = "cms";
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
gulp.task('cms', defaultTask);
module.exports = defaultTask;
