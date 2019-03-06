const readings = {};

const handleControlMessage = ({ meterId, port }) => {
    const ConnectToReadingsServer = require('./readingsServer');
    const connection = new ConnectToReadingsServer(port);
    connection.connectToReadingsServer();

    const sum = readings[meterId].reduce((acc, reading) => {
        let currentSum = acc;
        currentSum += reading.data.energy;
        return currentSum;
    }, 0);

    const data = {
        type: 'SUM_CONTROL',
        payload: {
            meterId,
            sum,
        },
    };

    connection.client.write(`${JSON.stringify(data)}\n`);
};

const handleReadingMessage = ({ meterId, timestamp, data }) => {
    if (readings[meterId]) {
        readings[meterId].push({ timestamp, data });
    } else {
        readings[meterId] = [{ timestamp, data }];
    }

    const io = require('./io.socket');
    io.emit('readings', readings);
};

const handleSumResultMessage = message => console.log(message);

const MessageHandler = (stream) => {
    stream.forEach((message) => {
        const { type, payload } = message;
        switch (type) {
            case 'CONTROL':
                handleControlMessage(payload);
                break;
            case 'READINGS':
                handleReadingMessage(payload);
                break;
            default:
                handleSumResultMessage(message);
        }
    });
};

module.exports = {
    MessageHandler,
};
