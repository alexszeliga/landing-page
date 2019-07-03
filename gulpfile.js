
const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');

// style paths
const scssFiles = 'src/scss/*.scss';
const cssDestination = 'public/stylesheets/';



gulp.task('scss', () => {
    return gulp.src(scssFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix())
        .pipe(gulp.dest(cssDestination));
} )
 
gulp.task('js', () =>
    gulp.src('src/js/app.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('public/javascripts'))
);

gulp.task('sass:watch', function () {
    gulp.watch(scssFiles, ['scss']);
  });