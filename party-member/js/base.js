//移动端导航
var phoneNav = document.getElementById('iphone-nav');
var btnNav = document.getElementById('btn-nav');	
function btnNavClick(a){
	btnNav.onclick = function(){
	addClass(phoneNav,'navmainHover');
		btnNav.onclick = function(){
			btnNavClick(removeClass(phoneNav,'navmainHover')); //递归 
		}
	}
}
btnNavClick(removeClass(phoneNav,'navmainHover'));
//移动端弹出搜索框
var phoneClose = document.getElementById('phone-close');
var btnSearch = document.getElementById('btn-search');
var phoneSeaBg = document.getElementById('phone-sea-bg');
btnSearch.onclick = function(){
	addClass(phoneSeaBg,'phone-searchOnclick');
	removeClass(phoneNav,'navmainHover');
}
phoneClose.onclick = function(){
	removeClass(phoneSeaBg,'phone-searchOnclick');
}
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