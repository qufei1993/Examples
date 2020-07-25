const http = require('http');
const luck = require('./luck');

http.createServer((req, res) => {
    if (req.url === '/luck') {
        luck();

        res.end('ok');
    }
}).listen(3000);