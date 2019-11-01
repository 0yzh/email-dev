const gulp = require('gulp');
const premailer = require('gulp-premailer');
const inlineCss = require('gulp-inline-css');

gulp.task('default', function() {
  return gulp
    .src('./stage/*.html')
    .pipe(premailer())
    .pipe(inlineCss())
    .pipe(gulp.dest('build/'));
});
