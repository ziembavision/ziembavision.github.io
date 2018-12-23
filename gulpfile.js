const browserify = require('browserify'),
			gulp = require('gulp'),
			sourcemaps = require('gulp-sourcemaps'),
			sass = require('gulp-sass'),
			autoprefixer = require('gulp-autoprefixer'),
			source = require('vinyl-source-stream'),
			buffer = require('vinyl-buffer'),
			broswerSync = require('browser-sync');

const entryPoint = './src/js/index.js',
			browserDir = './',
			sassWatchPath = './src/**/*.scss',
			jsWatchPath = './src/**/*.js',
			htmlWatchPath = './**/*.html';

gulp.task('js', () => {
	return browserify(entryPoint, { debug: true, extenstions: ['es6'] })
		.transform('babelify', { presets: ['es2015'] })
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./dist'))
		.pipe(broswerSync.reload({ stream: true }));
});

gulp.task('browser-sync', () => {
	const config = {
		server: { baseDire: browserDir }
	};
	return broswerSync(config);
});

gulp.task('sass', () => {
	return gulp.src(sassWatchPath)
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./dist'))
		.pipe(broswerSync.reload({ stream: true }));
});

gulp.task('watch', () => {
	gulp.watch(jsWatchPath, ['js']);
	gulp.watch(sassWatchPath, ['sass']);
	gulp.watch(htmlWatchPath, () => {
		return gulp.src('')
			.pipe(broswerSync.reload({ stream: true }))
	});
});

gulp.task('run', ['js', 'sass', 'watch', 'browser-sync']);
