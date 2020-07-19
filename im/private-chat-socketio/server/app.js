const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const PORT = 30010;

app.use(express.static(path.join(__dirname, '../', 'public')));

require('./io.js')(server);

server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
