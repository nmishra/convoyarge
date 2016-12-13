/*!
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-cssnano gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del browser-sync gulp-load-plugins eslint eslint-config-google vinyl-transform browserify through2 sass stripify --save-dev
 */
//Map of all the project paths
var paths = {
	    scripts: 'app/**/*.js',
	    styles: 'app/styles/*.scss',//['app/styles/*.css', 'app/styles/*.scss'],
	    images: 'app/images/*',
	    index: 'app/index.html',
	 };
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
  return plugins.rubySass(paths.styles)
    .pipe(plugins.autoprefixer('last 2 version'))
    .pipe(gulp.dest('dist/styles'))
    .pipe(plugins.rename({ suffix: '.min' }))
    .pipe(plugins.cssnano())
    .pipe(gulp.dest('dist/styles'))
    .pipe(plugins.notify({ message: 'Styles task complete' }));
});

// Scripts
gulp.task('scripts', function() {
	var browserified = plugins.vinylTransform(function(filename) {
	    var b = plugins.browserify(filename);
	    return b.bundle();
	});
  return gulp.src(paths.scripts)
	.pipe(gulp.dest('sandbox/')) // index.js with 'rename'  changes now exists in src/sandbox/index.js
    //.pipe(plugins.through2.obj(function (file, enc, next){
      //      plugins.browserify(file.path) // file.path here will now be src/sandbox/index.js
	//	    .transform('stripify')	   		   
	  //          .bundle(function(err, res){
                    // assumes file.contents is a Buffer
	//	    console.log('Testing - '+res);
		    //var buffer = new Buffer(res, "utf-8");
		    //buffer.write(res);
          //          file.contents = res;
            //        next(null, file);
              //  });
       // }))
    // .pipe(plugins.jshint('.jshintrc')) //as of now I have commented this out as I get a bunch of errors
    // .pipe(plugins.jshint.reporter('default')) // reports too many errors
    .pipe(plugins.concat('index.js'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(plugins.rename({ suffix: '.min' }))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('dist/scripts'))
	.pipe(plugins.notify({ message: 'Scripts task complete' }));
});

// Views task
gulp.task('views', function() {
  // Get our index.html
  gulp.src(paths.index)
  // And put it in the dist folder
  .pipe(gulp.dest('dist/'));

  // Any other view files from app/views
  gulp.src('./app/views/**/*')
  // Will be put in the dist/views folder
  .pipe(gulp.dest('dist/views/'));
});


// Images
gulp.task('images', function() {
  return gulp.src(paths.images)
    .pipe(plugins.cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images'))
    .pipe(plugins.notify({ message: 'Images task complete' }));
});

// Clean
gulp.task('clean', ['clean:sandbox'], function() {
  return plugins.del(['dist/styles', 'dist/scripts', 'dist/images']);
});

gulp.task('clean:sandbox', function() {
	return plugins.del('sandbox');
})
// Default task
gulp.task('default', ['clean'], function() {cb =>
  plugins.runSequence(
    'styles',
    ['jshint', 'scripts', 'images'],
    cb
)
  //gulp.start('styles', 'scripts', 'images');
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
gulp.task('serve', ['scripts', 'views', 'styles'], () => {
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

  gulp.watch(['app/**/*.html','app/views/**/*.html'], ['views', reload]);
  gulp.watch(['app/styles/**/*.{scss,css}'], ['styles', reload]);
  gulp.watch(['app/**/*.js'], ['jshint', 'scripts', reload]);
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
  gulp.src(paths.scripts)
    .pipe(plugins.jshint('.jshintrc'))
    .pipe(plugins.jshint.reporter('default'))
);

// Watch
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch(paths.styles, ['styles']);

  // Watch .js files
  gulp.watch(paths.scripts, ['scripts']);

  // Watch image files
  gulp.watch(paths.images, ['images']);

  // Create LiveReload server
  livereload.listen();

  // Watch any files in dist/, reload on change
  gulp.watch(['dist/**']).on('change', livereload.changed);

});
