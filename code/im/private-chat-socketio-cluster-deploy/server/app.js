const express = require('express');
const app = express();
const server = require('http').createServer(app);
const PORT = process.env.PORT;

require('./io.js')(server);

server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
