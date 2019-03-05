// set variables in .env to node
require('dotenv').config();
const webpackDevConfig = require('./client/webpack.dev');

module.exports = {
    webpackDevConfig,
};
