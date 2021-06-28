//引入gulp模块
const gulp = require('gulp');
const jshint = require('gulp-jshint')
const babel = require('gulp-babel')
const browserify = require('gulp-browserify')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const less = require('gulp-less')
const LessAutoprefix = require('less-plugin-autoprefix')
const autoprefix = new LessAutoprefix({
    browsers: ['last 2 versions']
})
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const htmlmin = require('gulp-htmlmin')
const livereload = require('gulp-livereload')
const connect = require('gulp-connect')
const opn = require('opn')

gulp.task('jshint', () => {
    // 将你的任务的任务代码放在这
    return gulp.src('./src/js/*.js')
        .pipe(jshint({
            esversion: 6 //使用es6语法,
                ,
            asi: true //可以不添加分号
                ,
            eqeqeq: true // 必须使用 全等===
        }))
        .pipe(jshint.reporter('default')); // gulp插件中查看
})

gulp.task('babel', () =>
    gulp.src('./src/js/*.js')
    .pipe(babel({ //进行语法转换
        presets: ['@babel/env']
    }))
    .pipe(gulp.dest('build/js')) //输出到指定目录
    .pipe(livereload())
)

gulp.task('browserify', () => {
    return gulp.src('./build/js/app.js')
        .pipe(browserify()) //将CommonJs语法转换为浏览器能识别的语法
        .pipe(rename('built.js')) //为了防止冲突将文件重命名
        .pipe(gulp.dest('build/js')) //输出到指定位置
        .pipe(livereload())
})

gulp.task('uglify', () => {
    return gulp.src('build/js/built.js')
        .pipe(uglify()) //压缩js
        .pipe(rename('dist.min.js'))
        .pipe(gulp.dest('dist/js')).pipe(livereload())
})

gulp.task('less', () => {
    return gulp.src('./src/less/*.less')
        .pipe(less({
            plugins: [autoprefix] //自动扩展前缀
        }))
        .pipe(gulp.dest('./build/css')).pipe(livereload())
})

gulp.task('concat', () => {
    return gulp.src('./build/css/*.css')
        .pipe(concat('built.css'))
        .pipe(gulp.dest('./build/css')).pipe(livereload())
})

gulp.task('cssmin', () => {
    return gulp.src('build/css/built.css')
        .pipe(cssmin())
        .pipe(rename('dist.min.css'))
        .pipe(gulp.dest('dist/css')).pipe(livereload())
})

gulp.task('htmlmin', () => {
    return gulp.src('src/index.html')
        .pipe(htmlmin({
            collapseWhitespace: true, //去除空格
            removeComments: true //去除注释
        }))
        .pipe(gulp.dest('dist')).pipe(livereload())
})


gulp.task('watch', function () {
    //1. 在所有可能要执行任务后面加上 .pipe(livereload());
    //2. 配置watch任务
    livereload.listen();
    //通过自己服务器打开项目，自动刷新
    connect.server({
        root: 'dist',
        port: 7500,
        livereload: true // 自动刷新
    });
    //自动打开浏览器
    opn('http://localhost:7500/index.html');
    //监视指定文件（第一个参数），一旦文件发生变化，就自动执行后面的任务（第二个参数）
    gulp.watch('src/less/*.less', gulp.series(['less', 'concat', 'cssmin']));
    gulp.watch('./src/js/*.js', gulp.series(['jshint', 'babel', 'browserify', 'uglify']));
    gulp.watch('./src/index.html', gulp.series('htmlmin'));
})



gulp.task('default', gulp.series(
    'jshint',
    'babel',
    'browserify',
    'uglify',
    'less',
    'concat',
    'cssmin',
    'htmlmin',
    'watch'))