const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const ConnectToReadingsServer = require('./readingsServer');
const { login, dashboard } = require('./api');
const { validate } = require('./utils');

const app = express();
const server = http.createServer(app);

// setup app middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.post('/oauth/token', (req, res) => login(req, res));
app.get('/dashboard', validate, (req, res) => dashboard(req, res));

// init server
server.listen(
    process.env.SERVER_PORT, () => console.log(`express init, listening to port ${process.env.SERVER_PORT}`),
);

// connect to readings server
const connection = new ConnectToReadingsServer(10001);
connection.connectToReadingsServer();

module.exports = server;
