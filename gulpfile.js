'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const jade = require('gulp-jade');
const browserSync = require('browser-sync');

gulp.task('sass', function(){
	return gulp.src('./app/flex-grid.sass')
		.pipe(sass())
		.pipe(gulp.dest('./dist'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('jade', function(){
	return gulp.src('./app/test.jade')
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest('./examples'));
});

gulp.task('browserSync', function(){
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
});

gulp.task('watch', ['browserSync', 'sass'], function(){
	gulp.watch('./app/test.jade', ['jade']);
	gulp.watch('./app/flex-grid.sass', ['sass']);
});