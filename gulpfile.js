const gulp = require("gulp");
const debug = require("gulp-debug");
const flatMap = require("gulp-flatmap");
const closureCompiler = require("google-closure-compiler").gulp();

gulp.task("compile:hard", () => {
  return gulp
    .src("./lib/**/*.js", { base: "./" })
    .pipe(debug())
    .pipe(
      flatMap(function(stream, file) {
        return stream.pipe(
          closureCompiler({
            compilation_level: "SIMPLE_OPTIMIZATIONS",
            warning_level: "DEFAULT",
            language_in: "ECMASCRIPT6_STRICT",
            language_out: "ECMASCRIPT5_STRICT",
            js_output_file: file.path,
          }),
        );
      }),
    )
    .pipe(gulp.dest("."));
});
