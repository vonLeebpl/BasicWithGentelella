/**
 * Created by JPa on 2016-04-30.
 */
var gulp = require('gulp');

var config = require('../config');
var flatten = require('gulp-flatten');

gulp.task('images', function() {
    return gulp.src(config.imgSrcPath)
        .pipe(flatten())
        .pipe(gulp.dest(config.imgDestPath));
});