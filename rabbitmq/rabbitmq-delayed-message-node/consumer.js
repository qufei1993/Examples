const amqp = require('amqplib');

async function consumer() {
	const exchange = 'my-delayed-exchange';
	const exchangeType = 'x-delayed-message';
	const routingKey = 'my-delayed-routingKey';
	const queueName = 'my-delayed-queue';

	try {
		const connection = await amqp.connect('amqp://127.0.0.1:5672');
		const ch = await connection.createChannel();

		// 改变之处
		await ch.assertExchange(exchange, exchangeType, {
			durable: true,
			'x-delayed-type': 'direct'
		});
		await ch.assertQueue(queueName);
		await ch.bindQueue(queueName, exchange, routingKey);
		await ch.consume(queueName, msg => {
				console.log('consumer msg：', msg.content.toString());
		}, { noAck: true });
	} catch(err) {
		console.log('Consumer Error: ', err);
	}
}

consumer()