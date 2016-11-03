/*!
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-cssnano gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del browser-sync gulp-load-plugins eslint eslint-config-google --save-dev
 */

// Load plugins
var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')({
      		pattern: '*',
			replaceString: /^gulp(-|\.)/, // what to remove from the name of the module when adding it to the context
			camelize: true, // if true, transforms hyphenated plugins names to camel case
			lazy: true, // whether the plugins should be lazy loaded on demand
          });
const reload = plugins.browserSync.reload;

	

// Styles
gulp.task('styles', function() {
  return plugins.rubySass('src/app/styles/main.scss', { style: 'expanded' })
    .pipe(plugins.autoprefixer('last 2 version'))
    .pipe(gulp.dest('dist/styles'))
    .pipe(plugins.rename({ suffix: '.min' }))
    .pipe(plugins.cssnano())
    .pipe(gulp.dest('dist/styles'))
    .pipe(plugins.notify({ message: 'Styles task complete' }));
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src('src/app/scripts/**/*.js')
    .pipe(plugins.jshint('.jshintrc'))
    .pipe(plugins.jshint.reporter('default'))
    .pipe(plugins.concat('main.js'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(plugins.rename({ suffix: '.min' }))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(plugins.notify({ message: 'Scripts task complete' }));
});

// Images
gulp.task('images', function() {
  return gulp.src('src/app/images/**/*')
    .pipe(plugins.cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images'))
    .pipe(plugins.notify({ message: 'Images task complete' }));
});

// Clean
gulp.task('clean', function() {
  return plugins.del(['dist/styles', 'dist/scripts', 'dist/images']);
});

// Default task
gulp.task('default', ['clean'], function() {cb =>
  plugins.runSequence(
    'styles',
    ['jshint', 'scripts', 'images'],
    cb
)
  //gulp.start('styles', 'scripts', 'images');
});
//
gulp.task('serve', ['scripts', 'styles'], () => {
  plugins.browserSync({
    notify: false,
    // Customize the Browsersync console logging prefix
    logPrefix: 'CVG',
    // Allow scroll syncing across breakpoints
    scrollElementMapping: ['main', '.mdl-layout'],
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: ['.tmp', 'app'],
    port: 3000
  });

  gulp.watch(['app/**/*.html'], reload);
  gulp.watch(['app/styles/**/*.{scss,css}'], ['styles', reload]);
  gulp.watch(['app/scripts/**/*.js'], ['jshint', 'scripts', reload]);
  gulp.watch(['app/images/**/*'], reload);
});

// Build and serve the output from the dist build
gulp.task('serve:dist', ['default'], () =>
  plugins.browserSync({
    notify: false,
    logPrefix: 'CVG',
    // Allow scroll syncing across breakpoints
    scrollElementMapping: ['main', '.mdl-layout'],
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: 'dist',
    port: 3001
  })
);

// Lint JavaScript
gulp.task('jshint', () =>
  gulp.src('app/scripts/**/*.js')
    .pipe(plugins.jshint('.jshintrc'))
    .pipe(plugins.jshint.reporter('default'))
);

// Watch
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('src/app/styles/**/*.scss', ['styles']);

  // Watch .js files
  gulp.watch('src/app/scripts/**/*.js', ['scripts']);

  // Watch image files
  gulp.watch('src/app/images/**/*', ['images']);

  // Create LiveReload server
  livereload.listen();

  // Watch any files in dist/, reload on change
  gulp.watch(['dist/**']).on('change', livereload.changed);

});
