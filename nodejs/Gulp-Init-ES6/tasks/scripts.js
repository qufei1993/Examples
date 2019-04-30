import gulp from 'gulp';

//gulp-if 是 gulp的语句中做if判断
import gulpif from 'gulp-if';

//gulp中处理文件拼接
import concat from 'gulp-concat';

import webpack from 'webpack';
import gulpwebpack from 'webpack-stream';

//文件重命名做标记
import named from 'vinyl-named';

//实现浏览器自更新
import livereload from 'gulp-livereload';

//处理文件信息流
import plumber from 'gulp-plumber';

//对文件重命名
import rename from 'gulp-rename';

//处理js、css压缩
import uglify from 'gulp-uglify';

//在命令行工具输出的包
import { log,colors } from 'gulp-util';

//最后引入对命令行参数进行解析的包
import args from './util/args';

//创建一个任务
gulp.task('scripts',() => {
	//打开这个文件
	return gulp.src(['app/js/index.js'])
		.pipe(plumber({  //处理常规的错误逻辑
			errorHandle:function(){

			}
		}))
		.pipe(named()) //重命名
		.pipe(gulpwebpack({ //第三个参数处理错误这种情况
			module: {
				loaders: [{
					test: /\.js$/,
					loader:'babel'
				}]
			}
		}),null,(err,stats) => {
			log(`Finished ${colors.cyan('scripts')} `,stats.toString({
				chunks: false
			}))
		})
		//指定这个文件要放到哪里,在server中拿到最新的js才能在服务器中跑起来
		.pipe(gulp.dest('server/public/js'))
		.pipe(rename({ //把上面的那个文件在复制一份
			basename: 'cp',
			extname: '.min.js'
		}))
		.pipe(uglify({ //在上面基础上，复制完之后进行压缩
			compress: {
				properties:false
			},
			output: {
				'quote_keys': true
			}
		}))
		.pipe(gulp.dest('server/public/js')) //压缩完后，对文件进行存储
		.pipe(gulpif(args.watch,livereload())) //对文件监听和自动刷新
})
