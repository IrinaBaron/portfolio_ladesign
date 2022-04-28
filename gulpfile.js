'use strict';
// import { src, dest, series, watch, parallel } from 'gulp';

import gulp from 'gulp';
const { series, parallel } = pkg;
import pkg from 'gulp';
const { src, dest } = pkg1;
import pkg1 from 'gulp';
import concat from 'gulp-concat';

import fileinclude from 'gulp-file-include';
import htmlMin from 'gulp-htmlmin';
import autoprefixes from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import svgSprite from 'gulp-svg-sprite';
import image from 'gulp-image';
import babel from 'gulp-babel';
import terser from 'gulp-terser';
import rename from 'gulp-rename';
const { init, write } = pkg2;
import pkg2 from 'gulp-sourcemaps';
import del from 'del';
import browserSync from 'browser-sync';
import pkg3 from 'node-notifier';
const { notify } = pkg3;
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

import watch from 'gulp-watch';
browserSync.create();
// const scss = require('gulp-sass')(require('sass'));
// const browserSync = require('browser-sync').create();

const clean = () => {
  return del(['dist'])
}

const resources = () => {
  return src('src/resources/**')
}

const styles = async () => {
  return src(['src/styles/normalize.css', 'src/styles/style.scss', 'src/styles/*.scss', 'src/styles/media.scss'])
    .pipe(pkg2.init())
    .pipe(pkg2.write())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(dest('dist/styles'))
    .pipe(browserSync.stream())
}


const html = async () => {
  return src('src/**/*.html')
    .pipe(fileinclude())
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const htmlMinify = async () => {
  return src('src/**/*.html')
    .pipe(htmlMin({
      collapseWhitespace: true,
    }))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())

}

const svgSprites = async () => {
  return src('src/images/svg/**/*.svg')
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: '../sprite.svg'
        }
      }
    }))
}

const scripts = async () => {
  return src([
    'src/js/**/*.js',
    'src/js/main.js'
  ])
    .pipe(pkg2.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    // .pipe(terser())
    .pipe(write())
    .pipe(concat('app.js'))
    .pipe(dest('dist/js'))
    .pipe(browserSync.stream())
}

const fonts = () => {
  return src(['src/fonts/**/*.woff', 'src/fonts/**/*.woff2'])
    .pipe(dest('dist/fonts'))
}

const images = () => {
  return src([
    'src/images/**/*.jpg',
    'src/images/**/*.jpeg',
    'src/images/**/*.png',
    'src/images/**/*.webp',
    'src/images/**/*.svg',
  ])
    .pipe(image())
    .pipe(dest('dist/images'))
    .pipe(browserSync.stream())
}

const prebuild = async function () {
  const ind = src('src/**/*.html')
    .pipe(fileinclude())
    .pipe(dest('dist'))
  const resource = src('src/resources/**')
  //   .pipe(dest('dist'))
  const css = src(['src/styles/normalize.css', 'src/styles/style.scss', 'src/styles/*.scss', 'src/styles/media.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(autoprefixes({
      cascade: false
    }))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(dest('dist/styles'))

}

const buildM = async function () {
  const js = src([
    'src/js/**/*.js',
    'src/js/main.js'
  ])
  .pipe(concat('app.js'))
  .pipe(dest('dist/js'))
  .pipe(rename({ extname: '.min.js' }))
  .pipe(terser())
  .pipe(write())
  .pipe(concat('app.js'))
  .pipe(dest('dist/js'))
  const spritesSvg = src('src/images/svg/**/*.svg')
    .pipe(dest('dist/images'))
  const fnt = src(['src/fonts/**/*.woff', 'src/fonts/**/*.woff2'])
    .pipe(dest('dist/fonts'))
  // return src(['src/fonts/**/*.woff'])
  // .pipe(dest('dist/fonts'))
}

const watchFiles = async () => {
  watch('src/styles/**/*.scss', ['sass'])
  watch('src/styles/**/*.css', styles)
  watch('src/**/*.html', html)
  watch('src/**/*.html', htmlMinify)
  watch([
    'src/images/**/*.jpg',
    'src/images/**/*.jpeg',
    'src/images/**/*.png',
    'src/images/*.svg',
  ], images)
  watch('src/images/svg/**/*.svg', svgSprites)
  watch('src/js/**/*.js', scripts)
  watch('src/resources/**', resources)
  browserSync.init({
    server: {
      baseDir: './dist/'
    },
    notify: false
  })
}

// watch('src/styles/**/*.css', styles)
// watch('src/styles/**/*.scss', styles)
// watch('src/**/*.html', htmlMinify)
// watch('src/**/*.html', html)
// watch([
//   'src/images/**/*.jpg',
//   'src/images/**/*.jpeg',
//   'src/images/**/*.png',
//   'src/images/*.svg',
// ], images)
// watch('src/images/svg/**/*.svg', svgSprites)
// watch('src/js/**/*.js', scripts)
// watch('src/resources/**', resources)

export const dev = series(resources, parallel(styles, scripts, html, fonts), svgSprites, images, watchFiles)
export const build = series(clean, htmlMinify, fonts, images, parallel(prebuild, buildM))
