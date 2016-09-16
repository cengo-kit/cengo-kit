const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync = require('browser-sync');
const del = require('del');
const wiredep = require('wiredep').stream;
global.staticData = require('./data/content.js');
const $ = gulpLoadPlugins();
const reload = browserSync.reload;
