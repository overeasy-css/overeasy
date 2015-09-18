var gulp       = require('gulp'),
    rename     = require('gulp-rename'),
    sass       = require('gulp-sass'),
    prefixer   = require('gulp-autoprefixer');

gulp.task('overeasy', function () {
    gulp.src('index.scss')
        .pipe(sass())
        .pipe(prefixer({
            browsers: ['last 2 versions'],
            cascade: true
        }))
        .pipe(rename('overeasy.css'))
        .pipe(gulp.dest('./css'))
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(rename('overeasy.min.css'))
        .pipe(gulp.dest('./css'));
});

gulp.task('default', ['overeasy']);
