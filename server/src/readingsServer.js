const net = require('net');

const { MessageHandler } = require('./messageHandler');

const onMessageReceivedHandler = (message) => {
    try {
        const replaced = message.toString().replace(
            new RegExp('}\\n{', 'g'), '},{',
        );
        const data = JSON.parse(`[${replaced}]`);
        MessageHandler(data);
    } catch (e) {
        throw new Error(e);
    }
};

class ReadingsServerConnection {
    constructor(port) {
        this.port = port;
        this.client = new net.Socket({ readable: true });
        this.client.on('data', onMessageReceivedHandler);
        this.client.on('close', () => { console.log(`Connection closed ${this.port}`); });
        this.client.on('error', this.onErrorHandler.bind(this));
    }

    onErrorHandler(error) {
        console.error(error);
        setTimeout(this.connectToReadingsServer.bind(this), 3000);
    }

    connectToReadingsServer() {
        this.client.connect(this.port, '127.0.0.1', () => {
            console.log('Connected to readings server on port ', this.port);
        });
    }
}

module.exports = ReadingsServerConnection;
