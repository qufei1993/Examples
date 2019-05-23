const amqp = require('amqplib');

async function producer() {
    // 1. 创建链接对象
    const connection = await amqp.connect('amqp://localhost:5672');

    // 2. 获取通道
    const channel = await connection.createChannel();

    // 3. 声明参数
    const exchangeName = 'qosEx';
    const routingKey = 'qos.test001';

    // 4. 声明交换机
    await channel.assertExchange(exchangeName, 'topic', { durable: true });
    
    for (let i=0; i<5; i++) {
        const msg = `第${i}条消息`;
        console.log('Producer：', msg);

        // 5. 发送消息
        await channel.publish(exchangeName, routingKey, Buffer.from(msg));
    }

    await channel.close();
}

producer()