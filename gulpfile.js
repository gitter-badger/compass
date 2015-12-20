
var gulp = require('gulp');
//var gulpif = require('gulp-if');
var coffee = require('gulp-coffee');
var jshint = require('gulp-jshint');
//var base64 = require('gulp-base64');
var cache = require('gulp-cache');
var clean = require('gulp-clean');
var autoprefixer = require('gulp-autoprefixer');
var compass = require('gulp-compass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var minifyCSS = require('gulp-minify-css');
var notify = require("gulp-notify");
var debug = require('gulp-debug');
var util = require('gulp-util');

var compass = require('gulp-compass');
var plumber = require('gulp-plumber');

var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var stream = require('event-stream');

var size = require('gulp-size');
var del = require('del');
var rename = require('gulp-rename');



var path = {

    build: {
        html: 'public/',
        js: 'public/javascripts/',
        css: 'public/css/',
        img: 'public/images/',
        fonts: 'public/fonts/'
    },
    src: {
        js: 'app/assets/src/javascripts/*',
        mobile_style:'app/assets/src/sass/application.mobile.scss',
        style: 'app/assets/src/sass/application.scss',
        img: 'app/assets/src/images/**/*.*',
        fonts: 'app/assets/src/fonts/**/*.*',
        images: 'app/assets/src/images/**/*.*'
    },
    watch: {
        haml: 'app/views/**/*.haml',
        html: 'app/views/**/*.html',
        js: 'app/assets/src/javascripts/**/*.js',
        style: 'app/assets/src/sass/**/*.scss',
        img: 'app/assets/src/images/**/*.*',
        fonts: 'app/assets/src/fonts/**/*.*'
    },
    clean: 'public'
};

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "127.0.0.1:9292"
    });
});

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use any package available on npm
gulp.task('clean', function() {
    // You can use multiple globbing patterns as you would with `gulp.src`
    return del(path.clean);
});



// Проверка ошибок в скриптах
gulp.task('lint', function() {
    return gulp.src('app/assets/src/javascripts/app.min.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(debug({title: 'lint:'}));

});


//Добавляем префиксы для последних двух версий браузеров
gulp.task('autoprefixer', function () {
    return gulp.src('public/stylesheets/app.min.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('public/stylesheets/'));
});


//



gulp.task('app_style:build', function() {
    return gulp.src('app/assets/src/sass/application.scss')
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }}))
        .pipe(compass({
            css: 'app/assets/src/css',
            sass: 'app/assets/src/sass',
            image: 'app/assets/src/images',
            font: 'app/assets/src/fonts',
            sourcemap: 'true',
            require: ['susy', 'breakpoint']
        }))
        .on('error', function(err) {
            // Would like to catch the error here
            console.log(err.message);
        })
        .pipe(concat('app.min.css'))

        //.pipe(minifyCSS())
        //.pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7"))

        .pipe(gulp.dest('public/stylesheets'))
        .pipe(browserSync.reload({stream:true, once: true}));
});


gulp.task('app_mobile_style:build', function() {
    return gulp.src('app/assets/src/sass/application.mobile.scss')
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }}))
        .pipe(compass({
            css: 'app/assets/src/css',
            sass: 'app/assets/src/sass',
            image: 'app/assets/src/images',
            font: 'app/assets/src/fonts',
            sourcemap: 'true',
            require: ['susy', 'breakpoint']
        }))
        .on('error', function(err) {
            // Would like to catch the error here
            console.log(err.message);
        })
        .pipe(concat('app.mobile.min.css'))

        //.pipe(minifyCSS())
        //.pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7"))

        .pipe(gulp.dest('public/stylesheets'))
        .pipe(browserSync.reload({stream:true, once: true}));
});

gulp.task('admin_style:build', function() {
    return gulp.src('admin/assets/src/sass/application.scss')
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }}))
        .pipe(compass({
            css:   'admin/assets/src/css',
            sass:  'admin/assets/src/sass',
            image: 'admin/assets/src/images',
            font:  'admin/assets/src/fonts',
            sourcemap: 'true',
            require: ['susy', 'breakpoint']
        }))
        .on('error', function(err) {
            // Would like to catch the error here
            console.log(err.message);
        })
        //.pipe(minifyCSS())
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('public/admin/stylesheets'))
        .pipe(browserSync.reload({stream:true, once: true}));
});







gulp.task('scripts:build', function() {
    var js = gulp.src(['app/assets/src/javascripts/custom/*'])
        //.pipe(coffee())
        .pipe(debug({title: 'scripts:'}))
        .pipe(uglify())

        .pipe(concat('app.min.js'))

        .on("error", notify.onError({
            message: 'JS minify error: <%= error.message %>'
        }))
        //.pipe(uglify())
        .pipe(size({
            title: 'size of custom javascripts'
        }))
        .pipe(gulp.dest('public/javascripts/custom'));

    var jsDeps = gulp.src(['app/assets/src/javascripts/vendor/*']   )
        .pipe(debug({title: 'scripts:'}))
        .pipe(concat('vendor.min.js'))
        .pipe(uglify())
        .pipe(size({
            title: 'size of javascripts dependencies'
        }))
        .pipe(gulp.dest('public/javascripts/vendor'))
        .pipe(debug({title: 'watch debug:'}));


    stream.concat(js, jsDeps).pipe(browserSync.reload({stream:true, once: true}));
});

// Copy all static images
gulp.task('images:build', function() {
    return gulp.src(path.src.images)
        // Pass in options to the task
        .pipe(imagemin({
            optimizationLevel: 5,
            svgoPlugins: [{removeViewBox: false}]
        }))
        .pipe(debug({title: 'images:'}))
        .pipe(size({title: 'image size'}))
        .pipe(gulp.dest('public/images'));
});


gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});


gulp.task('watch', ['browser-sync'], function() {
    gulp.watch(['app/assets/src/javascripts/*.coffee','app/assets/src/javascripts/custom/*.js'], ['lint', 'scripts:build']);
    //gulp.watch('app/assets/src/sass/*.mobile.scss', ['app_mobile_style:build']);
    //gulp.watch('app/assets/src/sass/*/**.mobile.scss', ['app_mobile_style:build']);
    gulp.watch('app/assets/src/sass/**', ['app_style:build', 'autoprefixer']);
    gulp.watch('app/assets/src/images/*', ['images']);
    gulp.watch('app/views/*/**').on('change', browserSync.reload);

});

gulp.task('build', [
    'scripts:build',
    'app_style:build',
    'app_mobile_style:build',
    'admin_style:build',
    'fonts:build',
    'images:build'
    //'autoprefixer'

]);


gulp.task('default', ['build']);