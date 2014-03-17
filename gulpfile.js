// ----------------------------------------------------------------------------
//  Variables Setup
// ----------------------------------------------------------------------------

// Include gulp
var gulp = require('gulp'),

  // Scss/CSS plug ins
  sass = require('gulp-ruby-sass'),
  mini = require('gulp-minify-css'),

  // image minification
  imagemin = require('gulp-imagemin'),

  // utils
  clean = require('gulp-clean'),
  rename = require('gulp-rename'),

  // node packages
  es = require('event-stream');



// ----------------------------------------------------------------------------
//  Tasks
// ----------------------------------------------------------------------------

// Compile sass to scss - 'gulp sass'
// ----------------------------------------------------------------------------
gulp.task('sass', function() {

  // Compiles Master Brass Tacks scss to CSS
  return es.concat(
    gulp.src('./_develop/sass/*.scss')
      .pipe(sass({unixNewlines: true, style: 'expanded', lineNumbers: false, trace: true}))
      .pipe(gulp.dest('./build/assets/css'))


    // If you would like to have multiple CSS files compiled, you can
    // using node's event-stream.
    // See: https://github.com/gulpjs/gulp/blob/master/docs/recipes/using-multiple-sources-in-one-task.md
  );
});



// Minify the output CSS - 'gulp mini'
// ----------------------------------------------------------------------------
gulp.task('mini', function() {

  // look in the css folder and minify all the files
  return gulp.src('./build/assets/css/**.css') // Make sure this is returned before moving on
    .pipe(mini())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./build/assets/css/'));
});



// Run sass/mini but require sass to finish before mini runs - 'gulp styles'
// ----------------------------------------------------------------------------
gulp.task('styles', ['sass'], function(){
  gulp.run('mini')
});



// Run image compression
// ----------------------------------------------------------------------------
gulp.task('images', function() {
  return gulp.src('./_develop/img/**/*')
    .pipe((imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest('./build/assets/img'))
});



// Clean out build folders to make room for updated files - 'gulp clean'
// ----------------------------------------------------------------------------
gulp.task('clean', function() {
  return gulp.src(['build/assets/css', 'build/assets/img'], {read: false})
    .pipe(clean());
});



// Run all Gulp tasks by entering 'gulp'
// ----------------------------------------------------------------------------
gulp.task('default', ['clean'], function () {
  gulp.run('styles', 'images');
});



// Run all Gulp tasks & then keep Gulp watching by entering ''
// ----------------------------------------------------------------------------
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('./_develop/sass/**/*.scss', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    gulp.run('styles');
  });

  // Watch image files
  gulp.watch('./_develop/img/**/*', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    gulp.run('images');
  });

});
