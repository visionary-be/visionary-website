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


gulp.task('copy:php', function() {
	// Copy html  & php
	return gulp.src([ '*.ini','**/*.html', '**/*.php',  '!composer.json', '!composer.lock'], {cwd: project.src_dir+ '**'})
	.pipe(changed(project.build_dir))
	.pipe(gulp.dest(project.build_dir))
	.pipe(reload({ stream:true }));
	
});

gulp.task('copy:images', ['imagemin'], function() {
	// Copy fonts into build
	return gulp.src(['assets/images/**/*'], {cwd: project.src_dir+ '**'})
	.pipe(changed(project.build_dir + 'assets/images/'))
	.pipe(gulp.dest(project.build_dir + 'assets/images/'))
	.pipe(reload({ stream:true }));
});

gulp.task('copy:fonts', function() {
	// Copy fonts into build
	return gulp.src(['assets/fonts/**/*'], {cwd: project.src_dir+ '**'})
	.pipe(changed(project.build_dir + 'assets/fonts/'))
	.pipe(gulp.dest(project.build_dir + 'assets/fonts/'));
});

gulp.task('copy:js', function(){
	// Copy lib scripts into build, maintaining the original directory structure
	return gulp.src( [project.src_dir + 'assets/js/min/*.js'] )
	.pipe(changed(project.build_dir + 'assets/js'))
	.pipe(gulp.dest(project.build_dir + 'assets/js'));
});

gulp.task('copy:css', function() {
	// copy compiled css into build
	return gulp.src(['min/app.css'], { cwd: project.src_dir + 'assets/css/' })
	.pipe(changed(project.build_dir + 'assets/css'))
	.pipe(gulp.dest(project.build_dir + 'assets/css'))
	//.pipe(browsersync.stream());
	.pipe(reload({ stream:true }));

});

gulp.task('scripts', function() {
	// Process scripts and concatenate them into one output file

	return gulp.src( ['vendors/**/*.js', 'app.js'], {cwd: project.src_dir + 'assets/js/'})
	.pipe(jshint())
	.pipe(jshint.reporter('default'))
	.pipe(uglify())
	.pipe(concat('app.min.js'))
	.pipe(gulp.dest(project.src_dir + 'assets/js/min/'));
});

// Process sass files into one minified app.css
gulp.task('styles', function() {
	return gulp.src('**/*.scss', {cwd: project.src_dir + 'assets/css/'} )
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

// Imagemin images and ouput them in dist 
gulp.task('imagemin', function() {
	return gulp.src(['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif'], { cwd: project.src_dir + 'assets/images/**'})
	.pipe(imagemin())
	.pipe(gulp.dest( project.build_dir + 'assets/images/'));
});



// BrowserSync
gulp.task('browsersync', ['build'], function() {
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
	gulp.watch([ project.src_dir + 'assets/css/min/*'], ['copy:css', reload]);
	gulp.watch([ 'assets/js/vendors/**/*.js', 'assets/js/app.js'],{cwd: project.src_dir}, ['scripts', reload]);	
	gulp.watch([ '**/*.php', '**/*.html', '*.*'],{cwd: project.src_dir}, ['copy:php', reload ]);
	gulp.watch([ project.src_dir + 'assets/images/**/*'], ['copy:images', reload]);
	gulp.watch([ project.src_dir + 'assets/js/min/app.min.js'], ['copy:js', reload]);
	gulp.watch([ project.src_dir + 'assets/fonts/**/*'], ['copy:fonts', reload]);
});

// Build a fresh copy

gulp.task('build', function(){
	runSequence( 'clean', 'scripts', 'styles', 'copy:php', 'copy:fonts', 'copy:images', 'copy:js', 'copy:css', function (error) {
		if (error) {
        	console.log(error.message);
		} else {
        	console.log('Build Successful.');
		}
    })
});

// Define the default task as a sequence of the above tasks
gulp.task ('default', [ 'watch']);

	
