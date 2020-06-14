const express = require('express');
const app = express();
require('colors');
const socketio = require('socket.io');

app.use(express.static(__dirname + '/public'));

const server = app.listen(5000, () => {
    console.log(`Server started on port 5000`.green.bold);
})

const io = socketio(server);
io.on('connection', socket => {
    socket.emit('messageFromServer', { msg: 'This is your server' })
    socket.on('replyFromClient', data => {
        console.log(data);
    })
})