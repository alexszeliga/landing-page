const { series, src, dest } = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');

// style paths
const scssFiles = 'src/scss/*.scss';
const cssDestination = 'public/stylesheets/';

// js paths
const jsFiles = 'src/js/*.js';
const jsDestination = 'public/javascripts/';

function scssTask() {
    // place code for scss task here
    return src(scssFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix())
        .pipe(dest(cssDestination));
}

function jsTask() {
    // place code for js task here
    return src(jsFiles)
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(dest(jsDestination));
}
  
exports.scss = scssTask;
exports.js = jsTask;
exports.default = series(scssTask, jsTask);