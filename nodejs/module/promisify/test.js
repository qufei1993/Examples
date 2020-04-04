const { kCustomPromisifyArgsSymbol, mayJunPromisify } = require('./may-jun-promisify');
const fs = require('fs');

/**
 * mayJunPromisify.custom 自定义 Promise 函数测试
 */
function promisifyCustomTest() {
	fs.readFile[mayJunPromisify.custom] = () => {
		return Promise.reject('该文件暂时禁止读取');
	}
	
	const readFilePromisify = mayJunPromisify(fs.readFile);
	
	readFilePromisify('text.txt', 'utf8')
		.then(result => console.log(result))
		.catch(err => console.log(err));
}

/**
 * 自定义 callback 多参数转 promise 测试
 */
function cbConvertPromiseTest(){
	function getUserById(id, cb) {
		const name = '张三', age = 20;
	
		cb(null, name, age);
	}
	
	Object.defineProperty(getUserById, kCustomPromisifyArgsSymbol, {
		value: ['name', 'age'], enumerable: false 
	})
	
	const getUserByIdPromisify = mayJunPromisify(getUserById);
	
	getUserByIdPromisify(1)
		.then(({ name, age }) => {
			console.log(name, age);
		})
		.catch(err => console.log(err));
}
	
promisifyCustomTest();
cbConvertPromiseTest();