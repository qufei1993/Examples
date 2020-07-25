const amqp = require('amqplib');

async function producer() {
    // 创建链接对象
    const connection = await amqp.connect('amqp://localhost:5672');

    // 获取通道
    const channel = await connection.createConfirmChannel();

    // 声明参数
    const exchangeName = 'confirm_exchange_name';
    const routingKey = 'confirm_routingKey';
    const msg = 'confirm_hello world';

    // 交换机
    await channel.assertExchange(exchangeName, 'direct', {
        durable: true,
    });

    // 发送消息
    channel.publish(exchangeName, routingKey, Buffer.from(msg), {}, function(err, ok){
        console.log(err, ok);

        if (err !== null) {
            console.warn('Message nacked!');
        } else {
            console.log('Message acked');
        }
    });

    // 关闭链接
    // await channel.close();
    // await connection.close();
}

producer();