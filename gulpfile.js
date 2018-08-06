/* globals process */
const less            = require('gulp-less'),
      plumber         = require('gulp-plumber'),
      uglifycss       = require('gulp-uglifycss')

gulp.task('less', function () {
  const cssDirectory = 'static/css',
        lessFiles = 'static/less/**.less'

  return gulp.src(lessFiles)
    .pipe(plumber())
    .pipe(less)
    .pipe(uglifycss)
    .pipe(plumber.stop())
    .pipe(gulp.dest(cssDirectory))
})

gulp.task('build', ['less'])

gulp.task('default', ['build'], function (callback) { callback() })

