/**
 * Created by JPa on 2016-04-30.
 */
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');
var flatten = require('gulp-flatten');

var config = require('../config');

gulp.task('process-css', function() {
    return gulp.src(config.cssVendorSrcPath)
        .pipe(concatCss('app.min.css'))
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest(config.cssDestPath));
});

gulp.task('process-datatables-css', function() {
    return gulp.src('./app/Resources/css/datatables/css/*.css')
        .pipe(concatCss('datatables.min.css'))
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest('./app/Resources/css/datatables/css'));
});

gulp.task('process-icheck-css', function() {
    return gulp.src('./app/Resources/css/icheck/flat/_all.css')
        .pipe(concatCss('icheck.min.css'))
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest('./app/Resources/css/icheck/flat'));
});

gulp.task('process-map-css', function() {
    return gulp.src('./app/Resources/css/maps/*.css')
        .pipe(concatCss('jvectormap.min.css'))
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest('./app/Resources/css/maps'));
});

gulp.task('process-progressbar-css', function() {
    return gulp.src('./app/Resources/css/progressbar/*.css')
        .pipe(concatCss('bootrstrap-progressbar.min.css'))
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest('./app/Resources/css/progressbar'));
});

gulp.task('process-select-css', function() {
    return gulp.src('./app/Resources/css/select/*.css')
        .pipe(concatCss('select12.min.css'))
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest('./app/Resources/css/select'));
});

gulp.task('process-rangeslider-css', function() {
    return gulp.src('./app/Resources/css/ion.*.css')
        .pipe(concatCss('ion.rangeslider.min.css'))
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest('./app/Resources/css'));
});

gulp.task('process-normalize-css', function() {
    return gulp.src('./app/Resources/css/normalize.css')
        .pipe(concatCss('normalize.min.css'))
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest('./app/Resources/css'));
});

gulp.task('process-nprogress-css', function() {
    return gulp.src('./app/Resources/css/nprogress.css')
        .pipe(concatCss('nprogress.min.css'))
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest('./app/Resources/css'));
});

gulp.task('move-css', function() {
    return gulp.src('./app/Resources/css/**/*.min.css')
        .pipe(flatten())
        .pipe(gulp.dest(config.cssDestPath));
});
