const amqp = require('amqplib');

async function producer(msg, expiration) {
	try {
		const connection = await amqp.connect('amqp://127.0.0.1:5672');
		const exchange = 'my-delayed-exchange';
		const exchangeType = 'x-delayed-message'; // x-delayed-message 交换机的类型
		const routingKey = 'my-delayed-routingKey';
		
		const ch = await connection.createChannel();
		await ch.assertExchange(exchange, exchangeType, {
			durable: true,
			'x-delayed-type': 'direct'
		});
		
		console.log('producer msg：', msg);
		await ch.publish(exchange, routingKey, Buffer.from(msg), {
			headers: {
				'x-delay': expiration, // 一定要设置，否则无效
			}
		});

		ch.close();
	} catch(err) {
		console.log(err)
	}
}


producer('msg0 1S Expire', 1000) // 1S
producer('msg1 30S Expire', 1000 * 30) // 30S
producer('msg2 10S Expire', 1000 * 10) // 10S
producer('msg3 5S Expire', 1000 * 5) // 5S