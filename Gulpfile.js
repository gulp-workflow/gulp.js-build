var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var config = require('./config');

var ENV = process.env.ENV || config.environment;
var EXT = process.env.EXT || config.extension;

gulp.task('js:clean', function() {
	gulp.src('./dist/assets/js/*', {read: false}).pipe($.clean());
});

gulp.task('js:copy', function() {
	gulp.src('./bower_components/crafty/dist/crafty.*').pipe(gulp.dest('./dist/assets/js'));
});

gulp.task('js:build', ['js:clean', 'js:copy'], function() {
	return gulp.src('./src/assets/js/*.' + EXT.trim())
		.pipe($.plumber())
			.pipe($.sourcemaps.init())
				.pipe($.if(EXT.trim() == 'ts', $.tsc({target: 'ES5'}), $.if(EXT.trim() == 'es6.js', $.babel())))
				.pipe($.concat('bundle.js'))
			.pipe($.sourcemaps.write())
		.pipe($.plumber.stop())
		.pipe($.size())			
		.pipe($.if(ENV.trim() == 'production', gulp.dest('./dist/assets/js')))
		.pipe($.plumber())
			.pipe($.rename({suffix: '.min'}))
			.pipe($.if(ENV.trim() == 'production', $.uglify()))
		.pipe($.plumber.stop())
		.pipe(gulp.dest('./dist/assets/js'));
});

gulp.task('js:watch', ['js:build'], function() {
	gulp.watch('./src/assets/js/**/*.' + EXT.trim(), ['js:build']);
});

gulp.task('js', ['js:watch']);