// 定义依赖项
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    less = require('gulp-less');
 
// 定义 webserver 任务
gulp.task('webserver', function() {
    connect.server({
      livereload: true
    });
});
 
gulp.task('html', function() {
    gulp.src('templates/*.html')
        .pipe(connect.reload());
});

// 定义 less 任务
gulp.task('less', function() {
    gulp.src('assets/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('assets/css'))
        .pipe(connect.reload());
});

// 定义 watch 任务
gulp.task('watch', function() {
	gulp.watch('assets/less/*.less', ['less']);
    gulp.watch('templates/*.html', ['html']);
})

 
// 定义默认任务
gulp.task('default', ['html', 'less','webserver', 'watch']);