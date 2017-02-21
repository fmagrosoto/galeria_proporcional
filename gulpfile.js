var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  minifyCSS = require('gulp-clean-css'),
  livereload = require('gulp-livereload');


// Minificar archivos javascript, guardarlos en otra carpeta y renombrarlos
gulp.task('minJS', function () {
  gulp.src('source/js/*.js')
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('distro/js/'))
    .pipe(livereload());
});

// Minificar archivos css, guardarlos en otra carpeta y renombrarlos
gulp.task('minCSS', function () {
  gulp.src('source/css/*.css')
    .pipe(minifyCSS())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('distro/css/'))
    .pipe(livereload());
});

gulp.task('liveHTML', function () {
  gulp.src('distro/*.html')
    .pipe(livereload());
});


gulp.task('default', ['minJS','minCSS','liveHTML']);

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('source/js/*.js', ['minJS']);
  gulp.watch('source/css/*.css', ['minCSS']);
  gulp.watch('distro/*.html', ['liveHTML']);
});