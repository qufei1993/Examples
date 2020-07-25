const net = require('net');
const client = net.createConnection({
    host: '127.0.0.1',
    port: 3000
});

client.on('connect', () => {
    client.setNoDelay(true);
    // 向服务器发送数据
    client.write('Nodejs 技术栈');

    const arr = [
        'JavaScript ',
        'TypeScript ',
        'Python ',
        'Java ',
        'C ',
        'PHP ',
        'ASP.NET '
    ]
    
    for (let i=0; i<arr.length; i++) {
        (function(val, k){
            setTimeout(() => {
                client.write(val);
            }, 1000 * (k+1))
        }(arr[i], i));
    }
})

client.on('data', buffer => {
    console.log(buffer.toString());
});

// 例如监听一个未开启的端口就会报 ECONNREFUSED 错误
client.on('error', err => {
    console.error('服务器异常：', err);
});

client.on('close', err => {
    console.log('客户端链接断开！', err);
});