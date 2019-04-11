//兼容IE6
function createXHR(){
	if(typeof XMLHttpRequest != 'undefined'){//非IE浏览器
		return new XMLHttpRequest();
	}else if(typeof ActiveXObject != 'undefined'){
		var versions=[
			'MSXML2.XMLHttp.6.0',
			'MSXML2.XMLHttp.3.0',
			'MSXML2.XMLHttp'
		];
		for(var i=0;i<versions.length;i++){
			try{
				return new ActiveXObject(versions[i]);
			}catch(e){
				//跳过
			}
		}
	}else{
		throw new Error('您的浏览器不支持XMLHttpRequest对象');
	}
}
/*
	特殊字符处理
	encodeURIComponent() 对 "; / ? : @ & = + $ , #"这些特殊字符编码
	对应的解码函数是decodeURIComponent()
*/
function params(data){
	var arr = [];
	for(var i in data){
		arr.push(encodeURIComponent(i)+'='+encodeURIComponent(data[i]));
	}
	//将 , 转为 &
	return arr.join('&');
}
/*
	false 同步
	true  异步
*/
function getAjax(obj){
	var xhr = new createXHR();
	obj.url = obj.url+'?'+Math.random();
	if(obj.methods == 'get') obj.url.indexOf('?') ==-1 ? obj.url+='?'+params(obj.datas) : obj.url+='&'+params(obj.datas);
	xhr.open(obj.methods,obj.url,obj.sync);
	if(obj.sync == true){ //异步，需要传输数据
		xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		xhr.send(params(obj.datas));
		//alert(params(obj.datas));
	}else{	//同步不需要发送数据
		xhr.send(null); 
	}
	if(obj.methods == 'post'){
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4){
				statuInfo();
			}
		}
	}else{//get方式提交
		statuInfo();
	}
	//同步异步相同的部分
	function statuInfo(){
		if(xhr.status == 200){
		alert(obj.url);
			obj.success(xhr.responseText);
		}else{
			alert("数据返回失败！状态代码："+xhr.status+"状态信息："+xhr.statusText);
		}
	}
}
/*
	methods 提交方式 post或get post为异步true
	url 地址
	datas	传送的数据，以对象的形式，然后经过 params()函数 编码转换为字符串
	success()  回调函数
	sync 指定是同步还是异步 true代表异步  false代表同步
*/
document.addEventListener('click',function(){
	getAjax({
		methods:'post',
		url:'demo.php',
		datas:{
			name:'qufei',
			age:100
		},
		success:function(text){
			alert(text);
		},
		sync:true
	});
});
