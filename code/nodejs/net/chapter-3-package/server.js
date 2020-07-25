const net = require('net');
const Transcoder = require('./transcoder');
const transcoder = new Transcoder();
const HOST = '127.0.0.1';
const PORT = 3000;
let overageBuffer=null; // 上一次 Buffer 剩余数据

const server = net.createServer();

server.listen(PORT, HOST);

server.on('listening', () => {
    console.log(`服务已开启在 ${HOST}:${PORT}`);
}).on('connection', socket => {
    // data 事件就是读取数据
    socket
        .on('data', buffer => {
            if (overageBuffer) {
                buffer = Buffer.concat([overageBuffer, buffer]);
            }
        
            let packageLength = 0;
        
            while (packageLength = transcoder.getPackageLength(buffer)) {
                const package = buffer.slice(0, packageLength); // 取出整个数据包
                buffer = buffer.slice(packageLength); // 删除已经取出的数据包，这里采用的方法是把缓冲区（buffer）已取出的包给截取掉
        
                const result = transcoder.decode(package); // 解码
                console.log(result);
                socket.write(transcoder.encode(result.body, result.serialNumber));
            }
        
            overageBuffer=buffer; // 记录剩余不完整的包
        })
        .on('end', function(){
            console.log('socket end')
        })
        .on('error',function(error){
            console.log('socket error', error);
        });
}).on('close', () => {
    console.log('Server Close!');
}).on('error', err => {
    if (err.code === 'EADDRINUSE') {
        console.log('地址正被使用，重试中...');

        setTimeout(() => {
            server.close();
            server.listen(PORT, HOST);
        }, 1000);
    } else {
        console.error('服务器异常：', err);
    }
});