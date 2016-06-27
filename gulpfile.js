'use strict';

const nunjucksRender = require('gulp-nunjucks-render');
const gulp = require('gulp');
const data = require('gulp-data');
const gutil = require('gulp-util');

gulp.task('default', ['watch']);

gulp.task('nunjucks', function() {
  gutil.log('Gulp is running!');
  return gulp.src('app/templates/pages/**/*.+(html|nunjucks)')
    .pipe(data(function() {
      return require('./app/data/site.json');
    }))
    .pipe(nunjucksRender({
      path: ['app/templates']
    }))
    .pipe(gulp.dest('app/site'))
});

gulp.task('watch', function() {
  gulp.watch('app/templates/pages/**/*.+(html|nunjucks)', ['nunjucks']);
});
