const m = require('../gulp-modules');

m.gulp.task('clean', m.del.bind(null, ['.tmp', 'dist']));

