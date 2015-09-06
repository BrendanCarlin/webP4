var gulp = require('gulp');
	inlineCss = require('gulp-inline-css');
	imagemin = require('gulp-imagemin');
	pngquant = require('imagemin-pngquant');
	uglify = require('gulp-uglify');
	minifyCss = require('gulp-minify-css');
	minifyHTML = require('gulp-minify-html');
	smushit = require ('gulp-smushit');

gulp.task('inlineStyles', function() {
	return gulp.src('./*.html')
		.pipe(inlineCss())
		.pipe(gulp.dest('./'));
});

gulp.task('img', function() {
	return gulp.src('views/images/*')
	//update src and dest folders for 'views/images'
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
		}))
		.pipe(gulp.dest('views/images/*'));
});

gulp.task('scripts', function() {
	return gulp.src('./js/*')
		.pipe(uglify())
		.pipe(gulp.dest('./js/'))
});

gulp.task('minCss', function() {
	return gulp.src('./build/views/css/*.css')
		.pipe(minifyCss({compatibility: 'ie8'}))
		.pipe(gulp.dest('./build/views/minCss'));
});


gulp.task('minify-html', function() {
  var opts = {
    conditionals: true,
    spare:true
  };
 
  return gulp.src('./*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./build'));
});

gulp.task('smush', function () {
	//update source and destination files for 'views' folder
	return gulp.src('views/images/*')
	.pipe(smushit())
	.pipe(gulp.dest('views/images/'));
});