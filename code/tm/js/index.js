var sea;
var ban;
var nav;
var top;
window.onload=function(){
	sea = document.getElementById('top-search');
	ban = document.getElementById('banner');
	nav = document.getElementById('site-nav');
	tops = document.getElementById('user-top');
	window.onscroll=function(){
		one();
	}	
}
var one = function auto(){
	if(ban.offsetTop-document.body.scrollTop <= 0){
		sea.style.display="block";
		nav.style.marginTop="50px";
	}else{
		sea.style.display="none";
		nav.style.marginTop="0px";
	}
	//alert(document.body.scrollTop);
	if(document.body.clientHeight-document.body.scrollTop <= 0){
		tops.style.display="block";
	}else{
		tops.style.display="none";
	}
}
	