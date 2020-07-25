const kCustomPromisifiedSymbol = Symbol('util.promisify.custom');
const kCustomPromisifyArgsSymbol = Symbol('customPromisifyArgs');
mayJunPromisify.custom = kCustomPromisifiedSymbol;

function mayJunPromisify(original) {
	if (typeof original !== 'function') {
		throw new Error('The "original" argument must be of type Function. Received type undefined')
	}

	if (original[kCustomPromisifiedSymbol]) {
    const fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new Error('The "util.promisify.custom" property must be of type Function. Received type number');
		}
		
    return Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
	}

	// 获取多个回调函数的参数名称列表
	const argumentNames = original[kCustomPromisifyArgsSymbol];

	function fn(...args) {
		return new Promise((resolve, reject) => {
			try {
				original.call(this, ...args, (err, ...values) => {
					if (err) {
						reject(err);
					} else {
						// argumentNames 存在且 values > 1，则回调会存在多个参数名称，进行遍历，返回一个 obj
						if (argumentNames !== undefined && values.length > 1) {
							const obj = {};
							for (let i = 0; i < argumentNames.length; i++)
								obj[argumentNames[i]] = values[i];
							resolve(obj);
						} else { // 否则 values 最多仅有一个参数名称，即数组 values 有且仅有一个元素
							resolve(values[0]);
						}
					}
				});
			} catch(err) {
				reject(err);
			}
		});
	}

	return fn;
}

module.exports = {
    mayJunPromisify,
    kCustomPromisifyArgsSymbol,
}