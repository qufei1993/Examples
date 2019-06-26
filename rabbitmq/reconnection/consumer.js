async function consumer ({
    exchange,
    queue,
    routingKey,
    connection,
}, cb) {
    const ch = await connection.createChannel();
    await ch.assertExchange(exchange, 'direct', { durable: true });
    const queueResult = await ch.assertQueue(queue, {
        exclusive: false,
    });

    console.info('%j', queueResult);

    await ch.bindQueue(queueResult.queue, exchange, routingKey);
    await ch.prefetch(1, false);
    await ch.consume(queueResult.queue, msg => {
        cb(msg, ch);
    }, { noAck: false });
}

module.exports = {
    run: (connection) => { 
        consumer({
            exchange: 'task',
            queue: 'order_tasks',
            routingKey: 'order_task',
            connection,
        }, async function(msg, ch) {
            const data = msg.content.toString();
            console.info(`${(new Date()).getMinutes()}:${(new Date()).getSeconds()} consumer msg：%j`, data);
        
            return setTimeout(function () {
                try {
                    ch.ack(msg);
                } catch (err) {
                    console.error('消息 Ack Error：', err)
                }
            }, 5000);
        })
    }
}