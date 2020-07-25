const amqp = require('amqplib');

async function producer() {
    // 创建链接对象
    const connection = await amqp.connect('amqp://localhost:5672');

    // 获取通道
    const channel = await connection.createChannel();

    // 声明参数
    const exchangeName = 'order_direct_exchange';
    const routingKey = 'order_routingKey';
    // const msg = 'hello world';
    const msg = JSON.stringify({
        a: 1,
        b: 2
    });

    // 交换机
    await channel.assertExchange(exchangeName, 'direct', {
        durable: false,
    });

    // 发送消息
    await channel.publish(exchangeName, routingKey, Buffer.from(msg));

    // 关闭链接
    await channel.close();
    await connection.close();
}

producer();