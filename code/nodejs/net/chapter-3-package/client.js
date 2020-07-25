const net = require('net');
const Transcoder = require('./transcoder');
const transcoder = new Transcoder();
const client = net.createConnection({
    host: '127.0.0.1',
    port: 3000
});

let overageBuffer=null; // 上一次 Buffer 剩余数据

client.on('data', buffer => {
    if (overageBuffer) {
        buffer = Buffer.concat([overageBuffer, buffer]);
    }

    let packageLength = 0;

    while (packageLength = transcoder.getPackageLength(buffer)) {
        const package = buffer.slice(0, packageLength); // 取出整个数据包
        buffer = buffer.slice(packageLength); // 删除已经取出的数据包，这里采用的方法是把缓冲区（buffer）已取出的包给截取掉

        const result = transcoder.decode(package); // 解码
        console.log(result);
    }

    overageBuffer=buffer; // 记录剩余不完整的包
}).on('error', err => { // 例如监听一个未开启的端口就会报 ECONNREFUSED 错误
    console.error('服务器异常：', err);
}).on('close', err => {
    console.log('客户端链接断开！', err);
});

client.write(transcoder.encode('0 Nodejs 技术栈'));

const arr = [
    '1 JavaScript ',
    '2 TypeScript ',
    '3 Python ',
    '4 Java ',
    '5 C ',
    '6 PHP ',
    '7 ASP.NET '
]

setTimeout(function() {
    for (let i=0; i<arr.length; i++) {
        console.log(arr[i]);

        client.write(transcoder.encode(arr[i]));
    }
}, 1000);