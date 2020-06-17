const express = require('express');
require('colors')
const socketio = require('socket.io');

const app = express();

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`.green.bold);
})

const io = socketio(server);

io.on('connection', socket => {

    socket.emit('welcome', { data: 'Hey! Die!' });
    socket.on('welcomeReply', (data) => {
        console.log(data);
    })

    socket.join('level1');

    // io.to sends everyone, even the current socket
    io.to('level1').emit('join', { data: `${socket.id} says, it has joined room level1` });
})

io.of('/admin').on('connection', socket => {
    // The entire socket server of /admin namsespace
    io.of('/admin').emit('adminWelcome', { data: 'Admin sends his love' })

    socket.on('replyToAdmin', data => {
        // console.log(data);
    })
})