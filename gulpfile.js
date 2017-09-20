const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const runSequence = require('run-sequence');



gulp.task('styles', () => {
    gulp.src('app/sass/main.scss')
        .pipe(sass().on('error', sass.logError))       
        .pipe(gulp.dest('app/css/'))
        .pipe(browserSync.reload({
   		 stream: true
    	}))
});


gulp.task('watch', ['browserSync', 'styles'], () => {
  gulp.watch('app/sass/main.scss',['styles']);
  gulp.watch('app/*.html', browserSync.reload);
 
});

//Definicja tasków
gulp.task('browserSync', () => {
  browserSync.init({
    server: {
    baseDir: 'app'
    },
  })
})

gulp.task('default', (callback) => {
  runSequence(['styles', 'watch', 'browserSync'],
    callback
  )
})

