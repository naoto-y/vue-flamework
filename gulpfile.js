var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require('gulp-webpack');

var webpackConfig = require("./webpack.config");

gulp.task('copy', function() {
    return gulp.src('./src/index.html')
    .pipe(gulp.dest('dist'))
});

gulp.task('webpack',function() {
    return webpack(webpackConfig)
    .pipe(gulp.dest('dist/app'))
})

gulp.task('sass',function(){
    return gulp.src('*.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('default', gulp.series( gulp.parallel('copy', 'webpack', 'sass')));