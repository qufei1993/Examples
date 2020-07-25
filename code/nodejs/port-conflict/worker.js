const http = require('http');
const server = http.createServer((req, res) => {
	res.end('I am worker, pid: ' + process.pid + ', ppid: ' + process.ppid);
}).listen(3000);