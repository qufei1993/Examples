window.onload=function(){
	var btn=document.getElementById('add-btn');
	//btn.onclick=addAqiData;
	var inputs=document.getElementsByTagName('p');
	alert(inputs);

}

/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */

function addAqiData(){
	var tabId=document.getElementById('aqi-table');
	var tr=tabId.getElementsByTagName('tr');
	var addInfo=document.getElementById('addInfo');
	var inputs=document.getElementById('addInfo').getElementsByTagName('input');
	alert(inputs);
	//alert(inputs.length);
	/*for(var i=0;i<tr.length;i++){
		if(tr[i]){

		}
	}*/
	//在表格中添加行
	var tabTr=tabId.insertRow(tr.length); //在末尾添加
	var city=tabTr.insertCell(0);	//添加列
		city.innerHTML="上海";
	var zhil=tabTr.insertCell(1);
		zhil.innerHTML="60";
	var del=tabTr.insertCell(2);
		del.innerHTML="<button>删除</button>";
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {

}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
  // do sth.

  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();
