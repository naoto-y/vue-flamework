var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require('gulp-webpack');
var rename = require('gulp-rename');

var webpackConfig = require("./webpack.config");
const { partialRight } = require('lodash');

gulp.task('copy', function () {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('dist'))
});

gulp.task('lib', function () {
    return gulp.src('./lib/*.min.js')
        .pipe(gulp.dest('dist/lib'))
});

gulp.task('img', function () {
    return gulp.src('./src/app/imgs/*')
        .pipe(gulp.dest('dist/imgs'))
});

gulp.task('webpack', function () {
    return webpack(webpackConfig)
        .pipe(gulp.dest('dist/app'))
})

gulp.task('sass', function () {
    return gulp.src('./src/**/*.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(rename(function (path) {
            path.dirname += '/';
        }))
        .pipe(gulp.dest('dist'))
});

gulp.task('default', gulp.series(gulp.parallel('copy', 'lib', 'img', 'webpack', 'sass')));

gulp.task('watch', function () {
    gulp.watch('./src/index.html', gulp.series('copy'));
    gulp.watch('./src/app/**/*.html', gulp.series('webpack'));
    gulp.watch('./src/app/**/*.js', gulp.series('webpack'));
    gulp.watch('./src/**/*.scss', gulp.series('sass'));
});