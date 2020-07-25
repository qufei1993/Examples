import gulp from 'gulp';
import gulpif from 'gulp-if';

//引入一个能做为启动服务器的包
import liveserver from 'gulp-live-server';

import args from './util/args';

gulp.task('serve',(cb) => {
	if (!args.watch) return cb();

	//如果是处于监听状态下，创建一个服务器
	var server = liveserver.new(['--harmony','server/bin/www'])
	server.start();

	//监听server下面的js,ejs,css发生变化后 让浏览器自动更新
	gulp.watch(['server/public/**/*.js','server/views/**/*.ejs','server/public/**/*.css'],function(file){
		server.notify.apply(server,[file]);
	})//处理的是一个前端的资源文件

	//监听server下面的路由或者某个接口发生变化后让服务重启
	gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
		server.start.bind(server)()
	});
})