const { series, src, dest, watch } = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
// const sourcemaps = require('gulp-sourcemaps');

// style paths
const scssFiles = 'src/scss/*.scss';
const cssDestination = '../';

// js paths
const jsFiles = 'src/js/*.js';
const jsDestination = '../';

function scssTask() {
    // place code for scss task here
    return src(scssFiles)
        // .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix())
        // .pipe(sourcemaps.write())
        .pipe(dest(cssDestination));
}

function jsTask() {
    // place code for js task here
    return src(jsFiles)
        // .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        // .pipe(sourcemaps.write())
        .pipe(dest(jsDestination));
}

function watchFiles() {
    watch(scssFiles, scssTask);
    watch(jsFiles, jsTask);
}

exports.watch = watchFiles;
exports.scss = scssTask;
exports.js = jsTask;
exports.default = series(scssTask, jsTask);