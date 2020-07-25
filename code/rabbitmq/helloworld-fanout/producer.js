const amqp = require('amqplib');

async function producer() {
    // 创建链接对象
    const connection = await amqp.connect('amqp://localhost:5672');

    // 获取通道
    const channel = await connection.createChannel();

    // 声明参数
    const exchangeName = 'fanout_exchange_name';
    const routingKey = '';
    const msg = 'hello world';

    // 交换机
    await channel.assertExchange(exchangeName, 'fanout', {
        durable: true,
    });

    // 发送消息
    await channel.publish(exchangeName, routingKey, Buffer.from(msg));

    // 关闭链接
    await channel.close();
    await connection.close();
}

producer();