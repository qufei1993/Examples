const rabbitMQ = require('./rabbitmq');

async function producer({
    exchange,
    routingKey,
}) {
    // 获取链接
    const connection = await rabbitMQ.connection();

    if (!connection) {
        console.error('链接不存在！');
        return;
    }

    try {
        // 获取通道
        const channel = await connection.createChannel();

        // 声明交换机
        await channel.assertExchange(exchange, 'direct', { durable: true });
        
        for (let i=0; i<5; i++) {
            const msg = `第${i}条消息`;
            console.log('Producer：', msg);

            // 发送消息
            await channel.publish(exchange, routingKey, Buffer.from(msg));
        }

        await channel.close();
    } catch (err) {
        console.error('生产消息 Error：', err);
    }
}

module.exports = {
    run: () => {
        producer({
            exchange: 'task',
            routingKey: 'order_task'
        })
    }
}