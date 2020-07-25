var Movie = require('../model/movie');
var Category = require('../model/Category');
var Comment = require('../model/comment');
var _ = require('underscore');
var fs = require('fs');
var path = require('path');
//文章列表页
exports.list = (req,res) => {
	Movie
	.find({})
	.populate('category','name')
	.exec(function(err,movies){
		res.render('admin/movie/index',{
			title:'后台列表页',
			movies:movies
		});
	})
}
//添加文章 页面
exports.insert = (req,res) => {
	Category.find(function(err,categorys){
		if (err) {
			console.log(err);
		}
		res.render('admin/movie/add',{
			title:'后台视频录入页',
			categorys:categorys,
			movie:{
				_id:'undefined',
				title:'',
				doctor:'',
				country:'',
				language:'',
				poster:'',
				year:'',
				flash:'',
				summary:''
			}
		});
	});
}
//更新文章 页面 和添加共用一个页面
exports.update = function(req,res){
	var id = req.params.id;
	if (id) {
		Movie.findById(id,function(err,movie){
			Category.find(function(err,categorys){
				res.render('admin/movie/add',{
					title:'后台更新',
					movie:movie,
					categorys:categorys
				});
			});
		});
	}
}
//首次添加文章提交  或者 更新文章
exports.doInsertUpdate = (req,res) => {
	var id = req.body.movie._id;
	var movieObj = req.body.movie;
	var _movie;
	if(id !== 'undefined'){  // 更新字段
		//查找更新前的视频在哪个分类下 将其删除
		var categoryOldId = movieObj.oldCateId;
		Category.update({'_id':categoryOldId}, {'$pull':{'movies':movieObj._id} },function(err,categoryDel){
			if (err) {console.log(err)}
		});
		Movie.findById(id,function(err,movie){
			if (err) {
				console.log(err);
			}
			// underscore的extend方法 用来将 旧数据 替换为新数据
			movieObj = {
				title:movieObj.title,
				doctor:movieObj.doctor,
				country:movieObj.country,
				language:movieObj.language,
				poster:movieObj.poster,
				year:movieObj.year,
				flash:movieObj.flash,
				summary:movieObj.summary,
				category:movieObj.category
			}
			_movie = _.extend(movie,movieObj);
			_movie = new Movie(_movie);
			_movie.save(function(err,movie){
				if (err) {
					console.log(err);
				}
				//在新更新的分类下 添加该视频id
				var categoryId = movie.category;
				Category.findById(categoryId,function(err,category){
					if (err) {
						console.log(err);
					}
					category.movies.unshift(movie._id);
					category.save(function(err,category){
						res.redirect('/admin/movie/index');
					});
				});
			});
		});
	}else{ //插入字段
		_movie = new Movie({
			title:movieObj.title,
			doctor:movieObj.doctor,
			country:movieObj.country,
			language:movieObj.language,
			poster:movieObj.poster,
			year:movieObj.year,
			flash:movieObj.flash,
			summary:movieObj.summary,
			category:movieObj.category
		});
		var categoryId = movieObj.category;
		_movie.save(function(err,movie){
			if (err) {
				console.log(err);
			}
			Category.findById(categoryId,function(err,category){
				if (err) {
					console.log(err);
				}
				category.movies.unshift(movie._id);
				category.save(function(err,category){
					res.redirect('/admin/movie/index');
				});
			});
		});
	}
}
//删除文章
exports.del = function(req,res){
	var id = req.query.id;
	console.log(id);
	Comment.remove({movie:id},function(err,comment){
		if (err) {console.log(err)}
	});
	Movie.findById(id,function(err,movie){
		var cateId = movie.category;
		//将其分类下的视频也删除
		Category.update({'_id':cateId}, {'$pull':{'movies':id} },function(err,categoryDel){
			if (err) {console.log(err)}
			if (categoryDel.nModified == 1) {
				Movie.remove({_id:id},(err,result) => {
					if (err) {
						console.log(err);
					}else{
						res.json({success:1});
					}
				});
			}
		});
	});
}
//图片上传
exports.uploadImg = function(req,res){
	var postData = req.files.file;
	var filePath = postData.path;
	var originalFilename = postData.originalFilename;
	if (originalFilename) {
		fs.readFile(filePath,function(err,data){
			var timestamp = Date.now();	
			//type: 'image/jpeg'  分割取其后缀名
			var type = postData.type.split('/')[1];
			var poster = timestamp+'.'+type;
			var newPath = path.join(__dirname,'../../','/public/upload/'+poster);
			fs.writeFile(newPath,data,function(err){
				if (err) {console.log(err)}
					res.json({success:1,url:poster});
			});
		});
	}
	
}