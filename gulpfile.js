'use strict';

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-minify-css'),
    rimraf = require('rimraf'),
    htmlmin = require('gulp-html-minifier'),
    rename = require('gulp-rename');

var path = {
    index: {
        src: './index.src.html',
        target: './index.html'
    }
};

gulp.task('html:build', function () {
    gulp.src(path.index.src)
        .pipe(rigger())
        .pipe(htmlmin({
            collapseWhitespace: true,
            minifyJS: true,
            removeComments: true
        }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./'))
});

gulp.task('build', [
    'html:build'
]);