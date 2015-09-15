var path = require('path');

var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['watch']);

gulp.task('less', function(){
  return gulp.src('./less/**/*.less')
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./public/css'));
})

gulp.task('watch', function(){
  gulp.watch('./less/**/*.less', ['less']);
});