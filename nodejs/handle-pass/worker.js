const http = require('http');
http.createServer((req, res) => {
	res.end('I am worker, pid: ' + process.pid + ', ppid: ' + process.ppid);
})

let worker;
process.title = 'node-worker'
process.on('message', function (message, sendHandle) {
	if (message === 'server') {
		worker = sendHandle;
		worker.on('connection', function(socket) {
			server.emit('connection', socket);
		});
	}
});