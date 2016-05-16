'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const jade = require('gulp-jade');
const browserSync = require('browser-sync');

gulp.task('sass', function(){
	return gulp.src('./dev/sass/flex-grid.sass')
		.pipe(sass())
		.pipe(gulp.dest('./'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('jade', function(){
	return gulp.src('./dev/jade/test.jade')
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest('./examples'));
});

gulp.task('browserSync', function(){
	browserSync.init({
		server: {
			baseDir: './',
			index: 'examples/test.html'
		},
		open: false
	});
});

gulp.task('watch', ['browserSync', 'sass'], function(){
	gulp.watch('./dev/jade/test.jade', ['jade']);
	gulp.watch('./dev/sass/*.sass', ['sass']);
	gulp.watch('./examples/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['watch']);