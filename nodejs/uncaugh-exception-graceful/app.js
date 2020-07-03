const http = require('http');
const graceful = require('./graceful.js');
const PORT = 3000;
const server = http.createServer((req, res) => {
  if (req.url === '/error') {
    a.b;
    res.end('error')
  } else {
    setTimeout(() => res.end('ok!'), 1000 * 10);
  }
});

server.listen(PORT, () => console.log(`port is listening on ${PORT}.`));

graceful({
  servers: [server],
  onError: (error, type, throwErrorCount) => {
    console.log('[%s] [pid: %s] [throwErrorCount: %s] %s: %s', new Date(), process.pid, throwErrorCount, type, error.stack || error);
  }
});
