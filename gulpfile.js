/* eslint-env node */

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserify = require('gulp-browserify');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

const config = {
  jsPath: './js/index.js',
  scssPath: './scss/index.scss',
  buildPath: './build'
};

gulp.task('js', () => {
  return gulp.src(config.jsPath)
    .pipe(browserify({
      transform: ['babelify'],
    }))
    // .pipe(uglify())
    .on('error', function(err) {
      console.error('Error in compress task', err.toString());
    })
    .pipe(rename('widget.js'))
    .pipe(gulp.dest(config.buildPath))
});

gulp.task('css', () => {
  return gulp.src(config.scssPath)
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('widget.css'))
    .pipe(gulp.dest(config.buildPath));
});

gulp.task('watch', ['js', 'css'], () => {
  gulp.watch('./js/**/*.js', ['js']);
  gulp.watch('./scss/**/*.scss', ['css']);
});

gulp.task('default', ['js', 'css']);
