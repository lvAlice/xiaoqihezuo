//1.载入模块
var gulp=require('gulp');

//2.注册任务  html压缩到指定文件夹
var htmlmin=require('gulp-htmlmin');

gulp.task('htmlmin',function(){
    //取得源文件
    gulp.src('./src/html/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist/html/'));
});

//3.less->css->将css压缩到指定文件夹中
var less=require('gulp-less');
var cssmin = require('gulp-cssmin');

gulp.task('less',function(){
    gulp.src('./src/less/*.less')
    .pipe(less())
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css/'));
});

//4.js-->将js压缩到指定文件夹
var jsmin=require('gulp-jsmin');

gulp.task('jsmin',function(){
    gulp.src('./src/js/*.js')
    .pipe(jsmin())
    .pipe(gulp.dest('./dist/js/'));
});

//5.img->将img压缩到指定文件夹
var imagemin=require('gulp-imagemin');

gulp.task('imagemin',function(){
    gulp.src('./src/img/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/'));
});

//6.终端命令在指定文件直接在浏览器打开
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist/",
            index:'./html/couse_guide.html'
        }
    });

    //7.监视-->当文件内容变化，浏览器自动刷新
    gulp.watch('./src/html/*.html',['htmlmin']).on('change', browserSync.reload);
    gulp.watch('./src/less/*.less',['less']).on('change', browserSync.reload);
    gulp.watch('./src/img/*.*',['imagemin']).on('change', browserSync.reload);
    gulp.watch('./src/js/*.js',['jsmin']).on('change', browserSync.reload);
});

//8.对文件的新建和删除的监听
var watch=require('gulp-watch');

//文件新增、文件改变时可以进行监听
gulp.task('stream',function(){
    watch('./src/html/*.html',{ ignoreInitial: false ,events: ['add', 'change', 'unlink']})
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist/html/'));

     watch('./src/img/*.*',{ ignoreInitial: false })
     .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/'));

     watch('./src/js/*.js',{ ignoreInitial: false })
     .pipe(jsmin())
    .pipe(gulp.dest('./dist/js/'));

     watch('./src/less/*.*',{ ignoreInitial: false })
     .pipe(less())
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css/'));
});

//9.文件删除 实现同步
// var fileSync=require('gulp-file-sync');
// var util = require('gulp-util');

// gulp.task('fileSync',()=>{
//     gulp.watch('./src/html/*.*',()=>{
//         fileSync('./src/html', './dist/html', {deleteFileCallback:(fullPathSrc, fullPathDest)=>{
//            util.log('File deletion synced ' + fullPathDest);
//         }});
//     });
// });

gulp.task('default',['browserSync','stream']);