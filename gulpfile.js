var gulp = require("gulp"),//http://gulpjs.com/
    util = require("gulp-util"),//https://github.com/gulpjs/gulp-util
    sass = require("gulp-sass"),//https://www.npmjs.org/package/gulp-sass
    babel = require("gulp-babel"),
    rename = require('gulp-rename'),//https://www.npmjs.org/package/gulp-rename
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    log = util.log;

gulp.task("default", ["resource-copying", "sass", "concatjs", "babel-task"]);

gulp.task("resource-copying", function () {
    log("Copy AngularJS lib " + (new Date()).toString());
    gulp.src("node_modules/angular/*")
        .pipe(gulp.dest("src/main/resources/static/js/angular/"));

    log("Copy Angular route " + (new Date()).toString());
    gulp.src("node_modules/angular-route/*")
        .pipe(gulp.dest("src/main/resources/static/js/angular-route"));
});

gulp.task('concatjs', function() {
    /*log("Concat JS files " + (new Date()).toString());
    return gulp.src('src/main/resources/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('src/main/resources/static/js'))
        */
});

var cssTarget = "src/main/resources/static/css/";

gulp.task("sass", function () {
    log("Generating CSS files " + (new Date()).toString());
    gulp.src("src/main/resources/scss/all.scss")
        .pipe(sass({style: 'expanded'}))
        .pipe(autoprefixer("last 3 version", "safari 5", "ie 9"))
        .pipe(gulp.dest(cssTarget))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest(cssTarget));
});

gulp.task("babel-task", function () {
    log("Concat JS files " + (new Date()).toString());
    return gulp.src('src/main/resources/js/*.js')
        .pipe(concat('all.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('src/main/resources/static/js'));
});