const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const chat = io
  .of('/chat')
  .on('connection', function (socket) {
    socket.on('client', msg => console.log(msg +  ' from namespace ' + socket.nsp.name));
    socket.emit('message', 'in namespace ' + socket.nsp.name + ' for sender');
    chat.emit('message', 'in namespace ' + socket.nsp.name + ' for everyone');
  });
const news = io
  .of('/news')
  .on('connection', function (socket) {
    socket.on('client', msg => console.log(msg +  ' from namespace ' + socket.nsp.name));
    socket.emit('message', 'in namespace ' + socket.nsp.name + ' for sender');
    news.emit('message', 'in namespace ' + socket.nsp.name + ' for everyone');
  });

server.listen(3000, function () {
    console.log('listening on *:3000');
});