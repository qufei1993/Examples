const io = require('socket.io-client');
const chat = io.connect('http://localhost:3000/chat');
const news = io.connect('http://localhost:3000/news');
chat.on('message', function (msg) {
    console.log(msg + ' from chat client'); 
    chat.emit('client', 'chat client');
});
news.on('message', function (msg) {
    console.log(msg + ' from news client');
    news.emit('client', 'news client');
})