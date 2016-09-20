'use strict'

const gulp = require('gulp')
const concat = require('gulp-concat')
const sync = require('run-sequence')
// const cssnano = require('gulp-cssnano')
// const sourcemaps = require('gulp-sourcemaps')

const css = '**/*.css'
const assetsRoot = 'assets' 

const paths = {
  css: css,
  output: {
    css: assetsRoot
  }
}

const buildCSS = () => {

  return gulp.src(paths.css)
    // .pipe(sourcemaps.init())
    // .pipe(cssnano())
    // .pipe(sourcemaps.write('.'))
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest(paths.output.css))
}

gulp.task('build-css', () => buildCSS())

gulp.task('default', done => sync('build-css', done))