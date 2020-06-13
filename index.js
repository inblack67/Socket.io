const http = require('http');
const socketIO = require('socket.io');

const server = http.createServer((req, res) => {
    res.end('Server is running');
});

const io = socketIO(server);

io.on('connection', socket => {
    socket.emit('introEvent', 'Welcome to Socket.io 2.0');
    socket.on('introReply', msg => {
        console.log(msg);
    })
})

server.listen(5000);