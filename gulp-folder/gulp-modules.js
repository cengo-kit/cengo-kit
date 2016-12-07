const m = {};

m.gulp = require('gulp');
m.gulpLoadPlugins = require('gulp-load-plugins');
m.browserSync = require('browser-sync');
m.del = require('del');
m.wiredep = require('wiredep').stream;
m.cms = require('../cms/cms');
m.series = require('stream-series');
m.$ = m.gulpLoadPlugins();
m.reload = m.browserSync.reload;
m.rename = require('gulp-rename');

module.exports = m;
