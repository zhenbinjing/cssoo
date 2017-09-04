﻿var gulp = require('gulp');
var concat = require('gulp-concat');					//- 多个文件合并为一个
var replace = require('gulp-replace');					//- 文本替换
var autoprefixer = require('gulp-autoprefixer');			//- 补充浏览器前缀
var cleanCSS = require('gulp-clean-css');				//- 压缩CSS为一行
var px3rem = require('gulp-px3rem');					//- px转rem
var uncss = require('gulp-uncss');					//- 删除没用到的css
var sass = require('gulp-sass');					//- scss文件编译
var css64 = require('gulp-base64');					//- css文件转base64
var img64 = require('gulp-allimgbase64');				//- img转base64
var tinypng = require('gulp-tinypng');					//- png图片压缩
var svgmin = require('gulp-svgmin');					//- svg图片压缩
var webp = require('gulp-webp');					//- 转webp图片
var fontSpider = require('gulp-font-spider');				//- 删除没用到的字体
var processhtml = require('gulp-processhtml');				//- html更改模板
var htmlmin = require('gulp-htmlmin');					//- html压缩
var uglify = require('gulp-uglify');					//- js压缩
var pump = require('pump');						//- 报错提示
var browserSync = require('browser-sync');				//- 浏览器同步测试工具
var del = require('del');						//- 删除文件功能模块
var path = require("path");						//- 路径模块

var y_Sz="src";								//- 源码环境路径
var y_Dz="dist";							//- 上线环境路径	 

gulp.task('cssDeal',['sass'],function(){						
	var date=new Date().getTime();					//- 创建版本时间	
	gulp.src(['./'+y_Sz+'/css/**/*.css'])				//- 需要处理的css文件，放到一个字符串数组里								
	.pipe(replace(/_VERSION_/gi,date))				//- 文件指纹
	.pipe(uncss({
	html: ['./'+y_Sz+'/**/*.html'],					//- 检查的页面
	ignore: ['abc','.abc','#abc']					//- 忽略的标签 class or id or 分号隔开
	}))
	.pipe(px3rem({remUnit: 100}))					//- px/100转rem值，如果有不想转换的类在值后面加/*no*/
	.pipe(cleanCSS({						//- 压缩处理成一行,兼容ie
		compatibility: 'ie8',
		keepBreaks:false,
		keepSpecialComments: '*'
	}))
	.pipe(autoprefixer({
	browsers: [
	'last 2 version',						//- 主流浏览器的最新两个版本
	'ios 7',							//- IOS7版本
	'android 2.3',							//- android 2.3版本
	'Firefox >= 20',						//- 火狐浏览器的版本大于或等于20
	'last 2 Explorer versions'],					//- IE的最新两个版本 'last 2 Explorer versions'
	cascade: true,							//- 是否美化属性值 默认：true 
	remove:true							//- 是否去掉不必要的前缀 默认：true 
	}))	
	.pipe(concat('index.css'))					//- 合并后的文件名
	.pipe(gulp.dest('./'+y_Dz+'/css'));				//- 输出文件本地
});

gulp.task('sass', function () {
	return gulp.src('./'+y_Sz+'/sass/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./'+y_Sz+'/css/'));
});

gulp.task('imgDeal',['svgDeal'],function(){
	gulp.src('./'+y_Sz+'/img/**/*.{png,jpg,gif,ico}')
	.pipe(tinypng('i4PmfZF5yvFHbhn_S6vI1D6WcY5OM07o'))		//- 去官网注册一下,填写TinyPN API KEY 免费版一个月有500张压缩	
	.pipe(gulp.dest('./'+y_Dz+'/img'));				//- 输出路径
});

gulp.task('svgDeal',function(){
	return gulp.src('./'+y_Sz+'/img/**/*.svg')			//- 压缩svg
	.pipe(svgmin())
	.pipe(gulp.dest('./'+y_Dz+'/img'));				
});

