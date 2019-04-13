/*
* myFocus JavaScript Library v1.1.0
* 
* 你可以免费任意使用，但请保留相关著作信息
* @Author  koen_lee@qq.com
* @Blog    http://hi.baidu.com/koen_li/
* 
* @Date    2010/12/15
*/
(function(){
	myFocus={
		defConfig:{trigger:'click',txtHeight:'default',wrap:true,delay:100},pattern:{},
		extend:function(){
			var a=arguments,l=a.length,i=1,parent=a[0];
			if(l===1){i=0,parent=this.pattern;}
			for(i;i<l;i++){for(var p in a[i]) if(!(p in parent)) parent[p]=a[i][p];}
		}
	};
	var DOM={
		$:function(id){return typeof id==='string'?document.getElementById(id):id;},
		$$:function(tag,obj){return (this.$(obj)||document).getElementsByTagName(tag);},
		$$_:function(tag,obj){
			var arr=[],a=this.$$(tag,obj);
			for(var i=0;i<a.length;i++){
				if(a[i].parentNode===obj) arr.push(a[i]);
				i+=this.$$(tag,a[i]).length;
			} return arr;
		},
		$c:function(cla,obj){
			var tags=this.$$('*',obj),cla=cla.replace(/\-/g,'\\-'),reg=new RegExp('(^|\\s)'+cla+'(\\s|$)'),arr=[];
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
		style:function(o,attr){var v=(+[1,]?getComputedStyle(o,null):o.currentStyle)[attr],pv=parseFloat(v);return isNaN(pv)?v:pv;},
		setOpa:function(o,val){o.style.filter = "alpha(opacity=" + val + ")",o.style.opacity = val/100;},
		removeClass:function(o,name){var cla=o.className,reg="/\\s*"+name+"\\b/g";o.className=cla?cla.replace(eval(reg),''):''}
	},
	Anim={
		animate:function(obj,attr,val,dur,type,fn){
			var opa=attr==='opacity'?true:false,opacity=this.setOpa,am=typeof val==='string',st=(new Date).getTime();
			if(opa&&this.style(obj,'display')==='none') obj.style.display='block',opacity(obj,0);
			var os=this.style(obj,attr),b=isNaN(os)?1:os,c=am?val/1:val-b,d=dur||800,e=this.easing[type||'easeOut'],m=c>0?'ceil':'floor';
			if(obj[attr+'Timer']) clearInterval(obj[attr+'Timer']);
			obj[attr+'Timer']=setInterval(function(){
				var t=(new Date).getTime()-st;
				if(t<d){opa?opacity(obj,Math[m](e(t,b*100,c*100,d))):obj.style[attr]=Math[m](e(t,b,c,d))+'px';}
				else{
					clearInterval(obj[attr+'Timer']),opa?opacity(obj,(c+b)*100):obj.style[attr]=c+b+'px',
					opa&&val===0&&(obj.style.display='none'),fn&&fn.call(obj);
				}
			},13);return this;
		},
		fadeIn:function(obj,duration,fn){this.animate(obj,'opacity',1,duration==undefined?400:duration,'linear',fn);return this;},
		fadeOut:function(obj,duration,fn){this.animate(obj,'opacity',0,duration==undefined?400:duration,'linear',fn);return this;},
		slide:function(obj,params,duration,easing,fn){for(var p in params) this.animate(obj,p,params[p],duration,easing,fn);return this;},
		stop:function(obj){for(var p in obj) if(p.indexOf('Timer')!==-1) clearInterval(obj[p]);return this;},//停止所有运动
		easing:{
			linear:function(t,b,c,d){return c*t/d + b;},
			swing:function(t,b,c,d) {return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;},
			easeIn:function(t,b,c,d){return c*(t/=d)*t*t*t + b;},
			easeOut:function(t,b,c,d){return -c*((t=t/d-1)*t*t*t - 1) + b;},
			easeInOut:function(t,b,c,d){return ((t/=d/2) < 1)?(c/2*t*t*t*t + b):(-c/2*((t-=2)*t*t*t - 2) + b);}
		}
	},
	Init={
		set:function(p,im){
			var F=this;
			p.S=p.pattern+'-'+p.id,F.extend(p,F.pattern[p.pattern].cfg,F.defConfig);
			function ready(){F.$(p.id).className+=' '+p.pattern+' '+p.S,F.initCSS(p);};
			function show(){F.pattern[p.pattern](p,F)}
			if(im){ready(),show();return;}
			if(window.attachEvent){(function(){try{ready()}catch(e){setTimeout(arguments.callee,0)}})();}
	　　		else{this.addEvent(document,'DOMContentLoaded',ready);}
			this.addEvent(window,'load',show);
		},
		initCSS:function(p){
			var css=[],w=p.width,h=p.height||this.$(p.id).offsetHeight,oStyle=document.createElement('style');oStyle.type='text/css';
			if(p.wrap) this.wrap([this.$(p.id)],p.pattern+'_wrap');
			if(p.css!==false) css.push('.'+p.S+' *{margin:0;padding:0;border:0;list-style:none;}.'+p.S+'{position:relative;width:'+w+'px;height:'+p.height+'px;overflow:hidden;font:12px/1.5 Verdana,Geneva,sans-serif;text-align:left;background:#fff;}.'+p.S+' .loading{position:absolute;z-index:9999;width:100%;height:100%;color:#666;text-align:center;padding-top:'+0.3*h+'px;background:#fff url(http://nethd.zhongsou.com/wtimg/i_41956/28236-loading.gif) center '+0.4*h+'px no-repeat;}.'+p.S+' .pic{position:relative;width:'+w+'px;height:'+h+'px;overflow:hidden;}.'+p.S+' .txt li,.'+p.S+' .txt li span,.'+p.S+' .txt-bg{width:'+w+'px;height:'+p.txtHeight+'px!important;line-height:'+p.txtHeight+'px!important;overflow:hidden;}.'+p.S+' .txt li p a{display:inline;}');
			if(oStyle.styleSheet){oStyle.styleSheet.cssText=css.join('');} else {oStyle.innerHTML=css.join('');}
			var oHead = this.$$('head',document)[0];oHead.insertBefore(oStyle,oHead.firstChild);
		}
	},
	Method={
		switchMF:function(fn1,fn2,isless,d,cont){
			return "var _F=myFocus,_ld=_F.$c('loading',box),less="+isless+",_turn=true,_dir="+d+"||'left',_dis=_dir=='left'||_dir=='right'?par.width:par.height,pics="+cont+"||pics,index=par.index||0,_t=par.time*1000;if(less){pics.style[_dir]=-_dis*n+'px';index+=n;}if(_ld)box.removeChild(_ld);var run=function(idx){("+fn1+")();var prev=index;if(less&&index==2*n-1&&_turn!=1){pics.style[_dir]=-(n-1)*_dis+'px';index=n-1}if(less&&index==0&&_turn!=2){pics.style[_dir]=-n*_dis+'px';index=n}if(!less&&index==n-1&&idx==undefined)index=-1;if(less&&idx!==undefined&&index>n-1&&!_turn) idx+=n;var next=idx!==undefined?idx:index+1;if("+fn2+")("+fn2+")();index=next;_turn=false;};run(index);if(_t&&par.auto!==false)var auto=setInterval(function(){run()},_t);box.onmouseover=function(){if(auto)clearInterval(auto)};box.onmouseout=function(){if(auto)auto=setInterval(function(){run()},_t)};for(var i=0,_lk=_F.$$('a',box),_ln=_lk.length;i<_ln;i++) _lk[i].onfocus=function(){this.blur();}"
		},
		bind:function(arrStr,type,delay){
			return "for (var j=0;j<n;j++){"+arrStr+"[j].index=j;if("+type+"=='click'){"+arrStr+"[j].onmouseover=function(){if(this.index!=index)this.className+=' hover'};"+arrStr+"[j].onmouseout=function(){_F.removeClass(this,'hover')};"+arrStr+"[j].onclick=function(){if(this.index!=index) {run(this.index);return false}};}else if("+type+"=='mouseover'){"+arrStr+"[j].onmouseover=function(){var self=this;if("+delay+"==0){if(self.index!=index){run(self.index);return false}}else "+arrStr+".d=setTimeout(function(){if(self.index!=index) {run(self.index);return false}},"+delay+")};"+arrStr+"[j].onmouseout=function(){clearTimeout("+arrStr+".d)};}else{alert('Error Setting : \"'+"+type+"+'\"');break;}}"
		},
		toggle:function(obj,cla1,cla2){
			return "var _stop=false;"+obj+".onclick=function(){this.className=this.className=='"+cla1+"'?'"+cla2+"':'"+cla1+"';if(!_stop){clearInterval(auto);auto=null;_stop=true;}else{auto=true;_stop=false;}}"
		},
		scroll:function(obj,dir,dis,sn,dur){
			return "var scPar={},scDis="+dis+",scN=Math.floor("+sn+"/2),scDir=parseInt("+obj+".style["+dir+"])||0,scIdx=next>=n?next-n:next,scDur="+dur+"||400,scMax=scDis*(n-"+sn+"),scD=scDis*scIdx+scDir;if(scD>scDis*scN&&scIdx!==n-1) scPar["+dir+"]='-'+scDis;if(scD<scDis&&scIdx!==0) scPar["+dir+"]='+'+scDis;if(scIdx===n-1) scPar["+dir+"]=-scMax;if(scIdx===0) scPar["+dir+"]=0;_F.slide("+obj+",scPar,scDur);"
		},
		turn:function(prev,next){return prev+".onclick=function(){_turn=1;run(index>0?index-1:n-1);};"+next+".onclick=function(){_turn=2;var tIdx=index>=2*n-1?n-1:index;run(index==n-1&&!less?0:tIdx+1);}"},
		alterSRC:function(o,name,del){var img=this.$$('img',o)[0];img.src=del?img.src.replace(eval("/"+name+"\\.(?=[^\\.]+$)/g"),'.'):img.src.replace(/\.(?=[^\.]+$)/g,name+'.')},
		addEvent:function(obj,type,fn){var b=!(+[1,]),e=b?'attachEvent':'addEventListener',t=(b?'on':'')+type;obj[e](t,fn,false);}
	};
	myFocus.extend(myFocus,DOM,CSS,Anim,Init,Method);
	myFocus.set.params=function(name,p){myFocus.pattern[name].cfg=p};
})();