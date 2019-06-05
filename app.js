const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
// Database
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const url = 'mongodb://localhost:27017/socketIO';
// Socket IO
const io = require('socket.io')(3000);

// Website Connection
app.use('/', express.static(path.join(__dirname, 'public')));

// Database
MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let dbo = db.db('socketIO');
    console.log('Database Created');
    db.close();
});

// Socket IO
let users = {}

io.on('connection', (socket) => {
    // Send Receive Test
    socket.on('newUserLogin', (newUserLogin) => {
        console.log(users[socket.id] + ' connected');
        console.log()
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

app.listen(port, () => console.log(`Server started on port ${port}`));