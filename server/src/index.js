const express = require('express');
const bodyParser = require('body-parser');

const ConnectToReadingsServer = require('./readingsServer');
const { login, dashboard } = require('./api');
const { validate } = require('./utils');

const app = express();

// setup app middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.post('/oauth/token', (req, res) => login(req, res));
app.get('/dashboard', validate, (req, res) => dashboard(req, res));

// init app
app.listen(
    process.env.SERVER_PORT, () => console.log(`express init, listening to port ${process.env.SERVER_PORT}`),
);

// connect to readings server
const connection = new ConnectToReadingsServer(10001);
connection.connectToReadingsServer();
