//移除空白字符
function removeWhiteChar(nodeObj){
	for(var i=0;i<nodeObj.childNodes.length;i++){
		if(nodeObj.childNodes[i].nodeType==3&&/^\s+$/.test(nodeObj.childNodes[i].nodeValue)){
			nodeObj.childNodes[i].parentNode.removeChild(nodeObj.childNodes[i]);
		}
	}
	return nodeObj;
}
//获取文本
function textContent(obj){
	if(obj.innerText){
		return obj.innerText;
	}else{
		return obj.textContent;
	}
}