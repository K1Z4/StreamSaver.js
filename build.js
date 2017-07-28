"use strict";
const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const gutil = require('gulp-util');

const onError = function(err) { 
    gutil.log(gutil.colors.red('[Error]'), err.toString());
}

gulp.task('js', function() {
    return gulp.src('src/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .on('error', onError)
        .pipe(uglify())
        .on('error', onError)
        .pipe(gulp.dest('dist'));
});

gulp.start('js');

console.log("Build Successful")