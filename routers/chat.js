const express = require('express');
const router = express.Router();
const io = require('socket.io')(3000);

// Socket IO
let users = {};

io.on('connection', (socket) => {
    // Send Receive Test
    socket.on('newUserLogin', (newUserLogin) => {
        console.log(users[socket.id] + ' connected');
        users[socket.id] = newUserLogin;
        socket.broadcast.emit('newUserLoginAnouncement', newUserLogin);
    });

    socket.on('chatMessageSubmit', (message) => {
        socket.broadcast.emit('chatMessage', message, users[socket.id]);
        console.log(message);
    });

    // User Disconect
    socket.on('disconnect', () => {
        console.log(users[socket.id] + ' disconnected');
        socket.broadcast.emit('userDisconected', users[socket.id]);
    });
});

module.exports = {
    router
}