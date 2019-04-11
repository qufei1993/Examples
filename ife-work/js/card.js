function show(num){
	var h4s=document.getElementById('tit').getElementsByTagName('h4');
	var is=document.getElementById('tit').getElementsByTagName('i');
	var divs=document.getElementById("content").getElementsByTagName("div");
	for(var i=0;i<h4s.length;i++){	
		if(i==num){
			h4s[i].className="t-active";
			is[i].className="i-active";
			divs[i].className="con-active";
		}else{
			h4s[i].className="";
			is[i].className="";
			divs[i].className="";
		}
	}
}