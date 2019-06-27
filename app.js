const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
// Database
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const url = 'mongodb://localhost:27017/socketIO';
// Socket IO

const chatRouter = require('./routers/chat.js').router;

// Website Connection
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(chatRouter);

// Database
MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let dbo = db.db('socketIO');
    console.log('Database Created');
    db.close();
});

app.listen(port, () => console.log(`Server started on port ${port}`));