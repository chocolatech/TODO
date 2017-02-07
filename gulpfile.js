var gulp = require('gulp');
var livereload = require('gulp-livereload');
var runSequence = require('run-sequence');
var exec = require('child_process').exec;
var inject = require('gulp-inject');

gulp.task('default', function () {
});

gulp.task('js', function () {
  gulp.src(['app/', 'api/'])
    .pipe(livereload());
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch(['app/', 'api/'], ['js']);
});

gulp.task('dev', function (cb) {
  runSequence(['index', 'serve', 'watch'], cb);
});

gulp.task('serve', function (cb) {
  exec('node server.js', function (err, stdout, stderr) {
    cb(err);
  });
});
gulp.task('index', function () {

  gulp.src('./app/index.html')
    .pipe(inject(gulp.src([
      "./node_modules/angular/angular.min.js"
    ], { read: false }), { relative: true }))
    .pipe(gulp.dest('./app'));
});
