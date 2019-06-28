const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

// Exports
const chatIoServer = require('./routers/chat.js').ioServer;

// Website Connection
app.use('/', express.static(path.join(__dirname, 'public')));

const server = app.listen(port, () => console.log(`Server started on port ${port}`));

// Socket io
const socket = require('socket.io');
const io = socket(server);
chatIoServer(io);