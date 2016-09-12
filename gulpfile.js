var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var del = require("del");


gulp.task("default", function() {
    gulp.src("sass/**/*scss")
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest("./css"));
    // gulp.watch(["js/**/*.js","!js/min/**/*.js"],["js"]);
    // gulp.watch(["sass/**/*.scss",["sass"]]);
});

gulp.task("clean", function(){
  return del(['css/**/*css'])
})