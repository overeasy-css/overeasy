var gulp       = require('gulp'),
    rename     = require('gulp-rename'),
    sass       = require('gulp-sass'),
    prefixer   = require('gulp-autoprefixer');

var MODULES_DEST_DIR = './dist/modules',
    PACKAGES_DEST_DIR = './dist';


gulp.task('build-package-bare', function() {
    gulp.src('./src/overeasy-bare.scss')
        .pipe(sass())
        .pipe(prefixer({
            browsers: ['last 2 versions'],
            cascade: true,
        }))
        .pipe(rename('overeasy-bare.css'))
        .pipe(gulp.dest(PACKAGES_DEST_DIR))
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(rename('overeasy-bare.min.css'))
        .pipe(gulp.dest(PACKAGES_DEST_DIR));
});

gulp.task('build-package-basic', function() {
    gulp.src('./src/overeasy-basic.scss')
        .pipe(sass())
        .pipe(prefixer({
            browsers: ['last 2 versions'],
            cascade: true,
        }))
        .pipe(rename('overeasy-basic.css'))
        .pipe(gulp.dest(PACKAGES_DEST_DIR))
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(rename('overeasy-basic.min.css'))
        .pipe(gulp.dest(PACKAGES_DEST_DIR));
});

gulp.task('build-package-plain', function() {
    gulp.src('./src/overeasy-plain.scss')
        .pipe(sass())
        .pipe(prefixer({
            browsers: ['last 2 versions'],
            cascade: true,
        }))
        .pipe(rename('overeasy-plain.css'))
        .pipe(gulp.dest(PACKAGES_DEST_DIR))
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(rename('overeasy-plain.min.css'))
        .pipe(gulp.dest(PACKAGES_DEST_DIR));
});

gulp.task('build-package-full', function() {
    gulp.src('./src/overeasy.scss')
        .pipe(sass())
        .pipe(prefixer({
            browsers: ['last 2 versions'],
            cascade: true,
        }))
        .pipe(rename('overeasy.css'))
        .pipe(gulp.dest(PACKAGES_DEST_DIR))
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(rename('overeasy.min.css'))
        .pipe(gulp.dest(PACKAGES_DEST_DIR));
});

gulp.task('build-packages', [
    'build-package-bare',
    'build-package-basic',
    'build-package-plain',
    'build-package-full',
    ]);


gulp.task('default', ['build-packages']);
