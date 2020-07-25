const amqp = require('amqplib');
const consumer = require('./consumer');

let connection = null;
let isConnection = false;
let reconnectingCount = 0;
const init = () => amqp.connect('amqp://localhost:5672').then(conn => {
    connection = conn;

    conn.on('error', function(err) {
        reconnecting(err, 'error');
    });

    conn.on('close', function(err) {
        reconnecting(err, 'close');
    });

    console.log('rabbitmq connect success');
    isConnection = false;
    consumer.run(connection); // 开启消费者
    return connection;
}).catch(err => {
    isConnection = false;
    reconnecting(err, 'catch')
});

/**
 * 重连
 * @param { Object } err 
 */
const reconnecting = (err, event) => {
    if (!isConnection) {
        isConnection = true;
        reconnectingCount++;
        console.error(`Lost connection to RMQ. reconnectingCount: ${reconnectingCount}. Reconnecting in 10 seconds...`);
        console.error('Rabbitmq close: ', event, err);
        
        return setTimeout(init, 10 * 1000);
    }
}

module.exports = {
    init,

    connection: () => {
        return connection;
    },
}