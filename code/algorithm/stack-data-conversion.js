const StackStudy = require('./stack.js');
const str = '0123456789ABCDEF';

function dataConversion(num, type) {
    let x = num;
    const s1 = new StackStudy(20);

    while (x != 0) {
        s1.enStack(x % type);
        x = Math.floor(x / type);
    }

    while (!s1.isEmpty()) {
        console.log(str[s1.deStack()]);
    }

    console.log('--------------------');
    return;
}

dataConversion(1024, 8); // 测试八进制
dataConversion(1024, 16); // 测试十六进制
dataConversion(3000, 16); // 测试十六进制带字母的情况
dataConversion(1024, 2); // 测试二进制