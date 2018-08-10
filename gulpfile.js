/* globals process */
const { decrypt }     = require('exec-pgp'),
      gulp            = require('gulp'),
      less            = require('gulp-less'),
      plumber         = require('gulp-plumber'),
      rename          = require('gulp-rename'),
      uglifycss       = require('gulp-uglifycss')

gulp.task('less', function () {
  const cssDirectory = 'static/css',
        lessFiles = 'static/less/**.less'

  return gulp.src(lessFiles)
    .pipe(plumber())
    .pipe(less())
    .pipe(uglifycss())
    .pipe(rename({ suffix: '.min' }))
    .pipe(plumber.stop())
    .pipe(gulp.dest(cssDirectory))
})

gulp.task('deploy', function () {
  decrypt('./.deploy.json.asc')
    .then(result => {
      const { output } = result,
            config = JSON.parse(output),
            sourceDir = config.source + '/*`
      
      return gulp.src(sourceDir)
        .pipe(plumber())
        .pipe(gulp.dest(config.dest))
    })
})

gulp.task('build', ['less'])

gulp.task('default', ['build'], function (callback) { callback() })

