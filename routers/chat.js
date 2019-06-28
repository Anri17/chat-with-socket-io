const express = require('express');
const router = express.Router();

let users = {};

// Socket IO
function ioServer(io) {
    io.on('connection', (socket) => {
        socket.on('newUserLogin', (newUserLogin) => {
            users[socket.id] = newUserLogin;
            console.log(users[socket.id] + ' connected');
            socket.broadcast.emit('newUserLoginAnouncement', newUserLogin);
        });
    
        socket.on('chatMessageSubmit', (message) => {
            if (message == '') return;
            io.sockets.emit('chatMessage', message, users[socket.id]);
            console.log(users[socket.id] + ": " + message);
        });
    
        // User Disconect
        socket.on('disconnect', () => {
            console.log(users[socket.id] + ' disconnected');
            socket.broadcast.emit('userDisconected', users[socket.id]);
        });
    });
}

module.exports = {
    router,
    ioServer
}