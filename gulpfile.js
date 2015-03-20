var browserify  = require("browserify");
var browserSync = require("browser-sync");
var fs          = require("fs");
var gulp        = require("gulp");
var concat      = require("gulp-concat");
var mocha       = require("gulp-spawn-mocha");
var rename      = require("gulp-rename");
var gutil       = require("gulp-util");
var source      = require("vinyl-source-stream");
var watchify    = require("watchify");
var watch       = require("gulp-watch");



/*
*   Tasks to build app and vendor javascript files
*/
gulp.task("js", function () {
    // Build app js files
    var bundler= watchify(browserify("./app/main.jsx", {
        paths: ["./app"],
        extensions: [".jsx"],
        cache: {},
        packageCache: {},
        fullPaths: true
    }));
    var bundle = function () {
        return bundler.bundle()
            .on("error", gutil.log.bind(gutil, "Browserify Error"))
            .pipe(source("bundle.js"))
            .pipe(rename("app.js"))
            .pipe(gulp.dest("./builds/assets/js/"))
            .pipe(reload({stream: true}));
    };
    bundler.transform("reactify");
    bundler.on("update", bundle);
    bundler.on("log", gutil.log);
    bundle();
    // Build vendor js files
    var buildVendorJs = function () {
        var deps = JSON.parse(fs.readFileSync("./deps.json"));
        gulp.src(deps.js)
            .pipe(concat("vendor.js"))
            .pipe(gulp.dest("./builds/assets/js/"))
            .pipe(reload({stream: true}));
    };
    watch("./deps.json", buildVendorJs);
    buildVendorJs();
});



/*
*   Tasks to build app html files
*/
gulp.task("html", function () {
    var buildHtml = function () {
        gulp.src("./app/main.html")
            .pipe(rename("index.html"))
            .pipe(gulp.dest("./builds/"))
            .pipe(reload({stream: true}));
    };
    watch("./app/main.html", buildHtml);
    buildHtml();
});



/*
*   Tasks to build app and vendor css files
*/
gulp.task("css", function () {
    var buildVendorCss = function () {
        var deps = JSON.parse(fs.readFileSync("./deps.json"));
        gulp.src(deps.css)
            .pipe(concat("vendor.css"))
            .pipe(gulp.dest("./builds/assets/css/"));
    };
    watch("./deps.json", buildVendorCss);
    buildVendorCss();
});



/*
*   Tasks to build app images
*/
gulp.task("images", function () {
    var buildAppImages = function () {
        gulp.src("./app/assets/images/*")
            .pipe(gulp.dest("./builds/assets/images/"));
    };
    watch("./app/assets/images/*", buildAppImages);
    buildAppImages();
});



/*
*   Task to setup the development server
*/
var reload = browserSync.reload;
gulp.task("serve", function() {
    var reg = new RegExp("/assets/|/tests/|/coverage/");
    browserSync({
        server: {
            baseDir: "./builds",
            middleware: function (req, res, next) {
                if (!reg.test(req.url)) {
                     req.url = "/";
                }
                next();
            }
        },
        port: 8080,
        ghostMode: false,
        injectChanges: false,
        notify: false
    });
});



/*
*   Default task
*/

gulp.task("default", [
    "js",
    "html",
    "css",
    "images",
    "serve"
]);
