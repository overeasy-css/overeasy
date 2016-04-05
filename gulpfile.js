var gulp       = require('gulp')
    rename     = require('gulp-rename'),
    sass       = require('gulp-sass'),
    prefixer   = require('gulp-autoprefixer');

gulp.task('dist-scss', function () {
    gulp.src('src/index.scss')
        .pipe(sass())
        .pipe(prefixer({
            browsers: ['last 2 versions'],
            cascade: true
        }))
        .pipe(rename('overeasy.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(rename('overeasy.min.css'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['dist-scss']);
