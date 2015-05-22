'use strict';
var gulp = require('gulp'),
	watch = require('gulp-watch'),
	runSequence = require('run-sequence'),
	clean = require('gulp-clean'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	jade = require('gulp-jade'),
	stylus = require('gulp-stylus'),
	autoprefixer = require('gulp-autoprefixer'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	jshint = require('gulp-jshint');

var paths = {
	assets: './dist/assets/',
	dist: './dist/',
	src: './src/'
}

// livereload browser on client app changes
gulp.task('livereload', function(){
	browserSync({
        server: {
            baseDir: './dist'
        }
    });
});

gulp.task('img-min', function () {
	gulp.src(paths.assets + 'img/*', {read: false}).pipe(clean());
	gulp.src(paths.src + 'img/**/*')
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest(paths.assets + 'img'));
});

gulp.task('js', function () {
	gulp.src(paths.assets + 'js/*.js', {read: false}).pipe(clean());
	gulp.src(paths.src + 'js/**/*.js')
	.pipe(jshint())
  	.pipe(jshint.reporter('default'))
	.pipe(gulp.dest(paths.assets + 'js'));
});

gulp.task('jade', function () {
	gulp.src(paths.dist + '*.html', {read: false}).pipe(clean());
	gulp.src(paths.src + 'jade/pages/*.jade')
	.pipe(jade({ pretty: true }))
	.pipe(gulp.dest(paths.dist));
});

gulp.task('stylus', function() {
  return gulp.src(paths.src + 'styles/common.styl')
  .pipe(stylus())
  .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
  .pipe(gulp.dest(paths.assets + 'css'));
});

gulp.task('del', function () {
	return gulp.src(['dist'], {read: false}).pipe(clean());
});

gulp.task('copy:resources', function (){
	return gulp.src([
				paths.src + 'resources/**/*'
			])
    .pipe(gulp.dest(paths.assets));
});

gulp.task('copy:scripts', function (){
	return gulp.src([
					'jquery/dist/jquery.min.js',
					'jquery/dist/jquery.min.map',
					'fontawesome/css/font-awesome.min.css',
					'fontawesome/css/font-awesome.css.map',
					'fontawesome/fonts/**/*',
					'OwlCarousel/owl-carousel/**/*',
					'!OwlCarousel/owl-carousel/owl.carousel.js',
				], {
				base: paths.src + 'vendor',
				cwd: paths.src + 'vendor'
			})
	        .pipe(gulp.dest(paths.assets + 'libs'));
});

gulp.task('copy', ['copy:resources', 'copy:scripts'])

gulp.task('watch', ['livereload'], function () {
	watch([paths.src + 'jade/**/*.jade'], function(){
		gulp.run('jade');
		console.log('restarting browsers');
		reload();
	});
	watch([paths.src + 'styles/**/*.styl'], function(){
		gulp.run('stylus');
		console.log('restarting browsers');
		reload();
	});
	watch([paths.src + 'js/**/*.js'], function(){
		gulp.run('js');
		console.log('restarting browsers');
		reload();
	});
	watch([paths.src + 'img/**/*'], function(){
		gulp.run('img-min');
		console.log('restarting browsers');
		reload();
	});
	watch([paths.src + 'resources/**/*'], function(){
		gulp.run('copy:resources');
		console.log('restarting browsers');
		reload();
	});
	console.log('watch started');
});

gulp.task('build', ['del'], function(cb) {
    return runSequence('img-min', 'jade', 'stylus', 'js', 'copy', cb);
});

gulp.task('default', ['build'], function() {
    return gulp.start('watch');
});
