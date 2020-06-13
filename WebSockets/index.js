const http = require('http');
const webSocket = require('ws');

const server = http.createServer((req, res) => {
    res.end('Server is running');
});

const webSocketServer = new webSocket.Server({ server });

webSocketServer.on('headers', (headers, req) => {
    console.log(headers);
})

webSocketServer.on('connection', (ws) => {
    ws.send('Welcome to WebSockets');
    ws.on('message', (msg) => {
        console.log(msg);
    })
})

server.listen(5000);