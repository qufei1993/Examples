const http = require('http');
const producer = require('./producer');
const rabbitmq = require('./rabbitmq');

http.createServer((req, res) => {
    if (req.url === '/producer') {
        producer.run();
    }

    res.end('ok!');
}).listen(3000, () => {
    rabbitmq.init();
    console.log('the server is start at port:', 3000);
});