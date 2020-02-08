var minifyCSS = require('gulp-minify-css')
var autoprefixer = require('gulp-autoprefixer')
var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify')

gulp.task('css', function(){
    return gulp.src(
            [
                './assets/css/main.css'
            ]
        )
        .pipe(minifyCSS())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(gp_concat('style.min.css'))
        .pipe(gulp.dest('./dist/css/'))
})

gulp.task('copy', function(){
    return gulp.src(
            ['./assets/fonts/**']
        )
        .pipe(gulp.dest('./dist/fonts/'))
})

gulp.task('copy-images', function(){
    return gulp.src(
            ['./images/**']
        )
        .pipe(gulp.dest('./dist/images/'))
})

gulp.task('build', function(){
    return gulp.src(
    		[
				'./assets/js/jquery.min.js',
                './assets/js/skel.min.js',
                './assets/js/util.js',
                './assets/js/main.js'
    		]
    	)
        .pipe(gp_concat('vendor.min.js'))
        .pipe(gulp.dest('./dist/js/'))
        .pipe(gp_rename('vendor.min.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('./dist/js/'))
})

gulp.task('package-assets', function(){
    return gulp.src(
        ['./dist/**/**']
    )
    .pipe(gulp.dest('./package/assets/'))
    .pipe(gulp.dest('./package/example/assets/'))
})

gulp.task('package-src', function(){
    return gulp.src(
        ['./src/**', './src/theme/**']
    )
    .pipe(gulp.dest('./package/src/'))
    .pipe(gulp.dest('./package/example/src/'))
})

gulp.task('package-example', function(){
    return gulp.src(
        ['./example/**']
    )
    .pipe(gulp.dest('./package/example'))
})

gulp.task('package-instructions', function(){
    return gulp.src(
        ['./instructions.txt']
    )
    .pipe(gulp.dest('./package/'))
})

gulp.task('package', ['package-assets', 'package-src', 'package-example', 'package-instructions'], function(){})


gulp.task('prod', ['build', 'css', 'copy', 'copy-images'], function(){})

gulp.task('default', ['build', 'css', 'copy', 'copy-images'], function(){})

