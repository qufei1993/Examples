class Test{
	constructor(){
		this.a = 'Hello World!!!';
	}
}
let test = new Test();
var a = document.createElement('a');
a.innerHTML = test.a
document.body.appendChild(a);