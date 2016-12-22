var gulp = require('gulp');
var del = require('del');
var changed = require('gulp-changed');

project = require('./project.json');
pkg = require('./package.json');


// Empties the Build folder
gulp.task('clean', function() {
	return del([project.build_dir + '**/*']);
});


// Copies src into build (except source files)
gulp.task('copy', function() {
	
	// Copy html  & php
	gulp.src(['**/*.html', '**/*.php'], {cwd: project.src_dir})
	.pipe(gulp.dest(project.build_dir));
	
	// copy css
	gulp.src(['**/*.css'] { cwd: project.src_dir + 'assets/css/' })
	.pipe(gulp.dest(project.build_dir + 'assets/css'));

	// Copy lib scripts, maintaining the original directory structure
	gulp.src( ['min/*.js'] , { cwd: project.src_dir + 'assets/js/' })
	.pipe(gulp.dest(project.build_dir + 'assets/js'));

});

// Process scripts and concatenate them into one output file
gulp.task('scripts', function() {
 gulp.src( 'assets/js/**/*.js' , {cwd: project.src_dir})
 .pipe(jshint())
 .pipe(jshint.reporter('default'))
 .pipe(uglify())
 .pipe(concat('app.min.js'))
 .pipe(gulp.dest(project.src_dir + 'assets/js/min/'));
});

// Imagemin images and ouput them in dist
gulp.task('imagemin', function() {
	gulp.src(['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif'], {
		cwd: project.src_dir + 'assets/images/'
	}).pipe(imagemin()).pipe(gulp.dest(bases.dist + 'images/'));
});

// A development task to run anytime a file changes
gulp.task('watch', function() {
	gulp.watch( project.src_dir + '**/*', ['scripts', 'copy']);
});

// Define the default task as a sequence of the above tasks
gulp.task('default', ['clean', 'scripts', 'imagemin', 'copy']);