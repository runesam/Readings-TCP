const readings = {};

const handleControlMessage = ({ meterId, port }) => {
    console.log('control', meterId, port);
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
    // const buffer = Buffer.from(JSON.stringify(data));
    setTimeout(() => {
        connection.client.write('@!>\n');
        const state = connection.client.write(JSON.stringify(data));
        console.log(JSON.stringify(data), state);
    }, 1000);
};

const handleReadingMessage = ({ meterId, timestamp, data }) => {
    if (readings[meterId]) {
        readings[meterId].push({ timestamp, data });
    } else {
        readings[meterId] = [{ timestamp, data }];
    }
    console.log(meterId, data.energy);
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
