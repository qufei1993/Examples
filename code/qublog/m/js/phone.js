window.onload=function(){
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