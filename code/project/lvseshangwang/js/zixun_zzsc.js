function css(obj, attr, value) {
	if (arguments.length == 2) {
		if (attr != 'opacity') {
			return parseInt(obj.currentStyle ? obj.currentStyle[attr] : document.defaultView.getComputedStyle(obj, false)[attr]);
		} else {
			return Math.round(100 * parseFloat(obj.currentStyle ? obj.currentStyle[attr] : document.defaultView.getComputedStyle(obj, false)[attr]));
		}
	} else if (arguments.length == 3) switch (attr) {
	case 'width':
	case 'height':
	case 'paddingLeft':
	case 'paddingTop':
	case 'paddingRight':
	case 'paddingBottom':
		value = Math.max(value, 0);
	case 'left':
	case 'top':
	case 'right':
	case 'bottom':
	case 'marginLeft':
	case 'marginTop':
	case 'marginRight':
	case 'marginBottom':
		obj.style[attr] = value + 'px';
		break;
	case 'opacity':
		obj.style.filter = "alpha(opacity:" + value + ")";
		obj.style.opacity = value / 100;
		break;
	default:
		obj.style[attr] = value;
	}
	return function(attr_in, value_in) {
		css(obj, attr_in, value_in)
	};
}


//obj是指要运动的物体
//itype是要采取哪种类型的运动move_type.buffer为缓冲运动，move_type.flex弹性运动。
//oTarget是目标要运行到多少来.默认是px所以不需要带单位。
//fnCallBack运动结束要做些什么。
//fnduring在运动中要进行什么
function startMove(obj, oTarget, iType, fnCallBack, fnDuring) {
	var bStop = true;
	var attr = '';
	var speed = 0;
	var cur = 0;
	if (obj.timer) {
		clearInterval(obj.timer);
	}
	obj.timer = setInterval(function() {
		startMove(obj, oTarget, iType, fnCallBack, fnDuring);
	}, 30);
	for (attr in oTarget) {
		if (iType == 'buffer') {
			cur = css(obj, attr);
			if (oTarget[attr] != cur) {
				bStop = false;
				speed = (oTarget[attr] - cur) / 5;
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
				css(obj, attr, cur + speed);
			}
		} else if (iType = 'flex') {
			if (!obj.oSpeed) obj.oSpeed = {};
			if (!obj.oSpeed[attr]) obj.oSpeed[attr] = 0;
			cur = css(obj, attr);
			if (Math.abs(oTarget[attr] - cur) >= 1 || Math.abs(obj.oSpeed[attr]) >= 1) {
				bStop = false;
				obj.oSpeed[attr] += (oTarget[attr] - cur) / 5;
				obj.oSpeed[attr] *= 0.7;
				css(obj, attr, cur + obj.oSpeed[attr]);
			}
		}
	}
	if (fnDuring) fnDuring.call(obj);
	if (bStop) {
		clearInterval(obj.timer);
		obj.timer = null;
		if (fnCallBack) fnCallBack.call(obj);
	}
}

/*var arr=[12,44,555,444,666];
var imax=999999999;
var imaxp=0;
var imin=-99999;
var iminp=0;
for(var i=0;i<arr.length;i++){
	if(arr[i]<imax){
		imax=arr[i]
		imaxp=i
		}
	else if(arr[i]>imin){
		imin=arr[i]
		iminp=i
		}
	}
alert("最小数字为："+imax+"它在第几位"+imaxp)
alert("最大数字为："+imin+"它在第几位"+iminp)*/
