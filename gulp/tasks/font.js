/**
 * Created by JPa on 2016-04-30.
 */
var gulp = require('gulp');

var config = require('../config');

gulp.task('fonts', function() {
    return gulp.src(config.fontSrcPath)
           .pipe(gulp.dest(config.fontDestPath));
});
