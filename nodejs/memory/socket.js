const net = require('net');
const client = new net.Socket();
const format = function (bytes) {
    return (bytes / 1024 / 1024).toFixed(2) + ' MB';
};
const print = function() {
    const memoryUsage = process.memoryUsage();
    console.log(`heapTotal: ${format(memoryUsage.heapTotal)}, heapUsed: ${format(memoryUsage.heapUsed)}`);
}

function connect() {
    client.connect(26665, '127.0.0.1', function callbackListener() {
        console.log('connected!');
    });
}

//第一次连接
connect();

client.on('error', function (error) {
    //console.error(error.message);
    //print()
});
client.on('close', function () {
    //console.error('closed!');
    //泄漏代码
    client.destroy();
    setTimeout(connect, 1);
}); 