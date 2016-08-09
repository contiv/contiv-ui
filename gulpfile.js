var gulp = require('gulp');
var babel = require('gulp-babel');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gulpTraceurCmdline = require('gulp-traceur-cmdline');


gulp.task('build', function () {
    gulp.src(['app/components/**/module.js',//First include files that register shared modules
            'app/**/module.js',//Include files that register modules for various tabs
            'app/app.js',
            'app/**/*.js',
            '!app/bundle.js',//Exclude generated bundle.js
            '!app/**/*test.js',//Exclude test files
            '!app/bower_components/**/*.js', //Exclude vendor libraries
            '!app/components/graphobjects/**/*.js',//omitting es6 code
            '!app/bundle_es6.js'
            ])
        .pipe(sourcemaps.init())
        .pipe(concat('app/bundle.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('.'))

    //building ES6 code
    gulp.src(['app/components/graphobjects/**/module.js',
            'app/components/graphobjects/**/*.js',
            '!app/components/graphobjects/**/*test.js'
            ])
        .pipe(sourcemaps.init())
        //  .pipe(gulpTraceurCmdline({
        //   modules : 'inline'
        // }))
        .pipe(babel())
        .pipe(concat('app/bundle_es6.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('.'))
});

gulp.task('dev-build', function () {
    gulp.src(['app/components/**/module.js',//First include files that register shared modules
            'app/**/module.js',//Include files that register modules for various tabs
            'app/app.js',
            'app/**/*.js',
            '!app/bundle.js',//Exclude generated bundle.js
            '!app/**/*test.js',//Exclude test files
            '!app/bower_components/**/*.js',
            '!app/components/graphobjects/**/*.js',
            '!app/bundle_es6.js'
            ])//Exclude vendor libraries
        .pipe(sourcemaps.init())
        // .pipe(babel({
        //     presets: ['es2015']
        // }))
        // .pipe(browserify({
        //   insertGlobals : true,
        //   debug : !gulp.env.production
        // }))
        .pipe(concat('app/bundle.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('.'))

    //building ES6 code
    gulp.src(['app/components/graphobjects/**/module.js',
            'app/components/graphobjects/**/*.js',
            '!app/components/graphobjects/**/*test.js'
            ])//Exclude vendor libraries
        .pipe(sourcemaps.init())
        //  .pipe(gulpTraceurCmdline({
        //   modules : 'inline'
        // }))
        .pipe(babel())
        .pipe(concat('app/bundle_es6.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('.'))

});


gulp.task('watch', ['build'], function () {
    gulp.watch('app/**/*.js', ['build'])
});
