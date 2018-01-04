'use strict';

const gulp = require('gulp');
const sass         = require('gulp-sass');
const rename       = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var browserify   = require('browserify');
var source       = require('vinyl-source-stream');

const publicFolder = './public';

// default task
gulp.task('default', ['sass', 'js', 'all:watch']);

// Global styles
gulp.task('sass', function () {
  return gulp.src(publicFolder + '/sass/import.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['> 1%']
        }))
    .pipe(rename('layout.css'))
    .pipe(gulp.dest(publicFolder + '/build'));
});

gulp.task('js', function() {
  return browserify(publicFolder + '/app/index.js')
    .transform("babelify", {presets: ["env", "react"]})
    .bundle()
    .pipe(source('bundle.js'))
    // .pipe(buffer())
    .pipe(gulp.dest(publicFolder + '/build'))
});

// Watcher
gulp.task('all:watch', function () {
  gulp.watch(publicFolder + '/sass/**/*.scss', ['sass']);
  gulp.watch(publicFolder + '/app/**/*', ['js']);
});
