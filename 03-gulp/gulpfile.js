const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
gulp.task('js', function () {
    return gulp.src("src/*.js")
        .pipe(babel({ presets: [ '@babel/preset-env' ] }))
        .pipe(uglify())
        .pipe(gulp.dest("dist/"));
});