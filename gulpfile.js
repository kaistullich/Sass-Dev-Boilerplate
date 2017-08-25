const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Complie Sass
gulp.task('sass', () => {
    // watch src/scss for any changes to Sass files
    return gulp.src(['src/scss/*.scss'])
    .pipe(sass())
    // complie to ./src/css
    .pipe(gulp.dest('src/css'))
    // stream to the browser
    .pipe(browserSync.stream());
});

// Watch & Serve
gulp.task('serve', ['sass'], () => {
    browserSync.init({
        server: './src'
    });
    // watch any SASS file changes
    gulp.watch(['src/scss/*.scss'], ['sass'])
    // watch any HTML file changes
    gulp.watch(['src/*.html']).on('change', browserSync.reload)
});

// Default task (runs gulp.task('serve'))
gulp.task('default', ['serve']);
