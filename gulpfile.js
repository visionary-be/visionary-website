var gulp = require('gulp');
var del = require('del');
var changed = require('gulp-changed');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browsersync = require('browser-sync').create();
var reload = browsersync.reload;
var runSequence = require('run-sequence');


project = require('./project.json');
pkg = require('./package.json');


// Empties the Build folder
gulp.task('clean', function() {
	return del([project.build_dir + '**/*']);
});


// Copies src into build (except source files)
gulp.task('copy', function() {

	// Copy fonts
	gulp.src(['assets/fonts/**/*'], {cwd: project.src_dir+ '**'})
//	.pipe(changed(project.build_dir+ 'assets/fonts/'))
	.pipe(gulp.dest(project.build_dir + 'assets/fonts/'));
	
	// Copy lib scripts, maintaining the original directory structure
	gulp.src( [project.src_dir + 'assets/js/min/*.js'] )
//	.pipe(changed(project.build_dir + 'assets/js'))
	.pipe(gulp.dest(project.build_dir + 'assets/js'));
});

gulp.task('copy:php', function() {

	// Copy html  & php
	return gulp.src([ '*.ini','**/*.html', '**/*.php',  '!composer.json', '!composer.lock'], {cwd: project.src_dir+ '**'})
//	.pipe(changed(project.build_dir))
	.pipe(gulp.dest(project.build_dir))
	//.pipe(browsersync.stream());
	.pipe(reload({ stream:true }));
	
});

gulp.task('copy:css', function() {

	// copy css
	return gulp.src(['min/app.css'], { cwd: project.src_dir + 'assets/css/' })
	.pipe(gulp.dest(project.build_dir + 'assets/css'))
	//.pipe(browsersync.stream());
	.pipe(reload({ stream:true }));

});

// Process scripts and concatenate them into one output file
gulp.task('scripts', function() {
 gulp.src( ['vendors/**/*.js', 'app.js'], {cwd: project.src_dir + 'assets/js/'})
 .pipe(jshint())
 .pipe(jshint.reporter('default'))
 .pipe(uglify())
 .pipe(concat('app.min.js'))
 .pipe(gulp.dest(project.src_dir + 'assets/js/min/'));
});

// Process sass files into one minified app.css
gulp.task('styles', function() {
	gulp.src('**/*.scss', {cwd: project.src_dir + 'assets/css/'} )
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cssnano())
    .pipe(sourcemaps.write('./'))
	.pipe(gulp.dest( project.src_dir + 'assets/css/min/'))
});

// DOES NOT WORK YET:
// Imagemin images and ouput them in dist 
gulp.task('imagemin', function() {
	gulp.src(['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif'], { cwd: project.src_dir + 'assets/images/**'})
	.pipe(imagemin())
	.pipe(project.build_dir + 'assets/images/');
});



// BrowserSync
gulp.task('browsersync', function() {
	browsersync.init({
		injectChanges: true,
		proxy: project.mamp_install,
		files: ['./' + project.build_dir + '/**/*'],
		notify: true

	});
});

/*
gulp.task('browsersync-reload', function () {
	browsersync.reload({stream:true});
});
*/

// A development task to run anytime a file changes
gulp.task('watch', ['browsersync'], function() {
	gulp.watch([ project.src_dir + 'assets/css/**/*.scss'], ['styles']);
	gulp.watch([ project.src_dir + 'assets/css/min/app.css'], ['copy:css', reload]);
	gulp.watch([ 'assets/js/vendors/**/*.js', 'assets/js/app.js'],{cwd: project.src_dir}, ['scripts', reload]);	
	gulp.watch([ '**/*.php', '**/*.html', '*.*'],{cwd: project.src_dir}, ['copy:php', reload ]);
	gulp.watch([ project.src_dir + 'assets/images/**/*'], ['copy', reload]);
	gulp.watch([ project.src_dir + 'assets/js/min/app.min.js'], ['copy', reload]);
	gulp.watch([ project.src_dir + 'assets/fonts/**/*'], ['copy', reload]);
});

// Build a fresh copy

gulp.task('build', function(){
	runSequence( 'clean', 'scripts', 'styles', 'copy' , 'copy:php', 'copy:css', function (error) {
		if (error) {
        	console.log(error.message);
		} else {
        	console.log('Build Successful.');
		}
    })
});

// Define the default task as a sequence of the above tasks
gulp.task ('default', [ 'watch']);
