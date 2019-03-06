const socketIO = require('socket.io');

const server = require('./index');

const io = socketIO(server);

const onConnection = (socket) => {
    const { id } = socket;
    console.log('connected to front-end', id);
};

io.on('connection', (socket) => {
    onConnection(socket);
});

module.exports = io;
