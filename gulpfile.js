const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Complie Sass
gulp.task('sass', () => {
    // Sass files location
    return gulp.src(['src/scss/*.scss'])
    // compile Sass
    .pipe(sass())
    // place compiled CSS to ./src/css
    .pipe(gulp.dest('src/css'))
    // stream to browser
    .pipe(browserSync.stream());
});

// Watch & Serve
gulp.task('serve', ['sass'], () => {
    // initialize browser-sync with location to serve
    browserSync.init({
        server: './src'
    });
    // watch any Sass file changes
    gulp.watch(['src/scss/*.scss'], ['sass'])
    // watch any HTML or JS file changes, if change reload browser
    gulp.watch(['src/*.html', 'src/js/*.js']).on('change', browserSync.reload)
});

// Default task
gulp.task('default', ['serve']);
