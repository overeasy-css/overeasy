var gulp       = require('gulp'),
    rename     = require('gulp-rename'),
    sass       = require('gulp-sass'),
    prefixer   = require('gulp-autoprefixer'),
    concat     = require('gulp-concat');

var MODULES_DEST_DIR = './dist/modules',
    PACKAGES_DEST_DIR = './dist';


gulp.task('build-module-base', function() {
    gulp.src('./src/modules/base/index.scss')
        .pipe(sass())
        .pipe(prefixer({
            browsers: ['last 2 versions'],
            cascade: true,
        }))
        .pipe(rename('overeasy-base.css'))
        .pipe(gulp.dest(MODULES_DEST_DIR))
        .pipe(sass({ 
            outputStyle: 'compressed' 
        }))
        .pipe(rename('overeasy-base.min.css'))
        .pipe(gulp.dest(MODULES_DEST_DIR));
});

gulp.task('build-module-borders', function() {
    gulp.src('./src/modules/borders/index.scss')
        .pipe(sass())
        .pipe(prefixer({
            browsers: ['last 2 versions'],
            cascade: true,
        }))
        .pipe(rename('overeasy-borders.css'))
        .pipe(gulp.dest(MODULES_DEST_DIR))
        .pipe(sass({ 
            outputStyle: 'compressed' 
        }))
        .pipe(rename('overeasy-borders.min.css'))
        .pipe(gulp.dest(MODULES_DEST_DIR));
});

gulp.task('build-module-colors', function() {
    gulp.src('./src/modules/colors/index.scss')
        .pipe(sass())
        .pipe(prefixer({
            browsers: ['last 2 versions'],
            cascade: true,
        }))
        .pipe(rename('overeasy-colors.css'))
        .pipe(gulp.dest(MODULES_DEST_DIR))
        .pipe(sass({ 
            outputStyle: 'compressed' 
        }))
        .pipe(rename('overeasy-colors.min.css'))
        .pipe(gulp.dest(MODULES_DEST_DIR));
});

gulp.task('build-module-flex', function() {
    gulp.src('./src/modules/flex/index.scss')
        .pipe(sass())
        .pipe(prefixer({
            browsers: ['last 2 versions'],
            cascade: true,
        }))
        .pipe(rename('overeasy-flex.css'))
        .pipe(gulp.dest(MODULES_DEST_DIR))
        .pipe(sass({ 
            outputStyle: 'compressed' 
        }))
        .pipe(rename('overeasy-flex.min.css'))
        .pipe(gulp.dest(MODULES_DEST_DIR));
});

gulp.task('build-module-grid', function() {
    gulp.src('./src/modules/grid/index.scss')
        .pipe(sass())
        .pipe(prefixer({
            browsers: ['last 2 versions'],
            cascade: true,
        }))
        .pipe(rename('overeasy-grid.css'))
        .pipe(gulp.dest(MODULES_DEST_DIR))
        .pipe(sass({ 
            outputStyle: 'compressed' 
        }))
        .pipe(rename('overeasy-grid.min.css'))
        .pipe(gulp.dest(MODULES_DEST_DIR));
});

gulp.task('build-module-layout', function() {
    gulp.src('./src/modules/layout/index.scss')
        .pipe(sass())
        .pipe(prefixer({
            browsers: ['last 2 versions'],
            cascade: true,
        }))
        .pipe(rename('overeasy-layout.css'))
        .pipe(gulp.dest(MODULES_DEST_DIR))
        .pipe(sass({ 
            outputStyle: 'compressed' 
        }))
        .pipe(rename('overeasy-layout.min.css'))
        .pipe(gulp.dest(MODULES_DEST_DIR));
});

gulp.task('build-module-lists', function() {
    gulp.src('./src/modules/lists/index.scss')
        .pipe(sass())
        .pipe(prefixer({
            browsers: ['last 2 versions'],
            cascade: true,
        }))
        .pipe(rename('overeasy-lists.css'))
        .pipe(gulp.dest(MODULES_DEST_DIR))
        .pipe(sass({ 
            outputStyle: 'compressed' 
        }))
        .pipe(rename('overeasy-lists.min.css'))
        .pipe(gulp.dest(MODULES_DEST_DIR));
});

gulp.task('build-module-type', function() {
    gulp.src('./src/modules/type/index.scss')
        .pipe(sass())
        .pipe(prefixer({
            browsers: ['last 2 versions'],
            cascade: true,
        }))
        .pipe(rename('overeasy-type.css'))
        .pipe(gulp.dest(MODULES_DEST_DIR))
        .pipe(sass({ 
            outputStyle: 'compressed' 
        }))
        .pipe(rename('overeasy-type.min.css'))
        .pipe(gulp.dest(MODULES_DEST_DIR));
});

gulp.task('build-module-type-defaults', function() {
    gulp.src('./src/modules/type-defaults/index.scss')
        .pipe(sass())
        .pipe(prefixer({
            browsers: ['last 2 versions'],
            cascade: true,
        }))
        .pipe(rename('overeasy-type-defaults.css'))
        .pipe(gulp.dest(MODULES_DEST_DIR))
        .pipe(sass({ 
            outputStyle: 'compressed' 
        }))
        .pipe(rename('overeasy-type-defaults.min.css'))
        .pipe(gulp.dest(MODULES_DEST_DIR));
});

gulp.task('build-module-whitespace', function() {
    gulp.src('./src/modules/whitespace/index.scss')
        .pipe(sass())
        .pipe(prefixer({
            browsers: ['last 2 versions'],
            cascade: true,
        }))
        .pipe(rename('overeasy-whitespace.css'))
        .pipe(gulp.dest(MODULES_DEST_DIR))
        .pipe(sass({ 
            outputStyle: 'compressed' 
        }))
        .pipe(rename('overeasy-whitespace.min.css'))
        .pipe(gulp.dest(MODULES_DEST_DIR));
});

gulp.task('build-modules', [
    'build-module-base', 
    'build-module-borders', 
    'build-module-colors',
    'build-module-flex',
    'build-module-grid',
    'build-module-layout',
    'build-module-lists',
    'build-module-type',
    'build-module-type-defaults',
    'build-module-whitespace',
    ]);


gulp.task('build-package-full', function() {
    gulp.src('./src/packages/full.scss')
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

gulp.task('build-package-plain', function() {
    gulp.src('./src/packages/plain.scss')
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

gulp.task('build-package-basic', function() {
    gulp.src('./src/packages/basic.scss')
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

gulp.task('build-package-bare', function() {
    gulp.src('./src/packages/bare.scss')
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

gulp.task('build-packages', [
    'build-package-full',
    'build-package-plain',
    'build-package-basic',
    'build-package-bare',
    ]);


gulp.task('build-all', ['build-modules', 'build-packages']);
gulp.task('default', ['build-packages']);