gulp.task('htmlmin',['htmlDeal'],function(){										
	var options = {
	removeComments: true,						//- 清除HTML注释
	collapseWhitespace: true,					//- 压缩HTML
	minifyJS: true,							//- 压缩页面JS
	minifyCSS: true							//- 压缩页面CSS
	};
	gulp.src('./'+y_Dz+'/**/*.html')
	.pipe(htmlmin(options))
	.pipe(gulp.dest('./'+y_Dz+'/'));					
});

gulp.task('htmlDeal',function(){					//- 修改html的dom
	var date = new Date().getTime();
	return gulp.src('./'+y_Sz+'/**/*.html')
	.pipe(replace(/_VERSION_/gi, date))
	.pipe(processhtml())
	.pipe(gulp.dest('./'+y_Dz+'/'));
});		

gulp.task('font',['fontSpider'],function(){				//- 先把fontSpider命令执行完后，再去执行font命令，fontSpider需要添加return
	gulp.src(['./'+y_Sz+'/font/**'],{				//- 被复制的文件夹下的所有文件
	base: './'+y_Sz+'/font'})					//- 被复制的目标路径 	
	.pipe(gulp.dest('./'+y_Dz+'/font'))					
	gulp.src(['./'+y_Sz+'/icon/**'],{				
	base: './'+y_Sz+'/icon'})					
	.pipe(gulp.dest('./'+y_Dz+'/icon'));
});

gulp.task('fontSpider',function(){
	return gulp.src(path.resolve(process.cwd(), y_Sz) + '/*.html')	//- 删除多余的字体和图标
	.pipe(fontSpider());
});

gulp.task('jsmin', function (cb) {					//- 合并压缩js
	  pump([
			gulp.src('./'+y_Sz+'/js/*.js'),
			uglify(),
			concat('index.js'),
			gulp.dest('./'+y_Dz+'/js')
		],
		cb
	  );
});

/*-------------(webp,base64,bs)需要时手动添加执行或修改-----------------*/

gulp.task('base64',['css64'],function() {				//- img转base64	
	gulp.src('./'+y_Dz+'/**/*.html')
   	.pipe(img64({limit: '8kb'}))
   	.pipe(gulp.dest('./'+y_Dz+'/'));
});

gulp.task('css64',function(){						//- css转base64						
	return gulp.src(['./'+y_Dz+'/css/**/*.css'])										
	.pipe(css64({
	extensions: ['jpg','png','gif','webp'],
	maxImageSize: 8*1024 // bytes 
	}))
	.pipe(concat('index.css'))					
	.pipe(gulp.dest('./'+y_Dz+'/css'));				
});

gulp.task('webp',['webp_css'],function(){				//- Webp转换
	del(['./'+y_Dz+'/img/**/*.{jpg,png,gif}', '!./'+y_Dz+'/img/**/*.{webp}'])
});	 

gulp.task('webp_css',['webp_html'],function(){
	return gulp.src(['./'+y_Dz+'/css/**/*.css'])	
	.pipe(replace(/.(jpg|png|gif)/gi,'.webp'))
	.pipe(gulp.dest('./'+y_Dz+'/css'));				
});

gulp.task('webp_html',['webp_img'],function(){					
	return gulp.src('./'+y_Dz+'/**/*.html')
	.pipe(replace(/.(jpg|png|gif)/gi,'.webp'))
	.pipe(processhtml())
	.pipe(gulp.dest('./'+y_Dz+'/'));
});

gulp.task('webp_img',function(){
	return gulp.src('./'+y_Dz+'/img/**/*.{jpg,png,gif}')		//- 自行添加图片格式
	.pipe(webp())
	.pipe(gulp.dest('./'+y_Dz+'/img/'))
});

gulp.task('bs',function(){
	browserSync.init({
	files: "**",							//- 监控所有文件
	server: {baseDir: './'+y_Dz+'/',index: "rem.html"},		//- 引索
	open : false	
	});
});

//default
gulp.task('default',['cssDeal','imgDeal','htmlmin','font']);