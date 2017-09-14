var gulp = require("gulp");
var path = require('path');
var runSequence = require('gulp-run-sequence');
var zip = require('gulp-zip');
var clean = require('gulp-clean');

var release_config = require('./fis-conf/release-config');

var prod_dir =  {
  root: release_config.root,
  static: release_config.child.static
}

var zip_dir = {
  root: 'offline',
  static: release_config.child.static
}


/* 外部任务 */

gulp.task('dev-inline', ['[prod]clean:src', '[prod]clean:js', '[prod]clean:css', '[prod]clean:pkg']);

gulp.task('prod', ['[prod]clean:src', '[prod]clean:js', '[prod]clean:css']);

gulp.task('prod-inline', ['[prod]clean:src', '[prod]clean:js', '[prod]clean:css', '[prod]clean:pkg']);

gulp.task('zip', ['[zip]clean:src', '[zip]clean:js', '[zip]clean:css'], function() {
  runSequence(
    ['[zip]move:cdn'],
    ['zip:cdn'],
    ['[zip]clean:cdn'],
    ['zip:offline'],
    ['[zip]clean:temp']
  )
});

gulp.task('zip-inline', ['[zip]clean:src', '[zip]clean:js', '[zip]clean:css', '[zip]clean:pkg'], function() {
  runSequence(
    ['[zip]move:cdn'],
    ['zip:cdn'],
    ['[zip]clean:cdn'],
    ['zip:offline'],
    ['[zip]clean:temp']
  )
});





/* 工具任务 */

gulp.task('[prod]clean:src', function() {
  return gulp.src('./' + prod_dir.root + '/src')
    .pipe(clean());
});
gulp.task('[prod]clean:js', function() {
  return gulp.src('./' + prod_dir.root + '/' + prod_dir.static + '/js')
    .pipe(clean());
});
gulp.task('[prod]clean:css', function() {
  return gulp.src('./' + prod_dir.root + '/' + prod_dir.static + '/css')
    .pipe(clean());
});
gulp.task('[prod]clean:pkg', function() {
  return gulp.src('./' + prod_dir.root + '/' + prod_dir.static + '/pkg')
    .pipe(clean());
});




gulp.task('[zip]clean:src', function() {
  return gulp.src('./' + zip_dir.root + '/src')
    .pipe(clean());
});
gulp.task('[zip]clean:js', function() {
  return gulp.src('./' + zip_dir.root + '/' + zip_dir.static + '/js')
    .pipe(clean());
});
gulp.task('[zip]clean:css', function() {
  return gulp.src('./' + zip_dir.root + '/' + zip_dir.static + '/css')
    .pipe(clean());
});
gulp.task('[zip]clean:pkg', function() {
  return gulp.src('./' + zip_dir.root + '/' + zip_dir.static + '/pkg')
    .pipe(clean());
});
gulp.task('[zip]clean:temp', function() {
  return gulp.src('./' + zip_dir.root)
    .pipe(clean());
});
gulp.task('[zip]clean:cdn', function() {
  return gulp.src('./offline/' + zip_dir.static)
    .pipe(clean());
});



gulp.task('[zip]move:cdn', function() {
  return gulp.src('./offline/' + zip_dir.static + '/**/*')
    .pipe(gulp.dest('./public/cdn/'))
})

gulp.task('zip:cdn', function() {

  return gulp.src('./offline/' + zip_dir.static + '/**/*')
    .pipe(zip('cdn.zip'))
    .pipe(gulp.dest('./public/'))

});

gulp.task('zip:offline', function() {

  return gulp.src('./offline/**/*')
    .pipe(zip('offline.zip'))
    .pipe(gulp.dest('./public/'))

});


