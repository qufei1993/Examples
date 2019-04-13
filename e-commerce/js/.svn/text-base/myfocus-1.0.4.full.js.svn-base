/*
* myFocus JavaScript Library v1.0.4
* 
* 你可以免费任意使用，但请保留相关著作信息
* @Author  koen_lee@qq.com
* @Blog    http://hi.baidu.com/koen_li/
* 
* @Date    2010/12/08
*/
(function(){
	myFocus={
		defConfig:{trigger:'click',txtHeight:'default',wrap:true},
		extend:function(){
			var a=arguments,l=a.length,i=1,parent=a[0];
			if(l===1){i=0,parent=this;}
			for(i;i<l;i++){for(var p in a[i]) if(!parent[p]) parent[p]=a[i][p];}
		}
	};
	var DOM={
		$:function(id){return document.getElementById(id);},
		$$:function(tag,obj){return (typeof obj=='object'?obj:this.$(obj)).getElementsByTagName(tag);},
		$$_:function(tag,obj){
			var arr=[],n=0,a=obj.getElementsByTagName(tag);
			for(var i=0;i<a.length;i++){
				if(a[i].parentNode==obj) arr.push(a[i]);
				if(a[i].getElementsByTagName(tag).length){n=a[i].getElementsByTagName(tag).length;}
				i=i+n,n=0;
			} return arr;
		},
		$c:function(cla,obj){
			var tags=obj.getElementsByTagName('*'),cla=cla.replace(/\-/g,'\\-'),reg=new RegExp('(^|\\s)'+cla+'(\\s|$)'),arr=[];
			for(var i=0,l=tags.length;i<l;i++){if(reg.test(tags[i].className)){arr.push(tags[i]);break;}}
			return arr[0];
		},
		$li:function(cla,obj){return this.$$_('li',this.$c(cla,obj));},
		wrap:function(arr,cla){//在arr(数组)外面添加wrap,cla为wrap的class
			var div=document.createElement('div');div.className=cla;arr[0].parentNode.insertBefore(div,arr[0]);
			for(var i=0;i<arr.length;i++) div.appendChild(arr[i]);
		},
		wrapIn:function(obj,cla){obj.innerHTML='<ul class='+cla+'>'+obj.innerHTML+'</ul>';},//在obj里面添加wrap,cla为wrap的class
		addList:function(obj,cla){
			var s=[],ul=this.$$('ul',obj)[0],li=this.$$_('li',ul),img,n=li.length,num=cla.length;
			for(var j=0;j<num;j++){
				s.push('<ul class='+cla[j]+'>');
				for(var i=0;i<n;i++){img=this.$$('img',li[i])[0];s.push('<li>'+(cla[j]=='num'?('<a>'+(i+1)+'</a>'):(cla[j]=='txt'&&img?li[i].innerHTML.replace(/<img(.|\n|\r)*?(\>\<\/a\>)/i,img.alt+'</a>')+'<p>'+img.getAttribute("text")+'</p>':(cla[j]=='thumb'&&img?'<img src='+(img.getAttribute("thumb")||img.src)+' />':'')))+'<span></span></li>')};
				s.push('</ul>');
			}; obj.innerHTML+=s.join('');
		}
	},
	CSS={
		style:function(obj,style){return (+[1,])?window.getComputedStyle(obj,null)[style]:obj.currentStyle[style];},
		opacity:function(obj,v){//取得或设置对象透明度,默认100
			if(v!=undefined) {v=v>100?100:(v<0?0:v); obj.style.filter = "alpha(opacity=" + v + ")"; obj.style.opacity = (v / 100);}
			else return (!+[1,])?((obj.filters.alpha)?obj.filters.alpha.opacity:100):((obj.style.opacity)?obj.style.opacity*100:100);
		},
		removeClass:function(o,name){var oClass=o.className,reg="/\\s*"+name+"\\b/g";o.className=oClass?oClass.replace(eval(reg),''):''}
	},
	Anim={
		animate:function(obj,prop,val,spd,type,fn){
			var opa=prop=='opacity'?true:false,os=this.style(obj,prop),am=typeof val==='string';
			if(opa&&this.style(obj,'display')=='none'){obj.style.display='block';this.opacity(obj,0);}
			var t=0,b=opa?this.opacity(obj):parseInt(os=='auto'?0:os),c=am?val/1:val-b,d=spd||50,st=type||'easeOut',m=c>0?'ceil':'floor';
			if(obj[prop+'Timer']) clearInterval(obj[prop+'Timer']);
			obj[prop+'Timer']=setInterval(function(){
				if(opa&&t<d){myFocus.opacity(obj,Math[m](myFocus[st](++t,b,c,d)));}
				else if(!opa&&t<d){obj.style[prop]=Math[m](myFocus[st](++t,b,c,d))+'px';}
				else {if(opa&&val==0){obj.style.display='none'}clearInterval(obj[prop+'Timer']);fn&&fn.call(obj);}
			},10);return this;
		},
		fadeIn:function(obj,speed,fn){this.animate(obj,'opacity',100,speed==undefined?20:speed,'linear',fn);return this;},
		fadeOut:function(obj,speed,fn){this.animate(obj,'opacity',0,speed==undefined?20:speed,'linear',fn);return this;},
		slide:function(obj,params,speed,easing,fn){for(var p in params) this.animate(obj,p,params[p],speed,easing,fn);return this;},
		stop:function(obj){for(var p in obj) if(p.indexOf('Timer')!==-1) clearInterval(obj[p]);return this;}//停止所有运动
	},
	Easing={
		linear:function(t,b,c,d){return c*t/d + b;},
		easeIn:function(t,b,c,d){return c*(t/=d)*t*t*t + b;},
		easeOut:function(t,b,c,d){return -c*((t=t/d-1)*t*t*t - 1) + b;},
		easeInOut:function(t,b,c,d){return ((t/=d/2) < 1)?(c/2*t*t*t*t + b):(-c/2*((t-=2)*t*t*t - 2) + b);}
	},
	Init={
		set:function(p,im){
			p.S=p.pattern+'-'+p.id;
			this.extend(p,this[p.pattern]['cfg'],this.defConfig);
			if(im){this.$(p.id).className+=' '+p.pattern+' '+p.S,this.initCSS(p),this[p.pattern](p);return;}
			if(window.attachEvent){(function(){try{myFocus.$(p.id).className+=' '+p.pattern+' '+p.S;myFocus.initCSS(p);}catch(e){setTimeout(arguments.callee,0);}})();window.attachEvent('onload',function(){myFocus[p.pattern](p)});}
	　　		else{document.addEventListener("DOMContentLoaded",function(){myFocus.$(p.id).className+=' '+p.pattern+' '+p.S;myFocus.initCSS(p);},false);window.addEventListener('load',function(){myFocus[p.pattern](p)},false);}
		},
		initCSS:function(p){
			var css=[],w=p.width,h=p.height||this.$(p.id).offsetHeight,oStyle=document.createElement('style');oStyle.type='text/css';
			if(p.wrap) this.wrap([this.$(p.id)],p.pattern+'_wrap');
			if(p.css!==false) css.push('.'+p.S+' *{margin:0;padding:0;border:0;list-style:none;}.'+p.S+'{position:relative;width:'+w+'px;height:'+p.height+'px;overflow:hidden;font:12px/1.5 Verdana,Geneva,sans-serif;background:#fff;}.'+p.S+' .loading{position:absolute;z-index:9999;width:100%;height:100%;color:#666;text-align:center;padding-top:'+0.3*h+'px;background:#fff url(http://nethd.zhongsou.com/wtimg/i_41956/28236-loading.gif) center '+0.4*h+'px no-repeat;}.'+p.S+' .pic{position:relative;width:'+w+'px;height:'+h+'px;overflow:hidden;}.'+p.S+' .txt li,.'+p.S+' .txt li span,.'+p.S+' .txt-bg{width:'+w+'px;height:'+p.txtHeight+'px!important;line-height:'+p.txtHeight+'px!important;overflow:hidden;}.'+p.S+' .txt li p a{display:inline;}');
			if(oStyle.styleSheet){oStyle.styleSheet.cssText=css.join('');} else {oStyle.innerHTML=css.join('');}
			var oHead = this.$$('head',document)[0];oHead.insertBefore(oStyle,oHead.firstChild);
		}
	},
	Method={
		switchMF:function(fn1,fn2,isless,d,cont){
			return "var ld=this.$c('loading',box),less="+isless+",_turn=true,_dir="+d+"||'left',_dis=_dir=='left'||_dir=='right'?par.width:par.height,pics="+cont+"||pics,index=par.index||0,t=par.time*1000;if(less){pics.style[_dir]=-_dis*n+'px';index+=n;}if(ld)box.removeChild(ld);var run=function(idx){("+fn1+")(myFocus);var prev=index;if(less&&index==2*n-1&&_turn!=1){pics.style[_dir]=-(n-1)*_dis+'px';index=n-1}if(less&&index==0&&_turn!=2){pics.style[_dir]=-n*_dis+'px';index=n}if(!less&&index==n-1&&idx==undefined)index=-1;if(less&&idx!==undefined&&index>n-1&&!_turn) idx+=n;var next=idx!==undefined?idx:index+1;if("+fn2+")("+fn2+")(myFocus);index=next;_turn=false;};run(index);if(t&&par.auto!==false)var auto=setInterval(function(){run()},t);box.onmouseover=function(){if(auto)clearInterval(auto)};box.onmouseout=function(){if(auto)auto=setInterval(function(){run()},t)};"
		},
		bind:function(arrStr,type,delay){
			return "for (var j=0;j<n;j++){"+arrStr+"[j].index=j;if("+type+"=='click'){"+arrStr+"[j].onmouseover=function(){if(this.index!=index)this.className+=' hover'};"+arrStr+"[j].onmouseout=function(){myFocus.removeClass(this,'hover')};"+arrStr+"[j].onclick=function(){if(this.index!=index) {run(this.index);return false}};}else if("+type+"=='mouseover'){"+arrStr+"[j].onmouseover=function(){var self=this;if("+delay+"==0){if(self.index!=index){run(self.index);return false}}else "+arrStr+".d=setTimeout(function(){if(self.index!=index) {run(self.index);return false}},"+(delay==undefined?100:delay)+")};"+arrStr+"[j].onmouseout=function(){clearTimeout("+arrStr+".d)};}else{alert('Error Setting : \"'+"+type+"+'\"');break;};for(var i=0,lk=this.$$('a',box),ln=lk.length;i<ln;i++) lk[i].onfocus=function(){this.blur();}}"
		},
		toggle:function(obj,cla1,cla2){
			return "var _stop=false;"+obj+".onclick=function(){this.className=this.className=='"+cla1+"'?'"+cla2+"':'"+cla1+"';if(!_stop){clearInterval(auto);auto=null;_stop=true;}else{auto=true;_stop=false;}}"
		},
		scroll:function(obj,dir,dis,sn,speed){
			return "var scPar={},scDis="+dis+",scN=Math.floor("+sn+"/2),scDir=parseInt("+obj+".style["+dir+"])||0,scIdx=next>=n?next-n:next,scSpd="+speed+"||30,scMax=scDis*(n-"+sn+"),scD=scDis*scIdx+scDir;if(scD>scDis*scN&&scIdx!==n-1) scPar["+dir+"]='-'+scDis;if(scD<scDis&&scIdx!==0) scPar["+dir+"]='+'+scDis;if(scIdx===n-1) scPar["+dir+"]=-scMax;if(scIdx===0) scPar["+dir+"]=0;myFocus.slide("+obj+",scPar,scSpd);"
		},
		turn:function(prev,next){return prev+".onclick=function(){_turn=1;run(index>0?index-1:n-1);};"+next+".onclick=function(){_turn=2;var tIdx=index>=2*n-1?n-1:index;run(index==n-1&&!less?0:tIdx+1);}"},
		alterSRC:function(o,name,del){var img=this.$$('img',o)[0];img.src=del?img.src.replace(eval("/"+name+"\\.(?=[^\\.]+$)/g"),'.'):img.src.replace(/\.(?=[^\.]+$)/g,name+'.')}
	};
	myFocus.extend(myFocus,DOM,CSS,Anim,Easing,Init,Method);
	myFocus.set.params=function(pattern,p){myFocus[pattern]['cfg']=p};
})();