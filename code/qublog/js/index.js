var moreA;
var moreUl;
window.onload=function(){
	//PC端搜索框
	
	var cliBtn = document.getElementById('cli-btn');
	var searchBg = document.getElementById('search-bg');
	var search = document.getElementById('search-inp');
	var closeSearch = document.getElementById('close-search');
	cliBtn.onfocus=function(){
		//search.style.display="block";
		addClass(search,'search-inpOnclick');
		searchBg.style.display="none";
	}
	closeSearch.onclick=function(){
		removeClass(search,'search-inpOnclick');
		//search.style.display="none";
		searchBg.style.display="block";
	}
	//首页选项卡
	moreA = document.getElementById("more-tit").getElementsByTagName('a');
	moreUl = document.getElementById("more-content").getElementsByTagName('ul');
}	
function show(num){
	for(var i=0;i<moreUl.length;i++){
		if(i==num){
			moreA[i].className="more-t-active";
			moreUl[i].className="more-con";
		}else{
			moreUl[i].className="";
			moreA[i].className="";
		}
	}
}
//在添加className的时候，我们想给一个元素添加多个class是没有办法的
//，后面一个必将覆盖前面一个，因此需要写个函数：
//window.onload=function(){
//	var box=document.getElementById('box');
//	addClass(box,'ddd');
//	removeClass(box,'bbb');
//}
//检查这个class是否存在
function hasClass(obj,nName){
	//!!将其结果转换为布尔值
	//查找在box.className中是否存在nName新添加的类,存在返回true，否则false
	return !!obj.className.match(new RegExp('(\\s|^)'+nName+'(\\s|$)'));
}
//如果不存在，则添加class
function addClass(obj,nName){
	if(!hasClass(obj,nName)){
		obj.className+=' '+nName;
	}
}
//如果存在，则删除指定的class
function removeClass(obj,nName){
	if(hasClass(obj,nName)){
		obj.className=obj.className.replace(new RegExp('(\\s|^)'+nName+'(\\s|$)'),' ');
	}
}
