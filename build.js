"use strict";
const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const gutil = require('gulp-util');
const sourcemaps = require('gulp-sourcemaps');

const onError = function(err) { 
    gutil.log(gutil.colors.red('[Error]'), err.toString());
}

gulp.task('js', function() {
    return gulp.src('src/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .on('error', onError)
        .pipe(uglify())
        .on('error', onError)
        .pipe(sourcemaps.write())
        .on('error', onError)
        .pipe(gulp.dest('dist'));
});

gulp.start('js');

console.log("Build Successful")